import React from 'react';
import './App.scss';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './component/Header';
import AboutMe from './component/AboutME';
import Skills from './component/Skills'
import Projects from './component/Front';
import Works from './component/Works'
import Contact from './component/Contact'
import Ssock from './component/portfolio/Ssock';
import Ddokddok from './component/portfolio/Ddokddok';
import './index.css'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          {/* <Route path="/" element={<AboutMe/>}></Route> */}
          <Route path="/skill" element={<Skills/>}></Route>
          <Route path="/project" element={<Projects/>}></Route>
          <Route path="/work" element={<Works/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        <Ssock/>
        <Ddokddok/>
      </div>
    </BrowserRouter>
  );
}

export default App;
