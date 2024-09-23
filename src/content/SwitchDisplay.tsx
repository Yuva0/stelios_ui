import React from "react";
import {
  Text,
  useTheme,
  SideBar,
  SideBarItem,
  Tabs,
  TabPanels,
  TabPanel,
  FormControlLabel,
  Switch
} from "stelios";
import i18n from "../i18n/i18n_en.json";
import {
  RenderBreadcrumbsForComponent,
  RenderComponentHeading,
  RenderProps,
  RenderTabsList,
  RenderVariations,
} from "../helpers/helpers";

const SWITCH = i18n.switch;
const SwitchDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";

  return (
    <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 22rem)" }}>
      <RenderBreadcrumbsForComponent
        name={SWITCH.title}
        path={SWITCH.path}
      />
      <div style={{ padding: "1rem" }}>
        <RenderComponentHeading
          title={SWITCH.title}
          description={SWITCH.description}
        />
        <Tabs color="primary" style={{ marginTop: "2rem" }} value="usage">
          {RenderTabsList()}

          <TabPanels>
            <div
              style={{
                height: "1px",
                width: "100%",
                backgroundColor: colorPalette.primary.accentScale[9],
                marginTop: "1rem",
              }}
            />
            <TabPanel value="usage">
              <RenderVariations
                label={SWITCH.usage.installation.label}
                text={SWITCH.usage.installation.description}
              />
              <RenderVariations
                label={SWITCH.usage.sizes.label}
                description={SWITCH.usage.sizes.description}
                code={CODE_1}
                text={TEXT_1}
              />

              <SideBar style={{ width: "10rem", top: "5rem" }}>
                <SideBarItem color="primary" selected>
                  Installation
                </SideBarItem>
                <SideBarItem color="primary">Sizes</SideBarItem>
              </SideBar>
            </TabPanel>
            <TabPanel value="props">
              <Text
                preciseColor={textColor}
                size="large"
                style={{ marginTop: "2rem" }}
              >
                {SWITCH.props._label}
              </Text>

              <RenderProps
                propName={SWITCH.props.size.name}
                description={SWITCH.props.size.description}
                type={SWITCH.props.size.type}
                defaultValue={SWITCH.props.size.default}
              />
              <RenderProps
                propName={SWITCH.props.color.name}
                description={SWITCH.props.color.description}
                type={SWITCH.props.color.type}
                defaultValue={SWITCH.props.color.default}
              />
              <RenderProps
                propName={SWITCH.props.value.name}
                description={SWITCH.props.value.description}
                type={SWITCH.props.value.type}
                defaultValue={SWITCH.props.value.default}
              />
              <RenderProps
                propName={SWITCH.props.disabled.name}
                description={SWITCH.props.disabled.description}
                type={SWITCH.props.disabled.type}
                defaultValue={SWITCH.props.disabled.default}
              />
              <RenderProps
                propName={SWITCH.props.label.name}
                description={SWITCH.props.label.description}
                type={SWITCH.props.label.type}
                defaultValue={SWITCH.props.label.default}
              />

              <SideBar style={{ width: "10rem", top: "5rem" }}>
                <SideBarItem color="primary">size</SideBarItem>
                <SideBarItem color="primary">width</SideBarItem>
                <SideBarItem color="primary">value</SideBarItem>
                <SideBarItem color="primary">children</SideBarItem>
                <SideBarItem color="primary">onClick</SideBarItem>
              </SideBar>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};
export default SwitchDisplay;

const CODE_1 = (
  <div
    style={{
      display: "flex",
      gap: "2rem",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
      <FormControlLabel color="component" control={<Switch />} size="small" label="Switch Label"/>
      <FormControlLabel color="component" control={<Switch />} size="medium" label="Switch Label"/>
      <FormControlLabel color="component" control={<Switch />} size="large" label="Switch Label"/>
  </div>
);
const TEXT_1 = `<FormControlLabel control={<Switch />} size="small" label="Switch Label"/>
<FormControlLabel control={<Switch />} size="medium" label="Switch Label"/>
<FormControlLabel control={<Switch />} size="large" label="Switch Label"/>
`;
