import React from "react";
import "./HouseWhispering.scss";
import Header from "../Header/Header";
import MainHeading from "../../components/MainHeading/MainHeading";

const HouseWhispering = (props) => {
    const { toggleDisplayPopUp, displayPopUp, closePopUp} = props;

    return (
        <div className="house-whispering">
            <Header displayPopUp={displayPopUp} toggleDisplayPopUp={toggleDisplayPopUp} closePopUp={closePopUp}/>
            <div className="house-whispering__content">
                <MainHeading title="House Whispering" />
            </div>
        </div>
    );
};

export default HouseWhispering;