import axios from 'axios';
import type {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    AxiosRequestHeaders,
    InternalAxiosRequestConfig,
} from 'axios';

// 配置自定义的拦截器
interface MyInterceptors<T> {
    requestSuccessFn?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig; // 请求拦截，成功回调
    requestErrorFn?: (err: any) => any; // 请求拦截失败回调
    responseSuccessFn?: (res: T) => T; // 响应拦截成功回调
    responseErrorFn?: (err: any) => any;
}

// 为每个实例配置自定义的拦截器
interface MyAxiosRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
    interceptors?: MyInterceptors<T>;
}

// 为单个请求添加自定义的拦截器
// interface MyInterceptorAxiosRequestConfig<T = any> extends InternalAxiosRequestConfig {
//     interceptors?: MyInterceptors<T>;
// }

class Request {
    instance: AxiosInstance;

    constructor(config: MyAxiosRequestConfig) {
        this.instance = axios.create(config);

        // 全局的请求拦截器
        this.instance.interceptors.request.use(
            (requestConfig: InternalAxiosRequestConfig) => {
                // const user = userStore();
                // if (user.token) requestConfig.headers.Authorization = user.token;
                return requestConfig;
            },
            (err) => {
                console.log('全局请求拦截失败', err);
            },
        );

        // 为特定实例添加拦截器
        if (config.interceptors) {
            this.instance.interceptors.request.use(
                config.interceptors.requestSuccessFn,
                config.interceptors.requestErrorFn,
            );

            this.instance.interceptors.response.use(
                config.interceptors.responseSuccessFn,
                config.interceptors.responseErrorFn,
            );
        }

        // 全局响应拦截器-最后执行
        this.instance.interceptors.response.use((res) => {
            const data = res.data;
            const { code, message } = data;
            if (code === 200 || code === 0) return res.data;
            return this.httpErrorHandler(code, message);
        });
    }

    // 错误处理
    httpErrorHandler(code: number, message: string) {
        switch (code) {
            case 401: {
                break;
            }
            default:
                break;
        }
        return Promise.reject(message);
    }

    // 封装网络请求的方法
    request<T>(config: MyAxiosRequestConfig<T>): Promise<T> {
        // 对单次请求进行拦截
        if (config.interceptors?.requestSuccessFn) {
            // 因为是对单次请求拦截，所以不能添加到this.instance里面，因为会影响其他请求
            config = config.interceptors.requestSuccessFn(config as any);
        }

        // 对单次请求的响应进行拦截
        return new Promise((resolve, reject) => {
            this.instance
                .request<any, T>(config)
                .then((res) => {
                    // 单次请求的响应拦截
                    if (config.interceptors?.responseSuccessFn) {
                        res = config.interceptors.responseSuccessFn(res);
                    }
                    resolve(res);
                })
                .catch((err) => reject(err));
        });
    }

    get<T = any>(url: string, config?: MyAxiosRequestConfig<T>) {
        return this.request({ ...config, method: 'GET', url });
    }

    post<T = any>(url: string, config?: MyAxiosRequestConfig<T>) {
        return this.request({ ...config, method: 'POST', url });
    }

    put<T = any>(url: string, config?: MyAxiosRequestConfig<T>) {
        return this.request({ ...config, method: 'PUT', url });
    }

    delete<T = any>(url: string, config?: MyAxiosRequestConfig<T>) {
        return this.request({ ...config, method: 'DELETE', url });
    }
}

export default Request;
