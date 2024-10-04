import React from "react";
import {
  Text,
  useTheme,
  Tabs,
  TabPanels,
  TabPanel,
  ToggleButtonGroup,
  ToggleButton,
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

const TOGGLEBUTTON = i18n.toggleButton;
const ToggleButtonDisplay = () => {
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
      <RenderBreadcrumbsForComponent name={TOGGLEBUTTON.title} path={TOGGLEBUTTON.path}/>

      <div style={{ padding: "1rem" }}>
        <RenderComponentHeading
          title={TOGGLEBUTTON.title}
          description={TOGGLEBUTTON.description}
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
                label={TOGGLEBUTTON.usage.installation.label}
                text={TOGGLEBUTTON.usage.installation.description}
              />
              <RenderVariations
                label={TOGGLEBUTTON.usage.sizes.label}
                description={TOGGLEBUTTON.usage.sizes.description}
                code={CODE_1}
                text={TEXT_1}
              />
              {!mobile && renderSideBarItem([TOGGLEBUTTON.usage.installation.label, TOGGLEBUTTON.usage.sizes.label], selectedVariationSideBarItem, variationRefs)}

            </TabPanel>
            <TabPanel value="props">
              <Text
                preciseColor={textColor}
                size="large"
                style={{ marginTop: "2rem" }}
              >
                {TOGGLEBUTTON.props.toggleButtonGroup.label}
              </Text>
              <RenderProps
                propName={TOGGLEBUTTON.props.toggleButtonGroup.children.name}
                description={
                  TOGGLEBUTTON.props.toggleButtonGroup.children.description
                }
                type={TOGGLEBUTTON.props.toggleButtonGroup.children.type}
                defaultValue={
                  TOGGLEBUTTON.props.toggleButtonGroup.children.default
                }
                marginTop="1rem"
              />
              <RenderProps
                propName={TOGGLEBUTTON.props.toggleButtonGroup.value.name}
                description={
                  TOGGLEBUTTON.props.toggleButtonGroup.value.description
                }
                type={TOGGLEBUTTON.props.toggleButtonGroup.value.type}
                defaultValue={
                  TOGGLEBUTTON.props.toggleButtonGroup.value.default
                }
              />
              <RenderProps
                propName={TOGGLEBUTTON.props.toggleButtonGroup.width.name}
                description={
                  TOGGLEBUTTON.props.toggleButtonGroup.width.description
                }
                type={TOGGLEBUTTON.props.toggleButtonGroup.width.type}
                defaultValue={
                  TOGGLEBUTTON.props.toggleButtonGroup.width.default
                }
              />
              <RenderProps
                propName={TOGGLEBUTTON.props.toggleButtonGroup.size.name}
                description={
                  TOGGLEBUTTON.props.toggleButtonGroup.size.description
                }
                type={TOGGLEBUTTON.props.toggleButtonGroup.size.type}
                defaultValue={TOGGLEBUTTON.props.toggleButtonGroup.size.default}
              />
              <RenderProps
                propName={TOGGLEBUTTON.props.toggleButtonGroup.color.name}
                description={
                  TOGGLEBUTTON.props.toggleButtonGroup.color.description
                }
                type={TOGGLEBUTTON.props.toggleButtonGroup.color.type}
                defaultValue={
                  TOGGLEBUTTON.props.toggleButtonGroup.color.default
                }
              />
              <RenderProps
                propName={TOGGLEBUTTON.props.toggleButtonGroup.onClick.name}
                description={
                  TOGGLEBUTTON.props.toggleButtonGroup.onClick.description
                }
                type={TOGGLEBUTTON.props.toggleButtonGroup.onClick.type}
                defaultValue={
                  TOGGLEBUTTON.props.toggleButtonGroup.onClick.default
                }
                wordSpacing="4px"
              />

              <Text
                preciseColor={textColor}
                size="large"
                style={{ marginTop: "3rem" }}
              >
                {TOGGLEBUTTON.props.toggleButton.label}
              </Text>
              <RenderProps
                propName={TOGGLEBUTTON.props.toggleButton.index.name}
                description={TOGGLEBUTTON.props.toggleButton.index.description}
                type={TOGGLEBUTTON.props.toggleButton.index.type}
                defaultValue={TOGGLEBUTTON.props.toggleButton.index.default}
                marginTop="1rem"
              />
              <RenderProps
                propName={TOGGLEBUTTON.props.toggleButton.value.name}
                description={TOGGLEBUTTON.props.toggleButton.value.description}
                type={TOGGLEBUTTON.props.toggleButton.value.type}
                defaultValue={TOGGLEBUTTON.props.toggleButton.value.default}
              />
              <RenderProps
                propName={TOGGLEBUTTON.props.toggleButton.children.name}
                description={
                  TOGGLEBUTTON.props.toggleButton.children.description
                }
                type={TOGGLEBUTTON.props.toggleButton.children.type}
                defaultValue={TOGGLEBUTTON.props.toggleButton.children.default}
              />

              {!mobile && renderSideBarItem(
                [TOGGLEBUTTON.props.toggleButtonGroup.children.name,],
                selectedPropsSideBarItem,
                propsRef
              )}

            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};
export default ToggleButtonDisplay;

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
    <ToggleButtonGroup
      color="component"
      width="400px"
      value="toggle1"
      size="small"
    >
      <ToggleButton value="toggle1"><Text disableColor>Toggle 1</Text></ToggleButton>
      <ToggleButton value="toggle2"><Text disableColor>Toggle 2</Text></ToggleButton>
      <ToggleButton value="toggle3"><Text disableColor>Toggle 3</Text></ToggleButton>
    </ToggleButtonGroup>
    <ToggleButtonGroup
      color="component"
      width="400px"
      value="toggle1"
      size="medium"
    >
      <ToggleButton value="toggle1"><Text disableColor>Toggle 1</Text></ToggleButton>
      <ToggleButton value="toggle2"><Text disableColor>Toggle 2</Text></ToggleButton>
      <ToggleButton value="toggle3"><Text disableColor>Toggle 3</Text></ToggleButton>
    </ToggleButtonGroup>
    <ToggleButtonGroup
      color="component"
      width="400px"
      value="toggle1"
      size="large"
    >
      <ToggleButton value="toggle1"><Text disableColor>Toggle 1</Text></ToggleButton>
      <ToggleButton value="toggle2"><Text disableColor>Toggle 2</Text></ToggleButton>
      <ToggleButton value="toggle3"><Text disableColor>Toggle 3</Text></ToggleButton>
    </ToggleButtonGroup>
  </div>
);
const TEXT_1 = `<ToggleButtonGroup value="toggle1">
  <ToggleButton value="toggle1"><Text disableColor>Toggle 1</Text></ToggleButton>
  <ToggleButton value="toggle2"><Text disableColor>Toggle 2</Text></ToggleButton>
  <ToggleButton value="toggle3"><Text disableColor>Toggle 3</Text></ToggleButton>
</ToggleButtonGroup>
`;
