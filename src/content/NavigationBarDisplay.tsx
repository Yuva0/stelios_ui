import {
  Text,
  useTheme,
  SideBar,
  SideBarItem,
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
  RenderTabsList,
  RenderVariations,
} from "../helpers/helpers";
import i18n from "../i18n/i18n_en.json";

const NAVIGATIONBAR = i18n["navigation-bar"];
const NavigationBarDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";

    return (
      <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 22rem)" }}>
        <RenderBreadcrumbsForComponent name={NAVIGATIONBAR.title} path={NAVIGATIONBAR.path}/>
  
        <div style={{ padding: "1rem" }}>
          <RenderComponentHeading
            title={NAVIGATIONBAR.title}
            description={NAVIGATIONBAR.description}
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
                  label={NAVIGATIONBAR.usage.installation.label}
                  text={NAVIGATIONBAR.usage.installation.description}
                />
                <RenderVariations
                  label={NAVIGATIONBAR.usage.group.label}
                  description={NAVIGATIONBAR.usage.group.description}
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
                  {NAVIGATIONBAR.props._label}
                </Text>
                <RenderProps
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
                  propName={NAVIGATIONBAR.props.color.name}
                  description={
                    NAVIGATIONBAR.props.color.description
                  }
                  type={NAVIGATIONBAR.props.color.type}
                  defaultValue={
                    NAVIGATIONBAR.props.color.default
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