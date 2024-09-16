import {
  Text,
  useTheme,
  SideBar,
  SideBarItem,
  Tabs,
  TabPanels,
  TabPanel,
  CodeDisplay,
} from "stelios";
import i18n from "../i18n/i18n_en.json";
import {
  RenderBreadcrumbsForComponent,
  RenderComponentHeading,
  RenderProps,
  RenderTabsList,
  RenderVariations,
} from "../helpers/helpers";

const CODEDISPLAY = i18n.codedisplay;
const CodeDisplayDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";

  return (
    <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 22rem)" }}>
      <RenderBreadcrumbsForComponent
        name={CODEDISPLAY.title}
        path={CODEDISPLAY.path}
      />
      <div style={{ padding: "1rem" }}>
        <RenderComponentHeading
          title={CODEDISPLAY.title}
          description={CODEDISPLAY.description}
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
                label={CODEDISPLAY.usage.installation.label}
                text={CODEDISPLAY.usage.installation.description}
              />
              <RenderVariations
                label={CODEDISPLAY.usage.default.label}
                description={CODEDISPLAY.usage.default.description}
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
                {CODEDISPLAY.props._label}
              </Text>

              <RenderProps
                propName={CODEDISPLAY.props.code.name}
                description={CODEDISPLAY.props.code.description}
                type={CODEDISPLAY.props.code.type}
                defaultValue={CODEDISPLAY.props.code.default}
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
export default CodeDisplayDisplay;

const TEXT_DEMO_1 = `<FormControlLabel control={<Checkbox />} label="Option 1" />
<FormControlLabel control={<Checkbox />} label="Option 2" />
<FormControlLabel control={<Checkbox />} label="Option 3" />`;

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
    <CodeDisplay color="component" text={TEXT_DEMO_1} language="jsx"/>
  </div>
);
const TEXT_1 = `const TEXT_DEMO_1 = \`<FormControlLabel control={<Checkbox />} label="Option 1" />\n<FormControlLabel control={<Checkbox />} label="Option 2" />\n<FormControlLabel control={<Checkbox />} label="Option 3" />\`;

<CodeDisplay color="component" text={TEXT_DEMO_1} language="jsx"/>`;

