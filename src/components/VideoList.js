import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    // props.videos is the array that comes through
    const renderedList = videos.map((video) => {
        // pass each video as a prop to the VideoItem component
        return <VideoItem video={video}/>;
    });
    return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;