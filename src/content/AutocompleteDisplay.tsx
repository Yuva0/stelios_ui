import React from "react";
import {
  Text,
  useTheme,
  Tabs,
  TabPanels,
  TabPanel,
  Autocomplete,
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

const AUTOCOMPLETE = i18n.autocomplete;
const AutocompleteDisplay = () => {
  const windowSize = useWindowSize();
  const mobile = windowSize.width < 768;
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
      <div style={{ margin: "1.5rem 0 4rem 0", width: mobile ? "calc(100% - 12rem)" : "calc(100% - 22rem)"}}>
        <RenderBreadcrumbsForComponent name={AUTOCOMPLETE.title} path={AUTOCOMPLETE.path}/>
  
        <div style={{ padding: "1rem" }}>
          <RenderComponentHeading
            title={AUTOCOMPLETE.title}
            description={AUTOCOMPLETE.description}
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
                  label={AUTOCOMPLETE.usage.installation.label}
                  text={AUTOCOMPLETE.usage.installation.description}
                />
                <RenderVariations
                  ref={variationRefs[1]}
                  label={AUTOCOMPLETE.usage.variants.label}
                  description={AUTOCOMPLETE.usage.variants.description}
                  code={CODE_1}
                  text={TEXT_1}
                />
                <RenderVariations
                  ref={variationRefs[2]}
                  label={AUTOCOMPLETE.usage.sizes.label}
                  description={AUTOCOMPLETE.usage.sizes.description}
                  code={CODE_2}
                  text={TEXT_2}
                />
  
                {!mobile && renderSideBarItem([
                  AUTOCOMPLETE.usage.installation.label,
                  AUTOCOMPLETE.usage.variants.label,
                  AUTOCOMPLETE.usage.sizes.label,
                ], selectedVariationSideBarItem, variationRefs)} 
              </TabPanel>
              <TabPanel value="props">
                <Text
                  preciseColor={textColor}
                  size="large"
                  style={{ marginTop: "2rem" }}
                >
                  {AUTOCOMPLETE.props._label}
                </Text>
                <RenderProps
                  ref={propsRef[0]}
                  propName={AUTOCOMPLETE.props.variant.name}
                  description={
                    AUTOCOMPLETE.props.variant.description
                  }
                  type={AUTOCOMPLETE.props.variant.type}
                  defaultValue={
                    AUTOCOMPLETE.props.variant.default
                  }
                  marginTop="1rem"
                />
                <RenderProps
                  ref={propsRef[1]}
                  propName={AUTOCOMPLETE.props.size.name}
                  description={
                    AUTOCOMPLETE.props.size.description
                  }
                  type={AUTOCOMPLETE.props.size.type}
                  defaultValue={
                    AUTOCOMPLETE.props.size.default
                  }
                />
                <RenderProps
                  ref={propsRef[2]}
                  propName={AUTOCOMPLETE.props.label.name}
                  description={
                    AUTOCOMPLETE.props.label.description
                  }
                  type={AUTOCOMPLETE.props.label.type}
                  defaultValue={
                    AUTOCOMPLETE.props.label.default
                  }
                />
                <RenderProps
                  ref={propsRef[3]}
                  propName={AUTOCOMPLETE.props.open.name}
                  description={
                    AUTOCOMPLETE.props.open.description
                  }
                  type={AUTOCOMPLETE.props.open.type}
                  defaultValue={AUTOCOMPLETE.props.open.default}
                />
                <RenderProps
                  ref={propsRef[4]}
                  propName={AUTOCOMPLETE.props.placeholder.name}
                  description={
                    AUTOCOMPLETE.props.placeholder.description
                  }
                  type={AUTOCOMPLETE.props.placeholder.type}
                  defaultValue={
                    AUTOCOMPLETE.props.placeholder.default
                  }
                />
                <RenderProps
                  ref={propsRef[5]}
                  propName={AUTOCOMPLETE.props.options.name}
                  description={
                    AUTOCOMPLETE.props.options.description
                  }
                  type={AUTOCOMPLETE.props.options.type}
                  defaultValue={
                    AUTOCOMPLETE.props.options.default
                  }
                  wordSpacing="4px"
                />
  
                <RenderProps
                  ref={propsRef[6]}
                  propName={AUTOCOMPLETE.props.color.name}
                  description={AUTOCOMPLETE.props.color.description}
                  type={AUTOCOMPLETE.props.color.type}
                  defaultValue={AUTOCOMPLETE.props.color.default}
                  marginTop="1rem"
                />
                <RenderProps
                  ref={propsRef[7]}
                  propName={AUTOCOMPLETE.props.onClick.name}
                  description={AUTOCOMPLETE.props.onClick.description}
                  type={AUTOCOMPLETE.props.onClick.type}
                  defaultValue={AUTOCOMPLETE.props.onClick.default}
                />
                {!mobile && renderSideBarItem([
                  AUTOCOMPLETE.props.variant.name,
                  AUTOCOMPLETE.props.size.name,
                  AUTOCOMPLETE.props.label.name,
                  AUTOCOMPLETE.props.open.name,
                  AUTOCOMPLETE.props.placeholder.name,
                  AUTOCOMPLETE.props.options.name,
                  AUTOCOMPLETE.props.color.name,
                  AUTOCOMPLETE.props.onClick.name,
                ], selectedPropsSideBarItem, propsRef)}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    );
}
export default AutocompleteDisplay;

const options = [
  { value: "1", title: "Option 1" },
  { value: "2", title: "Option 2" },
  { value: "3", title: "Option 3" },
]

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
    <Autocomplete color="component" variant="contained" placeholder="Search here" options={options}/>
    <Autocomplete color="component" variant="outlined" placeholder="Search here" options={options}/>
    <Autocomplete color="component" variant="soft" placeholder="Search here" options={options}/>
  </div>
);
const TEXT_1 = `const options = [
  { value: "1", title: "Option 1" },
  { value: "2", title: "Option 2" },
  { value: "3", title: "Option 3" },
]

<Autocomplete variant="contained" placeholder="Search here" options={options}/>
<Autocomplete variant="outlined" placeholder="Search here" options={options}/>
<Autocomplete variant="soft" placeholder="Search here" options={options}/>
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
    <Autocomplete color="component" size="small" placeholder="Search here" options={options}/>
    <Autocomplete color="component" size="medium" placeholder="Search here" options={options}/>
    <Autocomplete color="component" size="large" placeholder="Search here" options={options}/>
  </div>
);
const TEXT_2 = `const options = [
  { value: "1", title: "Option 1" },
  { value: "2", title: "Option 2" },
  { value: "3", title: "Option 3" },
]

<Autocomplete size="small" placeholder="Search here" options={options}/>
<Autocomplete size="medium" placeholder="Search here" options={options}/>
<Autocomplete size="large" placeholder="Search here" options={options}/>
`;