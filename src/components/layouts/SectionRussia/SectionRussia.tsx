import clietns from '@assets/clietns.svg'
import sqr from '@assets/sqr.svg'
import './SectionRussia.css'
import { cities } from '../../../data/cities'
import { Map } from '../Map'

export const SectionRussia = () => {
    return (
        <section className='sectionRussia'>
            <h2>Подключаем к стабильному интернету по всей России</h2>
            <Map type='desktop' />
            <Map type='mobile' showNeons={false} />
            <div className='bottomMap mobile-map'>
                <div className='row'>
                    <img className="sectionRussia-img" src={clietns} />
                    <p>Наши клиенты</p>
                </div>
                <div className='row'>
                    <img className="sectionRussia-img" src={sqr} />
                    <p>Отделы продаж</p>
                </div>
            </div>
            <div className='mobile-container-cities'>
                <p className='text-map'>Отделы продаж:</p>
                <ol>
                    {cities.map((item, i) => (
                        <li key={i} className='city-item'> 
                            {item.name} <br /> {item.phone}
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}