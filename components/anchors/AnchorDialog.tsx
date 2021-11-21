import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, Grid, TextField } from "@mui/material";
import { Dispatch, SetStateAction, useMemo } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as Yup from 'yup';
import { AddAnchorFormValues, Anchor } from "../../lib/model/anchor";
import { yupResolver } from '@hookform/resolvers/yup';
import anchorService from "../../lib/services/anchorService";

const emptyAnchor = {
  id: '',
  name: '',
  x: '',
  y: '',
  height: '',
  anchorGroup: '',
  layerNumber: '',
}

interface IProps {
  add: boolean;
  layerName: string;
  selectedLayerId: string;
  handleClose: () => void;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setCommit: Dispatch<SetStateAction<boolean>>;
  selectedAnchor?: Anchor;
}

export default function AnchorDialog(props: IProps) {
  const validationSchema = Yup.object().shape({
    id: Yup.number().typeError("Must be a number").required('Anchor id is required').positive('Must a positive integer').integer('Must a positive integer'),
    x: Yup.number().typeError("Must be a number").required('x is required').positive('Must a positive integer').integer('Must a positive integer'),
    y: Yup.number().typeError("Must be a number").required('y is required').positive('Must a positive integer').integer('Must a positive integer'),
    height: Yup.number().typeError("Must be a number").required('Height is required').positive('Must a positive integer').integer('Must a positive integer'),
    anchorGroup: Yup.number().typeError("Must be a number").required('Anchor group is required').positive('Must a positive integer').integer('Must a positive integer'),
    layerNumber: Yup.number().typeError("Must be a number").required('LayerNumber is required').positive('Must a positive integer').integer('Must a positive integer'),
  });
  const { control, handleSubmit, reset, formState: { errors } } = useForm<AddAnchorFormValues>({ resolver: yupResolver(validationSchema) });

  const onSubmit: SubmitHandler<AddAnchorFormValues> = async (data, e) => {
    if (props.add) {
      data.layerId = parseInt(props.selectedLayerId);
      anchorService.addAnchor(data)
        .then((res) => {
          // @ts-ignore: type not match error
          reset(emptyAnchor);
          props.setCommit(true);
          props.setOpen(false);
        })
        .catch((err) => {
          return;
        })
    } else {
      console.log(data);
      // @ts-ignore: type not match error
      reset(emptyAnchor);
      props.setCommit(true);
      props.setOpen(false);
    }

  };

  useMemo(() => {
    reset(props.selectedAnchor)
  }, [props.selectedAnchor, reset])

  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>{props.add ? 'Add Anchor' : 'Edit Anchor'}</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 2 }}>
          Layer Name: {props.layerName}
        </DialogContentText>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3} alignItems="flex-start">
            <Grid item spacing={3} md={6}>
              <Controller
                name="id"
                control={control}
                render={({ field }) =>
                  <TextField
                    {...field}
                    disabled={props.add ? false : true}
                    autoFocus
                    label="Anchor Id"
                    variant="outlined"
                    fullWidth
                    error={errors.id ? true : false}
                    helperText={errors.id?.message}
                  />
                }
              />
            </Grid>
            <Grid item spacing={3} md={6}>
              <Controller
                name="name"
                control={control}
                render={({ field }) =>
                  <TextField
                    {...field}
                    autoFocus
                    label="Name"
                    variant="outlined"
                    fullWidth
                    error={errors.name ? true : false}
                    helperText={errors.name?.message}
                  />
                }
              />
            </Grid>
            <Grid item spacing={3} md={4}>
              <Controller
                name="x"
                control={control}
                render={({ field }) =>
                  <TextField
                    {...field}
                    autoFocus
                    label="X(cm)"
                    variant="outlined"
                    type="number"
                    fullWidth
                    error={errors.x ? true : false}
                    helperText={errors.x?.message}
                  />
                }
              />
            </Grid>
            <Grid item spacing={3} md={4}>
              <Controller
                name="y"
                control={control}
                render={({ field }) =>
                  <TextField
                    {...field}
                    autoFocus
                    label="Y(cm)"
                    variant="outlined"
                    type="number"
                    fullWidth
                    error={errors.y ? true : false}
                    helperText={errors.y?.message}
                  />
                }
              />
            </Grid>
            <Grid item spacing={3} md={4}>
              <Controller
                name="height"
                control={control}
                render={({ field }) =>
                  <TextField
                    {...field}
                    autoFocus
                    label="Height(cm)"
                    variant="outlined"
                    type="number"
                    fullWidth
                    error={errors.height ? true : false}
                    helperText={errors.height?.message}
                  />
                }
              />
            </Grid>
            <Grid item spacing={3} md={6}>
              <Controller
                name="anchorGroup"
                control={control}
                render={({ field }) =>
                  <TextField
                    {...field}
                    autoFocus
                    label="Anchor Group"
                    variant="outlined"
                    type="number"
                    fullWidth
                    error={errors.anchorGroup ? true : false}
                    helperText={errors.anchorGroup?.message}
                  />
                }
              />
            </Grid>
            <Grid item spacing={3} md={6}>
              <Controller
                name="layerNumber"
                control={control}
                render={({ field }) =>
                  <TextField
                    {...field}
                    autoFocus
                    label="LayerNumber"
                    variant="outlined"
                    type="number"
                    fullWidth
                    error={errors.layerNumber ? true : false}
                    helperText={errors.layerNumber?.message}
                  />
                }
              />
            </Grid>
            <Grid item sx={{ mb: 1 }} container md={12} justifyContent="flex-end" spacing={3}>
              <Grid item>
                <Button onClick={props.handleClose} variant="outlined">Cancel</Button>
              </Grid>
              <Grid item>
                <Button variant="contained" sx={{ mr: 2 }} type='submit'>{props.add ? 'Create' : 'Update'}</Button>
              </Grid>
            </Grid>

          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  )
}