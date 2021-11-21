import { ListResponse, Paginator } from "./api";

export interface Anchor {
  id: number;
  name: string;
  x: number;
  y: number;
  height: number;
  anchorGroup: number;
  layerNumber: number;
  layerId: number;
  batteryPercentage?: number;
}

export interface AnchorListResponse extends ListResponse {
  anchors: Anchor[];
}

export type AnchorResponse = Anchor;

export type AddAnchorRequest = Omit<Anchor, "batteryPercentage">;

export type AddAnchorFormValues = AddAnchorRequest;

export interface AnchorListRequest extends Paginator{
  layerId: string;
}