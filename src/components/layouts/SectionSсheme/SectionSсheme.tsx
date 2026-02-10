import './SectionScheme.css'

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
                    </div>
                </div>
            </div>
        </section>
    )
}