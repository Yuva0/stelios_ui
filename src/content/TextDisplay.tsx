import React from "react";
import {
  Text,
  useTheme,
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
  useWindowSize,
} from "../helpers/helpers";
import i18n from "../i18n/i18n_en.json";

const TEXT = i18n.text;
const TextDisplay = () => {
  const windowSize = useWindowSize();
  const laptop = windowSize.width < 768;
  const mobile = windowSize.width < 480;
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;
  const variationRefs = Array.from({ length: 3 }, () => React.createRef<HTMLDivElement>());
  const propsRef = Array.from({ length: 8 }, () => React.createRef<HTMLDivElement>());
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
      <div style={{ margin: "1.5rem 0 4rem 0", width: mobile ? "100%" : laptop ? "calc(100% - 12rem)" : "calc(100% - 22rem)" }}>
        <RenderBreadcrumbsForComponent name={TEXT.title} path={TEXT.path}/>
  
        <div style={{ padding: "1rem" }}>
          <RenderComponentHeading
            title={TEXT.title}
            description={TEXT.description}
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
                  label={TEXT.usage.installation.label}
                  text={TEXT.usage.installation.description}
                />
                <RenderVariations
                  label={TEXT.usage.variants.label}
                  description={TEXT.usage.variants.description}
                  code={CODE_1}
                  text={TEXT_1}
                />
                <RenderVariations
                  label={TEXT.usage.sizes.label}
                  description={TEXT.usage.sizes.description}
                  code={CODE_2}
                  text={TEXT_2}
                />
                {!laptop && renderSideBarItem([TEXT.usage.installation.label, TEXT.usage.variants.label, TEXT.usage.sizes.label], selectedVariationSideBarItem, variationRefs)}
              </TabPanel>
              <TabPanel value="props">
                <Text
                  preciseColor={textColor}
                  size="large"
                  style={{ marginTop: "2rem" }}
                >
                  {TEXT.props._label}
                </Text>
                <RenderProps
                  propName={TEXT.props.variant.name}
                  description={
                    TEXT.props.variant.description
                  }
                  type={TEXT.props.variant.type}
                  defaultValue={
                    TEXT.props.variant.default
                  }
                  marginTop="1rem"
                />
                <RenderProps
                  propName={TEXT.props.size.name}
                  description={
                    TEXT.props.size.description
                  }
                  type={TEXT.props.size.type}
                  defaultValue={
                    TEXT.props.size.default
                  }
                />
                <RenderProps
                  propName={TEXT.props.color.name}
                  description={
                    TEXT.props.color.description
                  }
                  type={TEXT.props.color.type}
                  defaultValue={
                    TEXT.props.color.default
                  }
                />
                <RenderProps
                  propName={TEXT.props.children.name}
                  description={
                    TEXT.props.children.description
                  }
                  type={TEXT.props.children.type}
                  defaultValue={
                    TEXT.props.children.default
                  }
                />
                {!laptop && renderSideBarItem([TEXT.props.variant.name, TEXT.props.size.name, TEXT.props.color.name, TEXT.props.children.name], selectedPropsSideBarItem, propsRef)}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    );
}
export default TextDisplay;

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
    <Text color="component" variant="h1"> H1 Text </Text>
    <Text color="component" variant="h2"> H2 Text </Text>
    <Text color="component" variant="h3"> H3 Text </Text>
    <Text color="component" variant="h4"> H4 Text </Text>
    <Text color="component" variant="h5"> H5 Text </Text>
    <Text color="component" variant="h6"> H6 Text </Text>
    <Text color="component" variant="div"> Div Text </Text>
    <Text color="component" variant="paragraph"> Paragraph Text </Text>
    <Text color="component" variant="span"> Span Text </Text>
    <Text color="component" variant="label"> Label Text </Text>
  </div>
);
const TEXT_1 = `<Text color="component" variant="h1"> H1 Text </Text>
<Text color="component" variant="h2"> H2 Text </Text>
<Text color="component" variant="h3"> H3 Text </Text>
<Text color="component" variant="h4"> H4 Text </Text>
<Text color="component" variant="h5"> H5 Text </Text>
<Text color="component" variant="h6"> H6 Text </Text>
<Text color="component" variant="div"> Div Text </Text>
<Text color="component" variant="paragraph"> Paragraph Text </Text>
<Text color="component" variant="span"> Span Text </Text>
<Text color="component" variant="label"> Label Text </Text>
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
    <Text color="component" size="small"> Small Text </Text>
    <Text color="component" size="medium"> Medium Text </Text>
    <Text color="component" size="large"> Large Text </Text>
  </div>
);
const TEXT_2 = `<Text color="component" size="small"> Small Text </Text>
<Text color="component" size="medium"> Medium Text </Text>
<Text color="component" size="large"> Large Text </Text>
`;