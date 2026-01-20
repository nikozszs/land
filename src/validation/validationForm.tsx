export interface FormData {
    name: string;
    tel: string;
    tg: string;
    agree: boolean;
}

export interface FormErrors {
    name?: string;
    tel?: string;
    tg?: string;
    submit?: string;
}

export const validateName = (name: string): string => {
    if (!name.trim()) return 'Имя обязательно для заполнения';
    if (name.length < 2) return 'Имя должно содержать минимум 2 символа';
    if (name.length > 50) return 'Имя не должно превышать 50 символов';
    if (!/^[a-zA-Zа-яА-ЯёЁ\s\-]+$/.test(name)) return 'Имя может содержать только буквы и дефисы';
    return '';
};

export const validatePhone = (phone: string, hasTg: boolean): string => {
    const cleanPhone = phone.replace(/\D/g, '');
    
    if (cleanPhone.length === 0 && !hasTg) {
        return 'Заполните телефон или Telegram';
    }
    
    if (cleanPhone.length > 0) {
        if (cleanPhone.length < 10) return 'Телефон должен содержать минимум 11 цифр';
    } else if (cleanPhone.length > 0 && cleanPhone.length < 11) {
        return '';
    }
    
    return '';
};

export const validateTelegram = (tg: string, hasPhone: boolean): string => {
    const cleanTg = tg.trim().replace('@', '');
    
    if (cleanTg.length === 0 && !hasPhone) {
        return 'Заполните телефон или Telegram';
    }
    
    if (cleanTg.length > 0) {
        if (!/^[a-zA-Z0-9_]{5,32}$/.test(cleanTg)) {
            return 'Неверный формат ника в Telegram. Допустимы буквы, цифры и подчеркивания (5-32 символа)';
        }
    }
    
    return '';
};