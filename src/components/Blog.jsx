import React from 'react'
import {Outlet,Link} from 'react-router-dom'


const blogData = [
    {
        id:1,
        name: 'Blog Post #1',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias soluta beatae voluptatum.',
        image: 'https://picsum.photos/200'
    },
    {
        id:2,
        name: 'Blog Post #2',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias soluta beatae voluptatum.',
        image: 'https://picsum.photos/200'
    },
    {
        id:3,
        name: 'Blog Post #3',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias soluta beatae voluptatum.',
        image: 'https://picsum.photos/200'
    }
]

function Blog() {
  return (
    <>
    <div className="blog-container">
        

           <ul>
            {blogData.map(blog => (
                <li key={blog.id}>
                    <div className="card-container">
                        <div className="blog-image">
                            <img src={blog.image} alt="" />
                        </div>
                        <div className="blog-name">
                            {blog.name}
                        </div>
                        <div className="blog-title">
                            {blog.title}
                        </div>

                        <button>
                            <Link to={`/blog/${blog.id}`}>Read More</Link>
                        </button>
                    </div>
                </li>
            ))}
           </ul>
        
    </div>
    
    </>
  )
}

export default Blog