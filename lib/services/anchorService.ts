import { AddAnchorRequest, AnchorListRequest, AnchorListResponse, AnchorResponse } from "../model/anchor";
import { IResponse } from "../model/api";
import BaseApiService from "./baseApiService";

class AnchorService extends BaseApiService {
  async getAnchorById(id: string): Promise<IResponse<AnchorResponse>> {
    return this.get<IResponse<AnchorResponse>>('anchors/'+ id);
  }

  async getAnchorList(params: AnchorListRequest): Promise<IResponse<AnchorListResponse>> {
    return this.get<IResponse<AnchorListResponse>>('anchors', params)
  }

  async addAnchor(data: AddAnchorRequest): Promise<IResponse<AnchorResponse>> {
    return this.post<IResponse<AnchorResponse>, AddAnchorRequest>('anchors', data).then(this.showMessage(true));
  }

  
}

const anchorService = new AnchorService();
export default anchorService;