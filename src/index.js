import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

reportWebVitals();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/letter">
      <Routes>
      <Route path="*" element={ <App /> } />
      </Routes>
    </BrowserRouter >
  </React.StrictMode>
);