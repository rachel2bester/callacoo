import React from "react";
import "./Header.scss";
import Nav from "../Nav/Nav";
import MenuPopup from "../MenuPopup/MenuPopup";

const Header = (props) => {
    const { toggleDisplayPopUp, displayPopUp } = props;
    return (
        <>
        <p>HIHIHIHIHIHIH</p>
            <Nav
                toggleDisplayPopUp={toggleDisplayPopUp}
                displayPopUp={displayPopUp}
                clear={false}
            />
            <div className="header__popup">
                <MenuPopup displayPopUp={displayPopUp} clear={false} />
            </div>
        </>
    );
};

export default Header;
