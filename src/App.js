import './App.css';
import React from 'react';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './Components/Body'

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' />
          <Route path='/Table'/>
        </Routes>
      </Router>
      <Body/>
    </>
  );
}

export default App;
