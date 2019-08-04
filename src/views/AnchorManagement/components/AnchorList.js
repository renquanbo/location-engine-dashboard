import React, { Fragment } from 'react';
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContentWrapper from './SnackbarContentWrapper';
import { withStyles } from '@material-ui/core/styles';

import MaterialTable from 'material-table';

import axios from 'axios';
import {setAuthenticationStatus} from '../../../actions';
import { connect } from 'react-redux';

// Material helpers
// import { withStyles } from '@material-ui/core/styles';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const styles = theme => ({
  close: {
    padding: theme.spacing(0.5),
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});


class AnchorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      message: 'test message',
      columns: [
        { 
          title: 'ID', field: 'id', type: 'numeric',
          cellStyle: {
            fontSize: 20
          }
        },
        { 
          title: 'Name', field: 'name',
          cellStyle: {
            fontSize: 20
          },
        },
        { 
          title: 'X', field: 'x', type: 'numeric',
          cellStyle: {
            fontSize: 20
          },
        },
        { 
          title: 'Y', field: 'y', type: 'numeric',
          cellStyle: {
            fontSize: 20
          }
        },
        { 
          title: 'Height', field: 'height', type: 'numeric',
          cellStyle: {
            fontSize: 20
          }
        },
        { 
          title: 'Level ID', field: 'levelId', type: 'numeric',
          cellStyle: {
            fontSize: 20
          }
        },
      ],
      data: [
        
      ]
    }
    this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
  }

  componentDidMount(){
    this.getAnchorListData();
  }

  getAnchorListData() {
    const self = this
    axios({
      method: 'get',
      url: '/configuration_service/anchors',
      headers: {
        'Authorization': localStorage.token_type + ' ' + localStorage.access_token
      }
    })
      .then(function(response){
        self.setState({data: response.data});
      })
      .catch(function(error){
        if(error.response.status === 400){
          self.props.dispatch(setAuthenticationStatus(false))
        }
      })
  }

  handleSnackbarClose(){
    this.setState({open: false});
  }

  render() {
    return (
      <Fragment>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleSnackbarClose}
        >
          <SnackbarContentWrapper
            onClose={this.handleSnackbarClose}
            variant="error"
            message={this.state.message}
          />
        </Snackbar>
        <MaterialTable
          icons={tableIcons}
          title="Anchor List"
          columns={this.state.columns}
          data={this.state.data}
          options={{
            headerStyle: {
              fontSize: 14,
            },
            searchFiledStyle: {
              title: {
                fontSize: 20,
                backgroundColor: '#124567'
              }
            }
          }}
          editable={{
            onRowAdd: newData => {
                const self = this
                return axios({
                  method: 'post',
                  url: '/configuration_service/anchors',
                  headers: {
                    'Authorization': localStorage.token_type + ' ' + localStorage.access_token
                  },
                  data: newData
                })
                  .then(function(response){
                    self.getAnchorListData();
                  })
                  .catch(function(error){
                    if(error.response){
                      self.setState({message: error.response.data.message});
                      self.setState({open: true});
                    }
                  })
              },
            onRowUpdate: (newData, oldData) =>{
                const self = this
                const data = self.state.data;
                const index = data.indexOf(oldData);
                const id = data[index].id
                return axios({
                  method: 'put',
                  url: '/configuration_service/anchors/' + id,
                  headers: {
                    'Authorization': localStorage.token_type + ' ' + localStorage.access_token
                  },
                  data: newData
                })
                  .then(function(response){
                    self.getAnchorListData();
                  })
                  .catch(function(error){
                    if(error.response){
                      self.setState({message: error.response.data.message});
                      self.setState({open: true});
                    }
                  })
              },
            onRowDelete: oldData => {
              const self = this;
              const data = self.state.data;
              const index = data.indexOf(oldData);
              const id = data[index].id
              return axios({
                method: 'delete',
                url: '/configuration_service/anchors/' + id,
                headers: {
                  'Authorization': localStorage.token_type + ' ' + localStorage.access_token
                }
              })
                .then(function(response){
                  self.getAnchorListData();
                })
                .catch(function(error){
                  if(error.response){
                    self.setState({message: error.response.data.message});
                    self.setState({open:true});
                  }
                })
              }
          }}
        />
      </Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {isAuthenticated: state.authenticationStatus};
}

export default connect(mapStateToProps)(withStyles(styles)(AnchorList));