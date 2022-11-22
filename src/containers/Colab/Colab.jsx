import React from "react";
import "./Colab.scss";
import Header from "../Header/Header";
import MainHeading from "../../components/MainHeading/MainHeading";

const Colab = (props) => {
    const { toggleDisplayPopUp, displayPopUp, closePopUp} = props;

    return (
        <div className="colab">
            <Header displayPopUp={displayPopUp} toggleDisplayPopUp={toggleDisplayPopUp} closePopUp={closePopUp}/>
            <div className="colab__content">
                <MainHeading title="Colab"/>
            </div>
        </div>
    );
};

export default Colab;