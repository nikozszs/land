import { useState } from 'react';
import promo from '@assets/promo.svg'
import promo3 from '@assets/promo3.svg'
import promo4 from '@assets/promo4.svg'
import promo5 from '@assets/promo5.svg'
import { Button } from '../../ui/Button/Button'
import { Navigation } from '../../Navigation/Navigation'
import './SectionPromo.css'

export const SectionPromo = () => {
    const [ currentSlide, setCurrentSlide ] = useState(0)

    const promoBlocks = [
        {
            id: 1,
            className: 'block-promo block-promo__under',
            img: promo3,
            title: 'надежный и быстрый интернет, который не падает'
        },
        {
            id: 2,
            className: 'block-promo block-promo__under',
            img: promo4,
            title: 'КОНТРОЛЬ ВСЕЙ СЕТИ ЧЕРЕЗ ГИБКУЮ НАСТРОЙКУ'
        },
        {
            id: 3,
            className: 'block-promo block-promo__under',
            img: promo5,
            title: 'единственный инструмент для масштабирования по всей стране'
        }
    ]

    const handleSlideChange = (index: number) => {
        setCurrentSlide(index)
    }

    return (
        <section className='section_promo'>
            <div className='promo1 block-promo'>
                <h1>Беспроводной
                    <br />
                    интернет для бизнеса</h1>
                <p className='promo-text'>от 2 990 рублей* в месяц! <br /> 
                    Установка по любому адресу в РФ!</p>
                <Button text='попробовать'/>
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
            
            <div className='desktop-promo-cards'>
                {promoBlocks.map((block) => (
                    <div key={block.id} className='promo3 block-promo block-promo__under' >
                        <img src={block.img} className='block-promo__under-img' />
                        <p className='title_promo'>{block.title}</p>
                    </div>
                ))}
            </div>

            <div className='mobile-promo-cards'>
                <div className='promo3-scroll-container'>
                    <div className='promo3-wrapper'>
                        <div className={`promo3 ${promoBlocks[currentSlide].className}`}>
                            <img src={promoBlocks[currentSlide].img} className='block-promo__under-img' />
                            <p className='title_promo'>{promoBlocks[currentSlide].title}</p>
                        </div>
                    </div>
                </div>
                <div className='promo-navigation-container'>
                    <Navigation 
                        dotsCount={3}
                        onSlideChange={handleSlideChange}
                        initialSlide={currentSlide}
                    />
                </div>
            </div>
        </section>   
    )
}