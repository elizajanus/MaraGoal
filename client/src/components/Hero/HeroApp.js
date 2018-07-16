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

const HeroApp = () => (
<Hero isColor='info' isSize='medium'>
<HeroBody>
    <Container hasTextAlign='centered'>
        <Title>TMaraGoal</Title>
    </Container>
</HeroBody>
</Hero>
);
  

export default HeroApp;