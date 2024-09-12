import {
  Text,
  useTheme,
  SideBar,
  SideBarItem,
  Tabs,
  TabPanels,
  TabPanel,
  ToggleButtonGroup,
  ToggleButton,
} from "stelios";
import {
  RenderBreadcrumbsForComponent,
  RenderComponentHeading,
  RenderProps,
  RenderTabsList,
  RenderVariations,
} from "../helpers/helpers";
import i18n from "../i18n/i18n_en.json";

const TOGGLEBUTTON = i18n.toggleButton;
const ToggleButtonDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";

  return (
    <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 22rem)" }}>
      <RenderBreadcrumbsForComponent name={TOGGLEBUTTON.title} path={TOGGLEBUTTON.path}/>

      <div style={{ padding: "1rem" }}>
        <RenderComponentHeading
          title={TOGGLEBUTTON.title}
          description={TOGGLEBUTTON.description}
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
                label={TOGGLEBUTTON.usage.installation.label}
                text={TOGGLEBUTTON.usage.installation.description}
              />
              <RenderVariations
                label={TOGGLEBUTTON.usage.sizes.label}
                description={TOGGLEBUTTON.usage.sizes.description}
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
                {TOGGLEBUTTON.props.toggleButtonGroup.label}
              </Text>
              <RenderProps
                propName={TOGGLEBUTTON.props.toggleButtonGroup.children.name}
                description={
                  TOGGLEBUTTON.props.toggleButtonGroup.children.description
                }
                type={TOGGLEBUTTON.props.toggleButtonGroup.children.type}
                defaultValue={
                  TOGGLEBUTTON.props.toggleButtonGroup.children.default
                }
                marginTop="1rem"
              />
              <RenderProps
                propName={TOGGLEBUTTON.props.toggleButtonGroup.value.name}
                description={
                  TOGGLEBUTTON.props.toggleButtonGroup.value.description
                }
                type={TOGGLEBUTTON.props.toggleButtonGroup.value.type}
                defaultValue={
                  TOGGLEBUTTON.props.toggleButtonGroup.value.default
                }
              />
              <RenderProps
                propName={TOGGLEBUTTON.props.toggleButtonGroup.width.name}
                description={
                  TOGGLEBUTTON.props.toggleButtonGroup.width.description
                }
                type={TOGGLEBUTTON.props.toggleButtonGroup.width.type}
                defaultValue={
                  TOGGLEBUTTON.props.toggleButtonGroup.width.default
                }
              />
              <RenderProps
                propName={TOGGLEBUTTON.props.toggleButtonGroup.size.name}
                description={
                  TOGGLEBUTTON.props.toggleButtonGroup.size.description
                }
                type={TOGGLEBUTTON.props.toggleButtonGroup.size.type}
                defaultValue={TOGGLEBUTTON.props.toggleButtonGroup.size.default}
              />
              <RenderProps
                propName={TOGGLEBUTTON.props.toggleButtonGroup.color.name}
                description={
                  TOGGLEBUTTON.props.toggleButtonGroup.color.description
                }
                type={TOGGLEBUTTON.props.toggleButtonGroup.color.type}
                defaultValue={
                  TOGGLEBUTTON.props.toggleButtonGroup.color.default
                }
              />
              <RenderProps
                propName={TOGGLEBUTTON.props.toggleButtonGroup.onClick.name}
                description={
                  TOGGLEBUTTON.props.toggleButtonGroup.onClick.description
                }
                type={TOGGLEBUTTON.props.toggleButtonGroup.onClick.type}
                defaultValue={
                  TOGGLEBUTTON.props.toggleButtonGroup.onClick.default
                }
                wordSpacing="4px"
              />

              <Text
                preciseColor={textColor}
                size="large"
                style={{ marginTop: "3rem" }}
              >
                {TOGGLEBUTTON.props.toggleButton.label}
              </Text>
              <RenderProps
                propName={TOGGLEBUTTON.props.toggleButton.index.name}
                description={TOGGLEBUTTON.props.toggleButton.index.description}
                type={TOGGLEBUTTON.props.toggleButton.index.type}
                defaultValue={TOGGLEBUTTON.props.toggleButton.index.default}
                marginTop="1rem"
              />
              <RenderProps
                propName={TOGGLEBUTTON.props.toggleButton.value.name}
                description={TOGGLEBUTTON.props.toggleButton.value.description}
                type={TOGGLEBUTTON.props.toggleButton.value.type}
                defaultValue={TOGGLEBUTTON.props.toggleButton.value.default}
              />
              <RenderProps
                propName={TOGGLEBUTTON.props.toggleButton.children.name}
                description={
                  TOGGLEBUTTON.props.toggleButton.children.description
                }
                type={TOGGLEBUTTON.props.toggleButton.children.type}
                defaultValue={TOGGLEBUTTON.props.toggleButton.children.default}
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
export default ToggleButtonDisplay;

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
    <ToggleButtonGroup
      color="component"
      width="400px"
      value="toggle1"
      size="small"
    >
      <ToggleButton value="toggle1">Toggle 1</ToggleButton>
      <ToggleButton value="toggle2">Toggle 2</ToggleButton>
      <ToggleButton value="toggle3">Toggle 3</ToggleButton>
    </ToggleButtonGroup>
    <ToggleButtonGroup
      color="component"
      width="400px"
      value="toggle1"
      size="medium"
    >
      <ToggleButton value="toggle1">Toggle 1</ToggleButton>
      <ToggleButton value="toggle2">Toggle 2</ToggleButton>
      <ToggleButton value="toggle3">Toggle 3</ToggleButton>
    </ToggleButtonGroup>
    <ToggleButtonGroup
      color="component"
      width="400px"
      value="toggle1"
      size="large"
    >
      <ToggleButton value="toggle1">Toggle 1</ToggleButton>
      <ToggleButton value="toggle2">Toggle 2</ToggleButton>
      <ToggleButton value="toggle3">Toggle 3</ToggleButton>
    </ToggleButtonGroup>
  </div>
);
const TEXT_1 = `<ToggleButtonGroup value="toggle1">
  <ToggleButton value="toggle1">Toggle 1</ToggleButton>
  <ToggleButton value="toggle2">Toggle 2</ToggleButton>
  <ToggleButton value="toggle3">Toggle 3</ToggleButton>
</ToggleButtonGroup>
`;
