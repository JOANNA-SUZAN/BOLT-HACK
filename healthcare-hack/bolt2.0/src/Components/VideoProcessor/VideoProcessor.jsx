import React from "react";
import testvideo from '../Resourses/testvideo2.mp4'
import './videoprocessor.css'

function VideoProcessor() {
    return (
        <div className="video-containers">
            <video className="video" controls>
                <source src={testvideo} type="video/mp4"  className="video-property"/>
            </video>
        </div>
    );
}

export default VideoProcessor;