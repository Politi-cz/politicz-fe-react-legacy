import { AppBar, Box, IconButton, Menu, MenuItem, Tab, Tabs, Toolbar, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useTranslation } from 'react-i18next';
import React from 'react';
import styles from './Navbar.module.scss';
import classNames from 'classnames';

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
        <Toolbar sx={{ flexDirection: 'row', alignItems: 'stretch', justifyContent: 'stretch', position: 'relative' }}>
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
          <div className={styles.flag}>
            <div className={classNames(styles.color, styles.colorWhite)}></div>
            <div className={classNames(styles.color, styles.colorBlue)}></div>
            <div className={classNames(styles.color, styles.colorRed)}></div>
          </div>
          <Button onClick={handeSettingsMenuClick} size="large" color="secondary" endIcon={<AccountCircle />}>
            Pepík
          </Button>
          <Menu id="settings-menu" open={open} anchorEl={anchorEl} onClose={handleSettingsMenuClose}>
            <MenuItem>{t('menu_settings_profile')}</MenuItem>
            <MenuItem>{t('menu_settings_logout')}</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
