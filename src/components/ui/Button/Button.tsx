import { HashLink } from 'react-router-hash-link';
import './Button.css'
import { useLocation } from 'react-router-dom';

interface ButtonProps {
    text: string;
    link: string;
    isScroll?: boolean;
}

export const Button = ({
    text, 
    link, 
    isScroll
}: ButtonProps) => {
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
    return (
        <button className='buttonSecondary'>
            <HashLink 
                to={link} 
                smooth={true}
                className='buttonSecondary-link'
                onClick={handleScroll}
                >
                {text}
            </HashLink>
        </button>
    )
}