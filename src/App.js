import React from 'react';
import Info from './Info';
import About from './About';
import Interest from './Interest';
import Footer from './Footer';
import "./Info.css";
import "./About.css";
import "./Interest.css"
import "./footer.css"
// import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <div className='container-lg p-1 my-2 mb-4 border'>
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  )
} 
