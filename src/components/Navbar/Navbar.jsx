import React, { useState } from 'react'
import {Navigate, useNavigation, Link as RouterLink} from 'react-router-dom'
import "./Navbar.css"
import logo from "../assets/logo.png"

export const Navbar = () => {

    const [state, setState] = useState(false);


  return (
    <div className='maincontainer'>

        <img src={logo} alt='logo'/>

        <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/gallery">Gallery</RouterLink>
        <RouterLink to="/product">Product</RouterLink>
        </nav>

        <div>
            <button onClick={() => setState(!state)} className='langButton'>{state ? "Japanese" : "English"}</button>
        </div>
    </div>
  )
}
