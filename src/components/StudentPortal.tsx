import React, { useState, useEffect, useCallback } from 'react';
import { BookOpen, Mail, CheckCircle, AlertTriangle, User } from 'lucide-react';
import { Student, Question } from '../types';
import { useTimer } from '../hooks/useTimer';
import { useFullscreen as useFullscreenHook } from '../hooks/useFullscreen';
import { supabase } from '../lib/supabase';

interface StudentPortalProps {
  questions: Question[];
  onSubmitTest: (student: Student) => void;
  onBack: () => void;
}

export const StudentPortal: React.FC<StudentPortalProps> = ({ questions, onSubmitTest, onBack }) => {
  const [currentStudent, setCurrentStudent] = useState<{ name: string; email: string } | null>(null);
  const [testStarted, setTestStarted] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | string)[]>([]);
  const [randomQuestions, setRandomQuestions] = useState<Question[]>([]);

  const timer = useTimer(45 * 60);
  const { enterFullscreen, exitFullscreen, resetExitCount } = useFullscreenHook(onBack);

  // Used emails
  const USED_EMAILS_KEY = 'lasak_used_emails';
  const getUsedEmails = (): string[] => {
    try {
      const stored = localStorage.getItem(USED_EMAILS_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  };
  const addUsedEmail = (email: string) => {
    const usedEmails = getUsedEmails();
    if (!usedEmails.includes(email.toLowerCase())) {
      usedEmails.push(email.toLowerCase());
      localStorage.setItem(USED_EMAILS_KEY, JSON.stringify(usedEmails));
    }
  };
  const isEmailUsed = (email: string): boolean => {
    return getUsedEmails().includes(email.toLowerCase());
  };

  // Shuffle and pick 30 questions
  const prepareQuestions = (allQuestions: Question[]): Question[] => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 30);
  };

  const handleStudentLogin = (name: string, email: string) => {
    if (isEmailUsed(email)) {
      alert('This email has already been used for a test session. Each email can only be used once.');
      return;
    }
    setCurrentStudent({ name, email });
    setRandomQuestions(prepareQuestions(questions));
    setTestStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setTestCompleted(false);
    timer.reset();
    resetExitCount();
  };

  const startTest = async () => {
    const success = await enterFullscreen();
    if (success && currentStudent) {
      setTestStarted(true);
      timer.start();
      addUsedEmail(currentStudent.email);
    } else {
      alert('Fullscreen mode is required to start the test. Please allow fullscreen access.');
    }
  };

  useEffect(() => {
    if (timer.isExpired && testStarted && !testCompleted) {
      handleAutoSubmit();
    }
  }, [timer.isExpired, testStarted, testCompleted]);

  const handleAnswer = (answer: number | string) => {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentQuestion] = answer;
      return newAnswers;
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < randomQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    let totalPoints = 0;
    answers.forEach((answer, index) => {
      const question = randomQuestions[index];
      totalPoints += question.points;
      if (question.type === 'multiple-choice' && answer === question.correctAnswer) {
        score += question.points;
      } else if (question.type === 'fill-blank' && typeof answer === 'string' && typeof question.correctAnswer === 'string') {
        if (answer.toLowerCase().trim() === question.correctAnswer.toLowerCase()) {
          score += question.points;
        }
      }
    });
    return (score / totalPoints) * 100;
  };

  const submitTest = async () => {
    if (currentStudent) {
      const newStudent: Student = {
        id: Date.now().toString(),
        name: currentStudent.name,
        email: currentStudent.email,
        score: calculateScore(),
        answers,
        submittedAt: new Date().toISOString()
      };

      const { error } = await supabase.from('scores').insert([
        { name: newStudent.name, email: newStudent.email, score: newStudent.score }
      ]);

      if (error) {
        alert('Error saving your score. Please try again.');
        return;
      }

      onSubmitTest(newStudent);
      setTestCompleted(true);
      timer.stop();
      exitFullscreen();
    }
  };

  const handleAutoSubmit = async () => {
    await submitTest();
  };

  const canSubmit = answers.length === randomQuestions.length && answers.every(a => a !== undefined && a !== '');

  if (testCompleted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-md w-full">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Test Completed!</h2>
          <p className="text-gray-600 mb-6">Your responses have been submitted successfully.</p>
          <button
            onClick={onBack}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  if (!currentStudent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <BookOpen className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Student Portal</h2>
            <p className="text-gray-600">Enter your details to begin the test</p>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); handleStudentLogin(e.currentTarget.name.value, e.currentTarget.email.value); }} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (!testStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <AlertTriangle className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Test Instructions</h2>
            <p className="text-gray-600">Please read carefully before starting</p>
          </div>
          <ul className="text-sm text-gray-700 mb-8 list-disc pl-6 space-y-1">
            <li>The test will remain in fullscreen mode at all times.</li>
            <li>Do not switch tabs or exit fullscreen. If you do, your test will end automatically.</li>
            <li>Duration: 45 minutes.</li>
            <li>30 randomized questions.</li>
            <li>You can navigate between questions.</li>
            <li>All questions must be answered to submit.</li>
          </ul>
          <button
            onClick={startTest}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Start Test
          </button>
        </div>
      </div>
    );
  }

  const currentQ = randomQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / randomQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">Test: {currentStudent.name}</h1>
          <div className="text-2xl text-blue-600 font-bold">
            {Math.floor(timer.timeLeft / 60)}:{(timer.timeLeft % 60).toString().padStart(2, '0')}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Question {currentQuestion + 1}</h2>
          <p className="mb-4">{currentQ.question}</p>
          {currentQ.type === 'multiple-choice' ? (
            currentQ.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                className={`w-full mb-2 text-left p-3 border rounded-lg ${
                  answers[currentQuestion] === idx ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                {String.fromCharCode(65 + idx)}. {option}
              </button>
            ))
          ) : (
            <input
              type="text"
              value={answers[currentQuestion] || ''}
              onChange={(e) => handleAnswer(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Type your answer"
            />
          )}
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 flex justify-between items-center">
          <button
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            className="bg-gray-600 hover:bg-gray-700 disabled:bg-gray-300 text-white px-6 py-2 rounded-lg font-medium"
          >
            Previous
          </button>
          <div className="flex space-x-2">
            {canSubmit && (
              <button
                onClick={submitTest}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium"
              >
                Submit Test
              </button>
            )}
            <button
              onClick={nextQuestion}
              disabled={currentQuestion === randomQuestions.length - 1}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white px-6 py-2 rounded-lg font-medium"
            >
              Next
            </button>
          </div>
        </div>
        <div className="h-2 bg-gray-200 rounded-full mt-4">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};
