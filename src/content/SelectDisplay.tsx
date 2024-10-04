import React from "react";
import {
  Text,
  useTheme,
  Tabs,
  TabPanels,
  TabPanel,
  Select,
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

const SELECT = i18n.select;
const SelectDisplay = () => {
  const laptop = useWindowSize().width < 768;
  const mobile = useWindowSize().width < 480;
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const variationRefs = Array.from({ length: 3 }, () =>
    React.createRef<HTMLDivElement>()
  );
  const propsRef = Array.from({ length: 11 }, () =>
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
      <div style={{ margin: "1.5rem 0 4rem 0", width: mobile ? "100%" : laptop ? "calc(100% - 12rem)" : "calc(100% - 22rem)"}}>
        <RenderBreadcrumbsForComponent name={SELECT.title} path={SELECT.path}/>
  
        <div style={{ padding: "1rem" }}>
          <RenderComponentHeading
            title={SELECT.title}
            description={SELECT.description}
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
                  label={SELECT.usage.installation.label}
                  text={SELECT.usage.installation.description}
                />
                <RenderVariations
                  ref={variationRefs[1]}
                  label={SELECT.usage.variants.label}
                  description={SELECT.usage.variants.description}
                  code={CODE_1}
                  text={TEXT_1}
                />
                <RenderVariations
                  ref={variationRefs[2]}
                  label={SELECT.usage.sizes.label}
                  description={SELECT.usage.sizes.description}
                  code={CODE_2}
                  text={TEXT_2}
                />
  
                {!laptop && renderSideBarItem([SELECT.usage.installation.label, SELECT.usage.variants.label, SELECT.usage.sizes.label], selectedVariationSideBarItem, variationRefs)}
              </TabPanel>
              <TabPanel value="props">
                <Text
                  preciseColor={textColor}
                  size="large"
                  style={{ marginTop: "2rem" }}
                >
                  {SELECT.props._label}
                </Text>
                <RenderProps
                  ref={propsRef[0]}
                  propName={SELECT.props.variant.name}
                  description={
                    SELECT.props.variant.description
                  }
                  type={SELECT.props.variant.type}
                  defaultValue={
                    SELECT.props.variant.default
                  }
                  marginTop="1rem"
                />
                <RenderProps
                  ref={propsRef[1]}
                  propName={SELECT.props.size.name}
                  description={
                    SELECT.props.size.description
                  }
                  type={SELECT.props.size.type}
                  defaultValue={
                    SELECT.props.size.default
                  }
                />
                <RenderProps
                  ref={propsRef[2]}
                  propName={SELECT.props.label.name}
                  description={
                    SELECT.props.label.description
                  }
                  type={SELECT.props.label.type}
                  defaultValue={
                    SELECT.props.label.default
                  }
                />
                <RenderProps
                  ref={propsRef[3]}
                  propName={SELECT.props.open.name}
                  description={
                    SELECT.props.open.description
                  }
                  type={SELECT.props.open.type}
                  defaultValue={SELECT.props.open.default}
                />
                <RenderProps
                  ref={propsRef[4]}
                  propName={SELECT.props.placeholder.name}
                  description={
                    SELECT.props.placeholder.description
                  }
                  type={SELECT.props.placeholder.type}
                  defaultValue={
                    SELECT.props.placeholder.default
                  }
                />
                <RenderProps
                  ref={propsRef[5]}
                  propName={SELECT.props.options.name}
                  description={
                    SELECT.props.options.description
                  }
                  type={SELECT.props.options.type}
                  defaultValue={
                    SELECT.props.options.default
                  }
                  wordSpacing="4px"
                />
  
                <RenderProps
                  ref={propsRef[6]}
                  propName={SELECT.props.color.name}
                  description={SELECT.props.color.description}
                  type={SELECT.props.color.type}
                  defaultValue={SELECT.props.color.default}
                  marginTop="1rem"
                />
                <RenderProps
                  ref={propsRef[7]}
                  propName={SELECT.props.onClick.name}
                  description={SELECT.props.onClick.description}
                  type={SELECT.props.onClick.type}
                  defaultValue={SELECT.props.onClick.default}
                />
  
                {!laptop && renderSideBarItem([SELECT.props.variant.name, SELECT.props.size.name, SELECT.props.label.name, SELECT.props.open.name, SELECT.props.placeholder.name, SELECT.props.options.name, SELECT.props.color.name, SELECT.props.onClick.name], selectedPropsSideBarItem, propsRef)}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    );
}
export default SelectDisplay;

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
    <Select color="component" variant="contained" placeholder="Search here" options={options}/>
    <Select color="component" variant="outlined" placeholder="Search here" options={options}/>
    <Select color="component" variant="soft" placeholder="Search here" options={options}/>
  </div>
);
const TEXT_1 = `const options = [
  { value: "1", title: "Option 1" },
  { value: "2", title: "Option 2" },
  { value: "3", title: "Option 3" },
]

<Select variant="contained" placeholder="Search here" options={options}/>
<Select variant="outlined" placeholder="Search here" options={options}/>
<Select variant="soft" placeholder="Search here" options={options}/>
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
    <Select color="component" size="small" placeholder="Search here" options={options}/>
    <Select color="component" size="medium" placeholder="Search here" options={options}/>
    <Select color="component" size="large" placeholder="Search here" options={options}/>
  </div>
);
const TEXT_2 = `const options = [
  { value: "1", title: "Option 1" },
  { value: "2", title: "Option 2" },
  { value: "3", title: "Option 3" },
]

<Select size="small" placeholder="Search here" options={options}/>
<Select size="medium" placeholder="Search here" options={options}/>
<Select size="large" placeholder="Search here" options={options}/>
`;