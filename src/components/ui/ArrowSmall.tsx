import vector2 from '@assets/vector2.svg'

interface ArrowProps {
    className?: string;
    rotate: number;
}

export const ArrowSmall = ({className, rotate = 90}: ArrowProps) => {
    return (
        <img   
            className={`vector ${className || ''}`} 
            src={vector2}
            style={{ 
                '--rotate': `${rotate}deg`,
                width: '25px',
                height: '10px'
            } as React.CSSProperties}
        />
    )
}