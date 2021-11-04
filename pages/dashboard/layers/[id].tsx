import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import EditLayer from "../../../components/layers/EditLayer";
import LayerDetails from "../../../components/layers/LayerDetails";
import AppLayout from "../../../components/layout/AppLayout";
import { LayerResponse } from "../../../lib/model/layer";
import layerService from "../../../lib/services/layerService";

export default function LayersPage() {
  const router = useRouter();
  const { id } = router.query;
  const [layerDetail, setLayerDetail] = useState<LayerResponse>();
  const [isEdit, setIsEdit] = useState<Boolean>(false);

  const handleEditButtonClick = () => {
    setIsEdit(true);
  }

  const handleCancelButtonClick = () => {
    setIsEdit(false);
  }

  useEffect(() => {
    async function fetchLayerDetail() {
      if (!!id && typeof id == "string") {
        const { data } = await layerService.getLayerById(id);
        if (!!data) {
          setLayerDetail(data);
        }
      }
    }
    fetchLayerDetail();
  }, [id, isEdit])



  return (
    <AppLayout>
      {isEdit
        ? <EditLayer detail={layerDetail} cancelButtonClick={handleCancelButtonClick}></EditLayer>
        : <LayerDetails detail={layerDetail} editButtonClick={handleEditButtonClick}></LayerDetails>
      }
    </AppLayout>
  )
}
