import logo from '../../assets/logo.svg'
import './Header.css'

export const Header = () => {
    return (
        <header className='header'>
            <nav className='header__nav'>
                <div className='header__nav-logo'>
                    <img src={logo} alt='Логотип'/>
                    <a className='tel other-color'>+ 7 (800) 600-35-38</a>
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