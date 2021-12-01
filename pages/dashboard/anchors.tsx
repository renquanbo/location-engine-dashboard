import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Grid, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, Stack, TextField, Typography } from "@mui/material";
import AppLayout from "../../components/layout/AppLayout";
import { DataGrid, GridActionsCellItem, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import { Box } from "@mui/system";
import { useEffect, useMemo, useState } from "react";
import { LayerListResponse, LayerResponse, Layer } from "../../lib/model/layer";
import layerService from "../../lib/services/layerService";
import anchorService from "../../lib/services/anchorService";
import { Anchor } from "../../lib/model/anchor";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AnchorDialog from "../../components/anchors/AnchorDialog";



export default function AnchorsPage() {
  const [selectedAnchor, setSelectedAnchor] = useState<Anchor>();
  const columns = useMemo(
    () => [
      { field: 'id', headerName: 'ID', flex: 1, minWidth: 70, editable: true, },
      { field: 'name', headerName: 'Name', flex: 1, minWidth: 130, editable: true, },
      { field: 'x', headerName: 'x', type: 'number', flex: 1, minWidth: 60, editable: true, },
      { field: 'y', headerName: 'y', type: 'number', flex: 1, minWidth: 60, editable: true, },
      { field: 'height', headerName: 'Height', type: 'number', flex: 1, minWidth: 90, editable: true, },
      { field: 'anchorGroup', headerName: 'Anchor Group', type: 'number', flex: 1, minWidth: 120, editable: true, },
      { field: 'layerNumber', headerName: 'Layer Number', type: 'number', flex: 1, minWidth: 120, editable: true, },
      { field: 'batteryPercentage', headerName: 'Battery Percentage', type: 'number', flex: 1, minWidth: 150, editable: true, },
      {
        field: 'actions', headerName: 'Actions', type: 'actions', minWidth: 80,
        getActions: (params: any) => [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            key={params.id}
            onClick={() => { setSelectedAnchor(params.row);  setEditDialogOpen(true);}}
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            key={params.id}
            onClick={() => { }}
          />,
        ]
      }
    ], []);
  const [layers, setLayers] = useState<Layer[]>();
  const [selectedLayerId, setSelectedLayerId] = useState<string>('');
  const [selectedLayer, setSelectedLayer] = useState<Layer>();
  const [loading, setLoading] = useState<boolean>(false);
  const [rows, setRows] = useState<Anchor[]>([]);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState<number>(10);
  const [total, setTotal] = useState<number>(0);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [addDone, setAddDone] = useState(false);
  const [editDone, setEditDone] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedLayerId(event.target.value);
    const found = layers?.find(e => e.id === parseInt(event.target.value));
    setSelectedLayer(found);
  };

  const handleAddButtonClick = () => setAddDialogOpen(true);
  const handleAddDialogClose = () => setAddDialogOpen(false);
  // const handleEditButtonClick = () => setEditDialogOpen(true);
  const handleEditDialogClose = () => setEditDialogOpen(false);

  useEffect(() => {
    async function fetchLayers() {
      const { data } = await layerService.getLayerList();
      if (!!data) {
        setLayers(data?.layers);
        setSelectedLayerId(data?.layers[0].id.toString());
        setSelectedLayer(data?.layers[0]);
      }
    }

    fetchLayers();
  }, []);

  useEffect(() => {
    async function fetchAnchors() {
      if (selectedLayerId === '') {
        return;
      }
      setLoading(true);
      const { data } = await anchorService.getAnchorList({ layerId: selectedLayerId, page: page, size: pageSize });
      if (!!data) {
        setRows(data?.anchors);
        setTotal(data.total);
      }
      setAddDone(false);
      setEditDone(false);
      setLoading(false);
    }

    fetchAnchors();
  }, [selectedLayerId, page, pageSize, addDone, editDone])

  const handleAddTenAnchors = () => {
    let modifiedAnchorArray = Array.from(Array(10), () => {
      let randomId = Math.floor(Math.random() * 900 + 100);
      let item = {
        id: 1000 + randomId,
        name: 'Anchor' + randomId,
        x: Math.floor(Math.random() * 1000),
        y: Math.floor(Math.random() * 1000),
        height: Math.floor(Math.random() * 100 + 100),
        anchorGroup: Math.floor(Math.random() * 10 + 1),
        layerId: parseInt(selectedLayerId),
        layerNumber: Math.floor(Math.random() * 10 + 1),
      }
      return item;
    });

    modifiedAnchorArray.forEach((item) => {
      anchorService.addAnchor(item);
    })

    setAddDone(true);
  }

  return (
    <AppLayout>
      <Grid container sx={{ justifyContent: "space-between", mb: 3 }} spacing={3}>
        <Grid item>
          <Typography variant="h5" sx={{ color: "text.primary" }}>Anchor List</Typography>
        </Grid>
        <Grid item>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" onClick={handleAddTenAnchors}>Add 10 Anchors</Button>
            <Box sx={{ minWidth: 120 }}>
              <FormControl >
                <InputLabel id="layer-select-label" sx={{ top: '-10px' }}>Layer</InputLabel>
                <Select
                  labelId="layer-select-label"
                  id="layer-select"
                  value={selectedLayerId}
                  label="Layer"
                  onChange={handleChange}
                  sx={{ height: '36px', minWidth: 180 }}
                >
                  {layers?.map((item) => (
                    <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Button variant="contained" startIcon={<AddIcon />} onClick={handleAddButtonClick}>Add Anchor</Button>
          </Stack>
        </Grid>
      </Grid>
      <div style={{ height: '80vh', width: '100%' }}>
        <DataGrid
          loading={loading}
          rows={rows}
          columns={columns}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          pagination
          paginationMode="server"
          rowCount={total}
          onPageChange={(newPage) => setPage(newPage)}
          editMode="row"
        />
      </div>
      <AnchorDialog
        add
        layerName={selectedLayer ? selectedLayer.name : ''}
        selectedLayerId={selectedLayerId}
        handleClose={handleAddDialogClose}
        open={addDialogOpen}
        setOpen={setAddDialogOpen}
        setCommit={setAddDone}
      ></AnchorDialog>
      <AnchorDialog
        add={false}
        layerName={selectedLayer ? selectedLayer.name : ''}
        selectedLayerId={selectedLayerId}
        selectedAnchor={selectedAnchor}
        handleClose={handleEditDialogClose}
        open={editDialogOpen}
        setOpen={setEditDialogOpen}
        setCommit={setEditDone}
      />
    </AppLayout>
  )
}
