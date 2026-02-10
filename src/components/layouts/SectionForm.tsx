import { useState, type ChangeEvent, type FC, type FormEvent } from "react";
import { SectionFormUI } from "../ui/SectionForm/SectionFormUI";
import { type FormErrors, type FormData, validateName, validateTelegram, validatePhone } from "../../validation/validationForm";

export const SectionForm: FC = () => {
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
        <SectionFormUI 
            formData = {formData}
            errors = {errors}
            isDisabled = {isButtonDisabled}
            isSubmitted = {isSubmitted}
            onInputChange = {handleInputChange}
            onSubmit = {handleSubmit} />
    )
}