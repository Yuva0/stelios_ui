import React from "react";
import {
  Text,
  useTheme,
  SideBar,
  SideBarItem,
  Tabs,
  TabPanels,
  TabPanel,
  Input,
} from "stelios";
import i18n from "../i18n/i18n_en.json";
import {
  RenderBreadcrumbsForComponent,
  RenderComponentHeading,
  RenderProps,
  RenderTabsList,
  RenderVariations,
} from "../helpers/helpers";

const INPUTTEXT = i18n.input;
const InputDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";

  return (
    <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 22rem)" }}>
      <RenderBreadcrumbsForComponent
        name={INPUTTEXT.title}
        path={INPUTTEXT.path}
      />
      <div style={{ padding: "1rem" }}>
        <RenderComponentHeading
          title={INPUTTEXT.title}
          description={INPUTTEXT.description}
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
                label={INPUTTEXT.usage.installation.label}
                text={INPUTTEXT.usage.installation.description}
              />
              <RenderVariations
                label={INPUTTEXT.usage.variants.label}
                description={INPUTTEXT.usage.variants.description}
                code={CODE_1}
                text={TEXT_1}
              />
              <RenderVariations
                label={INPUTTEXT.usage.sizes.label}
                description={INPUTTEXT.usage.sizes.description}
                code={CODE_2}
                text={TEXT_2}
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
                {INPUTTEXT.props._label}
              </Text>

              <RenderProps
                propName={INPUTTEXT.props.variant.name}
                description={INPUTTEXT.props.variant.description}
                type={INPUTTEXT.props.variant.type}
                defaultValue={INPUTTEXT.props.variant.default}
                marginTop="1rem"
              />
              <RenderProps
                propName={INPUTTEXT.props.size.name}
                description={INPUTTEXT.props.size.description}
                type={INPUTTEXT.props.size.type}
                defaultValue={INPUTTEXT.props.size.default}
              />
              <RenderProps
                propName={INPUTTEXT.props.type.name}
                description={INPUTTEXT.props.type.description}
                type={INPUTTEXT.props.type.type}
                defaultValue={INPUTTEXT.props.type.default}
              />
              <RenderProps
                propName={INPUTTEXT.props.cursor.name}
                description={INPUTTEXT.props.cursor.description}
                type={INPUTTEXT.props.cursor.type}
                defaultValue={INPUTTEXT.props.cursor.default}
              />
              <RenderProps
                propName={INPUTTEXT.props.color.name}
                description={INPUTTEXT.props.color.description}
                type={INPUTTEXT.props.color.type}
                defaultValue={INPUTTEXT.props.color.default}
              />
              <RenderProps
                propName={INPUTTEXT.props.cursor.name}
                description={INPUTTEXT.props.disableSearch.description}
                type={INPUTTEXT.props.disableSearch.type}
                defaultValue={INPUTTEXT.props.disableSearch.default}
              />
              <RenderProps
                propName={INPUTTEXT.props.disableSearch.name}
                description={INPUTTEXT.props.cursor.description}
                type={INPUTTEXT.props.cursor.type}
                defaultValue={INPUTTEXT.props.cursor.default}
              />
              <RenderProps
                propName={INPUTTEXT.props.width.name}
                description={INPUTTEXT.props.width.description}
                type={INPUTTEXT.props.width.type}
                defaultValue={INPUTTEXT.props.width.default}
              />
              <RenderProps
                propName={INPUTTEXT.props.value.name}
                description={INPUTTEXT.props.value.description}
                type={INPUTTEXT.props.value.type}
                defaultValue={INPUTTEXT.props.value.default}
              />
              <RenderProps
                propName={INPUTTEXT.props.disabled.name}
                description={INPUTTEXT.props.disabled.description}
                type={INPUTTEXT.props.disabled.type}
                defaultValue={INPUTTEXT.props.disabled.default}
              />
              <RenderProps
                propName={INPUTTEXT.props.fullWidth.name}
                description={INPUTTEXT.props.fullWidth.description}
                type={INPUTTEXT.props.fullWidth.type}
                defaultValue={INPUTTEXT.props.fullWidth.default}
              />
              <RenderProps
                propName={INPUTTEXT.props.label.name}
                description={INPUTTEXT.props.label.description}
                type={INPUTTEXT.props.label.type}
                defaultValue={INPUTTEXT.props.label.default}
              />
              <RenderProps
                propName={INPUTTEXT.props.labelPosition.name}
                description={INPUTTEXT.props.labelPosition.description}
                type={INPUTTEXT.props.labelPosition.type}
                defaultValue={INPUTTEXT.props.labelPosition.default}
              />
              <RenderProps
                propName={INPUTTEXT.props.placeholder.name}
                description={INPUTTEXT.props.placeholder.description}
                type={INPUTTEXT.props.placeholder.type}
                defaultValue={INPUTTEXT.props.placeholder.default}
              />
              <RenderProps
                propName={INPUTTEXT.props.leadingIcon.name}
                description={INPUTTEXT.props.leadingIcon.description}
                type={INPUTTEXT.props.leadingIcon.type}
                defaultValue={INPUTTEXT.props.leadingIcon.default}
              />
              <RenderProps
                propName={INPUTTEXT.props.trailingIcon.name}
                description={INPUTTEXT.props.trailingIcon.description}
                type={INPUTTEXT.props.trailingIcon.type}
                defaultValue={INPUTTEXT.props.trailingIcon.default}
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
export default InputDisplay;

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
    <Input color="component" variant="contained" placeholder="Search here" />
    <Input color="component" variant="outlined" placeholder="Search here" />
    <Input color="component" variant="soft" placeholder="Search here" />
  </div>
);
const TEXT_1 = `<Input variant="contained" placeholder="Search here" />
<Input variant="outlined" placeholder="Search here" />
<Input variant="soft" placeholder="Search here" />
`;

const CODE_2 = (
  <div
    style={{
      display: "flex",
      gap: "2rem",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Input color="component" size="small" placeholder="Search here" />
    <Input color="component" size="medium" placeholder="Search here" />
    <Input color="component" size="large" placeholder="Search here" />
  </div>
);
const TEXT_2 = `<Input size="small" placeholder="Search here" />
<Input size="medium" placeholder="Search here" />
<Input size="large" placeholder="Search here" />
`;
