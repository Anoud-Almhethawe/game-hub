import apiClient from "./api-client";

class HttpService {
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll<T>() {
    const controller = new AbortController();
    const request = apiClient.get<T[]>(this.endPoint, {
      signal: controller.signal,
    });
    const cancle = () => controller.abort();
    return {
      request,
      cancle,
    };
  }
}
const create = (endpoint: string) => {
  return new HttpService(endpoint);
};
export default create;
