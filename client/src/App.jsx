import React from 'react';
import Container from '@mui/material/Container';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<AboutMe />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Container>
  );
}

export default App;
