import { useState } from 'react'
import logo from '../../assets/logo.svg'
import './Header.css'

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    } 
    return (
        <header className='header'>
            <nav className='header__nav'>
                <div className='header__nav-logo'>
                    <img src={logo} className='header_logo' alt='Логотип'/>
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
                    <a>Технология</a>
                    <a>Платформа управления</a>
                    <a>Тест-драйв</a>
                    <a>Наша сеть</a>
                    <a className='other-color'>Оставить заявку</a>
                </div>
            </nav>
        </header>
    )
}