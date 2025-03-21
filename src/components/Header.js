// src/components/Header.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HeaderContainer = styled.section`
  height: 100vh;
  background: url('https://source.unsplash.com/1600x900/?nature,water') no-repeat center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0; left: 0;
  right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const Title = styled.h1`
  color: white;
  font-size: 4rem;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
`;

const Header = () => (
  <HeaderContainer id="header">
    <Overlay />
    <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
      <Title>Welcome to Sneha's Portfolio</Title>
    </motion.div>
  </HeaderContainer>
);

export default Header;