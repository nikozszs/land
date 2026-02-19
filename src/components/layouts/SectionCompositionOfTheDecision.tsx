import { useState } from 'react';
import multirouter from '@assets/multirouter.svg'
import { SectionCompositionOfTheDecisionUI } from '../ui/SectionCompositionOfTheDecision/SectionCompositionOfTheDecisionUI';

export const SectionCompositionOfTheDecision = () => {
    const [ currentSlide, setCurrentSlide ] = useState(0)

    const blockComposition = [
        {
            id: 1,
            className: 'sectionComposition-block-setting first-grid',
            img: multirouter,
            title: 'Мультироутер',
            position: 'у клиента',
            description: 'Подключается к LTE-соединениям и передает данные параллельно по нескольким независимым каналам связи. Скорость суммируется — до 250 Мбит/с с четырех каналов связи'
        },
        {
            id: 2,
            className: 'sectionComposition-block-setting second-grid',
            title: 'ПО «Бондинг»',
            registryNumber: '№ 25726 Реестр Российского программного обеспечения',
        },
        {
            id: 3,
            className: 'sectionComposition-block-setting third-grid',
            title: 'ПО «Платформа управления сетевыми устройствами»',
            position: 'в облаке',
            registryNumber: '№ 25623 Реестр Российского программного обеспечения',
        }
    ]

    const handleSlideChange = (index: number) => {
        setCurrentSlide(index)
    }
    return (
        <SectionCompositionOfTheDecisionUI onSlideChange={handleSlideChange} currentSlide={currentSlide} cardsBlocks={blockComposition} />
    )
}