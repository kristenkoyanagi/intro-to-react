import React from 'react';
import './NewPostButton.css';

function NewPostButton(props) { 
    return(
        <button className="newPostButton" onClick={props.createNewPost}>New Post</button>
    )
}

export default NewPostButton;