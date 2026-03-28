import arrowLeft from '@/assets/arrowLeft.svg'
import arrowRight from '@/assets/arrowRight.svg'
import navigation4 from '@/assets/navigation4.svg'
import navigation3 from '@/assets/navigation3.svg'
import './Navigation.scss'
import { useState } from 'react'

interface NavigationProps {
    dotsCount: 3 | 4;
    onSlideChange?: (index: number) => void;
    initialSlide?: number;
}

export const Navigation = ({
    dotsCount,
    onSlideChange,
    initialSlide = 0
}: NavigationProps) => {
    const [ currentSlide, setCurrentSlide ] = useState(initialSlide)
    const getDotsIcon = () => {
        switch (dotsCount) {
            case 3: return navigation3;
            case 4: return navigation4;
            default: return navigation3;
        }
    }

    const handlePrevSlide = () => {
        const newSlide = currentSlide === 0 ? dotsCount - 1 : currentSlide - 1;
        setCurrentSlide(newSlide)
        onSlideChange?.(newSlide)
    }

    const handleNextSlide = () => {
        const newSlide = currentSlide === dotsCount - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide)
        onSlideChange?.(newSlide)
    }

    const handleDotClick = (index: number) => {
        setCurrentSlide(index)
        onSlideChange?.(index)
    }

    return (
        <div className='navigation'>
            <button className='button-navigation' onClick={handlePrevSlide}>
                <img src={arrowLeft} alt='Назад'/>
            </button>
            <div className='navigation-dots-container'>
                <img src={getDotsIcon()} 
                alt='Точки навигации'
                className='navigation-dots-image'
                />
                <div className='navigation-dots-overlay'>
                    {Array.from({length: dotsCount}).map((_, index) => (
                        <button key={index}
                            className={`dot-button ${currentSlide === index ? 'active' : ''}`} 
                            onClick={() => handleDotClick(index)}>
                        </button>
                    ))}
                </div>
            </div>
            <button className='button-navigation'>
                <img src={arrowRight} alt='Вперед' onClick={handleNextSlide}/>
            </button>
        </div>
    )
}