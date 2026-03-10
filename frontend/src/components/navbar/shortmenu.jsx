import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import DashboardIcon from '@mui/icons-material/Dashboard';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link,useLocation } from 'react-router-dom';



export default function ShortMenu() {
 

  const handlelocation = useLocation();
  const path = location.pathname
  console.log(path)

  return (
    <>
    
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      
    >
      
      
      <ListItemButton  component={Link} to="/" selected={path == "/"} sx={{display:'flex',justifyContent:'center'}}>
        <ListItemIcon sx={{display:'flex',justifyContent:'center'}}> 
          <DashboardIcon />
        </ListItemIcon>
       
      </ListItemButton>
      
      <ListItemButton componet ={Link} to ="/Create" selected={path == "/Create"} sx={{display:'flex',justifyContent:'center'}} >
        <AddBoxIcon sx={{display:'flex',justifyContent:'center'}}>
          <DashboardIcon />
        </AddBoxIcon>
       
      </ListItemButton>
      
    </List>

   
      
      
      
    </>
  );
}
