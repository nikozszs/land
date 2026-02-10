import { useState } from 'react'
import logo from '../../assets/logo.svg'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    } 

    const navLinks = [
        { path: '/technology', label: 'Технологии'},
        { path: '/platform', label: 'Платформа управления'},
        { path: '/test-drive', label: 'Тест-драйв'},
        { path: '/network', label: 'Наша сеть'},
    ]
    return (
        <header className='header'>
            <nav className='header__nav'>
                <div className='header__nav-logo'>
                    <Link to='/' >
                        <img src={logo} className='header_logo' alt='Логотип'/>
                    </Link>
                    <a className='tel other-color'>+ 7 (800) 600-35-38</a>
                    <button className='burger-menu' 
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
                    <a className='other-color'>Оставить заявку</a>
                </div>
            </nav>
        </header>
    )
}