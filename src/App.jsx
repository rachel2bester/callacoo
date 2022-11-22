import './App.css';
import Header from './containers/Header/Header';
import React, { useState } from "react";
import Home from './containers/Home/Home';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import AboutMe from "./containers/AboutMe/AboutMe"

function App() {
    const [displayPopUp, setDisplayPopUp] = useState(false);

    const toggleDisplayPopUp = () => {
        setDisplayPopUp(!displayPopUp);
    };
    return (
        <Router>
        <div className="App">
            <Routes>
                <Route path='/' element={<Home displayPopUp={displayPopUp} toggleDisplayPopUp={toggleDisplayPopUp}/>}/>
                <Route path='/about-me' element={<AboutMe displayPopUp={displayPopUp} toggleDisplayPopUp={toggleDisplayPopUp}/>}/>
            </Routes>
            
        </div>
        </Router>
    );
}

export default App;
