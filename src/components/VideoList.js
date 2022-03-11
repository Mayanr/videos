import React from 'react';

const VideoList = props => {
    // props.videos is the array that comes through
    return <div>{props.videos.length}</div>;
};

export default VideoList;