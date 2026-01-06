import mapRussia from '../../assets/mapRussia.svg'
import clietns from '../../assets/clietns.svg'
import sqr from '../../assets/sqr.svg'
import star from '../../assets/star.svg'
import neon from '../../assets/neon.svg'
import './SectionRussia.css'

export const SectionRussia = () => {
    const stars = [
        { id: 1, top: 180, left: 108, src: star },
        { id: 2, top: 310, left: 125, src: star },
        { id: 3, top: 415, left: 30, src: star },
        { id: 4, top: 410, left: -40, src: star },
        { id: 5, top: 290, left: 80, src: star },
        { id: 6, top: 360, left: 90, src: star },
        { id: 7, top: 290, left: 180, src: star },
        { id: 8, top: 370, left: 170, src: star },
        { id: 9, top: 310, left: 280, src: star },
        { id: 10, top: 240, left: 310, src: star },
        { id: 11, top: 270, left: 370, src: star },
        { id: 12, top: 370, left: 370, src: star },
        { id: 13, top: 410, left: 280, src: star },
        { id: 14, top: 460, left: 260, src: star },
        { id: 15, top: 330, left: 460, src: star },
        { id: 16, top: 430, left: 440, src: star },
        { id: 17, top: 500, left: 460, src: star },
        { id: 18, top: 400, left: 530, src: star },
        { id: 19, top: 450, left: 610, src: star },
        { id: 20, top: 342, left: 623, src: star },
        { id: 21, top: 240, left: 580, src: star },
        { id: 22, top: 300, left: 730, src: star },
        { id: 23, top: 400, left: 740, src: star },
        { id: 24, top: 330, left: 810, src: star },
        { id: 25, top: 430, left: 860, src: star },
        { id: 26, top: 310, left: 920, src: star },
        { id: 27, top: 260, left: 1010, src: star },
        { id: 28, top: 200, left: 890, src: star },
        { id: 29, top: 150, left: 1000, src: star },
        { id: 30, top: 260, left: 1180, src: star },
        { id: 31, top: 520, left: 1090, src: star },
        { id: 32, top: 600, left: 1060, src: star },
    ]

    const neons = [
        { id: 1, top: 244, left: 168, src: neon },
        { id: 2, top: 368, left: 148, src: neon },
        { id: 3, top: 438, left: 238, src: neon },
        { id: 4, top: 490, left: 18, src: neon },
        { id: 5, top: 502, left: 318, src: neon },
        { id: 6, top: 489, left: 338, src: neon },
        { id: 7, top: 577, left: 518, src: neon },
        { id: 8, top: 672, left: 1121, src: neon },
    ]

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
                <img src={mapRussia} />
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