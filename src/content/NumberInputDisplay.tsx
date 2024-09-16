import {
  Text,
  useTheme,
  SideBar,
  SideBarItem,
  Tabs,
  TabPanels,
  TabPanel,
  NumberInput,
} from "stelios";
import i18n from "../i18n/i18n_en.json";
import {
  RenderBreadcrumbsForComponent,
  RenderComponentHeading,
  RenderProps,
  RenderTabsList,
  RenderVariations,
} from "../helpers/helpers";

const NUMBERINPUT = i18n.numberInput;
const NumberInputDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";

  return (
    <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 22rem)" }}>
      <RenderBreadcrumbsForComponent
        name={NUMBERINPUT.title}
        path={NUMBERINPUT.path}
      />
      <div style={{ padding: "1rem" }}>
        <RenderComponentHeading
          title={NUMBERINPUT.title}
          description={NUMBERINPUT.description}
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
                label={NUMBERINPUT.usage.installation.label}
                text={NUMBERINPUT.usage.installation.description}
              />
              <RenderVariations
                label={NUMBERINPUT.usage.variants.label}
                description={NUMBERINPUT.usage.variants.description}
                code={CODE_1}
                text={TEXT_1}
              />
              <RenderVariations
                label={NUMBERINPUT.usage.sizes.label}
                description={NUMBERINPUT.usage.sizes.description}
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
                {NUMBERINPUT.props._label}
              </Text>

              <RenderProps
                propName={NUMBERINPUT.props.variant.name}
                description={NUMBERINPUT.props.variant.description}
                type={NUMBERINPUT.props.variant.type}
                defaultValue={NUMBERINPUT.props.variant.default}
                marginTop="1rem"
              />
              <RenderProps
                propName={NUMBERINPUT.props.size.name}
                description={NUMBERINPUT.props.size.description}
                type={NUMBERINPUT.props.size.type}
                defaultValue={NUMBERINPUT.props.size.default}
              />
              <RenderProps
                propName={NUMBERINPUT.props.color.name}
                description={NUMBERINPUT.props.color.description}
                type={NUMBERINPUT.props.color.type}
                defaultValue={NUMBERINPUT.props.color.default}
              />
              <RenderProps
                propName={NUMBERINPUT.props.max.name}
                description={NUMBERINPUT.props.max.description}
                type={NUMBERINPUT.props.max.type}
                defaultValue={NUMBERINPUT.props.max.default}
              />
              <RenderProps
                propName={NUMBERINPUT.props.value.name}
                description={NUMBERINPUT.props.value.description}
                type={NUMBERINPUT.props.value.type}
                defaultValue={NUMBERINPUT.props.value.default}
              />
              <RenderProps
                propName={NUMBERINPUT.props.onChange.name}
                description={NUMBERINPUT.props.min.description}
                type={NUMBERINPUT.props.min.type}
                defaultValue={NUMBERINPUT.props.min.default}
              />
              <RenderProps
                propName={NUMBERINPUT.props.value.name}
                description={NUMBERINPUT.props.value.description}
                type={NUMBERINPUT.props.value.type}
                defaultValue={NUMBERINPUT.props.value.default}
              />
              <RenderProps
                propName={NUMBERINPUT.props.label.name}
                description={NUMBERINPUT.props.label.description}
                type={NUMBERINPUT.props.label.type}
                defaultValue={NUMBERINPUT.props.label.default}
              />
              <RenderProps
                propName={NUMBERINPUT.props.onChange.name}
                description={NUMBERINPUT.props.onChange.description}
                type={NUMBERINPUT.props.onChange.type}
                defaultValue={NUMBERINPUT.props.onChange.default}
                wordSpacing="2px"
              />
              <RenderProps
                propName={NUMBERINPUT.props.onIncrement.name}
                description={NUMBERINPUT.props.onIncrement.description}
                type={NUMBERINPUT.props.onIncrement.type}
                defaultValue={NUMBERINPUT.props.onIncrement.default}
                wordSpacing="2px"
              />
              <RenderProps
                propName={NUMBERINPUT.props.onDecrement.name}
                description={NUMBERINPUT.props.onDecrement.description}
                type={NUMBERINPUT.props.onDecrement.type}
                defaultValue={NUMBERINPUT.props.onDecrement.default}
                wordSpacing="2px"
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
export default NumberInputDisplay;

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
    <NumberInput color="component" variant="contained"/>
    <NumberInput color="component" variant="outlined"/>
    <NumberInput color="component" variant="soft"/>
  </div>
);
const TEXT_1 = `<NumberInput variant="contained"/>
<NumberInput variant="outlined"/>
<NumberInput variant="soft"/>
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
    <NumberInput color="component" size="small"/>
    <NumberInput color="component" size="medium"/>
    <NumberInput color="component" size="large"/>
  </div>
);
const TEXT_2 = `<NumberInput size="small"/>
<NumberInput size="medium"/>
<NumberInput size="large"/>
`;
