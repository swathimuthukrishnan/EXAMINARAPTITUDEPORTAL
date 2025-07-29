import React from 'react';
import { BookOpen, Shield, Users, Award, CheckCircle, BarChart3, ArrowRight } from 'lucide-react';
import { View, Question } from '../types';
import { questions } from '../data/questions'; // Your big question set

function getRandomQuestions(allQuestions: Question[], count: number) {
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Example usage (though usually you'd pass to child props):
const randomQuestions = getRandomQuestions(questions, 30);

interface LandingPageProps {
  onNavigate: (view: View) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="/lasak tech logo.png"
                alt="Lasak Logo"
                className="h-15 w-10 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Lasak Technologies <span className="text-sm font-normal">Pvt. Ltd.</span>
                </h1>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Visit us at</p>
              <a
                href="https://lasak.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                lasak.in
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block mt-2">
              Lasak Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
           Kickstart your career with us where innovation meets impact. Join our internship program and be part of building the next-gen AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={() => onNavigate('student')}
              className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-3 min-w-[200px]"
            >
              <BookOpen className="h-6 w-6" />
              <span>Take Test</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Lasak Technologies Internship?</h3>
            
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">User-Friendly Interface</h4>
             
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Secure & Reliable</h4>
             
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Analytics</h4>
              
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">About Us</h1>
          </div>
<div className="min-h-screen flex items-center justify-center p-8 bg-gray-50">
  <div className="max-w-3xl text-center">
    <p className="text-gray-600 mb-9 leading-relaxed">
      Lasak Technologies is actively building a bridge between traditional engineering and the digital world. The company is involved in delivering end-to-end digital and industrial solutions tailored to modern business needs.
   
      Lasak specializes in:
      
      Mechanical and Civil CAD design to support engineering and construction workflows,
      Process automation that simplifies and optimizes operations,
      Website development for high performance, user-friendly platforms, and
      Digital marketing strategies to boost online visibility and customer engagement.
  
      What sets Lasak apart is its ability to combine core engineering expertise with advanced digital tools. Whether it's designing mechanical components, automating tasks, creating digital platforms, or running impactful online campaigns — Lasak builds custom, scalable, and high-quality solutions that help businesses move forward.
  
      With the guiding motto “We get you ahead,” Lasak isn't just a vendor — it positions itself as a technology partner focused on innovation, continuous improvement, and real business growth.
 
      In short, Lasak is shaping the future of engineering design, workflow automation, and digital transformation enabling clients to thrive in a competitive, technology-driven world.
    </p>
  </div>
</div>
</div>

            
              
                
                
               
                
                  
                 
         
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* Left content */}
      <div>
        <div className="flex items-center space-x-3 mb-4">
          <span className="text-xl font-bold">Lasak Technologies</span>
        </div>
        <p className="text-gray-400">
          At Lasak Technologies, we are passionate about transforming learners into confident creators. With industry-relevant training and hands-on projects, we prepare individuals for real-world innovation in design, engineering, and development.
        </p>
      </div>

      {/* Right content */}
      <div className="flex flex-col md:items-end">
        <h6 className="font-semibold mb-4">Contact Information</h6>
        <div className="space-y-2 text-gray-400">
          <p>Email: info@lasak.in</p>
          <p>
            Website: <a href="https://lasak.in" className="text-blue-400 hover:text-blue-300">lasak.in</a>
          </p>
          <p>Phone:  +91 7418732525</p>
        </div>
      </div>

    </div>

    <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
      <p>&copy; 2025 LASAK Technologies Pvt. Ltd. All rights reserved.</p>
    </div>
  </div>
</footer>

    </div>
  );
};