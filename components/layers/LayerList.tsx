import { Button, Card, CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material";
import AppLayout from "../../components/layout/AppLayout";
import AddIcon from '@mui/icons-material/Add';
import { MouseEventHandler, useState } from "react";

const layerData = {
  name: "Layer name",
  description: "this is the layer's description",
  pictureUrl: "/images/office-floor-plan.png"
}

interface IProps {
  addButtonClick: () => void
}

export default function LayerList(props: IProps) {
  const layers = Array(10).fill(layerData);

  return (
    <>
      <Grid container sx={{ justifyContent: "space-between", mb: 3 }} spacing={3}>
        <Grid item>
          <Typography variant="h5" sx={{ color: "text.primary" }}>Layer List</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" startIcon={<AddIcon />} onClick={props.addButtonClick}>Add Layer</Button>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {layers.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                image={item.pictureUrl}
                alt="floor plan"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}