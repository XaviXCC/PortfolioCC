import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './src/about'
import Contact from './src/contact'
import Services from './src/services'
import Projects from './src/projects'
import Layout from './components/Layout'
import LayoutFooter from './components/LayoutFooter'

const MainRouter = () => {
    return (
        <div>
            <Layout />
            <Routes>

                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/services" element={<Services />} />
                <Route exact path="/projects" element={<Projects />} />
                <Route exact path="/contact" element={<Contact />} />

            </Routes>
            <LayoutFooter />
        </div>
    )
}
export default MainRouter
