import { useState, useEffect } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// TODO: scrolling doesn't hightlight the bar
const Navigation = () => {
    const menuItems = ['Home', 'Services', 'Booking'];

    return (
      <Breadcrumbs separator={<NavigateNextIcon fontSize='small'/>}>
          {menuItems.map(m => <Link underline="hover" color="inherit">{m}</Link>)}
      </Breadcrumbs>
    )
};

export default Navigation;