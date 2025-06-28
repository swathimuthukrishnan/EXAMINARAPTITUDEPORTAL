import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://tlwhrcjdkzptleowtino.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsd2hyY2pka3pwdGxlb3d0aW5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwOTYwNjAsImV4cCI6MjA2NjY3MjA2MH0.7cYdHkMATrkd00ZuRfGm5dZURRC_APLJpQKVxEwAyvI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          role: 'student' | 'examiner'
          name: string
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          role: 'student' | 'examiner'
          name: string
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          role?: 'student' | 'examiner'
          name?: string
          created_at?: string
        }
      }
      tests: {
        Row: {
          id: string
          title: string
          description: string
          duration_minutes: number
          total_questions: number
          created_at: string
          created_by: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          duration_minutes: number
          total_questions: number
          created_at?: string
          created_by: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          duration_minutes?: number
          total_questions?: number
          created_at?: string
          created_by?: string
        }
      }
      questions: {
        Row: {
          id: string
          test_id: string
          question_text: string
          option_a: string
          option_b: string
          option_c: string
          option_d: string
          correct_answer: string
          points: number
          created_at: string
        }
        Insert: {
          id?: string
          test_id: string
          question_text: string
          option_a: string
          option_b: string
          option_c: string
          option_d: string
          correct_answer: string
          points: number
          created_at?: string
        }
        Update: {
          id?: string
          test_id?: string
          question_text?: string
          option_a?: string
          option_b?: string
          option_c?: string
          option_d?: string
          correct_answer?: string
          points?: number
          created_at?: string
        }
      }
      test_attempts: {
        Row: {
          id: string
          test_id: string
          student_id: string
          student_email: string
          student_name: string
          started_at: string
          completed_at: string | null
          score: number | null
          total_score: number
          violations: number
          status: 'in_progress' | 'completed' | 'terminated'
        }
        Insert: {
          id?: string
          test_id: string
          student_id: string
          student_email: string
          student_name: string
          started_at?: string
          completed_at?: string | null
          score?: number | null
          total_score: number
          violations?: number
          status?: 'in_progress' | 'completed' | 'terminated'
        }
        Update: {
          id?: string
          test_id?: string
          student_id?: string
          student_email?: string
          student_name?: string
          started_at?: string
          completed_at?: string | null
          score?: number | null
          total_score?: number
          violations?: number
          status?: 'in_progress' | 'completed' | 'terminated'
        }
      }
      student_answers: {
        Row: {
          id: string
          attempt_id: string
          question_id: string
          selected_answer: string
          is_correct: boolean
          answered_at: string
        }
        Insert: {
          id?: string
          attempt_id: string
          question_id: string
          selected_answer: string
          is_correct: boolean
          answered_at?: string
        }
        Update: {
          id?: string
          attempt_id?: string
          question_id?: string
          selected_answer?: string
          is_correct?: boolean
          answered_at?: string
        }
      }
    }
  }
}