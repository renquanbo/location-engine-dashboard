import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { IResponse } from "../model/api";
import storage from "./storage";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/"
})

axiosInstance.interceptors.request.use((config) => {
  // if request url does not include login, then add authorization token to headers
  if (!config.url?.includes("login")) {
    return {
      ...config,
      url: config.baseURL + 'api/',
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

  protected async post<T, D>(path: string, data?: D, config?:AxiosRequestConfig<D>): Promise<T> {
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

  protected async put<T>(path: string): Promise<T> {
    return axiosInstance
      .put<T>(path)
      .then((res) => res.data)
      .catch((err) => this.errorHandler(err))
  }

  private errorHandler(err: AxiosError<IResponse>): any {
    const msg = err.response?.data.msg;
    const status = err.response?.status;
    const code = err.response?.data.code;
    console.log(status);
    console.log(code);
    console.log(msg);
  }
}