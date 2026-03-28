import logo from '../../../assets/logo.svg'
import './HeaderUI.scss'
import { Link, NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

interface IHeaderUIProps {
    isOpen: boolean;
    toggleMenu: () => void;
    isScrolled: boolean;
    navLinks: Array<{path: string; label: string}>;
}

export const HeaderUI = ({
    isOpen, 
    toggleMenu, 
    navLinks,
    isScrolled
}: IHeaderUIProps) => {
    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`} >
            <nav className='header__nav'>
                <div className='header__nav-logo'>
                    <Link to='/'>
                        <img src={logo} className='header_logo' alt='Логотип'/>
                    </Link>
                    <a className='tel other-color'>+ 7 (800) 600-35-38</a>
                    <button 
                        className={`burger-menu ${isOpen ? 'active' : ''}`}
                        onClick={toggleMenu} 
                        aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
                        >
                            <span className={`burger-line ${isOpen ? 'active' : ''}`}></span>
                            <span className={`burger-line ${isOpen ? 'active' : ''}`}></span>
                        </button>
                </div>
                <div className='header__nav-links'>
                    {navLinks.map((item) => (
                        <NavLink 
                            key={item.path}
                            to={item.path}
                            className={({ isActive}) => `header-link ${isActive ? 'active' : ''}`}
                            >
                                {item.label}
                        </NavLink>
                    ))}
                    <HashLink to="#sectionForm" className='other-color'>Оставить заявку</HashLink>
                </div>
            </nav>
        </header>
    )
}