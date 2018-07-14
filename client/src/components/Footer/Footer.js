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

const Footer = () => (

<HeroFooter>
    <Tabs isBoxed isFullWidth>
        <Container>
            <TabList>
                <Tab><TabLink>Overview</TabLink></Tab>
                <Tab><TabLink>Grid</TabLink></Tab>
                <Tab><TabLink>Element</TabLink></Tab>
                <Tab><TabLink>Components</TabLink></Tab>
                <Tab><TabLink>Layout</TabLink></Tab>
            </TabList>
        </Container>
    </Tabs>
</HeroFooter>
)
export default Footer;
