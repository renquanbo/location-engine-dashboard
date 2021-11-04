import { Button, Card, CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material";
import AppLayout from "../../components/layout/AppLayout";
import AddIcon from '@mui/icons-material/Add';
import { MouseEventHandler, useEffect, useState } from "react";
import layerService from "../../lib/services/layerService";
import { Paginator } from "../../lib/model/api";
import { Layer } from "../../lib/model/layer";
import Link from 'next/link';
import { styled } from '@mui/system';

interface IProps {
  addButtonClick: () => void
};

export default function LayerList(props: IProps) {
  const [layers, setLayers] = useState<Layer[]>();
  const [paginator, setPaginator] = useState<Paginator>({ page: 0, size: 10 })

  useEffect(() => {
    async function fetchLayerList() {
      const { data } = await layerService.getLayerList(paginator);
      setLayers(data?.layers);
    }
    fetchLayerList();
  }, [paginator]);

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
        {layers?.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <Link href={"/dashboard/layers/" + item.id} passHref>
                <CardMedia
                  component="img"
                  image={item.floorPlan}
                  alt="floor plan"
                  sx={{ '&:hover': {
                    cursor: 'pointer'
                  }}}
                />
              </Link>
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