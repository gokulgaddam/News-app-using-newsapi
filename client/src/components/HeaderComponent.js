import React,{Component} from 'react';
import { Navbar, NavbarBrand,Jumbotron, Collapse, NavbarToggler,Nav,NavItem } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen:false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render(){
        return(
            <React.Fragment>
            <Navbar  dark expand="md">
              <div className="container">
                  <NavbarToggler onClick={this.toggleNav}/>
                  <NavbarBrand className="ml-auto" href="/"> NEWS
                   </NavbarBrand>
                   <Collapse isOpen={this.state.isNavOpen} navbar>
                   <Nav navbar className="ml-auto">
                       <NavItem>
                           <NavLink className="nav-link" to="/">
                               <span className="fa fa-home fa-lg">
                                   Home
                               </span>
                           </NavLink>
                       </NavItem>
                       <NavItem>
                           <NavLink className="nav-link" to="/business">
                               <span className="fa fa-info fa-lg">
                                   Bussiness
                               </span>
                           </NavLink>
                       </NavItem>
                       <NavItem>
                           <NavLink className="nav-link" to="/sports">
                               <span className="fa fa-list fa-lg">
                                   Sports
                               </span>
                           </NavLink>
                       </NavItem>
                       <NavItem>
                           <NavLink className="nav-link" to="/health">
                               <span className="fa fa-address-card fa-lg">
                                   Health
                               </span>
                           </NavLink>
                       </NavItem>
                       <NavItem>
                           <NavLink className="nav-link" to="/entertainment">
                               <span className="fa fa-address-card fa-lg">
                                   Entertainment
                               </span>
                           </NavLink>
                       </NavItem>
                   </Nav>
                   </Collapse>
                  
              </div>
            </Navbar>
           
          </React.Fragment>
        )
    }
}

export default Header;