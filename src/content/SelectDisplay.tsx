import {
  Text,
  useTheme,
  SideBar,
  SideBarItem,
  Tabs,
  TabPanels,
  TabPanel,
  Select,
} from "stelios";
import {
  RenderBreadcrumbsForComponent,
  RenderComponentHeading,
  RenderProps,
  RenderTabsList,
  RenderVariations,
} from "../helpers/helpers";
import i18n from "../i18n/i18n_en.json";

const SELECT = i18n.select;
const SelectDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";

    return (
      <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 22rem)" }}>
        <RenderBreadcrumbsForComponent name={SELECT.title} path={SELECT.path}/>
  
        <div style={{ padding: "1rem" }}>
          <RenderComponentHeading
            title={SELECT.title}
            description={SELECT.description}
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
                  label={SELECT.usage.installation.label}
                  text={SELECT.usage.installation.description}
                />
                <RenderVariations
                  label={SELECT.usage.variants.label}
                  description={SELECT.usage.variants.description}
                  code={CODE_1}
                  text={TEXT_1}
                />
                <RenderVariations
                  label={SELECT.usage.sizes.label}
                  description={SELECT.usage.sizes.description}
                  code={CODE_2}
                  text={TEXT_2}
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
                  {SELECT.props._label}
                </Text>
                <RenderProps
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
                  propName={SELECT.props.open.name}
                  description={
                    SELECT.props.open.description
                  }
                  type={SELECT.props.open.type}
                  defaultValue={SELECT.props.open.default}
                />
                <RenderProps
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
                  propName={SELECT.props.color.name}
                  description={SELECT.props.color.description}
                  type={SELECT.props.color.type}
                  defaultValue={SELECT.props.color.default}
                  marginTop="1rem"
                />
                <RenderProps
                  propName={SELECT.props.onClick.name}
                  description={SELECT.props.onClick.description}
                  type={SELECT.props.onClick.type}
                  defaultValue={SELECT.props.onClick.default}
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