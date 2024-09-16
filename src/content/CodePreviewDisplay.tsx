import {
  Text,
  useTheme,
  SideBar,
  SideBarItem,
  Tabs,
  TabPanels,
  TabPanel,
  Checkbox,
  FormControlLabel,
  CodePreview,
} from "stelios";
import i18n from "../i18n/i18n_en.json";
import {
  RenderBreadcrumbsForComponent,
  RenderComponentHeading,
  RenderProps,
  RenderTabsList,
  RenderVariations,
} from "../helpers/helpers";

const CODEPREVIEW = i18n.codepreview;
const CodePreviewDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";

  return (
    <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 22rem)" }}>
      <RenderBreadcrumbsForComponent
        name={CODEPREVIEW.title}
        path={CODEPREVIEW.path}
      />
      <div style={{ padding: "1rem" }}>
        <RenderComponentHeading
          title={CODEPREVIEW.title}
          description={CODEPREVIEW.description}
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
                label={CODEPREVIEW.usage.installation.label}
                text={CODEPREVIEW.usage.installation.description}
              />
              <RenderVariations
                label={CODEPREVIEW.usage.default.label}
                description={CODEPREVIEW.usage.default.description}
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
                {CODEPREVIEW.props._label}
              </Text>

              <RenderProps
                propName={CODEPREVIEW.props.code.name}
                description={CODEPREVIEW.props.code.description}
                type={CODEPREVIEW.props.code.type}
                defaultValue={CODEPREVIEW.props.code.default}
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
export default CodePreviewDisplay;

const TEXT_DEMO_1 = `<FormControlLabel control={<Checkbox />} label="Option 1" />
<FormControlLabel control={<Checkbox />} label="Option 2" />
<FormControlLabel control={<Checkbox />} label="Option 3" />`;

const CODE_DEMO_1 = (
  <div
    style={{
      display: "flex",
      gap: "2rem",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <FormControlLabel
      color="component"
      control={<Checkbox />}
      label="Option 1"
    />
    <FormControlLabel
      color="component"
      control={<Checkbox />}
      label="Option 2"
    />
    <FormControlLabel
      color="component"
      control={<Checkbox />}
      label="Option 3"
    />
  </div>
);

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
    <CodePreview color="component" code={CODE_DEMO_1} text={TEXT_DEMO_1} language="jsx"/>
  </div>
);
const TEXT_1 = `const TEXT_DEMO_1 = \`<FormControlLabel control={<Checkbox />} label="Option 1" />
<FormControlLabel control={<Checkbox />} label="Option 2" />
<FormControlLabel control={<Checkbox />} label="Option 3" />\`;

const CODE_DEMO_1 = (
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

<CodePreview code={CODE_DEMO_1} text={TEXT_DEMO_1} language="jsx"/>`;

