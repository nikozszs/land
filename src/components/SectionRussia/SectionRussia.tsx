import mapRussia from '../../assets/mapRussia.svg'
import clietns from '../../assets/clietns.svg'
import sqr from '../../assets/sqr.svg'
import star from '../../assets/star.svg'
import neon from '../../assets/neon.svg'
import './SectionRussia.css'

export const SectionRussia = () => {
    const stars = [
        { id: 1, top: 220, left: 148, src: star },
        { id: 2, top: 340, left: 165, src: star },
        { id: 3, top: 445, left: 80, src: star },
        { id: 4, top: 440, left: 0, src: star },
        { id: 5, top: 320, left: 120, src: star },
        { id: 6, top: 390, left: 130, src: star },
        { id: 7, top: 330, left: 220, src: star },
        { id: 8, top: 410, left: 210, src: star },
        { id: 9, top: 340, left: 320, src: star },
        { id: 10, top: 280, left: 350, src: star },
        { id: 11, top: 300, left: 410, src: star },
        { id: 12, top: 400, left: 410, src: star },
        { id: 13, top: 460, left: 320, src: star },
        { id: 14, top: 490, left: 300, src: star },
        { id: 15, top: 370, left: 500, src: star },
        { id: 16, top: 470, left: 480, src: star },
        { id: 17, top: 530, left: 500, src: star },
        { id: 18, top: 440, left: 570, src: star },
        { id: 19, top: 490, left: 650, src: star },
        { id: 20, top: 372, left: 663, src: star },
        { id: 21, top: 270, left: 620, src: star },
        { id: 22, top: 340, left: 740, src: star },
        { id: 23, top: 430, left: 780, src: star },
        { id: 24, top: 370, left: 850, src: star },
        { id: 25, top: 470, left: 900, src: star },
        { id: 26, top: 350, left: 960, src: star },
        { id: 27, top: 300, left: 1050, src: star },
        { id: 28, top: 240, left: 930, src: star },
        { id: 29, top: 180, left: 1040, src: star },
        { id: 30, top: 280, left: 1220, src: star },
        { id: 31, top: 560, left: 1120, src: star },
        { id: 32, top: 640, left: 1110, src: star },
    ]

    const neons = [
        { id: 1, top: 288, left: 208, src: neon },
        { id: 2, top: 383, left: 188, src: neon },
        { id: 3, top: 478, left: 263, src: neon },
        { id: 4, top: 511, left: 58, src: neon },
        { id: 5, top: 548, left: 358, src: neon },
        { id: 6, top: 530, left: 378, src: neon },
        { id: 7, top: 607, left: 558, src: neon },
        { id: 8, top: 702, left: 1170, src: neon },
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