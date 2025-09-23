import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import components from the pages folder
import Login from './pages/Login.jsx';
import Feed from './pages/Feed.jsx';
import Messages from './pages/Messages.jsx';
import ChatBox from './pages/ChatBox.jsx';
import Connections from './pages/Connections.jsx';
import Discover from './pages/Discover.jsx';
import Profile from './pages/Profile.jsx';
import CreatePost from './pages/CreatePost.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/messages/:userId" element={<ChatBox />} />
      <Route path="/connections" element={<Connections />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/:profileId" element={<Profile />} />
      <Route path="/create-post" element={<CreatePost />} />
    </Routes>
  );
};

export default App;
