import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../Images/logo.png';
import useAuth from '../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth()
    return (
        <div>
             <>
            <Navbar  sticky="top" collapseOnSelect expand='lg'>
                <Container className="fw-bold">
                    <Navbar.Brand href="#home"><img id="logo-img" src={logo} alt="" /> Book <samp id="holiday-text">My</samp> Holiday</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#doctors">Your Order</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#news">News & Articals</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#about">About US</Nav.Link>
                    {user?.email ? 
                    <Button onClick={logOut} variant="Primary">LogOut</Button>:
                    <Nav.Link as = {Link} to="/login">Login</Nav.Link>}
                    <Navbar.Text>
                        <a href='#login'>{user?.displayName}</a>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
        </div>
    );
};

export default Header;