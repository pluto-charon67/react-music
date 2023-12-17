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

export const formtTime = (time: number) => {
    const timeSeconds = time / 1000;
    let seconds = `${Math.floor(timeSeconds % 60)}`;
    let minutes = `${Math.floor(timeSeconds / 60)}`;
    seconds = String(seconds).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    return `${minutes}:${seconds}`;
};
