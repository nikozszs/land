import { useState, type ChangeEvent, type FormEvent } from 'react'
import { ButtonGradient } from '../../ui/ButtonGradient/ButtonGradient'
import './SectionForm.css'
import { type FormErrors, type FormData, validateName, validateTelegram, validatePhone } from '../../../validation/validationForm'

export const SectionForm = () => {
    const [ formData, setFormData ] = useState<FormData>({
        name: '',
        tel: '',
        tg: '',
        agree: false,
    })
    const [errors, setErrors] = useState<FormErrors>({})
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target
        if (name === 'tel') {
            let formattedValue = value.replace(/\D/g, '');
            if (formattedValue.length > 11) formattedValue = formattedValue.slice(0, 11);
            if (formattedValue) {
                if (formattedValue[0] === '8' || formattedValue[0] === '7') {
                    formattedValue = formattedValue.replace(
                        /^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/,
                        (p2, p3, p4, p5) => `+7 (${p2}) ${p3}-${p4}-${p5}`
                    );
                } else {
                    formattedValue = value;
                }
            }

            setFormData(prev => ({...prev, [name]: formattedValue}))
            if (errors.tel) {
                setErrors(prev => ({ ...prev, tel: '' }));
            }
        } else if (name === 'tg') {
            let formattedValue = value.trim();
            setFormData(prev => ({ ...prev, [name]: formattedValue }));
            if (errors.tg) {
                setErrors(prev => ({ ...prev, tg: '' }));
            }
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }));
            if (errors[name as keyof FormErrors]) {
                setErrors(prev => ({ ...prev, [name]: '' }));
            }
        }
    }

    const validateForm = () => {
        const newErrors: FormErrors = {}
        const cleanPhone = formData.tel.replace(/\D/g, '')
        const cleanTg = formData.tg.trim().replace('@', '')
        const hasPhone = cleanPhone.length > 0
        const hasTg = cleanTg.length > 0

        newErrors.name = validateName(formData.name)
        newErrors.tg = validateTelegram(formData.tg, hasTg)
        newErrors.tel = validatePhone(formData.tel, hasPhone)

        setErrors(newErrors);
        return !Object.values(newErrors).some(error => error !== '')
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        if (!validateForm()) {
            const firstErrorField = document.querySelector('.input-error')
            if (firstErrorField) {
                firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center'})
            }
            return 
        }

        try {
            console.log('Отправка данных:', {
                ...formData,
                tel: formData.tel.replace(/\D/g, ''),
                tg: formData.tg.replace('@', '')
            });
            await new Promise(resolve => setTimeout(resolve, 1500));

            setFormData({
                name: '',
                tel: '',
                tg: '',
                agree: false
            });

            setIsSubmitted(true)
            setTimeout(() => {
                setIsSubmitted(false);
            }, 12000);
        } catch (error) {
            console.error('Ошибка отправки формы:', error);
            setErrors(prev => ({ ...prev, submit: 'Пожалуйста, попробуйте ещё раз! Не все поля формы заполнены корректно.' }));
        }
    }

    const cleanPhone = formData.tel.replace(/\D/g, '');
    const cleanTg = formData.tg.trim().replace('@', '');
    const hasContacts = cleanPhone.length > 0 || cleanTg.length > 0;
    const isButtonDisabled = !formData.name || !hasContacts || !formData.agree;

    return (
        <section className='section_form'>
            <div className='form__container'>
                <div className='block-title'>
                    <p className='text_form'>Хотите узнать больше, рассчитать стоимость или забрать устройство на бесплатный тест?</p>
                </div>
                {isSubmitted ? (
                    <div className='success-block form__block'>
                        <p className='success-message'>Спасибо за заявку! Наши менеджеры уже взяли её в работу и скоро свяжутся с вами.</p>
                </div>
                ) : (<form className='form__block'
                    onSubmit={handleSubmit}
                    noValidate>
                    <h4>Услуга доступна только для юридических лиц</h4>
                    <label htmlFor="name"></label>
                    <input type="text" 
                        id="name" 
                        className={`input ${errors.name ? 'input-error' : ''}`}
                        name="name" 
                        placeholder="Ваше имя *" 
                        value={formData.name}
                        onChange={handleInputChange}
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
                            onChange={handleInputChange}
                            />
                            {errors.tel && <span className='error-message'>{errors.tel}</span>}
                        <label htmlFor="tg"></label>
                        <input className={`input ${errors.tg ? 'error-input': ''}`} 
                            type="text" 
                            id="tg" 
                            name="tg" 
                            placeholder="Ваш ник в tg" 
                            value={formData.tg}
                            onChange={handleInputChange}
                            />
                            {errors.tg && <span className='error-message'>{errors.tg}</span>}
                    </div>
                    <label className="checkbox">
                        <input type="checkbox" 
                            className="checkbox-input"
                            checked={formData.agree}
                            onChange={handleInputChange}
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
                        <ButtonGradient text="Начать!" type='submit' disabled={isButtonDisabled} />
                    </div>
                </form>)}
            </div>
        </section>
    )
}