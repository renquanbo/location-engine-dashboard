import { Button, Card, CardActions, CardContent, CardMedia, Grid, TextField, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

interface IProps {
  cancelButtonClick: () => void
}

const Input = styled('input')({
  display: 'none',
});

export default function AddLayer(props: IProps) {
  return (
    <>
      <Grid container sx={{ justifyContent: "space-between", mb: 3 }} spacing={3}>
        <Grid item>
          <Typography variant="h5" sx={{ color: "text.primary" }}>Add Layer</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" sx={{ mr: 2 }}>Create</Button>
          <Button variant="outlined" onClick={props.cancelButtonClick}>Cancel</Button>
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
                ></TextField>
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Layer Number"
                  sx={{ width: "100%" }}
                ></TextField>
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Real Width(cm)"
                  sx={{ width: "100%" }}
                ></TextField>
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Real Height(cm)"
                  sx={{ width: "100%" }}
                ></TextField>
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Coordinate origin X axis(cm)"
                  sx={{ width: "100%" }}
                ></TextField>
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Coordinate origin Y axis(cm)"
                  sx={{ width: "100%" }}
                ></TextField>
              </Grid>
            </Grid>
            <Grid item md={4}>
              <Card>
                <CardMedia
                  component="img"
                  image={"/images/floor-plan-placeholder.webp"}
                  alt="floor plan"
                />
                <CardContent sx={{display: "flex",justifyContent: "space-between"}}>
                  <Typography variant="h6" color="text.secondary">
                    Floor Plan
                  </Typography>
                  <label htmlFor="contained-button-file">
                    <Input accept="image/*" id="contained-button-file" multiple type="file" />
                    <Button component="span">
                      UPLOAD
                    </Button>
                  </label>
                  </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}