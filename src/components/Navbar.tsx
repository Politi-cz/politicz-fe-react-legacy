import { AppBar, Box, IconButton, Tab, Tabs, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';

export function Navbar() {
  const [tabs, setUseTabs] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setUseTabs(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Tabs
            textColor='secondary'
            indicatorColor='secondary'
            value={tabs}
            onChange={handleTabChange}
          >
            <Tab icon={<HomeIcon />} iconPosition="start" label="start" />
            <Tab icon={<HomeIcon />} iconPosition="start" label="start" />

          </Tabs>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
