import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, Users } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">Story Time</span>
            </div>
            <div className="flex space-x-4">
              <Link
                to="/dashboard"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign In
              </Link>
              <Link
                to="/dashboard"
                className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Create Magical Stories</span>
            <span className="block text-primary-600">for Your Kids</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Generate personalized bedtime stories with AI. Choose themes, characters, and settings to create unique adventures for your children.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link
                to="/dashboard"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
              >
                Start Creating Stories
              </Link>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mx-auto">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">AI-Powered Stories</h3>
              <p className="mt-2 text-base text-gray-500">
                Generate unique stories tailored to your child's interests and preferences.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mx-auto">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Beautiful Illustrations</h3>
              <p className="mt-2 text-base text-gray-500">
                Each story comes with stunning AI-generated illustrations that bring the tale to life.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mx-auto">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Family-Friendly</h3>
              <p className="mt-2 text-base text-gray-500">
                Safe, age-appropriate content designed specifically for children.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage; 