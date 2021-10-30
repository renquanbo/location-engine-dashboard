import { Button, Card, CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material";
import AppLayout from "../../components/layout/AppLayout";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import LayerList from "../../components/layers/LayerList";
import AddLayer from "../../components/layers/AddLayer";

const layerData = {
  name: "Layer name",
  description: "this is the layer's description",
  pictureUrl: "/images/office-floor-plan.png"
}

export default function LayersPage() {
  const [showAddLayer, setShowAddLayer] = useState<boolean>(false);
  const layers = Array(10).fill(layerData);

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
