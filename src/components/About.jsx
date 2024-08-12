import React from 'react'
import {Link} from 'react-router-dom'

function About() {
  return (
   <>
    <div className="home-container">
        <div className="welcome-msg">
            About
        </div>
        <div className="about-section">
            <div className="about-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ab vitae quis itaque, animi architecto quod voluptas tempore impedit quos qui repudiandae corrupti illum sint debitis reprehenderit culpa magni laborum. Illo, excepturi. Veritatis debitis, laboriosam autem voluptas asperiores ut enim optio nemo rem fugit? Recusandae nihil blanditiis commodi officia minus.</div>
            <div className="about-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolor voluptate tempora deserunt. Nemo excepturi, asperiores saepe fugit nesciunt delectus neque numquam a itaque aut. Accusamus voluptatem vel ipsum molestias quos obcaecati veniam eos nihil ullam eaque beatae quidem maxime error, officiis quia ducimus fugiat nobis saepe, culpa laboriosam pariatur?</div>
            <div className="about-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolor voluptate tempora deserunt. Nemo excepturi, asperiores saepe fugit nesciunt delectus neque numquam a itaque aut. Accusamus voluptatem vel ipsum molestias quos obcaecati veniam eos nihil ullam eaque beatae quidem maxime error, officiis quia ducimus fugiat nobis saepe, culpa laboriosam pariatur?</div>

        </div>
        <div className="explore-tabs">
            <button>
                <Link to={'/'}>Home</Link></button>
            <button>
            <Link to={'/blog'}>Blogs</Link></button>
        </div>
    </div>
    </>
   
  )
}

export default About