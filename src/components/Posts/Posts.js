import React, {useEffect, useState} from 'react';

import {Post} from "../Post/Post";
import {PostDetails} from "../PostDetails/PostDetails";

const Posts = () => {
const [posts, setPosts]= useState([])
const[postDetails, setPostDetails]=useState(null)
    useEffect(()=>{fetch('https://jsonplaceholder.typicode.com/users/1/posts').then(value => value.json()).then(value=>setPosts(value))},[])

    return (
        <div>
            <h1>PostDetails</h1>
            {postDetails && <PostDetails post={postDetails}
                />}
            <hr/>
            {posts.map(post=><Post key = {post.id} post={post} setPostDetails={setPostDetails}/>)}

        </div>
    );
};

export {Posts};