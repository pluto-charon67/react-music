import Request from '@/utils/request';

export default new Request({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 1000 * 10,
    headers: {},
});
