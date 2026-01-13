import { ButtonGradient } from '../ButtonGradient/ButtonGradient'
import './SectionForm.css'

export const SectionForm = () => {
    return (
        <section className='section_form'>
            <div className='form__container'>
                <div className='block-title'>
                    <p className='text_form'>Хотите узнать больше, рассчитать стоимость или забрать устройство на бесплатный тест?</p>
                </div>
                <form className='form__block'>
                    <h4>Услуга доступна только для юридических лиц</h4>
                    <label htmlFor="name"></label>
                    <input type="text" id="name" className='input' name="name" placeholder="Ваше имя *" required></input>
                    <span className='contacs'>Оставьте ваши контакты</span>
                    <div className='form-group'>
                        <label htmlFor="tel"></label>
                        <input className='input' type="number" id="tel" name="tel" placeholder="Ваш телефон +7 (___)___-__-__ *" required></input>
                        <label htmlFor="tg"></label>
                        <input className='input' type="text" id="tg" name="tg" placeholder="Ваш ник в tg"></input>
                    </div>
                    <label className="checkbox">
                        <input type="checkbox" className="checkbox-input"/>
                        <span className="checkbox-visual">
                            <svg width="20" height="20" viewBox="0 0 20 20">
                                <rect x="0.5" y="0.5" width="19" height="19" stroke="currentColor" fill="none"/>
                                <rect x="5" y="5" width="10" height="10" fill="currentColor" opacity="0"/>
                            </svg>
                        </span>
                        <span className='checkbox_text'>Я даю <a className="checkbox_text-link">согласие</a> на обработку моих персональных данных в форме обращения на странице сайта. Ознакомиться с условиями <a href="#0" className="checkbox_text-link">Политики обработки персональных данных ООО «НЬЮКОМ ДИСТРИБЬЮШН»</a></span>
                    </label>
                    <span className='checkbox_text left-text'>* Поля, обязательные для заполнения</span>
                    <div className='checkbox_button-container'>
                        <ButtonGradient text="Начать!" />
                    </div>
                </form>
            </div>
        </section>
    )
}