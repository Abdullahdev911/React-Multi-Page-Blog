import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className='nav-bar'>
            <div className="logo">
                Blogs.
            </div>

            <ul>
                <li><NavLink to={'/'} style={({ isActive }) => ({
                    borderBottom: isActive ? '1px solid white' : ''
                })}>Home</NavLink></li>

                <li><NavLink to={'/about'} style={({ isActive }) => ({
                    borderBottom: isActive ? '1px solid white' : ''
                })}>About</NavLink></li>
                <li><NavLink to={'/blog'} style={({ isActive }) => ({
                    borderBottom: isActive ? '1px solid white' : ''
                })}>Blog</NavLink></li>
            </ul>

        </nav>


    )
}

export default NavBar