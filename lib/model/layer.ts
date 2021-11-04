import { ListResponse } from "./api";

export interface Layer {
  id: number;
  name: string;
  layerNumber: number;
  realLength: number;
  realWidth: number;
  x0: number;
  y0: number;
  floorPlan: string;
  description?: string;
}

export interface LayerListResponse extends ListResponse{
  layers: Layer[];
}

export interface LayerListRequest {
  query?: number;
  page: number;
  size: number;
}

export type LayerResponse = Layer;

export type AddLayerRequest = Omit<Layer, "id">;

export type AddLayerFormValues = AddLayerRequest;

export type EditLayerRequest = Layer;

export type EditLayerFormValues = EditLayerRequest;