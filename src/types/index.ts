export interface StoryPrompt {
  theme: string;
  mood: string;
  setting: string;
  characters: string[];
}

export interface StoryPage {
  page: number;
  text: string;
  imageUrl: string;
}

export interface Story {
  id: string;
  userId: string;
  promptData: StoryPrompt;
  storyPages: StoryPage[];
  images: string[];
  audioGenerated: boolean;
  createdAt: Date;
  rating?: number;
}

export interface User {
  id: string;
  email: string;
  subscriptionTier: 'free' | 'pro' | 'pro_max';
  createdAt: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
} 