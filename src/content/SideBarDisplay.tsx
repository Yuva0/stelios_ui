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
  renderSideBarItem,
  RenderTabsList,
  RenderVariations,
} from "../helpers/helpers";
import i18n from "../i18n/i18n_en.json";

const SIDEBAR = i18n["sidebar"];
const NavigationBarDisplay = () => {
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
        <RenderBreadcrumbsForComponent name={SIDEBAR.title} path={SIDEBAR.path}/>
  
        <div style={{ padding: "1rem" }}>
          <RenderComponentHeading
            title={SIDEBAR.title}
            description={SIDEBAR.description}
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
                  label={SIDEBAR.usage.installation.label}
                  text={SIDEBAR.usage.installation.description}
                />
                <RenderVariations
                  ref={variationRefs[1]}
                  label={SIDEBAR.usage.group.label}
                  description={SIDEBAR.usage.group.description}
                  code={CODE_1}
                  text={TEXT_1}
                />
                {renderSideBarItem([SIDEBAR.usage.installation.label, SIDEBAR.usage.group.label], selectedVariationSideBarItem, variationRefs)}
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
                  ref={propsRef[0]}
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
                  ref={propsRef[1]}
                  propName={SIDEBAR.props.color.name}
                  description={
                    SIDEBAR.props.color.description
                  }
                  type={SIDEBAR.props.color.type}
                  defaultValue={
                    SIDEBAR.props.color.default
                  }
                />
                {renderSideBarItem([SIDEBAR.props.children.name, SIDEBAR.props.color.name], selectedPropsSideBarItem, propsRef)}
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