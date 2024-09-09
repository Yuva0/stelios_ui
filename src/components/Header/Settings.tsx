import React from "react";
import {
  IconMoon,
  IconSettings,
  IconSun,
} from "@tabler/icons-react";
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
  const [secondaryColor, setSecondaryColor] = React.useState(
    colorPalette.secondary.main
  );
  const [dangerColor, setDangerColor] = React.useState(
    colorPalette.danger.main
  );
  const [warningColor, setWarningColor] = React.useState(
    colorPalette.warning.main
  );
  const [successColor, setSuccessColor] = React.useState(
    colorPalette.success.main
  );
  const [infoColor, setInfoColor] = React.useState(colorPalette.info.main);
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
        secondary: secondaryColor,
        danger: dangerColor,
        warning: warningColor,
        success: successColor,
        info: infoColor,
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
        secondary: secondaryColor,
        danger: dangerColor,
        warning: warningColor,
        success: successColor,
        info: infoColor,
      },
    });
  };
  const _handleSecondaryColorChange = (color?: string) => {
    if (!color) return;
    setSecondaryColor(color);
    updateTheme({
      appearance,
      accents: {
        primary: primaryColor,
        secondary: color,
        danger: dangerColor,
        warning: warningColor,
        success: successColor,
        info: infoColor,
      },
    });
  };
  const _handleDangerColorChange = (color?: string) => {
    if (!color) return;
    setDangerColor(color);
    updateTheme({
      appearance,
      accents: {
        primary: primaryColor,
        secondary: secondaryColor,
        danger: color,
        warning: warningColor,
        success: successColor,
        info: infoColor,
      },
    });
  };
  const _handleWarningColorChange = (color?: string) => {
    if (!color) return;
    setWarningColor(color);
    updateTheme({
      appearance,
      accents: {
        primary: primaryColor,
        secondary: secondaryColor,
        danger: dangerColor,
        warning: color,
        success: successColor,
        info: infoColor,
      },
    });
  };
  const _handleSuccessColorChange = (color?: string) => {
    if (!color) return;
    setSuccessColor(color);
    updateTheme({
      appearance,
      accents: {
        primary: primaryColor,
        secondary: secondaryColor,
        danger: dangerColor,
        warning: warningColor,
        success: color,
        info: infoColor,
      },
    });
  };
  const _handleInfoColorChange = (color?: string) => {
    if (!color) return;
    setInfoColor(color);
    updateTheme({
      appearance,
      accents: {
        primary: primaryColor,
        secondary: secondaryColor,
        danger: dangerColor,
        warning: warningColor,
        success: successColor,
        info: color,
      },
    });
  };

  const _onClickRevert = () => {
    setAppearance(colors.appearance as "light" | "dark");
    setPrimaryColor(colors.accent.primary);
    setSecondaryColor(colors.accent.secondary);
    setDangerColor(colors.accent.danger);
    setWarningColor(colors.accent.warning);
    setSuccessColor(colors.accent.success);
    setInfoColor(colors.accent.info);
    updateTheme({
      appearance: colors.appearance as "light" | "dark",
      accents: {
        primary: colors.accent.primary,
        secondary: colors.accent.secondary,
        danger: colors.accent.danger,
        warning: colors.accent.warning,
        success: colors.accent.success,
        info: colors.accent.info,
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
              variant="outlined"
              label={
                <Text color="primary" variant="paragraph">
                  Primary Color
                </Text>
              }
              color="primary"
              width="100%"
              onChange={_handlePrimaryColorChange}
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
                  label="Secondary Color"
                  color="secondary"
                  width="100%"
                  onChange={_handleSecondaryColorChange}
                />

                {/* <ColorPicker
                  label="Danger Color"
                  color="danger"
                  width="100%"
                  onChange={_handleDangerColorChange}
                />

                <ColorPicker
                  label="Warning Color"
                  color="warning"
                  width="100%"
                  onChange={_handleWarningColorChange}
                />

                <ColorPicker
                  label="Success Color"
                  color="success"
                  width="100%"
                  onChange={_handleSuccessColorChange}
                />

                <ColorPicker
                  label="Info Color"
                  color="info"
                  width="100%"
                  onChange={_handleInfoColorChange}
                /> */}
              </div>
            </Collapsible>
          </StyledDrawerChildrenItem>

          <StyledDrawerChildrenItem className="revert-button" style={{marginTop:"0.5rem"}}>
            <Button variant="contained" color="danger" onClick={_onClickRevert}>
              Revert to Default Settings
            </Button>
          </StyledDrawerChildrenItem>
        </StyledDrawerChildren>
      </Drawer>
    </>
  );
};

export default Settings;
