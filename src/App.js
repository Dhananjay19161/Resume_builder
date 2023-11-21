import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResumeBuilder from './ResumeBuilder';
import Preview from './components/Preview';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ResumeBuilder/>}></Route>
          <Route exact path="/preview" element={<Preview />} ></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
