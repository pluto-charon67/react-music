import http from '@/utils/http';

export const getBanners = () => http.get('/banner');

export const getHotRecommend = () => http.get('/personalized?limit=8');

export const getNewAlbums = () => http.get('/album/newest?limit=10');
