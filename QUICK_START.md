# Story Time - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```

### 3. Open Your Browser
Navigate to `http://localhost:3000`

## 📱 What You'll See

- **Landing Page**: Beautiful hero section with call-to-action
- **Dashboard**: Story generator with theme, mood, setting, and character selection
- **Story Player**: Full-screen story reader with navigation controls

## 🎯 Current Features

✅ **Working Now:**
- Responsive UI with Tailwind CSS
- Story generator interface
- Mock story player with sample content
- Navigation between pages
- Beautiful, kid-friendly design

🔄 **Coming Soon:**
- Real AI story generation (OpenAI)
- User authentication (Firebase)
- Text-to-speech (ElevenLabs)
- Story saving and rating
- Backend API integration

## 🔧 Development

### Available Scripts
```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
npm run eject      # Eject from Create React App
```

### Project Structure
```
src/
├── components/     # Reusable UI components
├── pages/         # Main page components
├── contexts/      # React contexts (Auth, etc.)
├── types/         # TypeScript type definitions
├── services/      # API services (OpenAI, Firebase, etc.)
└── utils/         # Utility functions
```

## 🎨 Customization

### Colors
The app uses a custom primary color palette. Edit `tailwind.config.js` to change colors:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... more shades
  }
}
```

### Fonts
The app uses Inter font. Change in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
```

## 🐛 Troubleshooting

### Common Issues

**Port 3000 is in use:**
```bash
# Use a different port
PORT=3001 npm start
```

**Node modules issues:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors:**
```bash
# Restart TypeScript server in your IDE
# Or restart the dev server
npm start
```

## 📚 Next Steps

1. **Read the Integration To-Do List**: Check `INTEGRATION_TODO.md` for detailed setup instructions
2. **Set up Firebase**: Start with authentication
3. **Add OpenAI**: Enable real story generation
4. **Deploy**: Get it live on Vercel

## 🆘 Need Help?

- Check the integration to-do list for detailed setup instructions
- Review the React and TypeScript documentation
- Look at the component code for examples

---

**Happy coding! 🎉** 