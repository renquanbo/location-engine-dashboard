import { IResponse } from "../model/api";
import { AddLayerRequest, EditLayerRequest, LayerListRequest, LayerListResponse, LayerResponse } from "../model/layer";
import BaseApiService from "./baseApiService";

class LayerService extends BaseApiService {
  async getLayerById(id: string): Promise<IResponse<LayerResponse>> {
    return this.get<IResponse<LayerResponse>>("layers/" + id);
  }

  async getLayerList(params: LayerListRequest): Promise<IResponse<LayerListResponse>> {
    return this.get<IResponse<LayerListResponse>>("layers", params);
  }

  async addLayer(data: AddLayerRequest): Promise<IResponse<LayerResponse>> {
    return this.post<IResponse<LayerResponse>, AddLayerRequest>("/layers", data).then(this.showMessage(true));
  }

  async editLayer(id: number, data: EditLayerRequest): Promise<IResponse<LayerResponse>> {
    return this.put<IResponse<LayerResponse>, EditLayerRequest>("/layers/" + id, data).then(this.showMessage(true));
  }

  async deleteLayer(id: number) {
    return this.delete<IResponse<Boolean>>("/layers/" + id).then(this.showMessage(true));
  }
}

const layerService = new LayerService();
export default layerService;