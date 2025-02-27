
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Homescreen";
import MainSection from './Pages/Home/MainSection';

function App() {
  return (
    <div className="App">
     <MainSection />
    </div>
  );
}

export default App;
