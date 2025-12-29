import arrow from '../../assets/arrow.svg'
import arrowLeft from '../../assets/arrowLeft.svg'
import arrowRight from '../../assets/arrowRight.svg'
import navigation from '../../assets/navigation.svg'
import './SectionScroll.css'

export const SectionScroll = () => {
    return (
        <section className='sectionScroll'>
            <h2>95% клиентов выбирают <a className='link-title'>mrnet</a> <br /> после тест-драйва</h2>
            <div className='scroll-container'>
                <div className='block'>
                    <div className='sectionScroll__text-container'>
                        <p className='block_text-other block_text'>ШОКОЛАДНИЦА <br /> Чистяков Марк</p>
                        <p className='block_text'>Начальник управления <br /> Управление эксплуатации и развития ИТ-сервисов</p>
                    </div>
                    <p>Мы обратились к mrnet, поскольку нам было необходимо обеспечить стабильный сигнал для видеонаблюдения, эквайринга и работы кафе в проблемных точках. Сотрудники компании предложили отличное решение: разделить сигнал на офис и зал, что повысило качество и отказоустойчивость. Сейчас мультироутеры mrnet стали основным интернет-каналом в некоторых точках, а в других локациях mrnet рассматривается в качестве резервного канала для надежности. На наш взгляд, ребята предлагают...</p>
                    <div className='arrow'>
                        <button className='arrow'>
                            <img src={arrow} />
                        </button>
                    </div>
                </div>
                <div className='block'>
                    <div className='sectionScroll__text-container'>
                        <p className='block_text-other block_text'>ЕРМОЛИНО <br /> Тараканов Михаил</p>
                        <p className='block_text'>Руководитель <br /> СИТ АО "Подмосковия"</p>
                    </div>
                    <p>У нас много торговых точек, и стабильный интернет — постоянная проблема. Мы пробовали разные решения, но это только усложняло ситуацию, добавляя путаницу со счетами с увеличением количества контрагентов. С mrnet мы смогли упорядочить документооборот и организовать управление оборудованием в одном удобном личном кабинете. Оперативная техническая поддержка стала для нас надежным помощником. Теперь более 150 наших точек продаж используют mrnet как основной канал связи, и это только начало!</p>
                </div>
                <div className='block'>
                    <div className='sectionScroll__text-container'>
                        <p className='block_text-other block_text'>АПТЕКИ 36,6 <br /> Константин Старцев</p>
                        <p className='block_text'></p>
                    </div>
                    <p>Когда бизнес расширяется, особенно важна скорость партнёров и готовность помочь. Когда у провайдера в Великом Новгороде случилась авария, mrnet за несколько часов доставили мультироутер и удаленно настроили соединение в 8 из 12 наших аптек. Удобство подключения, возможность удаленного контроля всех точек из одного кабинета  и реактивная поддержка в telegram — важные преимущества mrnet!</p>
                </div>
            </div>
            <div className='navigation'>
                <button className='button-navigation'>
                    <img src={arrowLeft} />
                </button>
                <button className='button-navigation'>
                    <img src={navigation} />
                </button>
                <button className='button-navigation'>
                    <img src={arrowRight} />
                </button>
            </div>
        </section>
    )
}