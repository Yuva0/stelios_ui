import React from "react";
import {
  Text,
  useTheme,
  Tabs,
  TabPanels,
  TabPanel,
  NavigationBar,
  NavigationBarGroup,
  NavigationBarGroupItem,
  NavigationBarItem,
  NavigationBarHeader,
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

const NAVIGATIONBAR = i18n["navigation-bar"];
const NavigationBarDisplay = () => {
  const windowSize = useWindowSize();
  const mobile = windowSize.width < 768;
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const variationRefs = Array.from({ length: 3 }, () =>
    React.createRef<HTMLDivElement>()
  );
  const propsRef = Array.from({ length: 16 }, () =>
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
      <div style={{ margin: "1.5rem 0 4rem 0", width: mobile ? "calc(100% - 12rem)" : "calc(100% - 22rem)" }}>
        <RenderBreadcrumbsForComponent name={NAVIGATIONBAR.title} path={NAVIGATIONBAR.path}/>
  
        <div style={{ padding: "1rem" }}>
          <RenderComponentHeading
            title={NAVIGATIONBAR.title}
            description={NAVIGATIONBAR.description}
          />
  
          <Tabs color="primary" style={{ marginTop: "2rem" }} value={selectedTab} onChange={(value) => setSelectedTab(value)}>
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
                  label={NAVIGATIONBAR.usage.installation.label}
                  text={NAVIGATIONBAR.usage.installation.description}
                />
                <RenderVariations
                  ref={variationRefs[1]}
                  label={NAVIGATIONBAR.usage.group.label}
                  description={NAVIGATIONBAR.usage.group.description}
                  code={CODE_1}
                  text={TEXT_1}
                />
                {!mobile && renderSideBarItem([NAVIGATIONBAR.usage.installation.label, NAVIGATIONBAR.usage.group.label], selectedVariationSideBarItem, variationRefs)}
              </TabPanel>
              <TabPanel value="props">
                <Text
                  preciseColor={textColor}
                  size="large"
                  style={{ marginTop: "2rem" }}
                >
                  {NAVIGATIONBAR.props._label}
                </Text>
                <RenderProps
                  ref={propsRef[0]}
                  propName={NAVIGATIONBAR.props.children.name}
                  description={
                    NAVIGATIONBAR.props.children.description
                  }
                  type={NAVIGATIONBAR.props.children.type}
                  defaultValue={
                    NAVIGATIONBAR.props.children.default
                  }
                  marginTop="1rem"
                />
                <RenderProps
                  ref={propsRef[1]}
                  propName={NAVIGATIONBAR.props.color.name}
                  description={
                    NAVIGATIONBAR.props.color.description
                  }
                  type={NAVIGATIONBAR.props.color.type}
                  defaultValue={
                    NAVIGATIONBAR.props.color.default
                  }
                />
                {!mobile && renderSideBarItem([NAVIGATIONBAR.props.children.name, NAVIGATIONBAR.props.color.name], selectedPropsSideBarItem, propsRef)}
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
    <NavigationBar color="component" style={{height: '100%', padding:"1rem 0"}}>
      <NavigationBarGroup title="Frontend" expanded>
        <NavigationBarHeader>Javascript</NavigationBarHeader>
        <NavigationBarGroupItem value="react">React</NavigationBarGroupItem>
        <NavigationBarGroupItem value="angular">Angular</NavigationBarGroupItem>
        <NavigationBarGroupItem value="vue">Vue</NavigationBarGroupItem>
      </NavigationBarGroup>
      <NavigationBarGroup title="Backend" expanded>
        <NavigationBarGroupItem value="node">Node</NavigationBarGroupItem>
        <NavigationBarGroupItem value="python">Python</NavigationBarGroupItem>
        <NavigationBarGroupItem value="ruby">Ruby</NavigationBarGroupItem>
      </NavigationBarGroup>
      <NavigationBarGroup title="Database" expanded>
        <NavigationBarGroupItem value="mysql">MySQL</NavigationBarGroupItem>
        <NavigationBarGroupItem value="mongodb">MongoDB</NavigationBarGroupItem>
        <NavigationBarGroupItem value="postgresql">PostgreSQL</NavigationBarGroupItem>
      </NavigationBarGroup>
      <NavigationBarItem value="mern">MERN stack</NavigationBarItem>
      <NavigationBarItem value="mean">MEAN stack</NavigationBarItem>
    </NavigationBar>
  </div>
);
const TEXT_1 = `<NavigationBar>
  <NavigationBarGroup title="Frontend" expanded>
    <NavigationBarHeader>Javascript</NavigationBarHeader>
    <NavigationBarGroupItem value="react">React</NavigationBarGroupItem>
    <NavigationBarGroupItem value="angular">Angular</NavigationBarGroupItem>
    <NavigationBarGroupItem value="vue">Vue</NavigationBarGroupItem>
  </NavigationBarGroup>

  <NavigationBarGroup title="Backend" expanded>
    <NavigationBarGroupItem value="node">Node</NavigationBarGroupItem>
    <NavigationBarGroupItem value="python">Python</NavigationBarGroupItem>
    <NavigationBarGroupItem value="ruby">Ruby</NavigationBarGroupItem>
  </NavigationBarGroup>

  <NavigationBarGroup title="Database" expanded>
    <NavigationBarGroupItem value="mysql">MySQL</NavigationBarGroupItem>
    <NavigationBarGroupItem value="mongodb">MongoDB</NavigationBarGroupItem>
    <NavigationBarGroupItem value="postgresql">PostgreSQL</NavigationBarGroupItem>
  </NavigationBarGroup>
</NavigationBar>
`;