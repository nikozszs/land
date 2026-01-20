import './ButtonGradient.css'
interface ButtonGradientProps {
    text: string;
    disabled: boolean;
    type: 'button' | 'submit' | 'reset';
}

export const ButtonGradient = ({text, disabled, type }:ButtonGradientProps) => {
    return (
        <button className='button-gradient' disabled={disabled} type={type} >{text}</button>
    )
}