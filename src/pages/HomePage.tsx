import React from 'react';
import { MessageSquare, FileText, Search, User, Github, Linkedin, Twitter } from 'lucide-react';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80"
            alt="Legal Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">
            Your AI-Powered Legal Assistant for Civil Cases
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get instant AI-driven legal guidance, summarize documents, and find relevant legal information effortlessly.
          </p>
          <button className="bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transform transition hover:scale-105">
            Start Your Query
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <MessageSquare className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">AI-Powered Legal Chatbot</h3>
              <p className="text-gray-600">Get quick answers to civil case queries</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <FileText className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Legal Document Summarization</h3>
              <p className="text-gray-600">Upload and summarize complex case files</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Search className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Smart Legal Search</h3>
              <p className="text-gray-600">Find relevant case laws and legal precedents</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <User className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">User Profile & Saved Queries</h3>
              <p className="text-gray-600">Track your legal questions and case history</p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-900">1</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Ask a Legal Question</h3>
              <p className="text-gray-600">Type your query in the chatbot</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-900">2</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Get AI-Powered Response</h3>
              <p className="text-gray-600">Receive real-time guidance</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-900">3</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Summarize & Search</h3>
              <p className="text-gray-600">Upload documents or search for relevant legal precedents</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-16">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 mb-4">"This AI legal assistant has revolutionized how I handle initial case research. It's an invaluable tool for any legal professional."</p>
              <p className="font-semibold text-blue-900">Sarah Johnson</p>
              <p className="text-sm text-gray-500">Corporate Lawyer</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 mb-4">"The document summarization feature saves me hours of work. It's like having a skilled paralegal at your fingertips."</p>
              <p className="font-semibold text-blue-900">Michael Chen</p>
              <p className="text-sm text-gray-500">Law Student</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 mb-4">"Finally, a legal tech solution that's both powerful and user-friendly. It's helped me understand my legal options clearly."</p>
              <p className="font-semibold text-blue-900">Emily Rodriguez</p>
              <p className="text-sm text-gray-500">Small Business Owner</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-200">About Us</a></li>
                <li><a href="#" className="hover:text-blue-200">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-200">Contact</a></li>
                <li><a href="#" className="hover:text-blue-200">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Features</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-200">AI Chatbot</a></li>
                <li><a href="#" className="hover:text-blue-200">Document Summary</a></li>
                <li><a href="#" className="hover:text-blue-200">Legal Search</a></li>
                <li><a href="#" className="hover:text-blue-200">User Dashboard</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>support@legalai.com</li>
                <li>1-800-LEGAL-AI</li>
                <li>123 Legal Street</li>
                <li>New York, NY 10001</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-200">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-blue-200">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-blue-200">
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <p>&copy; 2025 LegalAI Assistant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}