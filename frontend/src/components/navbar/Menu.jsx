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

export default function Menu() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handlelocation = useLocation();
  const path = location.pathname
  console.log(path)

  return (
    <>
    
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          football clubs
        </ListSubheader>
      }
    >
      
      
      <ListItemButton onClick={handleClick} component={Link} to="/" selected={path == "/"}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="all clubs" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          <ListItemButton sx={{ pl: 4 }} onClick={handleClick} component={Link} to="/Netherland" selected={path == "/Netherland"}>
            <DashboardCustomizeIcon>
              <StarBorder />
            </DashboardCustomizeIcon>
            <ListItemText primary="Netherland" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }} onClick={handleClick} component={Link} to="/India" selected={path == "/India"}>
            <DashboardCustomizeIcon>
              <StarBorder />
            </DashboardCustomizeIcon>
            <ListItemText primary="India" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}onClick={handleClick} component={Link} to="/NewZealand" selected={path == "/NewZealand"}>
            <DashboardCustomizeIcon>
              <StarBorder />
            </DashboardCustomizeIcon>
            <ListItemText primary="Newzealand " />  
          </ListItemButton>

        </List>

        
      </Collapse>
    </List>

    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          creating  clubs
        </ListSubheader>
      }
    >
      
      
      <ListItemButton componet ={Link} to ="/Create" selected={path == "/Create"}>
        <AddBoxIcon>
          <DashboardIcon />
        </AddBoxIcon>
        <ListItemText primary="Create Club" />
      </ListItemButton>
      
    </List>
    </>
  );
}
