import './SectionScheme.css'
import sheme1 from '@assets/sheme1.svg'
import sheme2 from '@assets/sheme2.svg'
import server from '@assets/server.svg'
import global from '@assets/global.svg'
import operators from '@assets/operators.svg'
import cardgroup from '@assets/cardgroup.svg'
import { Arrow } from '../../ui/Arrow'
import { network } from '../../../data/network'

export const SectionSсheme = () => {
    return (
        <section className="sectionScheme">
            <h2 className='sectionScheme-title'>Схема работы решения <a className='link-title'>mrnet</a></h2>
            <div className='schemeBlock'>
                <div className='first-part-scheme'>
                    <div className='client'>
                        <p className='text-scheme text-wide'>на стороне клиента</p>
                        <div className='group-border'></div>
                    </div>
                    <div className='sim-card'>
                        <p className='text-small text-scheme another-text'>SIM-карты <br /> и интернет кабель</p>
                        <div className='group-border group-border-small'></div>
                    </div>
                    <div className='operators'>
                        <p className='text-scheme text-wide another-text another-text-operators'>разные операторы</p>
                        <div className='group-border group-border-small'></div>
                    </div>
                    <div className='summary'>
                        <p className='text-scheme text-small'>суммируем скорость <br /> по каналам</p>
                        <div className='group-border'></div>
                        <p className='numbers'>20 + 15 + 5 + 50 = 90 Мбит/с</p>
                    </div>
                </div>
                <div className='second-part-scheme'>
                    <div className='scheme1'>
                        <img src={sheme1} className='sheme1-img'/>
                        <p className='text-scheme text-normal'>клиентские устройства</p>
                    </div>
                    <div className='scheme2'>
                        <p className='text-scheme text-normal'>LAN или Wi-Fi</p>
                        <Arrow rotate={0} /> 
                    </div>
                    <div className='scheme2'>
                        <img className='sheme2-img' src={sheme2} />
                        <p className='text-scheme text-normal'>mrnet мультироутер</p>
                    </div>
                    <div className='vectors vector-left'>
                        <Arrow rotate={-28} /> 
                        <Arrow rotate={-13} />
                        <Arrow rotate={13} />
                        <Arrow rotate={28} />
                    </div>
                    <div className='sim-cards-group'>
                        <img className='card' src={cardgroup} />
                    </div>
                    <div className='mbit-groups'>
                        {network.map((item, i) => (
                            <div key={i} className='group-item'>
                                <p className='mbit-text'>{item.text}</p>
                                <p className='numbers'>{item.speed}</p>
                                <Arrow rotate={0} />
                            </div>
                        ))}
                    </div>
                    <div className='sim-cards-group'>
                        <img className='card' src={operators} />
                    </div>
                    <div className='vectors vector-right'>
                        <Arrow rotate={28} />
                        <Arrow rotate={13} />
                        <Arrow rotate={-13} />
                        <Arrow rotate={-28} />
                    </div>
                    <div className='scheme2 server-block'>
                        <p className='text-scheme text-normal'>mrnet суммирующий сервер</p>
                        <img className='server' src={server} />
                    </div>
                    <div className='scheme2'>
                        <p className='text-scheme text-normal'>статичный IP</p>
                        <Arrow rotate={0} />
                    </div>
                    <div className='scheme1'>
                        <img src={global} className='global-img'/>
                        <p className='text-scheme text-normal'>интернет</p>
                    </div>
                </div>
            </div>
        </section>
    )
}