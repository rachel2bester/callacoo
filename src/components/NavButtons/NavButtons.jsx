import React from 'react'
import NavButton from '../NavButton/NavButton'

const NavButtons = ({closePopUp}) => {
    
    return (
        <>
            <NavButton title="About Me" linkTo="/about-me" closePopUp={closePopUp}/>
            <NavButton title="House Whispering" linkTo="/house-whispering" closePopUp={closePopUp}/>
            <NavButton title="Corporate Interiors" linkTo="/corporate-interiors" closePopUp={closePopUp}/>
            <NavButton title="Full Turnkey" linkTo="/full-turnkey" closePopUp={closePopUp}/>
            <NavButton title="Colab" linkTo="/colab" closePopUp={closePopUp}/>
            <NavButton title="Contact Info" linkTo="/contact-info" closePopUp={closePopUp}/>
        </>
    )
}

export default NavButtons