import React from 'react';
import VideoPlayer from './VideoPlayer';
import videoUrl from "./assets/video.mp4"

function App() {
  return (
    <div className="App">
      <VideoPlayer
         videoUrl={videoUrl} // Justin Bieber - Baby ft. Ludacris
        description="Justin Bieber - Baby ft. Ludacris"
      />
    </div>
  );
}

export default App;