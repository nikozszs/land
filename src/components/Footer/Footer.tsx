import './Footer.css'
import logo from '../../assets/logo.svg'
import footer from '../../assets/footer.svg'

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer_address'>
                <p className='footer_text'>ООО «Ньюком Дистрибьюшн», <br /> ОГРН: 1207700420784, <br /> Юридический адрес: 119017, Российская <br /> Федерация, г. Москва, <br /> ул. Большая Ордынка, д. 54 стр. 2</p>
                <div className='footer-container_adress'>
                    <img src={logo} className='footer_logo' alt='Логотип'/>
                    <p className='footer_logo footer_logo-text'>КАТЕГОРИЧЕСКИ НОВЫЙ ИНТЕРНЕТ ДЛЯ БИЗНЕСА</p>
                </div>
            </div>
            <div className='footer_info'>
                <div className='footer-container_info'>
                    <p className='footer_text'>Почта: <a className='footer-link'>info@mrnet.ru</a> <br /> График работы: по будням <br /> с 9:00 до 19:00 по Москве</p>
                    <p className='footer_text'>Служба поддержки: <br />Тел:<a className='footer-link'> 8 (495) 308-41-51</a> <br /> Тел: <a className='footer-link'>8 (800) 600-35-38</a> <br /> Почта: <a className='footer-link'>helpdesk@mrnet.ru</a> <br /> График работы: 24/7</p>
                </div>
                <p className='footer_text-info footer_text'>©2025 mrnet.ru Все права защищены</p>
            </div>
            <div className='footer_links'>
                <div className='footer_links-requirements'>
                    <a>Пользовательское соглашение</a> 
                    <a>Политика в отношении обработки персональных данных </a>
                    <a>Соглашение об обработке данных</a>
                    <a>Соглашение о порядке оказания услуг</a>
                    <a>Соглашение о технической поддержке</a>
                    <a>Требования по эксплуатации оборудования mrnet</a>
                    <a>Требования к серверным ресурсам для установки ПО</a>
                </div>
                <div className='footer_links-instructions'>
                    <a>Инструкция по работе с личным кабинетом</a>
                    <a>Инструкция по эксплуатации мультироутера 04</a>
                    <a>Инструкция по эксплуатации мультироутера 05</a>
                    <a>Инструкция по эксплуатации мультироутера 06</a>
                    <a>Инструкция по эксплуатации мультироутера 07</a>
                </div>
            </div>
            <div className='footer_img'>
                <img src={footer} />
            </div>
        </footer>
    )
}