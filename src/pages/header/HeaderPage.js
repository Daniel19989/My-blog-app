import React from 'react'
import './HeaderPageStyle.css'



const Headerpage = () => {
    return (
        <>
            <header className='header-style'>
                <div className='profile-img' >

                </div>
                <div className='profile-name'>
                    Daniel Ristevski
                </div>
                <div className='subtext'>
                    Welcome to my blog!
                </div>
            </header>

            <div className='main'>
                <div className='main-container'>
                    <div className='post'>

                    </div>
                </div>

            </div>

            <footer className='footer'>
                <p>Made with ❤ Daniel Ristevski</p>
            </footer>
        </>
    )
}

export default Headerpage
