import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { IResponse } from "../model/api";
import SnackUtils from "../utils/SnackUtils";
import storage from "./storage";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/"
})

axiosInstance.interceptors.request.use((config) => {
  // if request url does not include login, then add authorization token to headers
  if (!config.url?.includes("login") && !config.url?.includes("sign-up")) {
    return {
      ...config,
      baseURL: config.baseURL + 'api/',
      headers: {
        ...config.headers,
        Authorization: "Bearer " + storage.token,
      },
    }
  }
  return config;
})

export default class BaseApiService {
  protected async get<T>(path: string, params?: any): Promise<T> {
    return axiosInstance
      .get<T>(path, { params: params })
      .then((res) => res.data)
      .catch((err) => this.errorHandler(err))
  }

  protected async post<T, D>(path: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T> {
    return axiosInstance
      .post<T>(path, data, config)
      .then((res) => res.data)
      .catch((err) => this.errorHandler(err))
  }

  protected async delete<T>(path: string): Promise<T> {
    return axiosInstance
      .delete<T>(path)
      .then((res) => res.data)
      .catch((err) => this.errorHandler(err))
  }

  protected async put<T,D>(path: string, data?: D): Promise<T> {
    return axiosInstance
      .put<T>(path, data)
      .then((res) => res.data)
      .catch((err) => this.errorHandler(err))
  }

  private errorHandler(err: AxiosError<IResponse>): any {
    console.log(err.response);
    const code = err.response?.status;
    if(!!code && this.isUnauthorized(code)) {
      window.location.href="http://localhost:3000/login"
    }
    const msg = err.response?.data.msg;
    if (!!msg) {
      SnackUtils.error(msg);
    }
  }

  protected isError(code: number): boolean {
    return !(code.toString().startsWith('2') || code.toString().startsWith('3'));
  }

  protected isUnauthorized(code: number): boolean {
    return code === 401;
  }


  protected showMessage = (isSuccessDisplay = false) => (res: IResponse): IResponse => {
    const { code, msg } = res;
    const isError = this.isError(code);

    if (isError) {
      SnackUtils.error(msg);
    }

    if (isSuccessDisplay && !isError) {
      SnackUtils.success(msg);
    }

    return res;
  };
}