import React from 'react'
import {Route, Routes} from 'react-router-dom'

import { About } from '../Pages/About'
import { Error } from '../Pages/Error'
import { HomeScreen } from '../Pages/HomeScreen'
import { Gallery } from '../Pages/Gallery'
import { Product } from '../Pages/Product/Product'
import Contact from '../Pages/Contact'



export default function Allroutes () {
    return(
    <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/home" element={<HomeScreen/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/blog" element={<Gallery/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="*" element={<Error />} />
    </Routes>
    )
}
