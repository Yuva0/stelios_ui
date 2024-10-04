import React from "react";
import {
  Text,
  useTheme,
  Tabs,
  TabPanels,
  TabPanel,
  Collapsible,
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

const COLLAPSIBLE = i18n.collapsible;
const CollapsibleDisplay = () => {
  const windowSize = useWindowSize();
  const mobile = windowSize.width < 768;
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

  return (
    <div style={{ margin: "1.5rem 0 4rem 0", width: mobile ? "calc(100% - 12rem)" : "calc(100% - 22rem)" }}>
      <RenderBreadcrumbsForComponent
        name={COLLAPSIBLE.title}
        path={COLLAPSIBLE.path}
      />

      <div style={{ padding: "1rem" }}>
        <RenderComponentHeading
          title={COLLAPSIBLE.title}
          description={COLLAPSIBLE.description}
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
                label={COLLAPSIBLE.usage.installation.label}
                text={COLLAPSIBLE.usage.installation.description}
              />
              <RenderVariations
                ref={variationRefs[1]}
                label={COLLAPSIBLE.usage.variants.label}
                description={COLLAPSIBLE.usage.variants.description}
                code={CODE_1}
                text={TEXT_1}
                language="javascript"
              />

              {!mobile && renderSideBarItem([COLLAPSIBLE.usage.installation.label, COLLAPSIBLE.usage.variants.label], selectedVariationSideBarItem, variationRefs)}
            </TabPanel>
            <TabPanel value="props">
              <Text
                preciseColor={textColor}
                size="large"
                style={{ marginTop: "2rem" }}
              >
                {COLLAPSIBLE.props._label}
              </Text>
              <RenderProps
                ref={propsRef[0]}
                propName={COLLAPSIBLE.props.variant.name}
                description={COLLAPSIBLE.props.variant.description}
                type={COLLAPSIBLE.props.variant.type}
                defaultValue={COLLAPSIBLE.props.variant.default}
                marginTop="1rem"
              />

              {!mobile && renderSideBarItem([COLLAPSIBLE.props.variant.name], selectedPropsSideBarItem, propsRef)}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};
export default CollapsibleDisplay;
const COLLAPSIBLE_TITLE_1 = "Collapsible Title";
const COLLAPSIBLE_CONTENT_1 = "Vercal is a cloud platform that enables developers to build, deploy, and scale web applications effortlessly. It is optimized for front-end frameworks like Next.js and offers automatic deployment from Git repositories, serverless functions, and a global content delivery network (CDN) for fast performance. Vercel simplifies workflows with features like continuous integration, previews for every pull request, and automatic scaling.";
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
    <Collapsible open={true} width="400px" color="component" title={COLLAPSIBLE_TITLE_1} variant="contained">
      <Text disableColor size="small" style={{padding: "1rem"}}>{COLLAPSIBLE_CONTENT_1}</Text>
    </Collapsible>
    <Collapsible open={true} width="400px" color="component" title={COLLAPSIBLE_TITLE_1} variant="outlined">
      <Text disableColor size="small" style={{padding: "1rem"}}>{COLLAPSIBLE_CONTENT_1}</Text>
    </Collapsible>
    <Collapsible open={true} width="400px" color="component" title={COLLAPSIBLE_TITLE_1} variant="soft">
      <Text disableColor size="small" style={{padding: "1rem"}}>{COLLAPSIBLE_CONTENT_1}</Text>
    </Collapsible>
    <Collapsible open={true} width="400px" color="component" title={COLLAPSIBLE_TITLE_1} variant="transparent">
      <Text disableColor size="small" style={{padding: "1rem"}}>{COLLAPSIBLE_CONTENT_1}</Text>
    </Collapsible>

  </div>
);
const TEXT_1 = `
const COLLAPSIBLE_TITLE_1 = "Collapsible Title";
const COLLAPSIBLE_CONTENT_1 = "Vercal is a cloud platform that enables developers to build, deploy, and scale web applications effortlessly. It is optimized for front-end frameworks like Next.js and offers automatic deployment from Git repositories, serverless functions, and a global content delivery network (CDN) for fast performance. Vercel simplifies workflows with features like continuous integration, previews for every pull request, and automatic scaling.";

<Collapsible title={COLLAPSIBLE_TITLE_1} variant="contained">
  <Text disableColor size="small" style={{padding: "1rem"}}>{COLLAPSIBLE_CONTENT_1}</Text>
</Collapsible>
<Collapsible title={COLLAPSIBLE_TITLE_1} variant="outlined">
  <Text disableColor size="small" style={{padding: "1rem"}}>{COLLAPSIBLE_CONTENT_1}</Text>
</Collapsible>
<Collapsible title={COLLAPSIBLE_TITLE_1} variant="soft">
  <Text disableColor size="small" style={{padding: "1rem"}}>{COLLAPSIBLE_CONTENT_1}</Text>
</Collapsible>
<Collapsible title={COLLAPSIBLE_TITLE_1} variant="transparent">
  <Text disableColor size="small" style={{padding: "1rem"}}>{COLLAPSIBLE_CONTENT_1}</Text>
</Collapsible>
`;
