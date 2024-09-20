import {
  Text,
  useTheme,
  SideBar,
  SideBarItem,
  Tabs,
  TabPanels,
  TabPanel,
  Loader,
} from "stelios";
import i18n from "../i18n/i18n_en.json";
import {
  RenderBreadcrumbsForComponent,
  RenderComponentHeading,
  RenderProps,
  RenderTabsList,
  RenderVariations,
} from "../helpers/helpers";

const LOADER = i18n.loader;
const LoaderDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";

  return (
    <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 22rem)" }}>
      <RenderBreadcrumbsForComponent name={LOADER.title} path={LOADER.path} />
      <div style={{ padding: "1rem" }}>
        <RenderComponentHeading
          title={LOADER.title}
          description={LOADER.description}
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
                label={LOADER.usage.installation.label}
                text={LOADER.usage.installation.description}
              />
              <RenderVariations
                label={LOADER.usage.sizes.label}
                description={LOADER.usage.sizes.description}
                code={CODE_1}
                text={TEXT_1}
                language="javascript"
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
                {LOADER.props._label}
              </Text>

              <RenderProps
                propName={LOADER.props.shape.name}
                description={LOADER.props.shape.description}
                type={LOADER.props.shape.type}
                defaultValue={LOADER.props.shape.default}
              />

              <RenderProps
                propName={LOADER.props.height.name}
                description={LOADER.props.height.description}
                type={LOADER.props.height.type}
                defaultValue={LOADER.props.height.default}
              />

              <RenderProps
                propName={LOADER.props.width.name}
                description={LOADER.props.width.description}
                type={LOADER.props.width.type}
                defaultValue={LOADER.props.width.default}
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
export default LoaderDisplay;

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
    <Loader shape="circle" width="100px" height="100px"/>
    <Loader shape="rectangle" width="200px" height="100px"/>
    <Loader shape="square" width="100px" height="100px"/>
  </div>
);
const TEXT_1 = `
  <Loader shape="circle" width="100px" height="100px"/>
  <Loader shape="rectangle" width="200px" height="100px"/>
  <Loader shape="square" width="100px" height="100px"/>`;
