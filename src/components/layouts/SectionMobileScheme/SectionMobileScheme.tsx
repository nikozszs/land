import './SectionMobileScheme.css'
import shemeMobile1 from '@assets/shemeMobile1.svg'
import sheme2 from '@assets/sheme2.svg'
import server from '@assets/server.svg'
import global from '@assets/global.svg'
import sim from '@assets/sim.svg'
import setka from '@assets/setka.svg'
import rosetka from '@assets/rosetka.svg'
import { Arrow } from '../../ui/Arrow'
import { network } from '../../../data/network'
import { ArrowSmall } from '../../ui/ArrowSmall'

export const SectionMobileSсheme = () => {
    return (
        <section className="sectionScheme">
            <div className='schemeBlock'>
                <div className='grid-scheme'>
                    <div className='client first-part'>
                        <p className='text-wide'>на стороне <br /> клиента</p>
                        <div className='group-border'></div>
                    </div>
                    <div className='sim-card first-part'>
                        <p className='text-wide'>SIM-карты <br /> и интернет <br /> кабель</p>
                        <div className='group-border group-border-small'></div>
                    </div>
                    <div className='operators first-part'>
                        <p className='text-wide'>разные <br /> операторы</p>
                        <div className='group-border group-border-small'></div>
                    </div>
                    <div className='summary first-part'>
                        <p className='text-wide'>суммируем <br /> скорость <br /> по каналам</p>
                        <div className='group-border'></div>
                    </div>
                    <div className='scheme1'>
                        <img src={shemeMobile1} className='sheme1-img'/>
                        <p className='text-scheme text-normal'>клиентские <br /> устройства</p>
                    </div>
                    <div className='scheme2'>
                        <ArrowSmall rotate={90} /> 
                        <p className='text-scheme text-normal'>LAN или Wi-Fi</p>
                        <ArrowSmall rotate={270} /> 
                    </div>
                    <div className='scheme2 scheme3'>
                        <img className='sheme2-img' src={sheme2} />
                        <p className='text-scheme text-normal'>mrnet <br /> роутер</p>
                    </div>
                    <div className='vectors vector-top'>
                        <Arrow rotate={-20} /> 
                        <Arrow rotate={-30} />
                        <Arrow rotate={30} />
                        <Arrow rotate={20} />
                    </div>
                    <div className='sim-cards-group'>
                        <img className='card' src={sim} />
                        <img className='card' src={sim} />
                        <img className='card' src={sim} />
                        <img className='card' src={rosetka} />
                    </div>
                    <div className='mbit-groups'>
                        {network.map((item, i) => (
                            <div key={i} className='group-item'>
                                <ArrowSmall rotate={90} /> 
                                <p className='mbit-text'>{item.text}</p>
                                <p className='numbers'>{item.speed}</p>
                            </div>
                        ))}
                    </div>
                    <div className='router-cards-group'>
                        <img className='card' src={setka} />
                        <img className='card' src={setka} />
                        <img className='card' src={setka} />
                        <img className='card' src={setka} />
                    </div>
                    <div className='vectors vector-bottom'>
                        <Arrow rotate={23} /> 
                        <Arrow rotate={30} />
                        <Arrow rotate={-30} />
                        <Arrow rotate={-23} />
                    </div>
                    <div className='numbers-grid'>
                        <p className='numbers'>20 <br /> + <br /> 15 <br /> + <br /> 5 <br /> + <br /> 50 <br /> = <br /></p>
                        <p className='numbers'>90 Мбит/с</p>
                    </div>
                    <div className='scheme2 server-block'>
                        <p className='text-scheme text-normal'>mrnet <br /> суммирующий <br /> сервер</p>
                        <img className='server' src={server} />
                    </div>
                    <div className='scheme2 IP'>
                        <ArrowSmall rotate={90} /> 
                        <p className='text-scheme text-normal'>статичный IP</p>
                        <ArrowSmall rotate={270} /> 
                    </div>
                    <div className='scheme1 internet-block'>
                        <img src={global} className='global-img'/>
                        <p className='text-scheme text-normal'>интернет</p>
                    </div>
                </div>
            </div>
        </section>
    )
}