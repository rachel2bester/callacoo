import React from "react";
import "./FullTurnkey.scss";
import Header from "../Header/Header";
import MainHeading from "../../components/MainHeading/MainHeading";

const FullTurnkey = (props) => {
    const { toggleDisplayPopUp, displayPopUp, closePopUp} = props;

    return (
        <div className="full-turnkey">
            <Header displayPopUp={displayPopUp} toggleDisplayPopUp={toggleDisplayPopUp} closePopUp={closePopUp}/>
            <div className="full-turnkey__content">
                <MainHeading title="Full Turnkey"/>
            </div>
        </div>
    );
};

export default FullTurnkey;