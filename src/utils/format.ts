export const formatCount = (count: number) => {
    // return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    if (count > 100000) {
        return (count / 1000000).toFixed(1) + '万';
    } else {
        return count;
    }
};

export const getImgSize = (url: string, width: number, height: number = width) => {
    return `${url}?param=${width}x${height}`;
};
