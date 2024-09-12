import React from "react";
import { IconMoon, IconSettings, IconSun } from "@tabler/icons-react";
import {
  Button,
  Collapsible,
  ColorPicker,
  Drawer,
  IconButton,
  Text,
  ToggleButton,
  ToggleButtonGroup,
  useTheme,
  useUpdateTheme,
} from "stelios";
import styled from "styled-components";
import colors from "../../tokens/colors.json";

const StyledDrawerChildren = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const StyledDrawerChildrenItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Settings = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const colorPalette = useTheme().theme!.colorPalette;
  const [appearance, setAppearance] = React.useState<"light" | "dark">(
    colorPalette.primary.appearance
  );

  const [primaryColor, setPrimaryColor] = React.useState(
    colorPalette.primary.main
  );
  const [componentColor, setComponentColor] = React.useState(
    colorPalette.component.main
  );
  const updateTheme = useUpdateTheme();

  const _handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
  const _handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const _handleAppearanceChange = (e: React.MouseEvent, value?: string) => {
    if (!value || (value !== "light" && value !== "dark")) return;

    setAppearance(value);
    updateTheme({
      appearance: value,
      accents: {
        primary: primaryColor,
        component: componentColor,
      },
    });
  };
  const _handlePrimaryColorChange = (color?: string) => {
    if (!color) return;
    setPrimaryColor(color);
    updateTheme({
      appearance,
      accents: {
        primary: color,
        component: componentColor,
      },
    });
  };
  const _handleComponentColorChange = (color?: string) => {
    if (!color) return;
    setComponentColor(color);
    updateTheme({
      appearance,
      accents: {
        primary: primaryColor,
        component: color,
      },
    });
  }

  const _onClickRevert = () => {
    setAppearance(colors.appearance as "light" | "dark");
    setPrimaryColor(colors.accent.primary);
    setComponentColor(colors.accent.component);
    updateTheme({
      appearance: colors.appearance as "light" | "dark",
      accents: {
        primary: colors.accent.primary,
        component: colors.accent.component,
      },
    });
  };

  return (
    <>
      <IconButton
        size="small"
        variant="soft"
        alt="settings"
        color="primary"
        icon={<IconSettings />}
        onClick={_handleDrawerOpen}
      />
      <Drawer
        open={drawerOpen}
        title={<Text color="primary">Settings</Text>}
        size="small"
        position="right"
        onClose={_handleDrawerClose}
        color="primary"
        style={{ backgroundColor: colorPalette.primary.accentScale[1] }}
      >
        <StyledDrawerChildren>
          <StyledDrawerChildrenItem>
            <Text color="primary" variant="paragraph">
              Appearance
            </Text>
            <ToggleButtonGroup
              color="primary"
              value={appearance}
              width="100%"
              onClick={_handleAppearanceChange}
            >
              <ToggleButton value="light">
                <IconSun />
                <Text disableColor variant="span">
                  Light
                </Text>
              </ToggleButton>
              <ToggleButton value="dark">
                <IconMoon />
                <Text disableColor variant="span">
                  Dark
                </Text>
              </ToggleButton>
            </ToggleButtonGroup>
          </StyledDrawerChildrenItem>

          <StyledDrawerChildrenItem>
            <ColorPicker
              label="Component Color"
              color="component"
              width="100%"
              onChange={_handleComponentColorChange}
            />
          </StyledDrawerChildrenItem>

          <StyledDrawerChildrenItem>
            <Collapsible
              title="Additional Color Settings"
              color="primary"
              variant="transparent"
              open={false}
            >
              <div style={{ marginTop: "1rem" }}>
                <ColorPicker
                  label="Website Color"
                  color="primary"
                  width="100%"
                  onChange={_handlePrimaryColorChange}
                />
              </div>
            </Collapsible>
          </StyledDrawerChildrenItem>

          <StyledDrawerChildrenItem
            className="revert-button"
            style={{ marginTop: "0.5rem" }}
          >
            <Button variant="contained" color="#AD2831" onClick={_onClickRevert}>
              Revert to Default Settings
            </Button>
          </StyledDrawerChildrenItem>
        </StyledDrawerChildren>
      </Drawer>
    </>
  );
};

export default Settings;
