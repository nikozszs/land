export const getPercentPosition = (
    value: number, 
    isTop: boolean, 
    containerWidth: number = 1367,
    containerHeight: number = 792 ) => {
    if (isTop) {
        const percent = (value / containerHeight) * 100;
        return percent;
    } else {
        const percent = (value / containerWidth) * 100;
        return percent;
    }
};