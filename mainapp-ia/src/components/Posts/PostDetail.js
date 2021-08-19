import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostDetail({match}){
    const [post,setPost] = useState({})
    const id = match.params.id
    useEffect(() => {

        axios({
        method: "GET",
        url: `http://127.0.0.1:8000/api/posts/${id}/`
        }).then(response => {
            setPost(response.data)
        })
    },[id])
    return(
               <div>
            Post with id {post.id}
            <p>Title <strong>{post.title}</strong></p>
            <p> <b>with content:</b><spam>{post.content}</spam> </p></div>
    )
}

export default PostDetail;