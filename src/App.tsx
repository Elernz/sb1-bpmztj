import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Settings from './pages/Settings';
import Library from './pages/Library';
import Assistants from './pages/Assistants';
import Resources from './pages/Resources';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import Help from './pages/Help';
import Feedback from './pages/Feedback';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-emerald-900 to-gray-900 text-white">
        <div className="max-w-md mx-auto h-screen flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/library" element={<Library />} />
            <Route path="/assistants" element={<Assistants />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/help" element={<Help />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
          <Navigation />
        </div>
      </div>
    </Router>
  );
}

export default App;