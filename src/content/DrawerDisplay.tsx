import React from "react";
import {
  Text,
  useTheme,
  Tabs,
  TabPanels,
  TabPanel,
  Drawer,
  Button,
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
import { useRef, useState } from "react";

const DRAWER = i18n.drawer;
const DrawerDisplay = () => {
  const windowSize = useWindowSize();
  const mobile = windowSize.width < 768;
  const btnRef = useRef(null);
  const [open, setOpen] = useState(false);
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const variationRefs = Array.from({ length: 2 }, () =>
    React.createRef<HTMLDivElement>()
  );
  const propsRef = Array.from({ length: 10 }, () =>
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
      <Button ref={btnRef} onClick={() => {setOpen(!open)}} color="component">Open Drawer</Button>
      <Drawer color="component" open={open} title="Settings" size="small" position="right">
        <Text color="component">This is the drawer container</Text>
      </Drawer>
    </div>
  );
  const TEXT_1 = `<Drawer open={true} title="Settings" size="small" position="right">
  <Text>This is the drawer container</Text>
</Drawer>`;

  return (
    <div style={{ margin: "1.5rem 0 4rem 0", width: mobile ? "calc(100% - 12rem)" : "calc(100% - 22rem)" }}>
      <RenderBreadcrumbsForComponent name={DRAWER.title} path={DRAWER.path} />

      <div style={{ padding: "1rem" }}>
        <RenderComponentHeading
          title={DRAWER.title}
          description={DRAWER.description}
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
                label={DRAWER.usage.installation.label}
                text={DRAWER.usage.installation.description}
              />
              <RenderVariations
                ref={variationRefs[1]}
                label={DRAWER.usage.default.label}
                description={DRAWER.usage.default.description}
                code={CODE_1}
                text={TEXT_1}
              />

              {!mobile && renderSideBarItem([DRAWER.usage.installation.label, DRAWER.usage.default.label], selectedVariationSideBarItem, variationRefs)}
            </TabPanel>
            <TabPanel value="props">
              <Text
                preciseColor={textColor}
                size="large"
                style={{ marginTop: "2rem" }}
              >
                {DRAWER.props._label}
              </Text>
              <RenderProps
                ref={propsRef[0]}
                propName={DRAWER.props.children.name}
                description={DRAWER.props.children.description}
                type={DRAWER.props.children.type}
                defaultValue={DRAWER.props.children.default}
                marginTop="1rem"
              />
              <RenderProps
                ref={propsRef[1]}
                propName={DRAWER.props.color.name}
                description={DRAWER.props.color.description}
                type={DRAWER.props.color.type}
                defaultValue={DRAWER.props.color.default}
              />

              {!mobile && renderSideBarItem([DRAWER.props.children.name, DRAWER.props.color.name], selectedPropsSideBarItem, propsRef)}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};
export default DrawerDisplay;
