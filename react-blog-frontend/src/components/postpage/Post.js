import React, { useEffect, useState } from 'react'
import "./Post.css"
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";



const Post = () => {
    const [postId, setPostId] = useState([]);
    const location = useLocation();
    useEffect(() => {
        let searchParams = new URLSearchParams(location.search).get('id')


        axios
            .get(`http://localhost:4000/api/posts/${searchParams}`)
            .then((res) => {
                setPostId(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

    }, [location.search])


    return (
        <>
            <div className='navigation'>
                <Link to='/'>Back</Link>
            </div>
            <div className='post-container'>
                <div id='individual-post-title'>{postId.title}</div>
                <div id='individual-post-date'>{new Date(parseInt(postId.added_date)).toDateString()}</div>
                <div id='individual-post-content'>{postId.content}</div>
            </div>
        </>
    )
}

export default Post
