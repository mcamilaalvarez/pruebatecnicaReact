import React from 'react';
import Navbar from 'react-bootstrap/Navbar';


export const NavBar = () => {
 
    return (
        <div style={{width: '100%'}}> 
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Gist GitHub Api</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                
                </Navbar.Collapse>
           </Navbar> 
        </div>
        
    )
}