import './SectionSummary.css'
import train from '../../assets/train.svg'
import electroTrain from '../../assets/electroTrain.svg'

export const SectionSummary = () => {
    return (
        <section className='sectionSummary'>
            <div className='sectionSummary_title'>
                <h2>не балансируем</h2>
                <h2>а суммируем</h2>
            </div>
            <div className='sectionSummary_img'>
                <img src={train} />
                <img src={electroTrain} />
            </div>
        </section>
    )
}