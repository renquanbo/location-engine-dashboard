import { Box } from "@mui/system";
import React from "react";
import withAuth from "../hoc/withAuth";
import Content from "./Content";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppLayout = (props: React.PropsWithChildren<any>) => {
  const { children } = props;
  return (
    <Box sx={{  }}>
      <Header></Header>
      <Box sx={{ display: 'flex' ,bgcolor: "background.default", height: "100vh", overflow: "hidden"}}>
        <Sidebar></Sidebar>
        <Content>
          {children}
        </Content>
      </Box>
    </Box>
  )
}

export default withAuth(AppLayout);