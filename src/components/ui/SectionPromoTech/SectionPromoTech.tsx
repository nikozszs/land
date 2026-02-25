import promoTech from '@assets/promoTech.svg'
import { Button } from '../Button/Button'
import './SectionPromoTech.css'

export const SectionPromoTech = () => {
    return (
        <section className="sectionPromoTech">
            <img src={promoTech} className='sectionPromoTech-img'/>
            <div className='block-setting block-sectionPromoBlock'>
                <h3 className='title-sectionPromoTech'>РЕШЕНИЕ mrnet С ТЕХНОЛОГИЕЙ BONDING ОБЪЕДИНЯЕТ ВСЕ ДОСТУПНЫЕ КАНАЛЫ СВЯЗИ В ЕДИНЫЙ ВИРТУАЛЬНЫЙ КАНАЛ, СУММИРУЕТ СКОРОСТЬ ПЕРЕДАЧИ ДАННЫХ И ПОВЫШАЕТ НАДЕЖНОСТЬ СОЕДИНЕНИЯ</h3>
                <Button text='оставить заявку' link='#sectionForm' />
                <p className='text-under text-sectionPromoTech'>Оставьте заявку и с вами свяжется менеджер и договорится о запуске пилота. <br /> Без необходимости отключения от текущего провайдера и заключения договора. Все цены рассчитываются индивидуально под клиента</p>
            </div>
        </section>
    )
}