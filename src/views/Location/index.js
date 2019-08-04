import React from 'react';
// Shared layouts
import DashboardLayout from '../../layouts/Dashboard';
import Content from './components/Content'

class Location extends React.Component {
  // constructor(props){
  //   super(props)
  // }

  render(){
    return(
      <DashboardLayout title="Dashboard">
        <Content></Content>
      </DashboardLayout> 
    )
  }
}

export default Location;