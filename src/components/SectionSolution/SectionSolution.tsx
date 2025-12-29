import './SectionSolution.css'
import solution from '../../assets/solution.svg'

export const SectionSolution = () => {
    return (
        <section className='sectionSolution'>
            <h2>Решение, созданное айтишниками <br /> для айтишников</h2>
            <div className='grid-container'>
                <div className='sectionSolution_block'>
                    <div className='text-container'>
                        <h3>Ценим ваше время</h3>
                        <p className='text'>Подключите мультироутер с быстрым интернетом всего за 7 минут. Наши устройства работают по принципу Plug'n'Play (подключи и пользуйся).</p>
                        <p className='text'>Вы получаете надёжную связь и отсутствие головной боли в виде договоров с разными провайдерами</p>
                    </div>
                </div>
                <div className='sectionSolution_block'>
                    <div className='text-container'>
                        <h3>Безграничные <br /> Возможности</h3>
                        <p className='text'>Подберём оборудование для новых точек и оперативно подключим к интернету по любому адресу.</p>
                        <p className='text'>Всё это — без необходимости заключения дополнительных контрактов</p>
                    </div>
                </div>
                <div className='sectionSolution_block'>
                    <div className='text-container'>
                        <h3>Индивидуальный подход</h3>
                        <p className='text'>Мы всегда идем навстречу клиенту, предлагая оптимальное по стоимости решение.</p>
                        <p className='text'>Заполните заявку, и в рабочее время мы за 1 час сделаем расчёт</p>
                    </div>
                </div>
                <div className='solution4'>
                    <h2 className='title'>Попробуйте <br /> 14 дней бесплатно</h2>
                    <p className='text text-other'>Развивайте свою инфру с <a className='text link'>mrnet</a>. Без лишних затрат и костылей. Высокоскоростной интернет — удобно, эффективно!</p>
                </div>
                <div className='solution5'>
                    <img src={solution} />
                </div>
            </div>
            <div className='button-container'>
                <button className='button'>Начать!</button>
            </div>
        </section>
    )
}