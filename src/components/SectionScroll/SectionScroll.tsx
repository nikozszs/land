import { useState } from 'react'
import arrow from '../../assets/arrow.svg'
import { Navigation } from '../Navigation/Navigation'
import './SectionScroll.css'

export const SectionScroll = () => {
    const [ currentSlide, setCurrentSlide ] = useState(0)

    const handleSlideChange = (index: number) => {
        setCurrentSlide(index)
    }

    const blocks = [
        {
            id: 1,
            company: "ШОКОЛАДНИЦА",
            name: 'Чистяков Марк',
            position: "Начальник управления Управление эксплуатации и развития ИТ-сервисов",
            text: "Мы обратились к mrnet, поскольку нам было необходимо обеспечить стабильный сигнал для видеонаблюдения, эквайринга и работы кафе в проблемных точках. Сотрудники компании предложили отличное решение: разделить сигнал на офис и зал, что повысило качество и отказоустойчивость. Сейчас мультироутеры mrnet стали основным интернет-каналом в некоторых точках, а в других локациях mrnet рассматривается в качестве резервного канала для надежности. На наш взгляд, ребята предлагают..."
        },
        {
            id: 2,
            company: "ЕРМОЛИНО",
            name: "Тараканов Михаил",
            position: "Руководитель СИТ АО \"Подмосковия\"",
            text: "У нас много торговых точек, и стабильный интернет — постоянная проблема. Мы пробовали разные решения, но это только усложняло ситуацию, добавляя путаницу со счетами с увеличением количества контрагентов. С mrnet мы смогли упорядочить документооборот и организовать управление оборудованием в одном удобном личном кабинете. Оперативная техническая поддержка стала для нас надежным помощником. Теперь более 150 наших точек продаж используют mrnet как основной канал связи, и это только начало!"
        },
        {
            id: 3,
            company: "АПТЕКИ 36,6",
            name: "Константин Старцев",
            position: "",
            text: "Когда бизнес расширяется, особенно важна скорость партнёров и готовность помочь. Когда у провайдера в Великом Новгороде случилась авария, mrnet за несколько часов доставили мультироутер и удаленно настроили соединение в 8 из 12 наших аптек. Удобство подключения, возможность удаленного контроля всех точек из одного кабинета и реактивная поддержка в telegram — важные преимущества mrnet!"
        }
    ]
    return (
        <section className='sectionScroll'>
            <h2>95% клиентов выбирают <a className='link-title'>mrnet</a> <br /> после тест-драйва</h2>
            <div className='desktop-scroll-container'>
                <div className='scroll-container'>
                    {blocks.map((block) => (
                        <div className='block' key={block.id}>
                            <div className='sectionScroll__text-container'>
                                <p className='block_text-other block_text'>{block.company} <br /> {block.name}</p>
                                {block.position && <p className='block_text' dangerouslySetInnerHTML={{ __html: block.position }} />}
                            </div>
                            <p>{block.text}</p>
                        </div>
                    ))}
                </div>
                <Navigation dotsCount={3} />
            </div>

            <div className='mobile-slides-container'>
                <div className='mobile-slides-wrapper'>
                    <div className='block mobile-slide'>
                        <div className='sectionScroll__text-container'>
                            <p className='block_text-other block_text'>{blocks[currentSlide].company} <br /> {blocks[currentSlide].name}</p>
                            {blocks[currentSlide].position && <p className='block_text' dangerouslySetInnerHTML={{ __html: blocks[currentSlide].position }} />}
                        </div>
                        <p className='current-slide'>{blocks[currentSlide].text}</p>
                    </div>
                </div>
                <div className='mobile-navigation-container'>
                    <Navigation 
                        dotsCount={3}
                        onSlideChange={handleSlideChange}
                        initialSlide={currentSlide}
                    />
                </div>
            </div>
        </section>
    )
}