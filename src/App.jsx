import './App.css';
import Header from './containers/Header/Header';
import React, { useState } from "react";
import Home from './containers/Home/Home';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import AboutMe from "./containers/AboutMe/AboutMe"
import HouseWhispering from './containers/HouseWhispering/HouseWhispering';
import CorporateInteriors from './containers/CorporateInteriors/CorporateInteriors';
import FullTurnkey from './containers/FullTurnkey/FullTurnkey';
import Colab from './containers/Colab/Colab';
import ContactInfo from './containers/ContactInfo/ContactInfo';

function App() {
    const [displayPopUp, setDisplayPopUp] = useState(false);

    const toggleDisplayPopUp = () => {
        setDisplayPopUp(!displayPopUp);
    };

    const closePopUp = () => {
        setDisplayPopUp(false);
    };
    
    return (
        <Router>
        <div className="App">
            <Routes>
                <Route path='/' element={<Home displayPopUp={displayPopUp} toggleDisplayPopUp={toggleDisplayPopUp} closePopUp={closePopUp}/>}/>
                <Route path='/about-me' element={<AboutMe displayPopUp={displayPopUp} toggleDisplayPopUp={toggleDisplayPopUp} closePopUp={closePopUp}/>}/>
                <Route path='/house-whispering' element={<HouseWhispering displayPopUp={displayPopUp} toggleDisplayPopUp={toggleDisplayPopUp} closePopUp={closePopUp}/>}/>
                <Route path='/corporate-interiors' element={<CorporateInteriors displayPopUp={displayPopUp} toggleDisplayPopUp={toggleDisplayPopUp} closePopUp={closePopUp}/>}/>
                <Route path='/full-turnkey' element={<FullTurnkey displayPopUp={displayPopUp} toggleDisplayPopUp={toggleDisplayPopUp} closePopUp={closePopUp}/>}/>
                <Route path='/colab' element={<Colab displayPopUp={displayPopUp} toggleDisplayPopUp={toggleDisplayPopUp} closePopUp={closePopUp}/>}/>
                <Route path='/contact-info' element={<ContactInfo displayPopUp={displayPopUp} toggleDisplayPopUp={toggleDisplayPopUp} closePopUp={closePopUp}/>}/>
            </Routes>
            
        </div>
        </Router>
    );
}

export default App;
