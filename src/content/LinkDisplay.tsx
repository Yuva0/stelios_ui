import React from "react";
import {
  Text,
  useTheme,
  Tabs,
  TabPanels,
  TabPanel,
  Link
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

const LINK = i18n.link;
const LinkDisplay = () => {
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
      <RenderBreadcrumbsForComponent name={LINK.title} path={LINK.path}/>

      <div style={{ padding: "1rem" }}>
        <RenderComponentHeading
          title={LINK.title}
          description={LINK.description}
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
                label={LINK.usage.installation.label}
                text={LINK.usage.installation.description}
              />
              <RenderVariations
                ref={variationRefs[1]}
                label={LINK.usage.variants.label}
                description={LINK.usage.variants.description}
                code={CODE_1}
                text={TEXT_1}
              />
              <RenderVariations
                ref={variationRefs[2]}
                label={LINK.usage.sizes.label}
                description={LINK.usage.sizes.description}
                code={CODE_2}
                text={TEXT_2}
              />
              {!mobile && renderSideBarItem([LINK.usage.installation.label, LINK.usage.variants.label, LINK.usage.sizes.label], selectedVariationSideBarItem, variationRefs)}
            </TabPanel>
            <TabPanel value="props">
              <Text
                preciseColor={textColor}
                size="large"
                style={{ marginTop: "2rem" }}
              >
                {LINK.props._label}
              </Text>
              <RenderProps
                ref={propsRef[0]}
                propName={LINK.props.variant.name}
                description={
                  LINK.props.variant.description
                }
                type={LINK.props.variant.type}
                defaultValue={
                  LINK.props.variant.default
                }
                marginTop="1rem"
              />
              <RenderProps
                ref={propsRef[1]}
                propName={LINK.props.size.name}
                description={
                  LINK.props.size.description
                }
                type={LINK.props.size.type}
                defaultValue={
                  LINK.props.size.default
                }
                marginTop="1rem"
              />
              <RenderProps
                ref={propsRef[2]}
                propName={LINK.props.href.name}
                description={
                  LINK.props.href.description
                }
                type={LINK.props.href.type}
                defaultValue={
                  LINK.props.href.default
                }
                marginTop="1rem"
              />
              <RenderProps
                ref={propsRef[3]}
                propName={LINK.props.target.name}
                description={
                  LINK.props.target.description
                }
                type={LINK.props.target.type}
                defaultValue={
                  LINK.props.target.default
                }
                marginTop="1rem"
              />
              <RenderProps
                ref={propsRef[4]}
                propName={LINK.props.color.name}
                description={
                  LINK.props.color.description
                }
                type={LINK.props.color.type}
                defaultValue={
                  LINK.props.color.default
                }
              />
              <RenderProps
                ref={propsRef[5]}
                propName={LINK.props.children.name}
                description={
                  LINK.props.children.description
                }
                type={LINK.props.children.type}
                defaultValue={
                  LINK.props.children.default
                }
              />
              {!mobile && renderSideBarItem([LINK.props.variant.name, LINK.props.size.name, LINK.props.href.name, LINK.props.target.name, LINK.props.color.name, LINK.props.children.name], selectedPropsSideBarItem, propsRef)}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}

export default LinkDisplay;

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
    <Link href="#" color="component" variant="default"> Default Link </Link>
    <Link href="#" color="component" variant="underline"> Underline Link </Link>
    <Link href="#" color="component" variant="hover"> None Link </Link>
  </div>
);
const TEXT_1 = `<Link href="#" color="component" variant="default"> Default Link </Link>
<Link href="#" color="component" variant="underline"> Underline Link </Link>
<Link href="#" color="component" variant="hover"> None Link </Link>
`;

const CODE_2 = (
  <div
    style={{
      display: "flex",
      gap: "2rem",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Link href="#" color="component" size="small"> Small Link </Link>
    <Link href="#" color="component" size="medium"> Medium Link </Link>
    <Link href="#" color="component" size="large"> Large Link </Link>
  </div>
);
const TEXT_2 = `<Link href="#" color="component" size="small"> Small Link </Link>
<Link href="#" color="component" size="medium"> Medium Link </Link>
<Link href="#" color="component" size="large"> Large Link </Link>
`;