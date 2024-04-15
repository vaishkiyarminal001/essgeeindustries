import React from 'react'
import {Route, Routes} from 'react-router-dom'

import { About } from '../Pages/About'
import { Gallery } from '../Pages/Gallery'
import { Product } from '../Pages/Product'
import { Contact } from '../Pages/Contact'
import { Error } from '../Pages/Error'
import Home from '../Pages/Home'

export default function Allroutes () {
    return(
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<Error />} />
    </Routes>
    )
}
