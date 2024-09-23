import React from "react";
import {
  Text,
  useTheme,
  SideBar,
  SideBarItem,
  Tabs,
  TabPanels,
  TabPanel,
  Checkbox,
  FormControlLabel
} from "stelios";
import i18n from "../i18n/i18n_en.json";
import {
  RenderBreadcrumbsForComponent,
  RenderComponentHeading,
  RenderProps,
  RenderTabsList,
  RenderVariations,
} from "../helpers/helpers";

const CHECKBOX = i18n.checkbox;
const CheckboxDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";

  return (
    <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 22rem)" }}>
      <RenderBreadcrumbsForComponent
        name={CHECKBOX.title}
        path={CHECKBOX.path}
      />
      <div style={{ padding: "1rem" }}>
        <RenderComponentHeading
          title={CHECKBOX.title}
          description={CHECKBOX.description}
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
                label={CHECKBOX.usage.installation.label}
                text={CHECKBOX.usage.installation.description}
              />
              <RenderVariations
                label={CHECKBOX.usage.sizes.label}
                description={CHECKBOX.usage.sizes.description}
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
                {CHECKBOX.props._label}
              </Text>

              <RenderProps
                propName={CHECKBOX.props.size.name}
                description={CHECKBOX.props.size.description}
                type={CHECKBOX.props.size.type}
                defaultValue={CHECKBOX.props.size.default}
              />
              <RenderProps
                propName={CHECKBOX.props.color.name}
                description={CHECKBOX.props.color.description}
                type={CHECKBOX.props.color.type}
                defaultValue={CHECKBOX.props.color.default}
              />
              <RenderProps
                propName={CHECKBOX.props.value.name}
                description={CHECKBOX.props.value.description}
                type={CHECKBOX.props.value.type}
                defaultValue={CHECKBOX.props.value.default}
              />
              <RenderProps
                propName={CHECKBOX.props.disabled.name}
                description={CHECKBOX.props.disabled.description}
                type={CHECKBOX.props.disabled.type}
                defaultValue={CHECKBOX.props.disabled.default}
              />
              <RenderProps
                propName={CHECKBOX.props.label.name}
                description={CHECKBOX.props.label.description}
                type={CHECKBOX.props.label.type}
                defaultValue={CHECKBOX.props.label.default}
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
export default CheckboxDisplay;

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
    <FormControlLabel color="component" control={<Checkbox />} label="Option 1" />
    <FormControlLabel color="component" control={<Checkbox />} label="Option 2" />
    <FormControlLabel color="component" control={<Checkbox />} label="Option 3" />
  </div>
);
const TEXT_1 = `<FormControlLabel control={<Checkbox />} label="Option 1" />
<FormControlLabel control={<Checkbox />} label="Option 2" />
<FormControlLabel control={<Checkbox />} label="Option 3" />
`;
