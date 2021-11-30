/* eslint-disable @next/next/link-passhref */
import React from "react";
import Link from "next/link";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Toolbar, ListSubheader, ListItemButton, Button } from "@mui/material";
import PerfectScrollbar from 'react-perfect-scrollbar'
import styled from '@emotion/styled';
import { Box } from "@mui/system";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useRouter } from "next/dist/client/router";
import { getSelectedKey, menuItems } from "../../lib/utils/menuConfig";


const StyledListSubHeader = styled(ListSubheader)`
  font-size: 0.75rem;
  font-eight: 700;
  line-height: 2.5;
  text-transform: uppercase;
  padding-left: 0px;
`
interface IProps {
  width: number;
  open: boolean;
  backButtonClick: () => void;
}


const prefix = "/dashboard"
const Sidebar = (props: IProps) => {
  const router = useRouter();
  const selectedMenuKey = getSelectedKey(router.pathname);

  return (
    <Drawer
      sx={{
        width: props.width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: props.width,
          boxSizing: 'border-box',
        }
      }}
      variant="persistent"
      anchor="left"
      open={props.open}
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
      <Box>
        <Button sx={{width: '100%'}} onClick={props.backButtonClick}>
          <ChevronLeftIcon sx={{pt: 1, pb: 1}}/>
        </Button>
      </Box>
    </Drawer>
  )
}

export default Sidebar;