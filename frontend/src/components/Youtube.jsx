import React, { useState, useEffect } from 'react';
import { Play, ChevronLeft, ChevronRight, ExternalLink, Loader } from 'lucide-react';

const YouTube = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleVideos = 3; // Number of videos visible at once

  const nextSlide = () => {
    if (currentIndex < videos.length - visibleVideos) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Function to open a YouTube video
  const openVideo = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  useEffect(() => {
    const fetchYouTubeVideos = async () => {
      try {
        setLoading(true);
       
        // Replace with Aerie Academy channel ID when available
        const channelId = 'UCNXLr-gjvCx0lZWA70WjvkA'; 
        const apiKey = 'AIzaSyBru7sMdJd83ew0BUnYftBEfKWsEz7qxIU'; // Your provided API key
        const maxResults = 10;
        
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}&type=video`
        );
        
        if (!response.ok) {
          throw new Error(`YouTube API error: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Get video details for additional information
        const videoIds = data.items.map(item => item.id.videoId).join(',');
        const videosResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${videoIds}&part=snippet,contentDetails,statistics`
        );
        
        if (!videosResponse.ok) {
          throw new Error(`YouTube API error: ${videosResponse.status}`);
        }
        
        const videosData = await videosResponse.json();
        
        // Transform the YouTube API response to match our video format
        const fetchedVideos = data.items.map(item => {
          const videoDetails = videosData.items.find(v => v.id === item.id.videoId);
          const publishDate = new Date(item.snippet.publishedAt);
          
          return {
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.medium.url,
            date: publishDate.toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            }),
            time: publishDate.toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit'
            }),
            category: 'Education', // Changed from "Music Video" to "Education"
            channelLogo: '/aerie.png', // Using Aerie Academy logo
            views: videoDetails ? parseInt(videoDetails.statistics.viewCount).toLocaleString() : '0',
            duration: videoDetails ? formatDuration(videoDetails.contentDetails.duration) : '00:00'
          };
        });
        
        setVideos(fetchedVideos);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching YouTube videos:', error);
        setError('Failed to fetch videos. Please try again later.');
        setLoading(false);
      }
    };
    
    fetchYouTubeVideos();
  }, []);
  
  // Helper function to format YouTube duration (PT1H2M3S format to HH:MM:SS)
  const formatDuration = (duration) => {
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    
    const hours = match[1] ? match[1].padStart(2, '0') + ':' : '';
    const minutes = (match[2] ? match[2] : '0').padStart(2, '0');
    const seconds = (match[3] ? match[3] : '0').padStart(2, '0');
    
    return `${hours}${minutes}:${seconds}`;
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">GATE Preparation Videos</h2>
          <a 
            href="https://www.youtube.com/channel/UCNXLr-gjvCx0lZWA70WjvkA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
          >
            View All
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader className="w-8 h-8 text-indigo-600 animate-spin" />
            <span className="ml-3 text-gray-600">Loading videos...</span>
          </div>
        ) : error ? (
          <div className="text-center py-10 text-red-500">{error}</div>
        ) : (
          <div className="relative">
            {/* Left Navigation Arrow */}
            <button 
              className={`absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center z-10 hover:bg-gray-100 transition-colors ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={prevSlide}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            {/* Video Carousel */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / visibleVideos)}%)` }}
              >
                {videos.map((video) => (
                  <div
                    key={video.id}
                    className="w-full max-w-sm px-2 flex-shrink-0 flex-grow-0"
                    style={{ width: `${100 / visibleVideos}%` }}
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <div className="relative">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-48 object-cover" 
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={() => openVideo(video.id)}
                            className="w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors"
                          >
                            <Play className="w-6 h-6 text-white" fill="white" />
                          </button>
                        </div>
                        <div className="absolute top-2 left-2 bg-indigo-700 rounded-full p-1">
                          <img 
                            src={video.channelLogo} 
                            alt="Aerie Academy Logo" 
                            className="w-6 h-6 rounded-full"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = 'https://via.placeholder.com/40x40?text=AA';
                            }}
                          />
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 line-clamp-1 mb-1">{video.title}</h3>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>{video.date}</span>
                          <span>{video.time}</span>
                        </div>
                        <div className="mt-2 text-xs flex justify-between items-center">
                          <span className="text-indigo-600">{video.category}</span>
                          <span className="text-gray-500">{video.views} views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Navigation Arrow */}
            <button 
              className={`absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center z-10 hover:bg-gray-100 transition-colors ${currentIndex >= videos.length - visibleVideos ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={nextSlide}
              disabled={currentIndex >= videos.length - visibleVideos}
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default YouTube;