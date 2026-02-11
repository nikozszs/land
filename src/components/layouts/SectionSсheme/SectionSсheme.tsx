import './SectionScheme.css'
import sheme1 from '@assets/sheme1.svg'
import sheme2 from '@assets/sheme2.svg'
import vector1 from '@assets/vector1.svg'

export const SectionSсheme = () => {
    return (
        <section className="sectionScheme">
            <h2 className='sectionScheme-title'>Схема работы решения <a className='link-title'>mrnet</a></h2>
            <div className='schemeBlock'>
                <div className='first-part-scheme'>
                    <div className='client'>
                        <p className='wide-text'>на стороне клиента</p>
                        <div className='group-border'></div>
                    </div>
                    <div className='sim-card'>
                        <p className='small-text'>SIM-карты <br /> и интернет кабель</p>
                        <div className='group-border group-border-small'></div>
                    </div>
                    <div className='operators'>
                        <p className='wide-text another-text'>разные операторы</p>
                        <div className='group-border group-border-small'></div>
                    </div>
                    <div className='summary'>
                        <p className='small-text'>суммируем скорость <br /> по каналам</p>
                        <div className='group-border'></div>
                        <p className='numbers'>20 + 15 + 5 + 50 = 90 Мбит/с</p>
                    </div>
                </div>
                <div className='second-part-scheme'>
                    <div className='scheme1'>
                        <img src={sheme1} />
                        <p className='second-part-text'>клиентские устройства</p>
                    </div>
                    <div className='scheme2'>
                        <p className='second-part-text'>LAN или Wi-Fi</p>
                        <img className='vector' src={vector1} />
                    </div>
                    <div className='scheme2'>
                        <img className='sheme2-img' src={sheme2} />
                        <p className='second-part-text'>mrnet мультироутер</p>
                    </div>
                </div>
            </div>
        </section>
    )
}