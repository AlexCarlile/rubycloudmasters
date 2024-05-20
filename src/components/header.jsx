import { React, useState, useEffect } from 'react';
import logo from '../img/Logo Ruby Cloud Masters.png';


export default function Header({scrollToElement}) {
    const [navActive, setNavActive]  = useState(false);
    const [isHovered, setIsHovered] = useState(false);


    const closeMenu = (a) => {
        scrollToElement(a);
        setNavActive(false);
    };

    useEffect(() => {
        if (navActive) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [navActive]);
  
    return (
        <header className='header' style={{position: navActive === true ? "fixed" : "absolute"}}>
            <div className="header-container container flex">
                <a href="/" className="header-logo flex" onClick={closeMenu}>
                    <img className="classic-logo img" src={logo} alt="Логотип Medguru" />
                </a>
                <nav className= {navActive === true ? "header-nav active flex " : "header-nav flex"}>
                    <ul className="header-list list-reset flex">
                        <li className="header-list-item">
                            <a className="header-item-txt" href="#1" onClick={closeMenu}>О премии</a> 
                        </li>
                        <li claame="header-list-item">
                            <a className="header-item-txt" href="#2" onClick={closeMenu}>Эксперты</a>
                        </li>
                        <li claame="header-list-item">
                            <a className="header-item-txt" href="#3" onClick={closeMenu}>Номинации</a>
                        </li>
                        <li claame="header-list-item">
                            <a className="header-item-txt" href="#4" onClick={closeMenu}>
                                Участникам
                            </a>
                        </li>
                        <div className="description-btn-sec mob flex">
                            <a href="#5" onClick={closeMenu} className="description-btn btn-reset flex" 
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <span style={{display: "flex", alignItems: "center"}}>Связаться с нами</span>
                                <svg width="27" height="28" className={isHovered === true ? "arrow active" : "arrow"} viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.03455L25.5 26.0303M25.5 26.0303V0.969604M25.5 26.0303H0.5" stroke="white" strokeWidth="2"/>
                                </svg>
                            </a>
                        </div>
                    </ul>
                </nav>
                
                <div className="description-btn-sec flex">
                    <a href="#5" onClick={() => scrollToElement('5')} className="description-btn btn-reset flex" 
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <span style={{display: "flex", alignItems: "center"}}>Связаться с нами</span>
                        <svg width="27" height="28" className={isHovered === true ? "arrow arrow-header active" : "arrow-header arrow"} viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="path" d="M1 1.03455L25.5 26.0303M25.5 26.0303V0.969604M25.5 26.0303H0.5" stroke="white" strokeWidth="2"/>
                        </svg>
                    </a>
                </div>

                <button className={navActive ? "burger active btn-reset" : "burger btn-reset"} onClick={(navActive === true ) ? () => setNavActive(false) : () => setNavActive(true)}>
                    <span className="burger-line active"></span>
                </button>
            </div>
        </header>
  )
}
