import { AppBar, Box, IconButton, Menu, MenuItem, Tab, Tabs, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useTranslation } from 'react-i18next';
import React from 'react';

export function Navbar() {
  const [tabs, setUseTabs] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { t } = useTranslation();

  const open = Boolean(anchorEl);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setUseTabs(newValue);
  };

  const handeSettingsMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSettingsMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <IconButton size="large" edge="start" color="secondary" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Tabs
            textColor="secondary"
            indicatorColor="secondary"
            value={tabs}
            onChange={handleTabChange}
            sx={{ flexGrow: 1 }}>
            <Tab icon={<HomeIcon />} iconPosition="start" label={t('nav-item_main')} />
          </Tabs>
          <IconButton size="large" color="inherit" onClick={handeSettingsMenuClick}>
            <AccountCircle />
          </IconButton>
          <Menu
            id="settings-menu"
            open={open}
            anchorEl={anchorEl}
            onClose={handleSettingsMenuClose}>
            <MenuItem>{t('menu_settings_profile')}</MenuItem>
            <MenuItem>{t('menu_settings_logout')}</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
