/* eslint-disable @next/next/link-passhref */
import React from "react";
import Link from "next/link";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Toolbar, ListSubheader, ListItemButton, Button } from "@mui/material";
import PerfectScrollbar from 'react-perfect-scrollbar'
import styled from '@emotion/styled';
import { Box } from "@mui/system";
import AssessmentIcon from '@mui/icons-material/Assessment';
import PieChartIcon from '@mui/icons-material/PieChart';
import PersonIcon from '@mui/icons-material/Person';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LayersIcon from '@mui/icons-material/Layers';
import RouterIcon from '@mui/icons-material/Router';
import DockIcon from '@mui/icons-material/Dock';
import ListAltIcon from '@mui/icons-material/ListAlt';
import TodayIcon from '@mui/icons-material/Today';
import ArticleIcon from '@mui/icons-material/Article';
import { useRouter } from "next/dist/client/router";
import { getSelectedKey, menuItems } from "../../lib/utils/menuConfig";


const StyledListSubHeader = styled(ListSubheader)`
  font-size: 0.75rem;
  font-eight: 700;
  line-height: 2.5;
  text-transform: uppercase;
  padding-left: 0px;
`

//can add subheader to menu items array
// const menuItems = [
//   {
//     subHeader: "general",
//     items: [
//       {
//         text: "Overview",
//         icon: <AssessmentIcon />
//       },
//       {
//         text: "Analytics",
//         icon: <PieChartIcon />
//       },
//       {
//         text: "Account",
//         icon: <PersonIcon />
//       }]
//   },
//   {
//     subHeader: "management",
//     items: [
//       {
//         text: "Layers",
//         icon: <LayersIcon />
//       },
//       {
//         text: "Anchors",
//         icon: <RouterIcon />
//       },
//       {
//         text: "Tags",
//         icon: <DockIcon />
//       }]
//   },
//   {
//     subHeader: "lab",
//     items: [
//       {
//         text: "Todo List",
//         icon: <ListAltIcon />
//       },
//       {
//         text: "Calendar",
//         icon: <TodayIcon />
//       },
//       {
//         text: "Blogs",
//         icon: <ArticleIcon />
//       }]
//   }
// ]

const drawerWidth = 280;
const prefix = "/dashboard"
const Sidebar = () => {
  const router = useRouter();
  // const [selectedMenuKey, setSelectedMenuKey] = React.useState('');
  const selectedMenuKey = getSelectedKey(router.pathname);
  // console.log(selectedMenuKey);
  // const handleListItemClick = (
  //   event: React.MouseEvent<HTMLLIElement, MouseEvent>,
  //   menuKey: string,
  // ) => {
  //   setSelectedMenuKey(menuKey);
  // };
  // onClick={(event) => handleListItemClick(event, item.text)}

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
              key={menuItem.subHeader + index}
              sx={{ mb: 3 }}
            >
              {menuItem.items.map((item, index) => (
                <ListItem key={item.text + index} sx={{ display: "flex", p: 0 }}>
                  <Link href={prefix + "/" + item.link}>
                    <Button startIcon={item.icon}
                      sx={{
                        color: selectedMenuKey === item.link ? "primary.main" : "text.secondary",
                        fontWeight: selectedMenuKey === item.link ? "fontWeightBold" : "fontWeightMedium",
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
                  </Link>
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