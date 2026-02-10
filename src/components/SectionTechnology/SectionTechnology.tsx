import './SectionTechnology.css'
import technology from '../../assets/technology.svg'
import { Button } from '../ui/Button/Button'

export const SectionTechnology = () => {
    return (
        <section className='sectionTechnology'>
            <h2 className='h2-none'>Технология</h2>
            <div className='block_tech'>
                <img src={technology} className='sectionTechnology_img' />
                <div className='block_button'>
                    <p className='sectionTechnology_text'>Прокачайте свой интернет с высокоскоростными технологиями mrnet. Наш мультироутер суммирует несколько каналов связи в один (технология бондинг), значительно повышая устойчивость и скорость соединения!</p>
                    <Button text='узнать больше'/>
                </div>
            </div>
        </section>
    )
}