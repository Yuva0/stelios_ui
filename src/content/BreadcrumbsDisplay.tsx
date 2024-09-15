import {
  Text,
  useTheme,
  SideBar,
  SideBarItem,
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
  RenderTabsList,
  RenderVariations,
} from "../helpers/helpers";
import i18n from "../i18n/i18n_en.json";

const BREADCRUMBS = i18n.breadcrumbs;
const BreadcrumbsDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";

    return (
      <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 22rem)" }}>
        <RenderBreadcrumbsForComponent name={BREADCRUMBS.title} path={BREADCRUMBS.path}/>
  
        <div style={{ padding: "1rem" }}>
          <RenderComponentHeading
            title={BREADCRUMBS.title}
            description={BREADCRUMBS.description}
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
                  label={BREADCRUMBS.usage.installation.label}
                  text={BREADCRUMBS.usage.installation.description}
                />
                <RenderVariations
                  label={BREADCRUMBS.usage.variants.label}
                  description={BREADCRUMBS.usage.variants.description}
                  code={CODE_1}
                  text={TEXT_1}
                />
                <RenderVariations
                  label={BREADCRUMBS.usage.sizes.label}
                  description={BREADCRUMBS.usage.sizes.description}
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
                  {BREADCRUMBS.props._label}
                </Text>
                <RenderProps
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