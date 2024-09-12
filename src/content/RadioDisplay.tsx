import {
  Text,
  useTheme,
  SideBar,
  SideBarItem,
  Tabs,
  TabPanels,
  TabPanel,
  FormControlLabel,
  Radio,
  RadioGroup
} from "stelios";
import i18n from "../i18n/i18n_en.json";
import {
  RenderBreadcrumbsForComponent,
  RenderComponentHeading,
  RenderProps,
  RenderTabsList,
  RenderVariations,
} from "../helpers/helpers";

const RADIO = i18n.radio;
const RadioDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";

  return (
    <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 22rem)" }}>
      <RenderBreadcrumbsForComponent
        name={RADIO.title}
        path={RADIO.path}
      />
      <div style={{ padding: "1rem" }}>
        <RenderComponentHeading
          title={RADIO.title}
          description={RADIO.description}
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
                label={RADIO.usage.installation.label}
                text={RADIO.usage.installation.description}
              />
              <RenderVariations
                label={RADIO.usage.sizes.label}
                description={RADIO.usage.sizes.description}
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
                {RADIO.props._label}
              </Text>

              <RenderProps
                propName={RADIO.props.size.name}
                description={RADIO.props.size.description}
                type={RADIO.props.size.type}
                defaultValue={RADIO.props.size.default}
              />
              <RenderProps
                propName={RADIO.props.color.name}
                description={RADIO.props.color.description}
                type={RADIO.props.color.type}
                defaultValue={RADIO.props.color.default}
              />
              <RenderProps
                propName={RADIO.props.value.name}
                description={RADIO.props.value.description}
                type={RADIO.props.value.type}
                defaultValue={RADIO.props.value.default}
              />
              <RenderProps
                propName={RADIO.props.disabled.name}
                description={RADIO.props.disabled.description}
                type={RADIO.props.disabled.type}
                defaultValue={RADIO.props.disabled.default}
              />
              <RenderProps
                propName={RADIO.props.label.name}
                description={RADIO.props.label.description}
                type={RADIO.props.label.type}
                defaultValue={RADIO.props.label.default}
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
export default RadioDisplay;

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
    <RadioGroup size="small">
      <FormControlLabel color="component" control={<Radio />} label="Option 1" />
      <FormControlLabel color="component" control={<Radio />} label="Option 2" />
      <FormControlLabel color="component" control={<Radio />} label="Option 3" />
    </RadioGroup>
    <RadioGroup size="medium">
      <FormControlLabel color="component" control={<Radio />} label="Option 1" />
      <FormControlLabel color="component" control={<Radio />} label="Option 2" />
      <FormControlLabel color="component" control={<Radio />} label="Option 3" />
    </RadioGroup>
    <RadioGroup size="large">
      <FormControlLabel color="component" control={<Radio />} label="Option 1" />
      <FormControlLabel color="component" control={<Radio />} label="Option 2" />
      <FormControlLabel color="component" control={<Radio />} label="Option 3" />
    </RadioGroup>
  </div>
);
const TEXT_1 = `<RadioGroup>
  <FormControlLabel control={<Radio />} label="Option 1" />
  <FormControlLabel control={<Radio />} label="Option 2" />
  <FormControlLabel control={<Radio />} label="Option 3" />
</RadioGroup>

<RadioGroup size="medium">
  <FormControlLabel color="component" control={<Radio />} label="Option 1" />
  <FormControlLabel color="component" control={<Radio />} label="Option 2" />
  <FormControlLabel color="component" control={<Radio />} label="Option 3" />
</RadioGroup>

<RadioGroup size="large">
  <FormControlLabel color="component" control={<Radio />} label="Option 1" />
  <FormControlLabel color="component" control={<Radio />} label="Option 2" />
  <FormControlLabel color="component" control={<Radio />} label="Option 3" />
</RadioGroup>
`;
