import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface StoryPrompt {
  theme: string;
  mood: string;
  setting: string;
  characters: string[];
}

const StoryGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState<StoryPrompt>({
    theme: '',
    mood: '',
    setting: '',
    characters: [],
  });
  const [isGenerating, setIsGenerating] = useState(false);

  const themes = ['Bedtime', 'Nap Time', 'Bath Time', 'Good Morning', 'Road Trip', 'Adventure'];
  const moods = ['Calm', 'Happy', 'Exciting', 'Funny', 'Magical', 'Educational'];
  const settings = ['Forest', 'House', 'Jungle', 'Ocean', 'City', 'Space', 'Castle', 'Farm'];
  const characters = ['Dog', 'Cat', 'Bunny', 'Elephant', 'Boy', 'Girl', 'Parents', 'Firefighters', 'Dino', 'Bird'];

  const handleSelection = (category: keyof StoryPrompt, value: string) => {
    if (category === 'characters') {
      const currentChars = prompt.characters;
      const newChars = currentChars.includes(value)
        ? currentChars.filter(char => char !== value)
        : [...currentChars, value];
      setPrompt({ ...prompt, characters: newChars });
    } else {
      setPrompt({ ...prompt, [category]: value });
    }
  };

  const handleGenerate = async () => {
    if (!prompt.theme || !prompt.mood || !prompt.setting || prompt.characters.length === 0) {
      alert('Please select all options before generating a story.');
      return;
    }

    setIsGenerating(true);
    // TODO: Implement story generation API call
    setTimeout(() => {
      setIsGenerating(false);
      // Navigate to story player
    }, 3000);
  };

  const SelectionButton: React.FC<{
    options: string[];
    selected: string | string[];
    onSelect: (value: string) => void;
    title: string;
    multiSelect?: boolean;
  }> = ({ options, selected, onSelect, title, multiSelect = false }) => (
    <div className="mb-6">
      <h3 className="text-lg font-medium text-gray-900 mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = multiSelect
            ? (selected as string[]).includes(option)
            : selected === option;
          return (
            <button
              key={option}
              onClick={() => onSelect(option)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                isSelected
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Choose Your Story Elements</h3>
        <p className="text-gray-600">Select the theme, mood, setting, and characters for your story.</p>
      </div>

      <SelectionButton
        title="Theme"
        options={themes}
        selected={prompt.theme}
        onSelect={(value) => handleSelection('theme', value)}
      />

      <SelectionButton
        title="Mood"
        options={moods}
        selected={prompt.mood}
        onSelect={(value) => handleSelection('mood', value)}
      />

      <SelectionButton
        title="Setting"
        options={settings}
        selected={prompt.setting}
        onSelect={(value) => handleSelection('setting', value)}
      />

      <SelectionButton
        title="Characters (Select Multiple)"
        options={characters}
        selected={prompt.characters}
        onSelect={(value) => handleSelection('characters', value)}
        multiSelect={true}
      />

      <div className="mt-8">
        <button
          onClick={handleGenerate}
          disabled={isGenerating || !prompt.theme || !prompt.mood || !prompt.setting || prompt.characters.length === 0}
          className={`w-full flex items-center justify-center px-6 py-3 text-lg font-medium rounded-lg transition-colors ${
            isGenerating || !prompt.theme || !prompt.mood || !prompt.setting || prompt.characters.length === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-primary-600 text-white hover:bg-primary-700'
          }`}
        >
          {isGenerating ? (
            <>
              <Sparkles className="animate-spin mr-2 h-5 w-5" />
              Creating your adventure...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-5 w-5" />
              Generate Story
            </>
          )}
        </button>
      </div>

      {isGenerating && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-blue-800 text-center">
            We're creating your adventure with {prompt.characters.join(', ')} in a {prompt.mood.toLowerCase()} {prompt.setting.toLowerCase()} setting...
          </p>
        </div>
      )}
    </div>
  );
};

export default StoryGenerator; 