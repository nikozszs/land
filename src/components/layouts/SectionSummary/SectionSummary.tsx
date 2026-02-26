import './SectionSummary.css'
import train from '@assets/train.svg'
import electroTrain from '@/assets/electroTrain.svg'

const blocks = [
    { title: 'не балансируем', img: train, alt: 'поезд'},
    { title: 'а суммируем', img: electroTrain, alt: 'электропоезд'},
]

export const SectionSummary = () => {
    return (
        <section className='sectionSummary'>
            <div className='sectionSummary_container'>
                <div className='desktop-version'>
                    <div className='sectionSummary_title'>
                        {blocks.map((item, i) => (
                            <h2 key={i}>{item.title}</h2>
                        ))}
                    </div>
                    <div className='sectionSummary_img'>
                        {blocks.map((item, i) => (
                            <img key={i} src={item.img} alt={item.alt} />
                        ))}
                    </div>
                </div>

                <div className='mobile-version'>
                    {blocks.map((item, i) => (
                        <div key={i} className={i === 0 ? 'mobile-train' : 'mobile-electrotrain'} >
                            <h2>{item.title}</h2>
                            <img src={item.img} alt={item.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}