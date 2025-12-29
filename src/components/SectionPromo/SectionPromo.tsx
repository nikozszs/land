import promo from '../../assets/promo.svg'
import promo3 from '../../assets/promo3.svg'
import promo4 from '../../assets/promo4.svg'
import promo5 from '../../assets/promo5.svg'
import './SectionPromo.css'

export const SectionPromo = () => {
    return (
        <section className='section_promo'>
            <div className='promo1 block-promo'>
                <h1>Беспроводной
                    <br />
                    интернет для бизнеса</h1>
                <p className='promo-text'>от 2 990 рублей* в месяц! <br /> 
                    Установка по любому адресу в РФ!</p>
                <button className='btn-try'>попробовать</button>
                <ul className='promo-list'>
                    <li className='promo-list__item'>Мультироутер с технологией суммирования нескольких каналов связи в один </li>
                    <li className='promo-list__item'>Высокая скорость и отказоустойчивость интернет-соединения </li>
                    <li className='promo-list__item'>Единый договор на ПО, оборудование и связь </li>
                    <li className='promo-list__item'>Простое подключение за 7 минут </li>
                    <li className='promo-list__item'>Моментальная техподдержка 24/7 в Telegram </li>
                </ul>
                <p className='text-under'>* Без учета стоимости оборудования, возможен выкуп оборудования или аренда, стоимость 
                    <br /> будет зависеть от модели мультироутера</p>
            </div>
            <div className='promo2'>
                <img src={promo} />
            </div>
            <div className='promo3 block-promo block-promo__under'>
                <img src={promo3} className='block-promo__under-img' />
                <p className='title_promo'>надежный и быстрый интернет, который не падает</p>
            </div>
            <div className='promo3 block-promo block-promo__under'>
                <img className='block-promo__under-img' src={promo4} />
                <p className='title_promo'>КОНТРОЛЬ ВСЕЙ СЕТИ ЧЕРЕЗ ГИБКУЮ НАСТРОЙКУ</p>
            </div>
            <div className='promo3 block-promo block-promo__under'>
                <img src={promo5} className='block-promo__under-img'/>
                <p className='title_promo'>единственный инструмент для масштабирования по всей стране</p>
            </div>
        </section>   
    )
}