import { React,useState } from 'react';
import logo from '../img/Logo Ruby Cloud Masters.png';


export default function Footer() {
    const [navActive, setNavActive]  = useState(false);

    const closeMenu = () => {
      setNavActive(false);
    };

    const [isHovered, setIsHovered] = useState(false);
  
    return (
        <footer className='footer flex'>
            <div className="header-container footer-container container flex">
                <a href="/" className="header-logo flex" onClick={closeMenu}>
                    <img className="classic-logo img" src={logo} alt="Логотип Medguru" />
                </a>
                <nav className= {navActive === true ? "flex " : "header-nav footer-nav flex"}>
                    <ul className="header-list footer-list list-reset flex">
                        <li className="header-list-item footer-list-item">
                            <a className="header-item-txt footer-item-txt" href="#1" onClick={closeMenu}>О премии</a> 
                        </li>
                        <li claame="header-list-item footer-list-item">
                            <a className="header-item-txt footer-item-txt" href="#2" onClick={closeMenu}>Эксперты</a>
                        </li>
                        <li claame="header-list-item footer-list-item">
                            <a className="header-item-txt footer-item-txt" href="#3" onClick={closeMenu}>Номинации</a>
                        </li>
                        <li claame="header-list-item footer-list-item">
                            <a className="header-item-txt footer-item-txt" href="#4" onClick={closeMenu}>
                                Участникам
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <p className="footer-txt">
                По всем вопросам обращайтесь<br/>к организатору премии<br/>
                {/* <a href="mailto:i.novohatskaya@mbkgroup.org" target='_blank' style={{color: "#941214"}}>i.novohatskaya@mbkgroup.org</a> */}
            </p>
        </footer>
  )
}
