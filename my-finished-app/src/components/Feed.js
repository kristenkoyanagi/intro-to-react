import React, { useState } from 'react';
import './Feed.css';
import Post from './Post';

function Feed() { 
    const postList = [
        {
            username: 'kristen',
            imageId: 0,
            caption: 'my first picture'
        },
        {
            username: 'beverly',
            imageId: 10,
            caption: 'my second picture' 
        },
        {
            username: 'bori',
            imageId: 20,
            caption: 'my third picture'
        }
    ]
    const [posts,setPosts] = useState(postList)
    const [imageId,setImageId] = useState(30)
    const [username,setUsername] = useState("")

    const handleCreateNewPost = event => {
        console.log(event)
        setPosts([...posts, { username: username, imageId: imageId, caption: "random" }]);
        setImageId(imageId+10)
        console.log(posts, imageId)
    };

    return(
        <div className="feed">
            <label htmlFor="usernameInput">Username</label>
            <input className="usernameInput" id="usernameInput" onChange={event => setUsername(event.target.value)}></input>
            <button className="newPostButton" onClick={handleCreateNewPost}>New Post</button>
            {posts.map((post,k) => {
                return <Post imageId={post.imageId} username={post.username} caption={post.caption} key={k}/>
            })}
        </div>
    )
}

export default Feed;