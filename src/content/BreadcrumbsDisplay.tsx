import React from "react";
import {
  Text,
  useTheme,
  Tabs,
  TabPanels,
  TabPanel,
  Breadcrumbs,
  BreadcrumbsItem,
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

const BREADCRUMBS = i18n.breadcrumbs;
const BreadcrumbsDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;
  const variationRefs = Array.from({ length: 4 }, () => React.createRef<HTMLDivElement>());
  const propsRef = Array.from({ length: 7 }, () => React.createRef<HTMLDivElement>());
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
      <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 22rem)" }}>
        <RenderBreadcrumbsForComponent name={BREADCRUMBS.title} path={BREADCRUMBS.path}/>
  
        <div style={{ padding: "1rem" }}>
          <RenderComponentHeading
            title={BREADCRUMBS.title}
            description={BREADCRUMBS.description}
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
                  label={BREADCRUMBS.usage.installation.label}
                  text={BREADCRUMBS.usage.installation.description}
                />
                <RenderVariations
                  ref={variationRefs[1]}
                  label={BREADCRUMBS.usage.variants.label}
                  description={BREADCRUMBS.usage.variants.description}
                  code={CODE_1}
                  text={TEXT_1}
                />
                <RenderVariations
                  ref={variationRefs[2]}
                  label={BREADCRUMBS.usage.sizes.label}
                  description={BREADCRUMBS.usage.sizes.description}
                  code={CODE_2}
                  text={TEXT_2}
                />
                {renderSideBarItem([
                  BREADCRUMBS.usage.installation.label,
                  BREADCRUMBS.usage.variants.label,
                  BREADCRUMBS.usage.sizes.label,
                ], selectedVariationSideBarItem, variationRefs)}
              </TabPanel>
              <TabPanel value="props">
                <Text
                  preciseColor={textColor}
                  size="large"
                  style={{ marginTop: "2rem" }}
                >
                  {BREADCRUMBS.props._label}
                </Text>
                <RenderProps
                  ref={propsRef[0]}
                  propName={BREADCRUMBS.props.variant.name}
                  description={
                    BREADCRUMBS.props.variant.description
                  }
                  type={BREADCRUMBS.props.variant.type}
                  defaultValue={
                    BREADCRUMBS.props.variant.default
                  }
                  marginTop="1rem"
                />
                <RenderProps
                  ref={propsRef[1]}
                  propName={BREADCRUMBS.props.size.name}
                  description={
                    BREADCRUMBS.props.size.description
                  }
                  type={BREADCRUMBS.props.size.type}
                  defaultValue={
                    BREADCRUMBS.props.size.default
                  }
                  marginTop="1rem"
                />
                {renderSideBarItem([
                  BREADCRUMBS.props.variant.name,
                  BREADCRUMBS.props.size.name,
                ], selectedPropsSideBarItem, propsRef)}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    );
}
export default BreadcrumbsDisplay;

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
    <Breadcrumbs color="component" variant="contained">
      <BreadcrumbsItem title="Home"/>
      <BreadcrumbsItem title="Components" link="components" />
      <BreadcrumbsItem title="Settings" link="settings" />
    </Breadcrumbs>
    <Breadcrumbs color="component" variant="outlined">
      <BreadcrumbsItem title="Home"/>
      <BreadcrumbsItem title="Components" link="components" />
      <BreadcrumbsItem title="Settings" link="settings" />
    </Breadcrumbs>
    <Breadcrumbs color="component" variant="soft">
      <BreadcrumbsItem title="Home"/>
      <BreadcrumbsItem title="Components" link="components" />
      <BreadcrumbsItem title="Settings" link="settings" />
    </Breadcrumbs>
    <Breadcrumbs color="component" variant="text">
      <BreadcrumbsItem title="Home"/>
      <BreadcrumbsItem title="Components" link="components" />
      <BreadcrumbsItem title="Settings" link="settings" />
    </Breadcrumbs>
  </div>
);
const TEXT_1 = `<Breadcrumbs variant="contained">
      <BreadcrumbsItem title="Home"/>
      <BreadcrumbsItem title="Components" link="components" />
      <BreadcrumbsItem title="Settings" link="settings" />
    </Breadcrumbs>

    <Breadcrumbs variant="outlined">
      <BreadcrumbsItem title="Home"/>
      <BreadcrumbsItem title="Components" link="components" />
      <BreadcrumbsItem title="Settings" link="settings" />
    </Breadcrumbs>

    <Breadcrumbs variant="soft">
      <BreadcrumbsItem title="Home"/>
      <BreadcrumbsItem title="Components" link="components" />
      <BreadcrumbsItem title="Settings" link="settings" />
    </Breadcrumbs>

    <Breadcrumbs variant="text">
      <BreadcrumbsItem title="Home"/>
      <BreadcrumbsItem title="Components" link="components" />
      <BreadcrumbsItem title="Settings" link="settings" />
    </Breadcrumbs>
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
    <Breadcrumbs color="component" variant="contained" size="small">
      <BreadcrumbsItem title="Home"/>
      <BreadcrumbsItem title="Components" link="components" />
      <BreadcrumbsItem title="Settings" link="settings" />
    </Breadcrumbs>
    <Breadcrumbs color="component" variant="contained" size="medium">
      <BreadcrumbsItem title="Home"/>
      <BreadcrumbsItem title="Components" link="components" />
      <BreadcrumbsItem title="Settings" link="settings" />
    </Breadcrumbs>
    <Breadcrumbs color="component" variant="contained" size="large">
      <BreadcrumbsItem title="Home"/>
      <BreadcrumbsItem title="Components" link="components" />
      <BreadcrumbsItem title="Settings" link="settings" />
    </Breadcrumbs>
  </div>
);
const TEXT_2 = `<Breadcrumbs variant="contained" size="small">
  <BreadcrumbsItem title="Home"/>
  <BreadcrumbsItem title="Components" link="components" />
  <BreadcrumbsItem title="Settings" link="settings" />
</Breadcrumbs>

<Breadcrumbs variant="contained" size="medium">
  <BreadcrumbsItem title="Home"/>
  <BreadcrumbsItem title="Components" link="components" />
  <BreadcrumbsItem title="Settings" link="settings" />
</Breadcrumbs>

<Breadcrumbs variant="contained" size="large">
  <BreadcrumbsItem title="Home"/>
  <BreadcrumbsItem title="Components" link="components" />
  <BreadcrumbsItem title="Settings" link="settings" />
</Breadcrumbs>
`;