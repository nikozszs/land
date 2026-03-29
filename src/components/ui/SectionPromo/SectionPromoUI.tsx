import promo from '@assets/promo.svg'
import { Button } from '../Button/Button'
import { Navigation } from '../Navigation/Navigation'
import './SectionPromo.scss'

interface PromoBlock {
    id: number;
    img: string;
    title: string;
    className: string;
}

interface SectionPromoUIProps {
    promoBlocks: PromoBlock[];
    onSlideChange: (index: number) => void;
    currentSlide: number;
}

export const SectionPromoUI = ({
    currentSlide,
    promoBlocks,
    onSlideChange
}: SectionPromoUIProps) => {
    return (
        <section className='section_promo'>
            <div className='promo1 block-promo'>
                <h1>Беспроводной
                    <br />
                    интернет для бизнеса</h1>
                <p className='promo-text'>от 2 990 рублей* в месяц! <br /> 
                    Установка по любому адресу в РФ!</p>
                <Button text='попробовать' link='#sectionForm'/>
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
                        onSlideChange={onSlideChange}
                        initialSlide={currentSlide}
                    />
                </div>
            </div>
        </section>   
    )
}