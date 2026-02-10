import { useState, type FC } from "react";
import { SectionSolutionUI } from "../ui/SectionSolution/SectionSolutionUI";

export const SectionSolution: FC = () => {
    const [ currentSlide, setCurrentSlide ] = useState(0)

    const handleSlideChange = (index: number) => {
        setCurrentSlide(index)
    }

    const solutionBlocks = [
        {
            id: 1,
            title: "Ценим ваше время",
            content: (
                <>
                    <p className='text'>Подключите мультироутер с быстрым интернетом всего за 7 минут. Наши устройства работают по принципу Plug'n'Play (подключи и пользуйся).</p>
                    <p className='text'>Вы получаете надёжную связь и отсутствие головной боли в виде договоров с разными провайдерами</p>
                </>
            )
        },
        {
            id: 2,
            title: "Безграничные Возможности",
            content: (
                <>
                    <p className='text'>Подберём оборудование для новых точек и оперативно подключим к интернету по любому адресу.</p>
                    <p className='text'>Всё это — без необходимости заключения дополнительных контрактов</p>
                </>
            )
        },
        {
            id: 3,
            title: "Индивидуальный подход",
            content: (
                <>
                    <p className='text'>Мы всегда идем навстречу клиенту, предлагая оптимальное по стоимости решение.</p>
                    <p className='text'>Заполните заявку, и в рабочее время мы за 1 час сделаем расчёт</p>
                </>
            )
        }
    ]
    return (
        <SectionSolutionUI currentSlide={currentSlide} onSlideChange={handleSlideChange} solutionBlocks={solutionBlocks}/>
    )
}