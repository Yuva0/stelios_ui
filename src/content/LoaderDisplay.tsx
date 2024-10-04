import React from "react";
import {
  Text,
  useTheme,
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
  renderSideBarItem,
  RenderTabsList,
  RenderVariations,
  useWindowSize,
} from "../helpers/helpers";

const LOADER = i18n.loader;
const LoaderDisplay = () => {
  const windowSize = useWindowSize();
  const laptop = windowSize.width < 768;
  const mobile = windowSize.width < 480;
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
    <div style={{ margin: "1.5rem 0 4rem 0", width: mobile ? "100%" : laptop ? "calc(100% - 12rem)" : "calc(100% - 22rem)" }}>
      <RenderBreadcrumbsForComponent name={LOADER.title} path={LOADER.path} />
      <div style={{ padding: "1rem" }}>
        <RenderComponentHeading
          title={LOADER.title}
          description={LOADER.description}
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
                label={LOADER.usage.installation.label}
                text={LOADER.usage.installation.description}
              />
              <RenderVariations
                ref={variationRefs[1]}
                label={LOADER.usage.sizes.label}
                description={LOADER.usage.sizes.description}
                code={CODE_1}
                text={TEXT_1}
                language="javascript"
              />

              {!laptop && renderSideBarItem([LOADER.usage.installation.label, LOADER.usage.sizes.label], selectedVariationSideBarItem, variationRefs)}
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
                ref={propsRef[0]}
                propName={LOADER.props.shape.name}
                description={LOADER.props.shape.description}
                type={LOADER.props.shape.type}
                defaultValue={LOADER.props.shape.default}
              />

              <RenderProps
                ref={propsRef[1]}
                propName={LOADER.props.height.name}
                description={LOADER.props.height.description}
                type={LOADER.props.height.type}
                defaultValue={LOADER.props.height.default}
              />

              <RenderProps
                ref={propsRef[2]}
                propName={LOADER.props.width.name}
                description={LOADER.props.width.description}
                type={LOADER.props.width.type}
                defaultValue={LOADER.props.width.default}
              />

              {!laptop && renderSideBarItem([LOADER.props.shape.name, LOADER.props.height.name, LOADER.props.width.name], selectedPropsSideBarItem, propsRef)}
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
