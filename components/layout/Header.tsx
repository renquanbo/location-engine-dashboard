import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Badge } from '@mui/material';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';

const Logo = styled.div`
    height: 32px;
    margin: 16px;
`;

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ borderBottom: "1px solid rgba(145, 158, 171, 0.24)", boxShadow: "none", backgroundImage: "none", zIndex: "1300" }}>
        <Toolbar>
          <Image src="/images/bcd-logo-blue-small.png" alt="logo" width={60} height={40} ></Image>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Badge badgeContent={5} color="warning" sx={{mr: "22px"}}>
            <NotificationsRoundedIcon sx={{ fontSize: 30 }} />
          </Badge>
          <Avatar alt="avatar" src="/images/avatar.png" sx={{ mr: "42px", height: "28px", width: "28px" }} />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;