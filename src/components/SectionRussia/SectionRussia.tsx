import clietns from '../../assets/clietns.svg'
import mapRussia from '../../assets/mapRussia.svg'
import sqr from '../../assets/sqr.svg'
import './SectionRussia.css'
import { stars } from '../../data/stars'
import { neons } from '../../data/neons'

export const SectionRussia = () => {
    return (
        <section className='sectionRussia'>
            <h2>Подключаем к стабильному интернету по всей России</h2>
            <div className='block-map'>
                <i>Санкт-Петербург<br /> <span>8 931 394 46 11</span> </i>
                <i>Москва<br /> <span>8 800 600 35 38</span> </i>
                <i>Казань<br /> <span>8 904 769 96 54</span> </i>
                <i>Екатеринбург<br /> <span>8 902 635 22 39</span> </i>
                <i>Челябинск<br /> <span>8 922 636 86 06</span> </i>
                <i>Краснодар<br /> <span>8 993 307 01 77</span> </i>
                <i>Новосибирск<br /> <span>8 902 635 22 39</span> </i>
                <i>Владивосток<br /> <span>8 902 635 22 39</span> </i>
                {stars.map(star => (
                    <img key={star.id} 
                    src={star.src} 
                    style={{
                        position: 'absolute',
                        top: `${star.top}px`,
                        left: `${star.left}px`,
                        zIndex: 1,
                        width: '140px',
                        height: '140px'
                    }}
                    />
                ))}
                {neons.map(item => (
                    <img key={item.id}
                    src={item.src}
                    style={{
                        position: 'absolute',
                        top: `${item.top}px`,
                        left: `${item.left}px`,
                        zIndex: 3,
                        width: '12px',
                        height: '12px'
                    }}
                    />
                ))}
                <img src={mapRussia} className='block_map-img' />
            </div>
            <div className='bottomMap'>
                <div className='row'>
                    <img src={clietns} />
                    <p>Наши клиенты</p>
                </div>
                <div className='row'>
                    <img src={sqr} />
                    <p>Отделы продаж</p>
                </div>
            </div>
        </section>
    )
}