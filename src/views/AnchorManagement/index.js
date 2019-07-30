import React from 'react';
// Shared layouts
import DashboardLayout from '../../layouts/Dashboard';

import Content from './components/Content'

class AnchorManagement extends React.Component {
  // constructor(props){
  //   super(props)
  // }

  render(){
    return(
      <DashboardLayout title="Anchor Management">
        <Content></Content>
      </DashboardLayout> 
    )
  }
}

export default AnchorManagement;