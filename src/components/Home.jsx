import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <>
    <div className="home-container">
        <div className="welcome-msg">
            Welcome to Blogs.
        </div>
        <div className="explore-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deleniti omnis aliquam rem magni animi impedit, a excepturi laudantium accusantium vero quia qui libero!
        </div>
        <div className="explore-tabs">
            <button>
                <Link to={'/about'}>About</Link></button>
            <button>
            <Link to={'/blog'}>Blogs</Link></button>
        </div>
    </div>
    </>
  )
}

export default Home