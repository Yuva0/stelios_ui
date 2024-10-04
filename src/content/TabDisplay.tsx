import React from "react";
import {
  Text,
  useTheme,
  Tabs,
  TabPanels,
  TabPanel,
  TabList,
  Tab
} from "stelios";
import {
  RenderBreadcrumbsForComponent,
  RenderComponentHeading,
  RenderProps,
  renderSideBarItem,
  RenderTabsList,
  RenderVariations,
  useWindowSize,
} from "../helpers/helpers";
import i18n from "../i18n/i18n_en.json";

const TAB = i18n.tab;
const TabDisplay = () => {
  const windowSize = useWindowSize();
  const mobile = windowSize.width < 480;
  const laptop = windowSize.width < 768;
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
      <div style={{ margin: "1.5rem 0 4rem 0", width: mobile ? "100%" : laptop ? "calc(100% - 12rem)" : "calc(100% - 22rem)" }}>
        <RenderBreadcrumbsForComponent name={TAB.title} path={TAB.path}/>
  
        <div style={{ padding: "1rem" }}>
          <RenderComponentHeading
            title={TAB.title}
            description={TAB.description}
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
                  label={TAB.usage.installation.label}
                  text={TAB.usage.installation.description}
                />
                <RenderVariations
                  ref={variationRefs[1]}
                  label={TAB.usage.variants.label}
                  description={TAB.usage.variants.description}
                  code={CODE_1}
                  text={TEXT_1}
                />
                {!laptop && renderSideBarItem([TAB.usage.installation.label, TAB.usage.variants.label], selectedVariationSideBarItem, variationRefs)}
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
                {!laptop && renderSideBarItem([TAB.props.variant.name], selectedPropsSideBarItem, propsRef)}
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