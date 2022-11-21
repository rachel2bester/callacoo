import React from 'react'
import NavButton from '../../components/NavButton/NavButton'
import NavButtons from '../../components/NavButtons/NavButtons';
import "./Nav.scss"

const Nav = (props) => {
    const {togglePopUp, displayPopUp} = props;

    return (
        <div className="nav">
            <svg
                viewBox="0 0 879.000000 374.000000"
                preserveAspectRatio="xMidYMid meet"
                className="nav__logo"
            >
                <g
                transform="translate(0.000000,374.000000) scale(0.100000,-0.100000)"
                stroke="none"
                >
                    <path d="M0 1870 l0 -1870 4395 0 4395 0 0 1870 0 1870 -4395 0 -4395 0 0 -1870z m8690 0 l0 -1770 -4300 0 -4300 0 0 1770 0 1770 4300 0 4300 0 0 -1770z" />
                    <path d="M1730 3293 c-221 -24 -464 -112 -650 -236 -97 -64 -272 -240 -339 -341 -109 -162 -193 -374 -233 -591 -18 -94 -17 -427 1 -525 52 -288 176 -550 351 -742 427 -469 1228 -567 1763 -214 88 58 237 197 237 221 0 7 -22 29 -48 48 l-48 36 -95 -92 c-142 -137 -318 -226 -541 -274 -114 -24 -380 -24 -495 0 -108 23 -274 81 -343 120 -143 80 -285 200 -376 319 -119 154 -209 360 -251 573 -27 138 -24 426 6 565 96 450 380 790 781 935 161 58 388 85 555 65 152 -17 246 -44 409 -115 59 -25 164 -97 232 -159 l61 -55 49 50 49 51 -55 50 c-226 206 -550 322 -885 316 -55 0 -116 -3 -135 -5z" />
                    <path d="M4440 3290 c-86 -10 -260 -52 -340 -83 -383 -144 -678 -458 -803 -853 -53 -167 -71 -293 -71 -489 0 -189 10 -264 59 -453 25 -95 106 -277 163 -367 52 -82 150 -195 236 -273 485 -439 1305 -457 1789 -39 31 28 73 69 92 93 l35 42 -51 41 -52 41 -74 -74 c-147 -148 -352 -253 -583 -298 -84 -16 -376 -15 -460 1 -251 49 -457 157 -631 330 -144 143 -245 312 -307 511 -43 135 -50 172 -64 310 -34 346 64 703 264 968 205 271 498 429 860 463 322 31 659 -75 874 -274 l61 -56 49 50 49 50 -60 56 c-244 229 -650 348 -1035 303z" />
                    <path d="M7165 3290 c-196 -25 -439 -113 -590 -213 -488 -322 -713 -924 -584 -1562 89 -438 388 -806 791 -974 425 -177 937 -138 1297 99 89 58 197 152 231 200 l20 28 -50 42 -50 42 -73 -74 c-144 -148 -341 -250 -563 -294 -122 -25 -376 -25 -497 -1 -551 110 -927 547 -988 1147 -44 442 132 900 445 1158 196 162 402 245 674 273 130 13 269 4 400 -27 173 -39 389 -153 491 -258 l44 -45 48 42 c27 23 49 47 49 53 0 18 -110 116 -187 167 -123 82 -261 137 -443 178 -108 24 -348 34 -465 19z" />
                </g>
            </svg>
            <div className='nav__buttons'>
                <NavButtons/>
            </div>
            
            {displayPopUp 
                ? <svg viewBox="0 0 256 256" className='nav__bars' onClick={togglePopUp}>
                        <path d="M202.82861,197.17188a3.99991,3.99991,0,1,1-5.65722,5.65624L128,133.65723,58.82861,202.82812a3.99991,3.99991,0,0,1-5.65722-5.65624L122.343,128,53.17139,58.82812a3.99991,3.99991,0,0,1,5.65722-5.65624L128,122.34277l69.17139-69.17089a3.99991,3.99991,0,0,1,5.65722,5.65624L133.657,128Z"/>
                    </svg>
                : <svg viewBox="0 0 32 32" className='nav__bars' onClick={togglePopUp}><path d="M 4 7 L 4 9 L 28 9 L 28 7 Z M 4 15 L 4 17 L 28 17 L 28 15 Z M 4 23 L 4 25 L 28 25 L 28 23 Z"/></svg>
            }
        </div>
    )
}

export default Nav