import React from "react";
import {
  Text,
  useTheme,
  SideBar,
  SideBarItem,
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
  RenderTabsList,
  RenderVariations,
} from "../helpers/helpers";

const SLIDER = i18n.slider;
const SliderDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";

  return (
    <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 22rem)" }}>
      <RenderBreadcrumbsForComponent name={SLIDER.title} path={SLIDER.path} />
      <div style={{ padding: "1rem" }}>
        <RenderComponentHeading
          title={SLIDER.title}
          description={SLIDER.description}
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
                label={SLIDER.usage.installation.label}
                text={SLIDER.usage.installation.description}
              />
              <RenderVariations
                label={SLIDER.usage.default.label}
                description={SLIDER.usage.default.description}
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
                {SLIDER.props._label}
              </Text>

              <RenderProps
                propName={SLIDER.props.min.name}
                description={SLIDER.props.min.description}
                type={SLIDER.props.min.type}
                defaultValue={SLIDER.props.min.default}
              />

              <RenderProps
                propName={SLIDER.props.max.name}
                description={SLIDER.props.max.description}
                type={SLIDER.props.max.type}
                defaultValue={SLIDER.props.max.default}
              />

              <RenderProps
                propName={SLIDER.props.value.name}
                description={SLIDER.props.value.description}
                type={SLIDER.props.value.type}
                defaultValue={SLIDER.props.value.default}
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
