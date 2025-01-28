import { Box, Toolbar } from '@mui/material';
import { PropTypes } from 'prop-types';

import { SideBar, NavBar } from '../components';

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', backgroundColor: '#222' }} className="animate__animated animate__fadeIn animate__faster">
      <NavBar drawerWidth={drawerWidth} />
      <SideBar drawerWidth={drawerWidth} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

JournalLayout.propTypes = {
  children: PropTypes.node
};
