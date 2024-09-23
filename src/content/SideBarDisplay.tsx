import React from "react";
import {
  Text,
  useTheme,
  SideBar,
  SideBarItem,
  Tabs,
  TabPanels,
  TabPanel,
} from "stelios";
import {
  RenderBreadcrumbsForComponent,
  RenderComponentHeading,
  RenderProps,
  RenderTabsList,
  RenderVariations,
} from "../helpers/helpers";
import i18n from "../i18n/i18n_en.json";

const SIDEBAR = i18n["sidebar"];
const NavigationBarDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";

    return (
      <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 22rem)" }}>
        <RenderBreadcrumbsForComponent name={SIDEBAR.title} path={SIDEBAR.path}/>
  
        <div style={{ padding: "1rem" }}>
          <RenderComponentHeading
            title={SIDEBAR.title}
            description={SIDEBAR.description}
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
                  label={SIDEBAR.usage.installation.label}
                  text={SIDEBAR.usage.installation.description}
                />
                <RenderVariations
                  label={SIDEBAR.usage.group.label}
                  description={SIDEBAR.usage.group.description}
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
                  {SIDEBAR.props._label}
                </Text>
                <RenderProps
                  propName={SIDEBAR.props.children.name}
                  description={
                    SIDEBAR.props.children.description
                  }
                  type={SIDEBAR.props.children.type}
                  defaultValue={
                    SIDEBAR.props.children.default
                  }
                  marginTop="1rem"
                />
                <RenderProps
                  propName={SIDEBAR.props.color.name}
                  description={
                    SIDEBAR.props.color.description
                  }
                  type={SIDEBAR.props.color.type}
                  defaultValue={
                    SIDEBAR.props.color.default
                  }
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
}
export default NavigationBarDisplay;

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
    <SideBar style={{position: "sticky", height: "100%"}} color="component">
      <SideBarItem color="primary" selected>
        Installation
      </SideBarItem>
      <SideBarItem color="primary">Sizes</SideBarItem>
    </SideBar>
  </div>
);
const TEXT_1 = `<SideBar color="component">
  <SideBarItem color="primary" selected>
    Installation
  </SideBarItem>
  <SideBarItem color="primary">Sizes</SideBarItem>
</SideBar>`;