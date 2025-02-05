/* 
  File: Layout.jsx
  Student Name: Xiaowei Xue
  Student ID: 300579496
  Date: 2025-02-03
*/


import React from 'react';
import { Link } from 'react-router-dom';
export default function Layout() {
    return (
        <div>

            <div class="top" >
                <img src="/img/topbackground.jpg" alt="topbackground image"></img>
                <img src="/img/logo.png" alt="logo image" class="logo"></img>
                <h1>My Portfolio</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link> </li>
                        <li><Link to="/about">About Me</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>

            <hr />
            <br />

        </div>

    );
}