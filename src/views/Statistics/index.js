import React from 'react';
// Shared layouts
import DashboardLayout from '../../layouts/Dashboard';

class Statistics extends React.Component {
  // constructor(props){
  //   super(props)
  // }

  render(){
    return(
      <DashboardLayout title="Dashboard">
        <div>
          this is Statistics page
        </div>
      </DashboardLayout> 
    )
  }
}

export default Statistics;