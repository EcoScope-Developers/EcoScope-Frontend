import React from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #00ff00;
  z-index: 1;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: brightness(50%); /* Dim the video so text is visible */
`;

const Header = styled.h1`
  font-size: 4rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #00ff00;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SubHeader = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #00ff00;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;


const LoginButton =styled.a`
background-color: #00ff00;
color: #000;
padding: 1rem 2rem;
border-radius: 25px;
text-decoration: none;
font-size: 1.2rem;
font-weight: bold;
margin-right: 1rem;
transition: 0.3s ease;

&:hover {
  background-color: #00cc00;
}
`;


const Footer = styled.footer`
  position: absolute;
  bottom: 10px;
  text-align: center;
  color: #00ff00;
`;

const LandingPage = () => {
  return (
    <Container>
      {/* Background Video */}
      <VideoBackground autoPlay loop muted>
        <source src="/nature.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>

      {/* Page Content */}
      <Header>Welcome to EcoScope</Header>
      <SubHeader>Your EcosystemOptimized</SubHeader>

      {/* Buttons */}
     
      <LoginButton href="/login">Login / Signup</LoginButton>

      <Footer>© 2024 EcoScope Developers</Footer>
    </Container>
  );
};

export default LandingPage;
