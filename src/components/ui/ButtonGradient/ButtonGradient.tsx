import { useLocation } from 'react-router-dom';
import './ButtonGradient.css'
import { HashLink } from 'react-router-hash-link';
interface ButtonGradientProps {
    text: string;
    disabled: boolean;
    type?: 'button' | 'submit' | 'reset';
    link?: string;
    isScroll?: boolean;
}

export const ButtonGradient = ({
    text, 
    disabled, 
    type = 'button', 
    isScroll, 
    link 
}: ButtonGradientProps) => {
    const location = useLocation()

    const handleScroll = () => {
        if (isScroll && location.pathname !== link) {
            setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            }, 100)
        }
    }

    if (link && !disabled) {
        return (
            <button 
                className='button-gradient' 
                disabled={disabled} 
                type={type}>
                <HashLink 
                    to={link} 
                    smooth={true}
                    className='button-gradient-link button-font'
                    onClick={handleScroll}
                    >
                    {text}
                </HashLink>
            </button>
        )
    }
    return (
        <button 
            className='button-gradient button-font' 
            disabled={disabled} 
            type={type}>
                {text}
        </button>
    )
}