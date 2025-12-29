import './SectionTechnology.css'
import technology from '../../assets/technology.svg'

export const SectionTechnology = () => {
    return (
        <section className='sectionTechnology'>
            <h2>Технология</h2>
            <div className='block_tech'>
                <img src={technology} className='sectionTechnology_img' />
                <div className='block_button'>
                    <p className='sectionTechnology_text'>Прокачайте свой интернет с высокоскоростными технологиями mrnet. Наш мультироутер суммирует несколько каналов связи в один (технология бондинг), значительно повышая устойчивость и скорость соединения!</p>
                    <button className='sectionTechnology_button'>узнать больше</button>
                </div>
            </div>
        </section>
    )
}