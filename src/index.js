import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Error from './components/Error';
import About from "./components/About";
import App from "./App";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
                <Routes>
                    <Route  path="/" element={<App />}/>
                    <Route  path="/about" element={<About />}/>
                    <Route  path="/projects" element={<Projects />}/>

                    <Route path="/*" element={<Error />}/>
                </Routes>
            </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();