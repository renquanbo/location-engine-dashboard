import React from 'react';
// Shared layouts
import DashboardLayout from '../../layouts/Dashboard';

class Settings extends React.Component {
  // constructor(props){
  //   super(props)
  // }

  render(){
    return(
      <DashboardLayout title="Dashboard">
        <div>
          this is settings page
        </div>
      </DashboardLayout> 
    )
  }
}

export default Settings;