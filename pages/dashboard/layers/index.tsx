import AppLayout from "../../../components/layout/AppLayout";
import { useState } from "react";
import LayerList from "../../../components/layers/LayerList";
import AddLayer from "../../../components/layers/AddLayer";

export default function LayersPage() {
  const [showAddLayer, setShowAddLayer] = useState<boolean>(false);

  const handleAddLayerClick = () => {
    setShowAddLayer(true);
  }

  const handleCancelClick = () => {
    setShowAddLayer(false);
  }

  return (
    <AppLayout>
      {showAddLayer
        ? <AddLayer cancelButtonClick={handleCancelClick}></AddLayer>
        : <LayerList addButtonClick={handleAddLayerClick}></LayerList>
      }
    </AppLayout>
  )
}
