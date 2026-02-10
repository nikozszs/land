import { useState } from 'react';
import pr1 from '@assets/pr1.svg'
import pr2 from '@assets/pr2.svg'
import pr3 from '@assets/pr3.svg'
import { SectionOperatingPrincipleUI } from '../ui/SectionOperatingPrinciple/SectionOperatingPrincilpeUI';

export const SectionOperatingPrinciple = () => {
    const [ currentSlide, setCurrentSlide ] = useState(0)

    const block = [
        {
            id: 1,
            className: 'block-red',
            img: pr1,
            title: 'ПО «Бондинг» агрегирует несколько операторов связи в мультироутере'
        },
        {
            id: 2,
            className: 'block-red',
            img: pr2,
            title: 'ПО «Платформа управления сетевыми устройствами» в облаке обеспечивает мониторинг и управление'
        },
        {
            id: 3,
            className: 'block-red',
            img: pr3,
            title: 'Агрегирование нескольких каналов и облачная платформа повышают отказоустойчивость интернета'
        }
    ]

    const handleSlideChange = (index: number) => {
        setCurrentSlide(index)
    }
    return (
        <SectionOperatingPrincipleUI onSlideChange={handleSlideChange} currentSlide={currentSlide} cardsBlocks={block} />
    )
}