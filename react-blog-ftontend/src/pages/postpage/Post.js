import React from 'react'
import "./Post.css"
import { Link } from 'react-router-dom';


const Post = () => {
    return (
        <>
            <div className='navigation'>
                <Link to='/'>Back</Link>
            </div>
            <div className='post-container'>
                <div id='individual-post-title'>This is the title</div>
                <div id='individual-post-date'>Mar 10</div>
                <div id='individual-post-content'>So perhaps, you'vedfancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos, but perhaps you're wondering how it's even possible to change the font of your text? Is it some sort of hack? Are you copying and pasting an actual font?</div>
            </div>
        </>
    )
}

export default Post
