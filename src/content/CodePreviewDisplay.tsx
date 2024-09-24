import React from "react";
import {
  Text,
  useTheme,
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
  renderSideBarItem,
  RenderTabsList,
  RenderVariations,
} from "../helpers/helpers";

const CODEPREVIEW = i18n.codepreview;
const CodePreviewDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const variationRefs = Array.from({ length: 2 }, () =>
    React.createRef<HTMLDivElement>()
  );
  const propsRef = Array.from({ length: 10 }, () =>
    React.createRef<HTMLDivElement>()
  );
  const [selectedTab, setSelectedTab] = React.useState("usage");
  const [selectedVariationSideBarItem, setSelectedVariationSideBarItem] =
    React.useState(0);
  const [selectedPropsSideBarItem, setSeletedPropsSideBarItem] =
    React.useState(0);

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";

  React.useEffect(() => {
    const handleScroll = () => {
      if (selectedTab === "usage") {
        for (let i = 0; i < variationRefs.length; i++) {
          if (variationRefs[i].current?.getBoundingClientRect().top! > 0) {
            setSelectedVariationSideBarItem(i);
            return;
          }
        }
      } else if (selectedTab === "props") {
        for (let i = 0; i < propsRef.length; i++) {
          if (propsRef[i].current?.getBoundingClientRect().top! > 0) {
            setSeletedPropsSideBarItem(i);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [variationRefs, propsRef, selectedTab]);

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
        <Tabs color="primary" style={{ marginTop: "2rem" }}  value={selectedTab} onChange={(value) => setSelectedTab(value)}>
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
                ref={variationRefs[0]}
                label={CODEPREVIEW.usage.installation.label}
                text={CODEPREVIEW.usage.installation.description}
              />
              <RenderVariations
                ref={variationRefs[1]}
                label={CODEPREVIEW.usage.default.label}
                description={CODEPREVIEW.usage.default.description}
                code={CODE_1}
                text={TEXT_1}
              />

              {renderSideBarItem([CODEPREVIEW.usage.installation.label, CODEPREVIEW.usage.default.label], selectedVariationSideBarItem, variationRefs)}
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
                ref={propsRef[0]}
                propName={CODEPREVIEW.props.code.name}
                description={CODEPREVIEW.props.code.description}
                type={CODEPREVIEW.props.code.type}
                defaultValue={CODEPREVIEW.props.code.default}
              />

              {renderSideBarItem([CODEPREVIEW.props.code.name], selectedPropsSideBarItem, propsRef)}
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

