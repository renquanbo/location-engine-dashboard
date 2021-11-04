import { Button, Card, CardContent, CardMedia, Grid, TextField, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { LayerResponse } from "../../lib/model/layer";

interface IProps {
  editButtonClick: () => void
  detail: LayerResponse | undefined;
}

export default function LayerDetails(props: IProps) {
  const detail = props.detail;

  return (
    <>
      <Grid container sx={{ justifyContent: "space-between", mb: 3 }} spacing={3}>
        <Grid item>
          <Typography variant="h5" sx={{ color: "text.primary" }}>Layer Details</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" sx={{ mr: 2 }} onClick={props.editButtonClick}>Edit</Button>
        </Grid>
      </Grid>
      <Card>
        <CardContent sx={{ p: 3 }}>
          <Grid container spacing={3} alignItems="flex-start">
            <Grid item spacing={3} container md={8} >
              <Grid item md={6}>
                <TextField
                  label="Name"
                  sx={{ width: "100%" }}
                  defaultValue={" "}
                  value={detail?.name}
                  InputProps={{
                    readOnly: true,
                  }}
                ></TextField>
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Layer Number"
                  defaultValue={" "}
                  value={detail?.layerNumber}
                  sx={{ width: "100%" }}
                  InputProps={{
                    readOnly: true,
                  }}
                ></TextField>
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Real Width(cm)"
                  defaultValue={" "}
                  value={detail?.realWidth}
                  sx={{ width: "100%" }}
                  InputProps={{
                    readOnly: true,
                  }}
                ></TextField>
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Real Length(cm)"
                  defaultValue={" "}
                  value={detail?.realLength}
                  sx={{ width: "100%" }}
                  InputProps={{
                    readOnly: true,
                  }}
                ></TextField>
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Coordinate origin X axis(cm)"
                  defaultValue={" "}
                  value={detail?.x0}
                  sx={{ width: "100%" }}
                  InputProps={{
                    readOnly: true,
                  }}
                ></TextField>
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Coordinate origin Y axis(cm)"
                  defaultValue={" "}
                  value={detail?.y0}
                  sx={{ width: "100%" }}
                  InputProps={{
                    readOnly: true,
                  }}
                ></TextField>
              </Grid>
              <Grid item md={12}>
                <TextField
                  label="Description"
                  defaultValue={" "}
                  value={detail?.description}
                  sx={{ width: "100%" }}
                  InputProps={{
                    readOnly: true,
                  }}
                ></TextField>
              </Grid>
            </Grid>
            <Grid item md={4}>
              <Card>
                <CardMedia
                  component="img"
                  src={detail?.floorPlan}
                  alt="floor plan"
                />
                <CardContent sx={{display: "flex",justifyContent: "space-between"}}>
                  <Typography variant="h6" color="text.secondary">
                    Floor Plan
                  </Typography>
                  </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}