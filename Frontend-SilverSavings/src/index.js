import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './App.css';
import Navbar from './components/Navbar';
import App from './App';
import FinanceTracker from './components/FinanceTracker';
import Home from './components/home';
import Register from "./components/Register";
import KeyFeatures from './components/KeyFeatures';
import Login from './components/Log';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Router>
      <Routes>
      <Route path="/home" element={<Home />} />
        <Route path="/calculate" element={<App />} /> {/* Render App component at the root */}
        <Route path="/keyfeatures" element={<KeyFeatures />} /> {/* Route for KeyFeatures */}
        <Route path="/" element={<Login />} />
        <Route path="/tracker" element={<FinanceTracker />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
