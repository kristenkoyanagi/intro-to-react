import React, { Component } from 'react';
import './Feed.css';
import Post from './Post';
import NewPostButton from './NewPostButton';

class Feed extends Component { 
    constructor(props){
        super(props)
        this.state = {
            posts: [
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
            ],
            nextImageId: 30
        }
    }

    createNewPost = () => {
        const newPosts = [
            {
                username: 'new user',
                imageId: this.state.nextImageId,
                caption: 'new caption'
            }, ...this.state.posts
        ]
        this.setState({
            posts: newPosts,
            nextImageId: this.state.nextImageId + 10
        })
    }

    createPosts() {
        return this.state.posts.map(post => {
            return <Post imageId={post.imageId} username={post.username} caption={post.caption}></Post>
        })
    }

    render(){
        return(
            <div className="feed">
                <NewPostButton createNewPost={this.createNewPost}></NewPostButton>
                {this.createPosts()}
            </div>
        )
    }
}

export default Feed;