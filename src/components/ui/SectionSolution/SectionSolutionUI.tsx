import './SectionSolution.css'
import solution from '@assets/solution.svg'
import { ButtonGradient } from '../ButtonGradient/ButtonGradient'
import { Navigation } from '../Navigation/Navigation'

interface SolutionBlocks {
    id: number
    title: string
    content: React.ReactNode
}

interface SectionSolutionUIProps {
    currentSlide: number
    onSlideChange: (index: number) => void
    solutionBlocks: SolutionBlocks[]
}

export const SectionSolutionUI = ({solutionBlocks, currentSlide, onSlideChange}: SectionSolutionUIProps) => {
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
                        <h3 className='text-break'>Индивидуальный подход</h3>
                        <p className='text'>Мы всегда идем навстречу клиенту, предлагая оптимальное по стоимости решение.</p>
                        <p className='text'>Заполните заявку, и в рабочее время мы за 1 час сделаем расчёт</p>
                    </div>
                </div>

                <div className='mobile-solution-slides'>
                    <div className='mobile-solution-container'>
                        <div className='mobile-solution-wrapper'>
                            <div className='sectionSolution_block mobile-slide text-container'>
                                <h3>{solutionBlocks[currentSlide].title}</h3>
                                <div>
                                    {solutionBlocks[currentSlide].content}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mobile-navigation-container'>
                        <Navigation 
                            dotsCount={3}
                            onSlideChange={onSlideChange}
                            initialSlide={currentSlide}
                        />
                    </div>
                </div>

                <div className='solution4'>
                    <p className='title text-other'>Попробуйте <br /> 14 дней бесплатно</p>
                    <p className='solution_text-under text-other'>Развивайте свою инфру с <a className='link'>mrnet</a>. Без лишних затрат и костылей. Высокоскоростной интернет — удобно, эффективно!</p>
                </div>
                <div className='solution5'>
                    <img src={solution} className='solution4-img' alt="Роутер"/>
                </div>
            </div>
            <div className='button-container'>
                <ButtonGradient text='Начать!' disabled={false} type={'button'} link='#sectionForm'/>
            </div>
        </section>
    )
}