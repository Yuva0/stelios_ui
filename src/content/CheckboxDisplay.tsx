import React from "react";
import {
  Text,
  useTheme,
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
  renderSideBarItem,
  RenderTabsList,
  RenderVariations,
} from "../helpers/helpers";

const CHECKBOX = i18n.checkbox;
const CheckboxDisplay = () => {
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
        name={CHECKBOX.title}
        path={CHECKBOX.path}
      />
      <div style={{ padding: "1rem" }}>
        <RenderComponentHeading
          title={CHECKBOX.title}
          description={CHECKBOX.description}
        />
        <Tabs color="primary" style={{ marginTop: "2rem" }} 
          value={selectedTab}
          onChange={(value) => setSelectedTab(value)}>
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
                label={CHECKBOX.usage.installation.label}
                text={CHECKBOX.usage.installation.description}
              />
              <RenderVariations
                ref={variationRefs[1]}
                label={CHECKBOX.usage.sizes.label}
                description={CHECKBOX.usage.sizes.description}
                code={CODE_1}
                text={TEXT_1}
              />

              {renderSideBarItem([
                CHECKBOX.usage.installation.label,
                CHECKBOX.usage.sizes.label,
              ], selectedVariationSideBarItem, variationRefs)}
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
                ref={propsRef[0]}
                propName={CHECKBOX.props.size.name}
                description={CHECKBOX.props.size.description}
                type={CHECKBOX.props.size.type}
                defaultValue={CHECKBOX.props.size.default}
              />
              <RenderProps
                ref={propsRef[1]}
                propName={CHECKBOX.props.color.name}
                description={CHECKBOX.props.color.description}
                type={CHECKBOX.props.color.type}
                defaultValue={CHECKBOX.props.color.default}
              />
              <RenderProps
                ref={propsRef[2]}
                propName={CHECKBOX.props.value.name}
                description={CHECKBOX.props.value.description}
                type={CHECKBOX.props.value.type}
                defaultValue={CHECKBOX.props.value.default}
              />
              <RenderProps
                ref={propsRef[3]}
                propName={CHECKBOX.props.disabled.name}
                description={CHECKBOX.props.disabled.description}
                type={CHECKBOX.props.disabled.type}
                defaultValue={CHECKBOX.props.disabled.default}
              />
              <RenderProps
                ref={propsRef[4]}
                propName={CHECKBOX.props.label.name}
                description={CHECKBOX.props.label.description}
                type={CHECKBOX.props.label.type}
                defaultValue={CHECKBOX.props.label.default}
              />

              {renderSideBarItem(
                [
                  CHECKBOX.props.size.name,
                  CHECKBOX.props.color.name,
                  CHECKBOX.props.value.name,
                  CHECKBOX.props.disabled.name,
                  CHECKBOX.props.label.name,
                ],
                selectedPropsSideBarItem,
                propsRef
              )}
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
