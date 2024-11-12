import React from 'react'
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';

function Header() {
    return (
        <>
                <div className='row head'>
                    <div>logo</div>
                    <ul className='headers'>
                        <li><Link className='header' to="/">About ME</Link></li>
                        <li><Link className='header' to="/skill">Skills</Link></li>
                        <li><Link className='header' to="/project">Projects</Link></li>
                        <li><Link className='header' to="/work">How I work</Link></li>
                        <li><Link className='header' to="/contact">Contact</Link></li>
                    </ul>
                    <div>logo</div>
                </div>
        </>
    )
}

export default Header