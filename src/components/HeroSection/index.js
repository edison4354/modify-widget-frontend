import React from 'react';
import { Button } from '../ButtonElement';
import {
  HeroContainer,
  HeroWrap,
} from './HeroElements'

const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <HeroWrap>
          <Button to="/login">Get Started</Button>
        </HeroWrap>
      </HeroContainer>
    </>
  )
}

export default HeroSection
