import React from "react";
import {
  Text,
  useTheme,
  Tabs,
  TabPanels,
  TabPanel,
  Slider,
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

const SLIDER = i18n.slider;
const SliderDisplay = () => {
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
    <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 22rem)" }}>
      <RenderBreadcrumbsForComponent name={SLIDER.title} path={SLIDER.path} />
      <div style={{ padding: "1rem" }}>
        <RenderComponentHeading
          title={SLIDER.title}
          description={SLIDER.description}
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
                label={SLIDER.usage.installation.label}
                text={SLIDER.usage.installation.description}
              />
              <RenderVariations
                ref={variationRefs[1]}
                label={SLIDER.usage.default.label}
                description={SLIDER.usage.default.description}
                code={CODE_1}
                text={TEXT_1}
              />

              {renderSideBarItem([SLIDER.usage.installation.label, SLIDER.usage.default.label], selectedVariationSideBarItem, variationRefs)}
            </TabPanel>
            <TabPanel value="props">
              <Text
                preciseColor={textColor}
                size="large"
                style={{ marginTop: "2rem" }}
              >
                {SLIDER.props._label}
              </Text>

              <RenderProps
                ref={propsRef[0]}
                propName={SLIDER.props.min.name}
                description={SLIDER.props.min.description}
                type={SLIDER.props.min.type}
                defaultValue={SLIDER.props.min.default}
              />

              <RenderProps
                ref={propsRef[1]}
                propName={SLIDER.props.max.name}
                description={SLIDER.props.max.description}
                type={SLIDER.props.max.type}
                defaultValue={SLIDER.props.max.default}
              />

              <RenderProps
                ref={propsRef[2]}
                propName={SLIDER.props.value.name}
                description={SLIDER.props.value.description}
                type={SLIDER.props.value.type}
                defaultValue={SLIDER.props.value.default}
              />

              {renderSideBarItem([SLIDER.props.min.name, SLIDER.props.max.name, SLIDER.props.value.name], selectedPropsSideBarItem, propsRef)}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};
export default SliderDisplay;

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
    <Slider min={0} max={100} value={40} color="component" />
  </div>
);
const TEXT_1 = `<Slider min={0} max={100} value={40} />`;
