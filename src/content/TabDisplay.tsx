import React from "react";
import {
  Text,
  useTheme,
  SideBar,
  SideBarItem,
  Tabs,
  TabPanels,
  TabPanel,
  Link,
  TabList,
  Tab
} from "stelios";
import {
  RenderBreadcrumbsForComponent,
  RenderComponentHeading,
  RenderProps,
  RenderTabsList,
  RenderVariations,
} from "../helpers/helpers";
import i18n from "../i18n/i18n_en.json";

const TAB = i18n.tab;
const TabDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";

    return (
      <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 22rem)" }}>
        <RenderBreadcrumbsForComponent name={TAB.title} path={TAB.path}/>
  
        <div style={{ padding: "1rem" }}>
          <RenderComponentHeading
            title={TAB.title}
            description={TAB.description}
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
                  label={TAB.usage.installation.label}
                  text={TAB.usage.installation.description}
                />
                <RenderVariations
                  label={TAB.usage.variants.label}
                  description={TAB.usage.variants.description}
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
                  {TAB.props._label}
                </Text>
                <RenderProps
                  propName={TAB.props.variant.name}
                  description={
                    TAB.props.variant.description
                  }
                  type={TAB.props.variant.type}
                  defaultValue={
                    TAB.props.variant.default
                  }
                  marginTop="1rem"
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
export default TabDisplay;

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
    <Tabs color="component" value="tab1" variant="contained">
      <TabList>
        <Tab value="tab1" label="Tab 1"/>
        <Tab value="tab2" label="Tab 2"/>
        <Tab value="tab3" label="Tab 3"/>
      </TabList>
      <TabPanels>
        <TabPanel value="tab1">Tab1</TabPanel>
        <TabPanel value="tab2">Tab2</TabPanel>
        <TabPanel value="tab3">Tab3</TabPanel>
      </TabPanels>
    </Tabs>
    <Tabs color="component" value="tab1" variant="outlined">
      <TabList>
        <Tab value="tab1" label="Tab 1"/>
        <Tab value="tab2" label="Tab 2"/>
        <Tab value="tab3" label="Tab 3"/>
      </TabList>
      <TabPanels>
        <TabPanel value="tab1">Tab1</TabPanel>
        <TabPanel value="tab2">Tab2</TabPanel>
        <TabPanel value="tab3">Tab3</TabPanel>
      </TabPanels>
    </Tabs>
  </div>
);
const TEXT_1 = `<Tabs color="component" value="tab1">
  <TabList>
    <Tab value="tab1" label="Tab 1"/>
    <Tab value="tab2" label="Tab 2"/>
    <Tab value="tab3" label="Tab 3"/>
  </TabList>
  <TabPanels>
    <TabPanel value="tab1">Tab1</TabPanel>
    <TabPanel value="tab2">Tab2</TabPanel>
    <TabPanel value="tab3">Tab3</TabPanel>
  </TabPanels>
</Tabs>

<Tabs color="component" value="tab1" variant="outlined">
  <TabList>
    <Tab value="tab1" label="Tab 1"/>
    <Tab value="tab2" label="Tab 2"/>
    <Tab value="tab3" label="Tab 3"/>
  </TabList>
  <TabPanels>
    <TabPanel value="tab1">Tab1</TabPanel>
    <TabPanel value="tab2">Tab2</TabPanel>
    <TabPanel value="tab3">Tab3</TabPanel>
  </TabPanels>
</Tabs>`;