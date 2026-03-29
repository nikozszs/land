import { Navigation } from '../Navigation/Navigation'
import './SectionScroll.scss'

interface ScrollBlocks {
    id: number
    company: string
    name: string
    position: string
    text: string
}

interface SectionScrollUIProps {
    currentSlide: number
    onSlideChange: (index: number) => void
    scrollBlocks: ScrollBlocks[]
}

export const SectionScrollUI = ({currentSlide, onSlideChange, scrollBlocks}: SectionScrollUIProps) => {
    return (
        <section className='sectionScroll'>
            <h2>95% клиентов выбирают <a className='link-title'>mrnet</a> <br /> после тест-драйва</h2>
            <div className='desktop-scroll-container'>
                <div className='scroll-container'>
                    {scrollBlocks.map((block) => (
                        <div className='block' key={block.id}>
                            <div className='sectionScroll__text-container'>
                                <p className='block_text-other block_text'>{block.company} <br /> {block.name}</p>
                                {block.position && <p className='block_text' dangerouslySetInnerHTML={{ __html: block.position }} />}
                            </div>
                            <p>{block.text}</p>
                        </div>
                    ))}
                </div>
                <Navigation dotsCount={3} />
            </div>

            <div className='mobile-slides-container'>
                <div className='mobile-slides-wrapper'>
                    <div className='block mobile-slide'>
                        <div className='sectionScroll__text-container'>
                            <p className='block_text-other block_text'>{scrollBlocks[currentSlide].company} <br /> {scrollBlocks[currentSlide].name}</p>
                            {scrollBlocks[currentSlide].position && <p className='block_text' dangerouslySetInnerHTML={{ __html: scrollBlocks[currentSlide].position }} />}
                        </div>
                        <p className='current-slide'>{scrollBlocks[currentSlide].text}</p>
                    </div>
                </div>
                <div className='mobile-navigation-container'>
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