import React from 'react'
import NavButtons from '../../components/NavButtons/NavButtons';
import "./MenuPopup.scss"

const MenuPopup = (props) => {
    const {displayPopUp} = props;

    
    return (
        <>
            {displayPopUp &&
                <div className="popup">
                    <NavButtons/>
                </div>
            }
        </>
    )
}

export default MenuPopup