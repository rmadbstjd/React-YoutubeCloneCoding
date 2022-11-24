import React from 'react';

const VideoCard = ({video}) => {
    console.log("테스트");
    return (
        <div>
            {video.snippet.title} 
        </div>
    );
};

export default VideoCard;