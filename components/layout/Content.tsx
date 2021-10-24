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

const Content = (props: React.PropsWithChildren<any>) => {
  const { children } = props;
  return (
    <Box component="main" sx={{ flexGrow: 1, height: "100%", overflow: "auto" }}>
      <HeaderOffset />
      <Box sx={{p: 3}}>
        {children}
      </Box>
    </Box>
  )
}

export default Content;