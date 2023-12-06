import http from '@/utils/http';

export const getBanners = () => http.get('/banner');
