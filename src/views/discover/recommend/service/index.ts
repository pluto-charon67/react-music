import http from '@/utils/http';

export const getBanners = () => http.get('/banner');

export const getHotRecommend = () => http.get('/personalized?limit=8');

export const getNewAlbums = () => http.get('/album/newest?limit=10');

// 榜单
export const getTopList = (id: number) => http.get(`/playlist/detail?id=${id}`);

export const getSonger = (limit = 5) => http.get(`/artist/list?limit=${limit}`);
