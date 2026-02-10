import clietns from '@assets/clietns.svg'
import mapRussia from '@public/mapRussia.svg?url'
import sqr from '@assets/sqr.svg'
import './SectionRussia.css'
import star from '@assets/star.svg'
import { neons } from '../../../data/neons'
import { mobileStars, stars } from '../../../data/stars'
import { getPercentPosition } from '../../../utils/function'

export const SectionRussia = () => {
    const desktopContainer = { width: 1367, height: 792}
    const mobileContainer = { width: 335, height: 310 };
    return (
        <section className='sectionRussia'>
            <h2>Подключаем к стабильному интернету по всей России</h2>
            <div className='desktop-block-map block-map'>
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
                    className="map-star"
                    style={{
                        position: 'absolute',
                        top: `${getPercentPosition(star.top, true, desktopContainer.width, desktopContainer.height)}%`,
                        left: `${getPercentPosition(star.left, false, desktopContainer.width, desktopContainer.height)}%`,
                        zIndex: 1,
                        transform: 'translate(-50%, -50%)'
                    }}
                    />
                ))}
                {neons.map(item => (
                    <img key={item.id}
                    src={item.src}
                    className="map-neon"
                    style={{
                        position: 'absolute',
                        top: `${getPercentPosition(item.top, true, desktopContainer.width, desktopContainer.height)}%`,
                        left: `${getPercentPosition(item.left, false, desktopContainer.width, desktopContainer.height)}%`,
                        zIndex: 3,
                        transform: 'translate(-50%, -50%)'
                    }}
                    />
                ))}
                <img src={mapRussia} className='block_map-img' alt="Карта России"/>
            </div>

            <div className='mobile-block-map block-map'>
                <img src={star} alt='звезда' className='marker-map'/>
                <p className='mobile-text-map'>Наши клиенты</p>
                <i>1</i>
                <i>2</i>
                <i>3</i>
                <i>4</i>
                <i>5</i>
                <i>6</i>
                <i>7</i>
                <i>8</i>
                {mobileStars.map(star => (
                    <img key={star.id} 
                    src={star.src} 
                    className="map-star"
                    style={{
                        position: 'absolute',
                        top: `${getPercentPosition(star.top, true, mobileContainer.width, mobileContainer.height)}%`,
                        left: `${getPercentPosition(star.left, false, mobileContainer.width, mobileContainer.height)}%`,
                        zIndex: 1,
                    }}
                    />
                ))}
                <img src={mapRussia} alt="Карта России" className='block_map-img' />
            </div>

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
                    <li className='city-item'> Москва <br /> 8 800 600 35 38</li>
                    <li className='city-item'> Санкт-Петербург <br /> 8 931 394 46 11</li>
                    <li className='city-item'> Казань <br /> 8 904 769 96 54</li>
                    <li className='city-item'> Краснодар <br /> 8 993 307 01 77</li>
                    <li className='city-item'> Челябинск <br /> 8 922 636 86 06</li>
                    <li className='city-item'> Екатеринбург <br /> 8 902 635 22 39</li>
                    <li className='city-item'> Новосибирск <br /> 8 902 635 22 39</li>
                    <li className='city-item'> Владивосток <br /> 8 902 635 22 39</li>
                </ol>
            </div>
        </section>
    )
}