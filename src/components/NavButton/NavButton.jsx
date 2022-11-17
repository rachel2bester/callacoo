import React from 'react'
import "./NavButton.scss"

const NavButton = (props) => {
    const {title} = props;
    
    return (
        <div className='nav-button'>
            <p>{title}</p>
        </div>
  )
}

export default NavButton