import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import React from "react";

const HeaderOffset = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...(theme.mixins.toolbar),
}));

interface IProps {
  open: boolean;
  sideBarWidth: number;
}

const Content = (props: React.PropsWithChildren<any> & IProps) => {
  const { children } = props;
  const marginLeft = props.open ? '0px' : `-${props.sideBarWidth}px`;
  return (
    <Box component="main" sx={{ flexGrow: 1, height: "100%", overflow: "auto" , marginLeft: marginLeft}}>
      <HeaderOffset />
      <Box sx={{p: 3}}>
        {children}
      </Box>
    </Box>
  )
}

export default Content;