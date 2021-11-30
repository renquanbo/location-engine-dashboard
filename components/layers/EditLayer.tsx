import { Button, Card, CardContent, CardMedia, Grid, TextField, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { EditLayerFormValues, LayerResponse } from "../../lib/model/layer";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as React from "react";
import { useState } from "react";
import SnackUtils from "../../lib/utils/SnackUtils";
import layerService from "../../lib/services/layerService";
import { getBase64 } from "../../lib/utils/image-helper";
import { useRouter } from "next/router";

interface IProps {
  cancelButtonClick: () => void;
  detail: LayerResponse | undefined;
}

const Input = styled('input')({
  display: 'none',
});

export default function EditLayer(props: IProps) {
  const router = useRouter();
  const detail = props.detail;
  const [previewImageURL, setPreviewImageURL] = useState<string | undefined>(detail?.floorPlan);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Layer name is required'),
    layerNumber: Yup.number().typeError("Must be a number").required('Layer number is required').positive('Must a positive integer').integer('Must a positive integer'),
    realLength: Yup.number().typeError("Must be a number").required('Layer real length is required').positive('Must a positive integer').integer('Must a positive integer'),
    realWidth: Yup.number().typeError("Must be a number").required('Layer real width is required').positive('Must a positive integer').integer('Must a positive integer'),
    x0: Yup.number().typeError("Must be a number").required('Coordinate origin X is required').positive('Must a positive integer').integer('Must a positive integer'),
    y0: Yup.number().typeError("Must be a number").required('Coordinate origin Y is required').positive('Must a positive integer').integer('Must a positive integer'),
  });
  const { control, handleSubmit, formState: { errors } } = useForm<EditLayerFormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: detail?.name,
      layerNumber: detail?.layerNumber,
      realLength: detail?.realLength,
      realWidth: detail?.realWidth,
      x0: detail?.x0,
      y0: detail?.y0,
      description: detail?.description
    }
  });
  const onSubmit: SubmitHandler<EditLayerFormValues> = async (data) => {
    if (previewImageURL === undefined) {
      SnackUtils.error("Floor plan is required");
      return;
    }
    data.floorPlan = previewImageURL;
    if (detail?.id === undefined) {
      return;
    } else {
      layerService.editLayer(detail?.id, data).then((res) => {
        window.location.reload();
      });
    }
  };

  const handleUploadInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!!e.target.files) {
      const uploadFile = e.target?.files[0];
      if (uploadFile.type !== "image/png") {
        SnackUtils.error("only support image/png type");
      } else {
        getBase64(uploadFile)
          .then((res) => {
            if (typeof res === "string") {
              setPreviewImageURL(res);
            }
          })
      }
    }
  };

  const handleDelete = () => {
    if(detail?.id === undefined) {
      return;
    }
    layerService.deleteLayer(detail?.id);
    router.push("/dashboard/layers");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container sx={{ justifyContent: "space-between", mb: 3 }} spacing={3}>
        <Grid item>
          <Typography variant="h5" sx={{ color: "text.primary" }}>Layer Details</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" sx={{ mr: 2 }} type="submit">Save</Button>
          <Button variant="outlined" onClick={props.cancelButtonClick}>Cancel</Button>
        </Grid>
      </Grid>
      <Card>
        <CardContent sx={{ p: 3 }}>
          <Grid container spacing={3} alignItems="flex-start">
            <Grid item spacing={3} container md={8} >
              <Grid item md={6}>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) =>
                    <TextField
                      {...field}
                      label="Name"
                      sx={{ width: "100%" }}
                      error={errors.name ? true : false}
                      helperText={errors.name?.message}
                    ></TextField>}
                ></Controller>
              </Grid>
              <Grid item md={6}>
                <Controller
                  name="layerNumber"
                  control={control}
                  render={({ field }) =>
                    <TextField
                      {...field}
                      label="Layer Number"
                      type="number"
                      sx={{ width: "100%" }}
                      error={errors.layerNumber ? true : false}
                      helperText={errors.layerNumber?.message}
                    ></TextField>}
                ></Controller>
              </Grid>
              <Grid item md={6}>
                <Controller
                  name="realWidth"
                  control={control}
                  render={({ field }) =>
                    <TextField
                      {...field}
                      label="Real Width(cm)"
                      type="number"
                      sx={{ width: "100%" }}
                      error={errors.realWidth ? true : false}
                      helperText={errors.realWidth?.message}
                    ></TextField>}
                ></Controller>
              </Grid>
              <Grid item md={6}>
                <Controller
                  name="realLength"
                  control={control}
                  render={({ field }) =>
                    <TextField
                      {...field}
                      label="Real Length(cm)"
                      type="number"
                      sx={{ width: "100%" }}
                      error={errors.realLength ? true : false}
                      helperText={errors.realWidth?.message}
                    ></TextField>}
                ></Controller>
              </Grid>
              <Grid item md={6}>
                <Controller
                  name="x0"
                  control={control}
                  render={({ field }) =>
                    <TextField
                      {...field}
                      label="Coordinate origin X axis(cm)"
                      type="number"
                      sx={{ width: "100%" }}
                      error={errors.x0 ? true : false}
                      helperText={errors.x0?.message}
                    ></TextField>}
                ></Controller>
              </Grid>
              <Grid item md={6}>
                <Controller
                  name="y0"
                  control={control}
                  render={({ field }) =>
                    <TextField
                      {...field}
                      label="Coordinate origin Y axis(cm)"
                      type="number"
                      sx={{ width: "100%" }}
                      error={errors.y0 ? true : false}
                      helperText={errors.y0?.message}
                    ></TextField>}
                ></Controller>
              </Grid>
              <Grid item md={12}>
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) =>
                    <TextField
                      {...field}
                      label="Description"
                      sx={{ width: "100%" }}
                    ></TextField>}
                ></Controller>
              </Grid>
              <Grid item>
                <Button variant="contained" color="error" onClick={handleDelete}>Delete</Button>
              </Grid>
            </Grid>
            <Grid item md={4}>
              <Card>
                <CardMedia
                  component="img"
                  src={previewImageURL}
                  alt="floor plan"
                />
                <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h6" color="text.secondary">
                    Floor Plan
                  </Typography>
                  <Controller
                    name="floorPlan"
                    control={control}
                    render={({ field }) =>
                      <label htmlFor="floor-plan">
                        <Input {...field} accept="image/png" id="floor-plan" multiple type="file" onChange={handleUploadInputChange} />
                        <Button component="span">
                          UPLOAD
                        </Button>
                      </label>
                    }
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  )
}