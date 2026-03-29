import './SectionOperatingPrincilpe.scss'
import { Navigation } from '../Navigation/Navigation';

interface CardsBlock {
    id: number;
    img: string;
    title: string;
    className: string;
}

interface SectionOperatingPrincipleUIProps {
    cardsBlocks: CardsBlock[];
    onSlideChange: (index: number) => void;
    currentSlide: number;
}

export const SectionOperatingPrincipleUI = ({
    cardsBlocks,
    onSlideChange,
    currentSlide
}: SectionOperatingPrincipleUIProps) => {
    return (
        <section className="sectionOperatingPrinciple">
            <h2 className="sectionOperating-title">Принцип работы</h2>
            <div className="section-block">
                {cardsBlocks.map((item) => (
                    <div key={item.id} className='block-red' >
                        <img src={item.img} className='sectionOperatingPrinciple-img' />
                        <p className='sectionOperatingPrinciple-text'>{item.title}</p>
                    </div>
                ))}
            </div>

            <div className='mobile-promo-blocks'>
                    <div className='mobile-section-block'>
                        <div className={`${cardsBlocks[currentSlide].className}`}>
                            <img src={cardsBlocks[currentSlide].img} className='sectionOperatingPrinciple-img' />
                            <p className='sectionOperatingPrinciple-text'>{cardsBlocks[currentSlide].title}</p>
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
        </section>
    )
}