import monitor from '../../assets/monitor.svg'
import './SectionMonitoring.css'

export const SectionMonitoring = () => {
    return (
        <section className='sectionMonitoring'>
            <h2>Настраивайте сеть и управляйте всеми <br /> устройствами через единый личный кабинет</h2>
            <div className='block-monitoring'>
                <div className='sectionMonitoring_monitor'>
                    <h3>мониторинг</h3>
                    <div className='block_text'>
                        <p className='sectionMonitoring_text'>Графики потребления трафика</p>
                        <p className='sectionMonitoring_text'>Просмотр подключенных к мультироутеру сетевых устройств</p>
                    </div>
                </div>
                <div className='sectionMonitoring_setting'>
                    <h3>тонкая настройка</h3>
                    <div className='block_text'>
                        <p className='sectionMonitoring_text'>Настройка тоннелей PPTP, L2TP, GRE, IPIP</p>
                        <p className='sectionMonitoring_text'>Настройка пробросов портов</p>
                    </div>
                </div>
                <img src={monitor} className='sectionMonitoring_img'/>
            </div>
            <div className='button-container'>
                <button className='sectionMonitoring_button'>Испытать все возможности</button>
            </div>
        </section>
    )
}