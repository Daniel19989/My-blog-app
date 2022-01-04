import React from 'react'
import './body.css'


const Body = ({ post_date, post_title, post_text, post_content, post_image }) => {





    return (
        <div className='main' >
            <div className='main-container'>
                <div className='post'>
                    <div className='post-image'>{post_image}</div>
                    <div className='post-content'>{post_content}
                        <div className='post-date'>{post_date}</div>
                        <div className='post-title'><h4>{post_title}</h4></div>
                        <div className='post-text'>{post_text}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
