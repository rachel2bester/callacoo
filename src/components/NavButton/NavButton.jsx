import React from 'react'
import { Link } from 'react-router-dom';
import "./NavButton.scss"

const NavButton = (props) => {
    const {title, linkTo} = props;
    
    return (
        <Link to={linkTo} className="nav-button"> 
            {title}
        </Link>
  )
}

export default NavButton