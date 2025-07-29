import React, { useState } from 'react';
import { BookOpen, Home, User, Sparkles } from 'lucide-react';
import StoryGenerator from '../components/StoryGenerator';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('generate');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">Story Time</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome back!</span>
              <button className="text-gray-600 hover:text-gray-900">
                <User className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-white rounded-lg shadow-sm p-6 mr-8">
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('generate')}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'generate'
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Sparkles className="mr-3 h-5 w-5" />
                Story Time
              </button>
              <button
                onClick={() => setActiveTab('saved')}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'saved'
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <BookOpen className="mr-3 h-5 w-5" />
                Saved Stories
              </button>
              <button
                onClick={() => setActiveTab('account')}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'account'
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <User className="mr-3 h-5 w-5" />
                Account
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'generate' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Create a New Story</h2>
                <StoryGenerator />
              </div>
            )}

            {activeTab === 'saved' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Saved Stories</h2>
                <p className="text-gray-600">Your saved stories will appear here.</p>
              </div>
            )}

            {activeTab === 'account' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h2>
                <p className="text-gray-600">Account settings will be available here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 