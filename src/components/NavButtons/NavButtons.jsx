import React from 'react'
import NavButton from '../NavButton/NavButton'

const NavButtons = () => {
    return (
        <>
            <NavButton title="About Me" linkTo="/about-me"/>
            <NavButton title="House Whispering" linkTo="/house-whispering"/>
            <NavButton title="Corporate Interiors" linkTo="/coporate-interiors"/>
            <NavButton title="Full Turnkey" linkTo="/full-turnkey"/>
            <NavButton title="Colab" linkTo="/colab"/>
            <NavButton title="Contact Info" linkTo="/contact-info"/>
        </>
    )
}

export default NavButtons