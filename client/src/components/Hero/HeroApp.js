import * as React from 'react';
import {
    Container,
    Hero,
    HeroBody,
    Title
} from 'bloomer';

const HeroApp = () => (
<Hero isColor='info' isSize='medium'>
<HeroBody>
    <Container hasTextAlign='centered'>
        <Title>MaraGoal</Title>
    </Container>
</HeroBody>
</Hero>
);
  

export default HeroApp;