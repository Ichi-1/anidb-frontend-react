import * as React from 'react';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import FontDownloadOutlinedIcon from '@mui/icons-material/FontDownloadOutlined';

export const DatabaseOptions = () => {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Database
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <FontDownloadOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Anime" />
      </ListItemButton>


    
    </List>
  );
}
