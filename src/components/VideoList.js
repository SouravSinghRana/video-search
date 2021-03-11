import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {

    const renderedList = props.videos.map((video) => {
        console.log(video)
        return <VideoItem key={video.snippet.title} onVideoSelect={props.onVideoSelect} video={video}/>
    });

    return (
        <div className="ui relaxed divided list">{renderedList}</div>
    );
}

export default VideoList;