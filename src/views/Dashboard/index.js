import React from 'react'

// Shared layouts
import DashboardLayout from '../../layouts/Dashboard';

// Components
import Content from './components/Content'

function Dashboard(props) {
  return(
    <DashboardLayout title="Dashboard">
      <Content></Content>
    </DashboardLayout> 
  )
}



export default Dashboard;