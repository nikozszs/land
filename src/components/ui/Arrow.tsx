import vector1 from '@assets/vector1.svg'

interface ArrowProps {
    className?: string;
    rotate: number;
}

export const Arrow = ({className, rotate = 0}: ArrowProps) => {
    return (
        <img   
            className={`vector ${className || ''}`} 
            src={vector1}
            style={{ '--rotate': `${rotate}deg` } as React.CSSProperties}
        />
    )
}