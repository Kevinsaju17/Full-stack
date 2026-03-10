import {React,useeState} from 'react';
import Box from '@mui/material/Box';

import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from './menu';
import logo from '../../assets/football_logo.png'
import { useState } from 'react';
import ShortMenu from './shortmenu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';



const drawerWidth = 240;
const shortDrawerWidth = 80;

export default function Navbar({content}) {     
  
  const [isBigMenu, setIsBigMenu]= useState(false)//added content as props to render the content of the page in the main section of the layout

  const changeMenu = ()=>{
    setIsBigMenu(!isBigMenu)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton onClick ={changeMenu}sx={{marginRight:'30px',color:'White'}}>
            {isBigMenu ? <MenuOpenIcon /> : <MenuIcon />}


          </IconButton>
          <img  src={logo} width='150' height='60' />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: isBigMenu?drawerWidth:shortDrawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: isBigMenu ? drawerWidth : shortDrawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        {isBigMenu ? <Menu/>:<ShortMenu/>}
                                                                 
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
         {content}
      </Box>
    </Box>
  );
}
