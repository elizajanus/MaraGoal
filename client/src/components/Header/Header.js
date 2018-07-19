import React, { Component } from 'react';


// import {
// //     Container,
// //     Box,
//     // Hero,
// //     HeroHeader,
// //     HeroBody,
// //     HeroFooter,
// //     Nav,
// //     NavLeft,
// //     NavItem,
// //     NavCenter,
// //     NavRight,
//     Navbar,
//     NavbarBrand,
//     NavbarItem,
// //     brand,
//     NavbarBurger,
//     NavbarMenu,
//     NavbarStart,
// //     NavbarLink,
// //     NavbarDropdown,
// //     NavbarDivider,
//     NavbarEnd
// //     Field,
// //     Control,
// //     Button,
// //     Icon,
// //     Tabs,
// //     TabList,
// //     Tab,
// //     TabLink,
// //     Title
// } from 'bloomer';

import { Navbar, Nav, NavItem,  } from 'react-bootstrap';

class Header extends Component {
constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };
  }
onClickNav() {
    this.setState({ isActive: !this.state.isActive });
}
render () {
        return (
            <Navbar inverse collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#brand"><img src='/images/Logo2-01.png' alt="MaraGoal" style={{ width: 100 }} /></a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>

               <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem href="/calendar">Calendar</NavItem>
                    <NavItem href="/groupchat">GroupChat</NavItem>
                    <NavItem href="/diary">Diary</NavItem>
                </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}
export default Header;