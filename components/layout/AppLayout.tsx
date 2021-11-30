import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import withAuth from "../hoc/withAuth";
import Content from "./Content";
import Header from "./Header";
import Sidebar from "./Sidebar";

const drawerWidth = 200;

const AppLayout = (props: React.PropsWithChildren<any>) => {
  const { children } = props;
  const isLargeThanMediumWidth = useMediaQuery('(min-width:600px)');
  const [openSidebar, setOpenSidebar] = useState(isLargeThanMediumWidth);

  const handleBackButtonClick = () => {
    setOpenSidebar(false);
  };

  const handleMenuButtonClick = () => {
    setOpenSidebar(true);
  }

  useEffect(() => {
    setOpenSidebar(isLargeThanMediumWidth);
  }, [isLargeThanMediumWidth])

  return (
    <Box>
      <Header open={openSidebar} menuButtonClick={handleMenuButtonClick}></Header>
      <Box sx={{ display: 'flex', bgcolor: "background.default", height: "100vh", overflow: "hidden" }}>
        <Sidebar backButtonClick={handleBackButtonClick} open={openSidebar} width={drawerWidth}></Sidebar>
        {/* {openSidebar ? <Sidebar backButtonClick={handleBackButtonClick} open={openSidebar}></Sidebar> : <></> }  */}
        <Content open={openSidebar} sideBarWidth={drawerWidth}>
          {children}
        </Content>
      </Box>
    </Box>
  )
}

export default withAuth(AppLayout);