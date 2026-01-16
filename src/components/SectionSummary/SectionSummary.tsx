import './SectionSummary.css'
import train from '../../assets/train.svg'
import electroTrain from '../../assets/electroTrain.svg'

export const SectionSummary = () => {
    return (
        <section className='sectionSummary'>
            <div className='sectionSummary_container'>
                <div className='desktop-version'>
                    <div className='sectionSummary_title'>
                        <h2>не балансируем</h2>
                        <h2>а суммируем</h2>
                    </div>
                    <div className='sectionSummary_img'>
                        <img src={train} alt='Поезд' />
                        <img src={electroTrain} alt='Электропоезд' />
                    </div>
                </div>
                <div className='mobile-version'>
                    <div className='mobile-train'>
                        <h2>не балансируем</h2>
                        <img src={train} alt='Поезд' />
                    </div>
                    <div className='mobile-electrotrain'>
                        <h2>а суммируем</h2>
                        <img src={electroTrain} alt='Электропоезд' />
                    </div>
                </div>
            </div>
        </section>
    )
}