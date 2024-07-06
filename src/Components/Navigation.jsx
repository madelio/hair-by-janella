import { useState, useEffect } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// TODO: scrolling doesn't hightlight the bar
const Navigation = () => {
    const menuItems = [ ['Home', '/'], ['Services', '/services'], ['Booking', '/404']];

    return (
      <Breadcrumbs separator={<NavigateNextIcon fontSize='small'/>}>
          {menuItems.map(([ title, url]) => <Link underline="hover" color="inherit" href={url}>{title}</Link>)}
      </Breadcrumbs>
    )
};

export default Navigation;