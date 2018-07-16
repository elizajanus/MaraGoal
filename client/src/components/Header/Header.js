import * as React from 'react';


import {
    Container,
    Box,
    Hero,
    HeroHeader,
    HeroBody,
    HeroFooter,
    Nav,
    NavLeft,
    NavItem,
    NavCenter,
    NavRight,
    Navbar,
    NavbarBrand,
    NavbarItem,
    brand,
    NavbarBurger,
    NavbarMenu,
    NavbarStart,
    NavbarLink,
    NavbarDropdown,
    NavbarDivider,
    NavbarEnd,
    Field,
    Control,
    Button,
    Icon,
    Tabs,
    TabList,
    Tab,
    TabLink,
    Title
} from 'bloomer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fagithub } from '@fortawesome/free-solid-svg-icons';
import Bulma from 'bulma'

const Header = () => (
<Hero isColor='info' isSize='medium' className='is-fullheight' className='bg-img'>
< Navbar className = 'has-background-black'>
<NavbarBrand>
    <NavbarItem href="/signup">
        <img src={brand} style={{ marginRight: 5 }} /> MaraGoal
    </NavbarItem>
    <NavbarItem isHidden='desktop'>
        <Icon className='fa fa-github' />
    </NavbarItem>
    <NavbarItem isHidden='desktop'>
        <Icon className='fa fa-twitter' style={{ color: '#55acee' }} />
    </NavbarItem>
    <NavbarBurger  />
</NavbarBrand>
<NavbarMenu >
    <NavbarStart>
        <NavbarItem href="/calendar">Calendar</NavbarItem>
        <NavbarItem href="/groupchat">GroupChat</NavbarItem>
         <NavbarItem href="/diary">Diary</NavbarItem>
    </NavbarStart>
    <NavbarEnd>
       
        
    </NavbarEnd>
</NavbarMenu>
</Navbar>

</Hero>
);
  

export default Header;
