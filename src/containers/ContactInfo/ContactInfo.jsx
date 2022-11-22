import React from "react";
import "./ContactInfo.scss";
import Header from "../Header/Header";
import MainHeading from "../../components/MainHeading/MainHeading";

const ContactInfo = (props) => {
    const { toggleDisplayPopUp, displayPopUp, closePopUp} = props;

    return (
        <div className="contact-info">
            <Header displayPopUp={displayPopUp} toggleDisplayPopUp={toggleDisplayPopUp} closePopUp={closePopUp}/>
            <div className="contact-info__content">
                <MainHeading title="Contact Info"/>
            </div>
        </div>
    );
};

export default ContactInfo;