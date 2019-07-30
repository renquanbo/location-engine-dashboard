import React from 'react';
// Shared layouts
import DashboardLayout from '../../layouts/Dashboard';

class Location extends React.Component {
  // constructor(props){
  //   super(props)
  // }

  render(){
    return(
      <DashboardLayout title="Dashboard">
        <div>
          this is location page
        </div>
      </DashboardLayout> 
    )
  }
}

export default Location;