import { Box } from "@mui/system";
import React from "react";
import Content from "./Content";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppLayout = (props: React.PropsWithChildren<any>) => {
  const { children } = props;
  return (
    <Box sx={{ bgcolor: "background.default", height: "100vh", overflow: "hidden" }}>
      <Header></Header>
      <Box sx={{ display: 'flex' }}>
        <Sidebar></Sidebar>
        <Content>
          {children}
        </Content>
      </Box>
    </Box>
  )
}

export default AppLayout;