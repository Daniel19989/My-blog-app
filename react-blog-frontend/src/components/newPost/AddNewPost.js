import React, { useState } from 'react'
import "./AddNewPost.css"
import axios from "axios";
import { Link } from 'react-router-dom';


const AddNewPost = () => {

    const [newPost, setNewPost] = useState([])



    const postData = async () => {

        await axios.post("/api/posts/upload", {
            title: newPost.title,
            content: newPost.content,
            post_image: "http://localhost:4000/uploads/post-image-1181372332-170667a.jpg"
        }).then((res) => {
            console.log('debug', res)

        })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleChange = (e) => {
        setNewPost(prev => ({ ...prev, [e.target.name]: e.target.value }))
        e.preventDefault()

    }

    const submitHandler = (event) => {
        event.prevent.Default()
    }



    return (
        <div className="container new-post-page">
            <header>
                <div className="header-container">
                    <div className="header-blog-text">
                        <div className="title">New Post</div>
                        <div className="subtext">
                            Let's add a new blog post!
                        </div>
                    </div>
                </div>
            </header>
            <div className="main">
                <div className="main-container">
                    <div className="navigation">
                        <Link to={"/"}>Back</Link>
                    </div>
                    <div className="form-container">
                        <form onSubmit={submitHandler}>
                            <input value={newPost.title} onChange={handleChange} id="form-post-title" type="text" name="title" placeholder="Post Title" />
                            <textarea value={newPost.content} onChange={handleChange} id="form-post-content" name="content" placeholder="Post Content"></textarea>
                            <button id="form-post-submit" type='button' onClick={postData}>Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AddNewPost
