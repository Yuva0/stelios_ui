import React from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandStorybook,
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
import { useWindowSize } from "../../helpers/helpers";

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
  const windowSize = useWindowSize();
  const mobile = windowSize.width < 480;
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
        secondary: colors.accent.grey,
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
        secondary: colors.accent.grey,
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
        secondary: colors.accent.grey,
        component: color,
      },
    });
  };

  const _onClickRevert = () => {
    setAppearance(colors.appearance as "light" | "dark");
    setPrimaryColor(colors.accent.primary);
    setComponentColor(colors.accent.component);
    updateTheme({
      appearance: colors.appearance as "light" | "dark",
      accents: {
        primary: colors.accent.primary,
        secondary: colors.accent.grey,
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
          {mobile && (
            <div>
              <div>
                <Text color="primary">Useful Links -</Text>
              </div>
              <div style={{ margin: "0.5rem 0", display: "flex", gap: "1rem" }}>
                <IconButton
                  color="primary"
                  size="small"
                  variant="soft"
                  alt="github"
                  icon={<IconBrandGithub />}
                  onClick={() =>
                    window.open("https://yuva0.github.io/stelios/storybook")
                  }
                />
                <IconButton
                  size="small"
                  variant="soft"
                  color="primary"
                  alt="storybook"
                  icon={<IconBrandStorybook />}
                  onClick={() =>
                    window.open("https://yuva0.github.io/stelios/storybook")
                  }
                />
                <IconButton
                  size="small"
                  variant="soft"
                  color="primary"
                  alt="linkedin"
                  icon={<IconBrandLinkedin />}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/tanuj-sengupta-872a05129/"
                    )
                  }
                />
              </div>
            </div>
          )}
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
            <Button
              variant="contained"
              color="#AD2831"
              onClick={_onClickRevert}
            >
              Revert to Default Settings
            </Button>
          </StyledDrawerChildrenItem>
        </StyledDrawerChildren>
      </Drawer>
    </>
  );
};

export default Settings;
