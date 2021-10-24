import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Toolbar, ListSubheader, ListItemButton, Button } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PerfectScrollbar from 'react-perfect-scrollbar'
import styled from '@emotion/styled';
import { Box } from "@mui/system";
import AssessmentIcon from '@mui/icons-material/Assessment';
import PieChartIcon from '@mui/icons-material/PieChart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ReceiptIcon from '@mui/icons-material/Receipt';


const StyledListSubHeader = styled(ListSubheader)`
  font-size: 0.75rem;
  font-eight: 700;
  line-height: 2.5;
  text-transform: uppercase;
  padding-left: 0px;
`

//can add subheader to menu items array
const menuItems = [
  {
    subHeader: "general",
    items: [
      {
        text: "Overview",
        icon: <AssessmentIcon />
      },
      {
        text: "Analytics",
        icon: <PieChartIcon />
      },
      {
        text: "Finance",
        icon: <ShoppingBagIcon />
      },
      {
        text: "Account",
        icon: <PersonIcon />
      }]
  },
  {
    subHeader: "management",
    items: [
      {
        text: "Customers",
        icon: <PeopleIcon />
      },
      {
        text: "Products",
        icon: <ShoppingCartIcon />
      },
      {
        text: "Orders",
        icon: <LibraryBooksIcon />
      },
      {
        text: "Invoices",
        icon: <ReceiptIcon />
      }]
  }
]

const drawerWidth = 280;
const Sidebar = () => {
  const [selectedMenuKey, setSelectedMenuKey] = React.useState('');

  const handleListItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    menuKey: string,
  ) => {
    setSelectedMenuKey(menuKey);
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />

      <PerfectScrollbar>
        <Box sx={{ p: 2 }}>
          {menuItems.map((menuItem, index) => (
            <List
              subheader={
                <StyledListSubHeader sx={{ color: "text.primary" }}>
                  {menuItem.subHeader}
                </StyledListSubHeader>
              }
              key={index}
              sx={{mb: 3}}
            >
              {menuItem.items.map((item, index) => (
                <ListItem key={index} sx={{ display: "flex", p: 0 }} onClick={(event) => handleListItemClick(event, item.text)}>
                  <Button startIcon={item.icon}
                    sx={{
                      color: selectedMenuKey === item.text ? "primary.main" : "text.secondary",
                      fontWeight: selectedMenuKey === item.text ? "fontWeightBold" : "fontWeightMedium",
                      justifyContent: "flex-start",
                      pl: "16px",
                      pr: "8px",
                      py: "12px",
                      textAlign: "left",
                      textTransform: "none",
                      width: "100%"
                    }}>
                    {item.text}
                  </Button>
                </ListItem>
              ))}
            </List>
          ))}

          {/* <Divider /> */}

        </Box>
      </PerfectScrollbar>
    </Drawer>
  )
}

export default Sidebar;