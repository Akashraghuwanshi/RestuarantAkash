

import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import "./style.css" ;
export default function HeaderComponent() {

 const [isNavOpen, setisNavOpen] =useState(false);

 function toggleNav(){
 setisNavOpen(!isNavOpen);
 };

 return(
 <div>
 <Navbar dark expand="md" >
 <div className="container">
 <NavbarToggler onClick={toggleNav} />
 <NavbarBrand className="mr-auto" href="/"><img src='assets/images/restaurantlogo.png' height="120"
width="250" alt='Indian Restaurant ' /></NavbarBrand>
 <Collapse isOpen={isNavOpen} navbar>
 <Nav navbar>
 <NavItem>
 <NavLink className="nav-link" to='/home'><span className="fa fa-home falg"></span> Home</NavLink>
 </NavItem>
 <NavItem>
 <NavLink className="nav-link" to='/about'><span className="fa fa-info fa-lg"></span>
About Us</NavLink>
 </NavItem>
 <NavItem>
 <NavLink className="nav-link" to='/menu'><span className="fa fa-list fa-lg"></span>
Menu</NavLink>
 </NavItem>
 <NavItem>
 <NavLink className="nav-link" to='/contact'><span className="fa fa-address-card falg"></span> Contact Us</NavLink>
 </NavItem>
 <NavItem>
 <NavLink className="nav-link" to='/'><span className="fa fa-user" aria-hidden="true"
></span> Login</NavLink>
 </NavItem>
 <NavItem>
 <NavLink className="nav-link" to='/signup'><span className="fa fa-sign-in" ariahidden="true"></span>SignUp</NavLink>
 </NavItem>

 </Nav>
 <Nav>

 </Nav>
 </Collapse>
 </div>

 </Navbar>
 <div className="container">
 <div className="row row-header">
 <center><div className="col-8 col-sm-6">
 <h2 dark>Indian Restaurant !</h2>
 </div></center>
 </div>
 </div>
 </div>
 );
 }


















/* import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';
export default function HeaderComponent() {
  return (
    <div>
   <Navbar dark color="primary">
  <div className="container">
 <NavbarBrand href="/">Full Stack Project</NavbarBrand>
  </div>
  </Navbar>

    </div>
  )
}
 */