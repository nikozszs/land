import './ButtonGradient.css'
interface ButtonGradientProps {
    text: string;
}

export const ButtonGradient = ({text}:ButtonGradientProps) => {
    return (
        <button className='button-gradient'>{text}</button>
    )
}