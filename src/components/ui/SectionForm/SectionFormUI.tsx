import { type ChangeEvent, type FormEvent } from 'react'
import { ButtonGradient } from '../ButtonGradient/ButtonGradient'
import './SectionForm.css'
import type { FormErrors,FormData } from '../../../validation/validationForm'

interface SectionFormUIProps {
    formData: FormData
    errors: FormErrors
    isSubmitted: boolean
    isDisabled: boolean
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onSubmit: (e: FormEvent) => void
}

export const SectionFormUI = ({
    formData,
    errors,
    isDisabled,
    isSubmitted,
    onInputChange,
    onSubmit
}: SectionFormUIProps) => {
    return (
        <section id="sectionForm" className='section_form'>
            <div className='form__container'>
                <div className='block-title'>
                    <p className='text_form'>Хотите узнать больше, рассчитать стоимость или забрать устройство на бесплатный тест?</p>
                </div>
                {isSubmitted ? (
                    <div className='success-block form__block'>
                        <p className='success-message'>Спасибо за заявку! Наши менеджеры уже взяли её в работу и скоро свяжутся с вами.</p>
                </div>
                ) : (<form className='form__block'
                    onSubmit={onSubmit}
                    noValidate>
                    <h4>Услуга доступна только для юридических лиц</h4>
                    <label htmlFor="name"></label>
                    <input type="text" 
                        id="name" 
                        className={`input ${errors.name ? 'input-error' : ''}`}
                        name="name" 
                        placeholder="Ваше имя *" 
                        value={formData.name}
                        onChange={onInputChange}
                        required />
                        {errors.name && <span className="error-message">{errors.name}</span>}
                    <span className='contacs'>Оставьте ваши контакты</span>
                    <div className='form-group'>
                        <label htmlFor="tel"></label>
                        <input className={`input ${errors.tel ? 'input-error': ''}`}
                            type="number" 
                            id="tel" 
                            name="tel" 
                            placeholder="Ваш телефон +7 (___)___-__-__ *" 
                            required
                            value={formData.tel}
                            onChange={onInputChange}
                            />
                            {errors.tel && <span className='error-message'>{errors.tel}</span>}
                        <label htmlFor="tg"></label>
                        <input className={`input ${errors.tg ? 'error-input': ''}`} 
                            type="text" 
                            id="tg" 
                            name="tg" 
                            placeholder="Ваш ник в tg" 
                            value={formData.tg}
                            onChange={onInputChange}
                            />
                            {errors.tg && <span className='error-message'>{errors.tg}</span>}
                    </div>
                    <label className="checkbox">
                        <input type="checkbox" 
                            className="checkbox-input"
                            checked={formData.agree}
                            onChange={onInputChange}
                            name='agree'
                        />
                        <span className="checkbox-visual">
                            <svg width="20" height="20" viewBox="0 0 20 20">
                                <rect x="0.5" y="0.5" width="19" height="19" stroke="currentColor" fill="none"/>
                                <rect x="5" y="5" width="10" height="10" fill="currentColor" opacity="0"/>
                            </svg>
                        </span>
                        <span className='checkbox_text'>Я даю <a className="checkbox_text-link">согласие</a> на обработку моих персональных данных в форме обращения на странице сайта. Ознакомиться с условиями <a href="#0" className="checkbox_text-link">Политики обработки персональных данных ООО «НЬЮКОМ ДИСТРИБЬЮШН»</a></span>
                    </label>
                    <span className='checkbox_text left-text'>* Поля, обязательные для заполнения</span>

                    {errors.submit && (
                        <div className='error-message'
                            style={{textAlign: 'center', marginTop: '10px'}}
                        >{errors.submit}</div>
                    )}

                    <div className='checkbox_button-container'>
                        <ButtonGradient text="Начать!" type='submit' disabled={isDisabled} />
                    </div>
                </form>)}
            </div>
        </section>
    )
}