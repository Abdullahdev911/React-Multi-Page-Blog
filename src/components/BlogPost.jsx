import {NavLink, useParams,useLoaderData } from 'react-router-dom'

export const blogDataLoad = async({params})=>{

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogid}`);
    return response.json();
} 
export function BlogPost() {
  const {blogid} = useParams();
  const data = useLoaderData();
  console.log(data);
  
  return (
    <>
    <div className="blog-post-container">
    <div className='blog-number'>Blog #: {blogid}</div>
    <div className='blog-title'>Title: {data.title}</div>
    <div className='blog-body'>Body:<br/> <span className="blog-body-text">{data.body}</span> </div>
    
    </div>

    </>
  )
}

