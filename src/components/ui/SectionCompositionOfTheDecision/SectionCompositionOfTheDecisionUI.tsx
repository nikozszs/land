import { CompositionBlock, type CardsBlock } from '../CompositionBlock';
import { Navigation } from '../Navigation/Navigation';
import './SectionCompositionOfTheDecision.css'

interface SectionCompositionUIProps {
    cardsBlocks: CardsBlock[];
    onSlideChange: (index: number) => void;
    currentSlide: number;
}

export const SectionCompositionOfTheDecisionUI = ({
    cardsBlocks, 
    onSlideChange, 
    currentSlide
}: SectionCompositionUIProps) => {
    const currentBlock = cardsBlocks[currentSlide]

    return (
        <section className='section-compositionOfTheDecision'>
            <h2>Состав решения</h2>
            <div className='sectionComposition-block desktop-version'>
                {cardsBlocks.map((item) => (
                    <CompositionBlock block={item} key={item.id}/> 
                ))}
            </div>

            <div className='mobile-version'>
                <div className='mobile-composition-block'>
                    <CompositionBlock block={currentBlock} />
                </div>
                <div className='composition-navigation-container'>
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