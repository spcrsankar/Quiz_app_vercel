import React from 'react'
import './style.css'
import { useNavigate } from "react-router-dom";
import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default function NavbarLogin() {
 
    const navigate = useNavigate();

    return (
    <NavBar className="navbar-container">
       
            <NavBar.Brand href="#home" className='app-detail-login'>
                <img alt="Logo" src="logo.jpg" width="120" height="60" className="app-logo"/>{' '}
                Quiz App
            </NavBar.Brand>
            <NavBar.Toggle />
            <NavBar.Collapse className="justify-content-end">
               
                <Button variant='primary' className="btn nav-btn" onClick={() => navigate("/contact-us")}>Contact us</Button>
            </NavBar.Collapse>
        
    </NavBar>
    )
}