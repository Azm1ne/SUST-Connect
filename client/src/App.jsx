import React from 'react'
import {Routes,Route} from 'react-router-dom'
const App = ()=>{
  return(
    <>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Login />} />
        <Route path="/feed" element={<Feed />} />

        {/* Messages */}
        <Route path="/messages" element={<Messages />} />
        <Route path="/messages/:userId" element={<ChatBox />} />

        {/* Connections / Discover */}
        <Route path="/connections" element={<Connections />} />
        <Route path="/discover" element={<Discover />} />

        {/* Profile */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:profileId" element={<Profile />} />

        {/* Create Post */}
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </>
  )
}
export default App