export const getPercentPosition = (value: number, isTop: boolean) => {
    const total = isTop ? 792 : 1363;
    return (value / total) * 100;
};