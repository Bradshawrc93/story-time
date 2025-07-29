import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Volume2, Home, Star } from 'lucide-react';

interface StoryPage {
  page: number;
  text: string;
  imageUrl: string;
}

const StoryPlayer: React.FC = () => {
  const { storyId } = useParams<{ storyId: string }>();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [isReading, setIsReading] = useState(false);

  // TODO: Use storyId to fetch story data from API
  // For now, using mock data

  // Mock story data - replace with actual API call
  const mockStory: StoryPage[] = [
    {
      page: 1,
      text: "Once upon a time, in a magical forest, there lived a brave little bunny named Luna. She loved to explore and make new friends. Turn the page.",
      imageUrl: "https://via.placeholder.com/800x600/87CEEB/FFFFFF?text=Magical+Forest"
    },
    {
      page: 2,
      text: "One sunny morning, Luna hopped through the tall grass and discovered a beautiful garden filled with colorful flowers. The butterflies danced around her. Turn the page.",
      imageUrl: "https://via.placeholder.com/800x600/98FB98/FFFFFF?text=Beautiful+Garden"
    },
    {
      page: 3,
      text: "Suddenly, Luna heard a soft cry. It was a little bird who had fallen from its nest. Luna knew she had to help her new friend. Turn the page.",
      imageUrl: "https://via.placeholder.com/800x600/FFB6C1/FFFFFF?text=Little+Bird"
    },
    {
      page: 4,
      text: "With gentle paws, Luna carefully picked up the bird and carried it back to its nest. The bird's family was so grateful for Luna's kindness. Turn the page.",
      imageUrl: "https://via.placeholder.com/800x600/DDA0DD/FFFFFF?text=Helping+Friends"
    },
    {
      page: 5,
      text: "From that day on, Luna and the bird family became the best of friends. They shared many more adventures together in their magical forest home. The End.",
      imageUrl: "https://via.placeholder.com/800x600/F0E68C/FFFFFF?text=Happy+Ending"
    }
  ];

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < mockStory.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleReadAloud = () => {
    setIsReading(!isReading);
    // TODO: Implement TTS functionality
  };

  const handleSaveStory = () => {
    // TODO: Implement save story functionality
    alert('Story saved!');
  };

  const handleRateStory = (rating: number) => {
    // TODO: Implement rating functionality
    alert(`Story rated ${rating} stars!`);
  };

  const currentStoryPage = mockStory[currentPage];
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === mockStory.length - 1;

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <Home className="h-5 w-5 mr-2" />
            Back to Dashboard
          </button>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              Page {currentPage + 1} of {mockStory.length}
            </span>
            <button
              onClick={handleReadAloud}
              className={`p-2 rounded-full ${
                isReading ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Volume2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Story Content */}
      <div className="flex-1 flex">
        {/* Image Section */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="max-w-4xl w-full">
            <img
              src={currentStoryPage.imageUrl}
              alt={`Story page ${currentStoryPage.page}`}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-96 bg-white p-8 flex flex-col">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Luna's Adventure
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed">
              {currentStoryPage.text}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 space-y-4">
            <div className="flex justify-between">
              <button
                onClick={handlePreviousPage}
                disabled={isFirstPage}
                className={`p-3 rounded-full ${
                  isFirstPage
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={handleNextPage}
                disabled={isLastPage}
                className={`p-3 rounded-full ${
                  isLastPage
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* End of Story Actions */}
            {isLastPage && (
              <div className="space-y-3">
                <button
                  onClick={handleSaveStory}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Save Story
                </button>
                <div className="flex justify-center space-x-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => handleRateStory(rating)}
                      className="p-2 text-yellow-500 hover:text-yellow-600"
                    >
                      <Star className="h-6 w-6" />
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => navigate('/dashboard')}
                  className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Generate New Story
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryPlayer; 