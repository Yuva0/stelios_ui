import {
  Text,
  useTheme,
  SideBar,
  SideBarItem,
  Tabs,
  TabPanels,
  TabPanel,
  Password
} from "stelios";
import {
  RenderBreadcrumbsForComponent,
  RenderComponentHeading,
  RenderProps,
  RenderTabsList,
  RenderVariations,
} from "../helpers/helpers";
import i18n from "../i18n/i18n_en.json";

const PASSWORDTEXT = i18n.password;
const PasswordDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;
  const textColor =
  colorPalette.primary.appearance === "light" ? "black" : "white";

  return (
    <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 22rem)" }}>
      <RenderBreadcrumbsForComponent name={PASSWORDTEXT.title} path={PASSWORDTEXT.path} />
      <div style={{ padding: "1rem" }}>
        <RenderComponentHeading title={PASSWORDTEXT.title} description={PASSWORDTEXT.description} />

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
               {/* Usage Variations */}
               <RenderVariations label={PASSWORDTEXT.usage.installation.label} text={PASSWORDTEXT.usage.installation.description} />
               <RenderVariations label={PASSWORDTEXT.usage.variants.label} description={PASSWORDTEXT.usage.variants.description} code={CODE_1} text={TEXT_1}/>
               <RenderVariations label={PASSWORDTEXT.usage.sizes.label} description={PASSWORDTEXT.usage.sizes.description} code={CODE_2} text={TEXT_2}/>
               <RenderVariations label={PASSWORDTEXT.usage.hasError.label} description={PASSWORDTEXT.usage.hasError.description} code={CODE_3} text={TEXT_3}/>
               <RenderVariations label={PASSWORDTEXT.usage.labelPlaceholder.label} description={PASSWORDTEXT.usage.labelPlaceholder.description} code={CODE_4} text={TEXT_4}/>
               
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
                {PASSWORDTEXT.props._label}
              </Text>

              <RenderProps propName={PASSWORDTEXT.props.variant.name} description={PASSWORDTEXT.props.variant.description} type={PASSWORDTEXT.props.variant.type} defaultValue={PASSWORDTEXT.props.variant.default} marginTop="1rem"/>
              <RenderProps propName={PASSWORDTEXT.props.size.name} description={PASSWORDTEXT.props.size.description} type={PASSWORDTEXT.props.size.type} defaultValue={PASSWORDTEXT.props.size.default}/>
              <RenderProps propName={PASSWORDTEXT.props.cursor.name} description={PASSWORDTEXT.props.cursor.description} type={PASSWORDTEXT.props.cursor.type} defaultValue={PASSWORDTEXT.props.cursor.default}/>
              <RenderProps propName={PASSWORDTEXT.props.color.name} description={PASSWORDTEXT.props.color.description} type={PASSWORDTEXT.props.color.type} defaultValue={PASSWORDTEXT.props.color.default}/>
              <RenderProps propName={PASSWORDTEXT.props.width.name} description={PASSWORDTEXT.props.width.description} type={PASSWORDTEXT.props.width.type} defaultValue={PASSWORDTEXT.props.width.default}/>
              <RenderProps propName={PASSWORDTEXT.props.value.name} description={PASSWORDTEXT.props.value.description} type={PASSWORDTEXT.props.value.type} defaultValue={PASSWORDTEXT.props.value.default}/>
              <RenderProps propName={PASSWORDTEXT.props.disabled.name} description={PASSWORDTEXT.props.disabled.description} type={PASSWORDTEXT.props.disabled.type} defaultValue={PASSWORDTEXT.props.disabled.default}/>
              <RenderProps propName={PASSWORDTEXT.props.fullWidth.name} description={PASSWORDTEXT.props.fullWidth.description} type={PASSWORDTEXT.props.fullWidth.type} defaultValue={PASSWORDTEXT.props.fullWidth.default}/>
              <RenderProps propName={PASSWORDTEXT.props.label.name} description={PASSWORDTEXT.props.label.description} type={PASSWORDTEXT.props.label.type} defaultValue={PASSWORDTEXT.props.label.default}/>
              <RenderProps propName={PASSWORDTEXT.props.labelPosition.name} description={PASSWORDTEXT.props.labelPosition.description} type={PASSWORDTEXT.props.labelPosition.type} defaultValue={PASSWORDTEXT.props.labelPosition.default}/>
              <RenderProps propName={PASSWORDTEXT.props.placeholder.name} description={PASSWORDTEXT.props.placeholder.description} type={PASSWORDTEXT.props.placeholder.type} defaultValue={PASSWORDTEXT.props.placeholder.default}/>
            
              <SideBar style={{ width: "10rem", top: "5rem" }}>
                <SideBarItem color="primary">variant</SideBarItem>
                <SideBarItem color="primary">size</SideBarItem>
                <SideBarItem color="primary">cursor</SideBarItem>
                <SideBarItem color="primary">color</SideBarItem>
                <SideBarItem color="primary">width</SideBarItem>
                <SideBarItem color="primary">value</SideBarItem>
                <SideBarItem color="primary">disabled</SideBarItem>
                <SideBarItem color="primary">fullWidth</SideBarItem>
                <SideBarItem color="primary">label</SideBarItem>
                <SideBarItem color="primary">labelPosition</SideBarItem>
                <SideBarItem color="primary">placeholder</SideBarItem>
              </SideBar>

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
    <Password color="primary" variant="contained" placeholder="Search here" />
    <Password color="primary" variant="outlined" placeholder="Search here" />
    <Password color="primary" variant="soft" placeholder="Search here" />
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
    <Password color="primary" size="small" placeholder="Search here" />
    <Password color="primary" size="medium" placeholder="Search here" />
    <Password color="primary" size="large" placeholder="Search here" />
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
    <Password color="primary" size="small" placeholder="Search here" hasError errorMessage="Error is displayed here"/>
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
    <Password color="primary" size="small" placeholder="Custom Placeholder" label="Password Label"/>
  </div>
);
const TEXT_4 = `<Password size="small" placeholder="Custom Placeholder" label="Password Label"/>`;
