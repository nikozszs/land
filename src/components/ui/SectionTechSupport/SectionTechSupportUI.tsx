import './SectionTechSupport.css'
import tech1 from '@assets/tech1.svg'
import tech2 from '@assets/tech2.svg'

export const SectionTechSupportUI = () => {
    return (
        <section className='sectionTechSupport'>
            <h2>ТЕХПОДДЕРЖКА 24/7</h2>
            <div className='container-blocks-red'>
                <div className='sectionTech-block-red'>
                    <h3>видим</h3>
                    <div className='sectionTech-block-red-flex'>
                        <ul>
                            <li>Работоспособность устройств</li>
                            <li>Уровень сигнала на устройстве</li>
                            <li>Доступность канала передачи и узла связи</li>
                        </ul>
                        <img src={tech1} className='sectionTech-img' />
                    </div>
                </div>
                <div className='sectionTech-block-red'>
                    <h3>Делаем удаленно</h3>
                    <div className='sectionTech-block-red-flex'>
                        <ul>
                            <li>Настройку устройств</li>
                            <li>Перезагрузку устройств</li>
                            <li>Обновление ПО</li>
                        </ul>
                        <img src={tech2} className='sectionTech-img' />
                    </div>
                </div>
            </div>
        </section>
    )
}