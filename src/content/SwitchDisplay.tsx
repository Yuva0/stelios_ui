import React from "react";
import {
  Text,
  useTheme,
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
  renderSideBarItem,
  RenderTabsList,
  RenderVariations,
  useWindowSize,
} from "../helpers/helpers";

const SWITCH = i18n.switch;
const SwitchDisplay = () => {
  const windowSize = useWindowSize();
  const mobile = windowSize.width < 768;
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const variationRefs = Array.from({ length: 3 }, () =>
    React.createRef<HTMLDivElement>()
  );
  const propsRef = Array.from({ length: 11 }, () =>
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
    <div style={{ margin: "1.5rem 0 4rem 0", width: mobile ? "calc(100% - 12rem)" : "calc(100% - 22rem)"}}>
      <RenderBreadcrumbsForComponent
        name={SWITCH.title}
        path={SWITCH.path}
      />
      <div style={{ padding: "1rem" }}>
        <RenderComponentHeading
          title={SWITCH.title}
          description={SWITCH.description}
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
                label={SWITCH.usage.installation.label}
                text={SWITCH.usage.installation.description}
              />
              <RenderVariations
                ref={variationRefs[1]}
                label={SWITCH.usage.sizes.label}
                description={SWITCH.usage.sizes.description}
                code={CODE_1}
                text={TEXT_1}
              />

              {!mobile && renderSideBarItem([SWITCH.usage.installation.label, SWITCH.usage.sizes.label], selectedVariationSideBarItem, variationRefs)}
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
                ref={propsRef[0]}
                propName={SWITCH.props.size.name}
                description={SWITCH.props.size.description}
                type={SWITCH.props.size.type}
                defaultValue={SWITCH.props.size.default}
              />
              <RenderProps
                ref={propsRef[1]}
                propName={SWITCH.props.color.name}
                description={SWITCH.props.color.description}
                type={SWITCH.props.color.type}
                defaultValue={SWITCH.props.color.default}
              />
              <RenderProps
                ref={propsRef[2]}
                propName={SWITCH.props.value.name}
                description={SWITCH.props.value.description}
                type={SWITCH.props.value.type}
                defaultValue={SWITCH.props.value.default}
              />
              <RenderProps
                ref={propsRef[3]}
                propName={SWITCH.props.disabled.name}
                description={SWITCH.props.disabled.description}
                type={SWITCH.props.disabled.type}
                defaultValue={SWITCH.props.disabled.default}
              />
              <RenderProps
                ref={propsRef[4]}
                propName={SWITCH.props.label.name}
                description={SWITCH.props.label.description}
                type={SWITCH.props.label.type}
                defaultValue={SWITCH.props.label.default}
              />

              {!mobile && renderSideBarItem([SWITCH.props.size.name, SWITCH.props.color.name, SWITCH.props.value.name, SWITCH.props.disabled.name, SWITCH.props.label.name], selectedPropsSideBarItem, propsRef)}
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
