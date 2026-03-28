import mapRussia from '@public/mapRussia.svg?url'
import './SectionRussia/SectionRussia.scss'
import star from '@assets/star.svg'
import { mobileStars, stars } from '../../data/stars'
import { getPercentPosition } from '../../utils/function'
import { cities } from '../../data/cities'
import { neons } from '../../data/neons'

interface MapProps {
    type: 'desktop'| 'mobile';
    showStars?: boolean;
    showNeons?: boolean;
    showCities?: boolean;
}

export const Map = ({
    type,
    showStars = true,
    showNeons = true,
    showCities = true
}: MapProps) => {
    const container = type === 'desktop'
    ? { width: 1367, height: 792}
    : { width: 335, height: 310 }

    const starsData = type === 'desktop' ? stars : mobileStars

    return (
        <div className={`${type}-block-map block-map`}>
            {showCities && type === 'desktop' && cities.map((city, i) => (
                <i key={i}>
                    {city.name} <br /> <span>{city.phone}</span>
                </i>
            ))}
            {type === 'mobile' && (
                <>
                    <img src={star} alt='звезда' className='marker-map'/>
                    <p className='mobile-text-map'>Наши клиенты</p>
                    {cities.map((_, i) => (
                        <i key={i}>{i + 1}</i>
                    ))}
                </>
            )}

            {showStars && starsData.map(star => (
                <img key={star.id} 
                    src={star.src} 
                    className="map-star"
                    style={{
                        position: 'absolute',
                        top: `${getPercentPosition(star.top, true, container.width, container.height)}%`,
                        left: `${getPercentPosition(star.left, false, container.width, container.height)}%`,
                        zIndex: 1,
                        transform: type === 'desktop' ? 'translate(-50%, -50%)' : undefined
                    }}
                />
            ))}

            {showNeons && type === 'desktop' && neons.map(item => (
                <img key={item.id}
                    src={item.src}
                    className="map-neon"
                    style={{
                        position: 'absolute',
                        top: `${getPercentPosition(item.top, true, container.width, container.height)}%`,
                        left: `${getPercentPosition(item.left, false, container.width, container.height)}%`,
                        zIndex: 3,
                        transform: 'translate(-50%, -50%)'
                    }}
                />
            ))}
            <img src={mapRussia} className='block_map-img' alt="Карта России"/>
        </div>
    )
}
