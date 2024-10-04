import { IconMenu2 } from '@tabler/icons-react';
import * as React from 'react';
import { Drawer, IconButton, Text, useTheme } from 'stelios';

const NavigationBarMobile = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const colorPalette = useTheme().theme!.colorPalette;
  const [appearance, setAppearance] = React.useState<"light" | "dark">(colorPalette.primary.appearance);
  const [primaryColor, setPrimaryColor] = React.useState(colorPalette.primary.main);
  const [componentColor, setComponentColor] = React.useState(colorPalette.component.main);

  const _handleDrawerOpen = () => {
    setDrawerOpen(true);
  }
  const _handleDrawerClose = () => {
    setDrawerOpen(false);
  }

  return (
    <>
        <IconButton
            size="small"
            variant="soft"
            color="primary"
            alt="Menu"
            icon={<IconMenu2/>}
            onClick={_handleDrawerOpen}
        />
        <Drawer
            open={drawerOpen}
            title={<Text color="primary">Menu</Text>}
            size="small"
            position="left"
            onClose={_handleDrawerClose}
            color="primary"
            style={{ backgroundColor: colorPalette.primary.accentScale[1]}}
        >
            Test
        </Drawer>
    </>
  )
}

export default NavigationBarMobile;

