import { useState } from 'react';
import promo3 from '@assets/promo3.svg'
import promo4 from '@assets/promo4.svg'
import promo5 from '@assets/promo5.svg'
import { SectionPromoUI } from '../ui/SectionPromo/SectionPromoUI';

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
        <SectionPromoUI onSlideChange={handleSlideChange} currentSlide={currentSlide} promoBlocks={promoBlocks} />
    )
}