import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import {Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Philosophy from './components/about/philosophy/philosophy';
import Approach from './components/about/approach/approach';
import Leadership from './components/about/leadership/leadership';
import History from './components/about/history/history';
import Companies from './components/group/companies/companies';

import Footer from './components/footer/footer';

function App() {
  return (
      <div className='App'>
      <Navbar />
            <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/about/philosophy' element={<Philosophy />} />   
            <Route path='/about/approach' element={<Approach />} />
            <Route path='/about/leadership' element={<Leadership />} />
            <Route path='/about/history' element={<History />} />
            <Route path='/group/companies' element={<Companies />} />
            </Routes>
      <Footer />
      </div>
  );
}

export default App;
