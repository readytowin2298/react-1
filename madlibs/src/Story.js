import React from 'react';
import './Story.css'

function Story({story, setStory}){
    return (
        <div className="Story">
            <p>{story}</p>
            <button onClick={() => setStory("")}>Reset!</button>
        </div>
    )
};

export default Story;