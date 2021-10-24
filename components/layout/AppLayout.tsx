import { Box } from "@mui/system";
import React from "react";
import Content from "./Content";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppLayout = (props: React.PropsWithChildren<any>) => {
  const {children} = props;
  return(
    <Box sx={{ display: 'flex', bgcolor:"background.default", height:"100vh",overflow: "hidden"}}>
      <Header></Header>
      <Sidebar></Sidebar>
      <Content>
        {children}
      </Content>
    </Box>
  )
}

export default AppLayout;