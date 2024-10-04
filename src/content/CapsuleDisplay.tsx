import React from "react";
import {
  Text,
  useTheme,
  Tabs,
  TabPanels,
  TabPanel,
  Capsule
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

const CAPSULE = i18n.capsule;
const CapsuleDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;
  const windowSize = useWindowSize();
  const mobile = windowSize.width < 768;
  
  const variationRefs = Array.from({ length: 2 }, () => React.createRef<HTMLDivElement>());
  const propsRef = Array.from({ length: 10 }, () => React.createRef<HTMLDivElement>());
  const [selectedTab, setSelectedTab] = React.useState("usage");
  const [selectedVariationSideBarItem, setSelectedVariationSideBarItem] = React.useState(0);
  const [selectedPropsSideBarItem, setSeletedPropsSideBarItem] = React.useState(0);

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";

  React.useEffect(() => {
    const handleScroll = () => {
      if(selectedTab === "usage"){
      for(let i=0; i<variationRefs.length; i++){
        if(variationRefs[i].current?.getBoundingClientRect().top! > 0){
          setSelectedVariationSideBarItem(i);
          return;
        }
      }}
      else if(selectedTab === "props"){
        for(let i=0; i<propsRef.length; i++){
          if(propsRef[i].current?.getBoundingClientRect().top! > 0){
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
  },[variationRefs, propsRef, selectedTab]);

  return (
    <div style={{ margin: "1.5rem 0 4rem 0", width: mobile ? "calc(100% - 12rem)" : "calc(100% - 22rem)"}}>
      <RenderBreadcrumbsForComponent name={CAPSULE.title} path={CAPSULE.path}/>

      <div style={{ padding: "1rem" }}>
        <RenderComponentHeading
          title={CAPSULE.title}
          description={CAPSULE.description}
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
                label={CAPSULE.usage.installation.label}
                text={CAPSULE.usage.installation.description}
              />
              <RenderVariations
                ref={variationRefs[1]}
                label={CAPSULE.usage.variants.label}
                description={CAPSULE.usage.variants.description}
                code={CODE_1}
                text={TEXT_1}
              />
              {!mobile && renderSideBarItem([CAPSULE.usage.installation.label, CAPSULE.usage.variants.label], selectedVariationSideBarItem, variationRefs)}
            </TabPanel>
            <TabPanel value="props">
              <Text
                preciseColor={textColor}
                size="large"
                style={{ marginTop: "2rem" }}
              >
                {CAPSULE.props._label}
              </Text>
              <RenderProps
                ref={propsRef[0]}
                propName={CAPSULE.props.variant.name}
                description={
                  CAPSULE.props.variant.description
                }
                type={CAPSULE.props.variant.type}
                defaultValue={
                  CAPSULE.props.variant.default
                }
                marginTop="1rem"
              />
              <RenderProps
                ref={propsRef[1]}
                propName={CAPSULE.props.color.name}
                description={
                  CAPSULE.props.color.description
                }
                type={CAPSULE.props.color.type}
                defaultValue={
                  CAPSULE.props.color.default
                }
              />
              <RenderProps
                ref={propsRef[2]}
                propName={CAPSULE.props.width.name}
                description={
                  CAPSULE.props.width.description
                }
                type={CAPSULE.props.width.type}
                defaultValue={
                  CAPSULE.props.width.default
                }
              />
              <RenderProps
                ref={propsRef[3]}
                propName={CAPSULE.props.height.name}
                description={
                  CAPSULE.props.height.description
                }
                type={CAPSULE.props.height.type}
                defaultValue={
                  CAPSULE.props.height.default
                }
              />
              <RenderProps
                ref={propsRef[4]}
                propName={CAPSULE.props.image.name}
                description={
                  CAPSULE.props.image.description
                }
                type={CAPSULE.props.image.type}
                defaultValue={
                  CAPSULE.props.image.default
                }
              />
              <RenderProps
                ref={propsRef[5]}
                propName={CAPSULE.props.imageAlt.name}
                description={
                  CAPSULE.props.imageAlt.description
                }
                type={CAPSULE.props.imageAlt.type}
                defaultValue={
                  CAPSULE.props.imageAlt.default
                }
              />
              <RenderProps
                ref={propsRef[6]}
                propName={CAPSULE.props.imagePosition.name}
                description={
                  CAPSULE.props.imagePosition.description
                }
                type={CAPSULE.props.imagePosition.type}
                defaultValue={
                  CAPSULE.props.imagePosition.default
                }
              />
              <RenderProps
                ref={propsRef[7]} 
                propName={CAPSULE.props.title.name}
                description={
                  CAPSULE.props.title.description
                }
                type={CAPSULE.props.title.type}
                defaultValue={
                  CAPSULE.props.title.default
                }
              />
              <RenderProps
                ref={propsRef[8]}
                propName={CAPSULE.props.description.name}
                description={
                  CAPSULE.props.description.description
                }
                type={CAPSULE.props.description.type}
                defaultValue={
                  CAPSULE.props.description.default
                }
              />
              <RenderProps
                ref={propsRef[9]}
                propName={CAPSULE.props.onClick.name}
                description={
                  CAPSULE.props.onClick.description
                }
                type={CAPSULE.props.onClick.type}
                defaultValue={
                  CAPSULE.props.onClick.default
                }
              />

              {!mobile && renderSideBarItem([
                CAPSULE.props.variant.name,
                CAPSULE.props.color.name,
                CAPSULE.props.width.name,
                CAPSULE.props.height.name,
                CAPSULE.props.image.name,
                CAPSULE.props.imageAlt.name,
                CAPSULE.props.imagePosition.name,
                CAPSULE.props.title.name,
                CAPSULE.props.description.name,
                CAPSULE.props.onClick.name,
              ], selectedPropsSideBarItem, propsRef)}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}
export default CapsuleDisplay;

const title = "MERN Stack";
const description = "MongoDB, Express, React, and Node.js.";
const IMAGE_URL = `https://static.vecteezy.com/system/resources/previews/003/549/556/non_2x/space-galaxy-background-free-vector.jpg`;

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
    <Capsule image={IMAGE_URL} imageAlt="No Man's Sky" title={title} description={description} variant="contained" color="component"/>
    <Capsule image={IMAGE_URL} imageAlt="No Man's Sky" title={title} description={description} variant="outlined" color="component"/>
    <Capsule image={IMAGE_URL} imageAlt="No Man's Sky" title={title} description={description} variant="soft" color="component"/>
  </div>
);
const TEXT_1 = `const title = "MERN Stack";
const description = "MongoDB, Express, React, and Node.js.";
<Capsule title={title} description={description} variant="contained" color="component"/>
<Capsule title={title} description={description} variant="outlined" color="component"/>
<Capsule title={title} description={description} variant="soft" color="component"/>`;
