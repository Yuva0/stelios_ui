import React from "react";
import {
  Text,
  useTheme,
  Tabs,
  TabPanels,
  TabPanel,
  Password
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

const PASSWORDTEXT = i18n.password;
const PasswordDisplay = () => {
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
    <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 22rem)" }}>
      <RenderBreadcrumbsForComponent name={PASSWORDTEXT.title} path={PASSWORDTEXT.path} />
      <div style={{ padding: "1rem" }}>
        <RenderComponentHeading title={PASSWORDTEXT.title} description={PASSWORDTEXT.description} />

        <Tabs color="primary" style={{ marginTop: "2rem" }} value={selectedTab}
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
               {/* Usage Variations */}
               <RenderVariations ref={variationRefs[0]} label={PASSWORDTEXT.usage.installation.label} text={PASSWORDTEXT.usage.installation.description} />
               <RenderVariations ref={variationRefs[1]} label={PASSWORDTEXT.usage.variants.label} description={PASSWORDTEXT.usage.variants.description} code={CODE_1} text={TEXT_1}/>
               <RenderVariations ref={variationRefs[2]} label={PASSWORDTEXT.usage.sizes.label} description={PASSWORDTEXT.usage.sizes.description} code={CODE_2} text={TEXT_2}/>
               <RenderVariations ref={variationRefs[3]} label={PASSWORDTEXT.usage.hasError.label} description={PASSWORDTEXT.usage.hasError.description} code={CODE_3} text={TEXT_3}/>
               <RenderVariations ref={variationRefs[4]} label={PASSWORDTEXT.usage.labelPlaceholder.label} description={PASSWORDTEXT.usage.labelPlaceholder.description} code={CODE_4} text={TEXT_4}/>
               
               {renderSideBarItem([PASSWORDTEXT.usage.installation.label, PASSWORDTEXT.usage.variants.label, PASSWORDTEXT.usage.sizes.label, PASSWORDTEXT.usage.hasError.label, PASSWORDTEXT.usage.labelPlaceholder.label], selectedVariationSideBarItem,  variationRefs)}
            </TabPanel>
            <TabPanel value="props">
            <Text
                preciseColor={textColor}
                size="large"
                style={{ marginTop: "2rem" }}
              >
                {PASSWORDTEXT.props._label}
              </Text>

              <RenderProps ref={propsRef[0]} propName={PASSWORDTEXT.props.variant.name} description={PASSWORDTEXT.props.variant.description} type={PASSWORDTEXT.props.variant.type} defaultValue={PASSWORDTEXT.props.variant.default} marginTop="1rem"/>
              <RenderProps ref={propsRef[1]} propName={PASSWORDTEXT.props.size.name} description={PASSWORDTEXT.props.size.description} type={PASSWORDTEXT.props.size.type} defaultValue={PASSWORDTEXT.props.size.default}/>
              <RenderProps ref={propsRef[2]} propName={PASSWORDTEXT.props.cursor.name} description={PASSWORDTEXT.props.cursor.description} type={PASSWORDTEXT.props.cursor.type} defaultValue={PASSWORDTEXT.props.cursor.default}/>
              <RenderProps ref={propsRef[3]} propName={PASSWORDTEXT.props.color.name} description={PASSWORDTEXT.props.color.description} type={PASSWORDTEXT.props.color.type} defaultValue={PASSWORDTEXT.props.color.default}/>
              <RenderProps ref={propsRef[4]} propName={PASSWORDTEXT.props.width.name} description={PASSWORDTEXT.props.width.description} type={PASSWORDTEXT.props.width.type} defaultValue={PASSWORDTEXT.props.width.default}/>
              <RenderProps ref={propsRef[5]} propName={PASSWORDTEXT.props.value.name} description={PASSWORDTEXT.props.value.description} type={PASSWORDTEXT.props.value.type} defaultValue={PASSWORDTEXT.props.value.default}/>
              <RenderProps ref={propsRef[6]} propName={PASSWORDTEXT.props.disabled.name} description={PASSWORDTEXT.props.disabled.description} type={PASSWORDTEXT.props.disabled.type} defaultValue={PASSWORDTEXT.props.disabled.default}/>
              <RenderProps ref={propsRef[7]} propName={PASSWORDTEXT.props.fullWidth.name} description={PASSWORDTEXT.props.fullWidth.description} type={PASSWORDTEXT.props.fullWidth.type} defaultValue={PASSWORDTEXT.props.fullWidth.default}/>
              <RenderProps ref={propsRef[8]} propName={PASSWORDTEXT.props.label.name} description={PASSWORDTEXT.props.label.description} type={PASSWORDTEXT.props.label.type} defaultValue={PASSWORDTEXT.props.label.default}/>
              <RenderProps ref={propsRef[9]} propName={PASSWORDTEXT.props.labelPosition.name} description={PASSWORDTEXT.props.labelPosition.description} type={PASSWORDTEXT.props.labelPosition.type} defaultValue={PASSWORDTEXT.props.labelPosition.default}/>
              <RenderProps ref={propsRef[10]} propName={PASSWORDTEXT.props.placeholder.name} description={PASSWORDTEXT.props.placeholder.description} type={PASSWORDTEXT.props.placeholder.type} defaultValue={PASSWORDTEXT.props.placeholder.default}/>
            
              {renderSideBarItem([PASSWORDTEXT.props.variant.name, PASSWORDTEXT.props.size.name, PASSWORDTEXT.props.cursor.name, PASSWORDTEXT.props.color.name, PASSWORDTEXT.props.width.name, PASSWORDTEXT.props.value.name, PASSWORDTEXT.props.disabled.name, PASSWORDTEXT.props.fullWidth.name, PASSWORDTEXT.props.label.name, PASSWORDTEXT.props.labelPosition.name, PASSWORDTEXT.props.placeholder.name], selectedPropsSideBarItem, propsRef)}

            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  )
  
};
export default PasswordDisplay;

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
    <Password color="component" variant="contained" placeholder="Search here" />
    <Password color="component" variant="outlined" placeholder="Search here" />
    <Password color="component" variant="soft" placeholder="Search here" />
  </div>
);
const TEXT_1 = `<Password variant="contained" placeholder="Search here" />
<Password variant="outlined" placeholder="Search here" />
<Password variant="soft" placeholder="Search here" />
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
    <Password color="component" size="small" placeholder="Search here" />
    <Password color="component" size="medium" placeholder="Search here" />
    <Password color="component" size="large" placeholder="Search here" />
  </div>
);
const TEXT_2 = `<Password size="small" placeholder="Search here" />
<Password size="medium" placeholder="Search here" />
<Password size="large" placeholder="Search here" />
`;

const CODE_3 = (
  <div
    style={{
      display: "flex",
      gap: "2rem",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Password color="component" size="small" placeholder="Search here" hasError errorMessage="Error is displayed here"/>
  </div>
);
const TEXT_3 = `<Password size="small" placeholder="Search here" hasError errorMessage="Error is displayed here"/>`;

const CODE_4 = (
  <div
    style={{
      display: "flex",
      gap: "2rem",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Password color="component" size="small" placeholder="Custom Placeholder" label="Password Label"/>
  </div>
);
const TEXT_4 = `<Password size="small" placeholder="Custom Placeholder" label="Password Label"/>`;
