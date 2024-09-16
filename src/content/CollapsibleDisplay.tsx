import {
  Text,
  useTheme,
  SideBar,
  SideBarItem,
  Tabs,
  TabPanels,
  TabPanel,
  Accordion,
  AccordionItem,
  Collapsible,
} from "stelios";
import {
  RenderBreadcrumbsForComponent,
  RenderComponentHeading,
  RenderProps,
  RenderTabsList,
  RenderVariations,
} from "../helpers/helpers";
import i18n from "../i18n/i18n_en.json";

const COLLAPSIBLE = i18n.collapsible;
const AccordionDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";

  return (
    <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 22rem)" }}>
      <RenderBreadcrumbsForComponent
        name={COLLAPSIBLE.title}
        path={COLLAPSIBLE.path}
      />

      <div style={{ padding: "1rem" }}>
        <RenderComponentHeading
          title={COLLAPSIBLE.title}
          description={COLLAPSIBLE.description}
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
                label={COLLAPSIBLE.usage.installation.label}
                text={COLLAPSIBLE.usage.installation.description}
              />
              <RenderVariations
                label={COLLAPSIBLE.usage.variants.label}
                description={COLLAPSIBLE.usage.variants.description}
                code={CODE_1}
                text={TEXT_1}
                language="javascript"
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
                {COLLAPSIBLE.props._label}
              </Text>
              <RenderProps
                propName={COLLAPSIBLE.props.variant.name}
                description={COLLAPSIBLE.props.variant.description}
                type={COLLAPSIBLE.props.variant.type}
                defaultValue={COLLAPSIBLE.props.variant.default}
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
};
export default AccordionDisplay;
const COLLAPSIBLE_TITLE_1 = "Collapsible Title";
const COLLAPSIBLE_CONTENT_1 = "Vercal is a cloud platform that enables developers to build, deploy, and scale web applications effortlessly. It is optimized for front-end frameworks like Next.js and offers automatic deployment from Git repositories, serverless functions, and a global content delivery network (CDN) for fast performance. Vercel simplifies workflows with features like continuous integration, previews for every pull request, and automatic scaling.";
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
    <Collapsible open={true} width="400px" color="component" title={COLLAPSIBLE_TITLE_1} variant="contained">
      <Text disableColor size="small" style={{padding: "1rem"}}>{COLLAPSIBLE_CONTENT_1}</Text>
    </Collapsible>
    <Collapsible open={true} width="400px" color="component" title={COLLAPSIBLE_TITLE_1} variant="outlined">
      <Text disableColor size="small" style={{padding: "1rem"}}>{COLLAPSIBLE_CONTENT_1}</Text>
    </Collapsible>
    <Collapsible open={true} width="400px" color="component" title={COLLAPSIBLE_TITLE_1} variant="soft">
      <Text disableColor size="small" style={{padding: "1rem"}}>{COLLAPSIBLE_CONTENT_1}</Text>
    </Collapsible>
    <Collapsible open={true} width="400px" color="component" title={COLLAPSIBLE_TITLE_1} variant="transparent">
      <Text disableColor size="small" style={{padding: "1rem"}}>{COLLAPSIBLE_CONTENT_1}</Text>
    </Collapsible>

  </div>
);
const TEXT_1 = `
const COLLAPSIBLE_TITLE_1 = "Collapsible Title";
const COLLAPSIBLE_CONTENT_1 = "Vercal is a cloud platform that enables developers to build, deploy, and scale web applications effortlessly. It is optimized for front-end frameworks like Next.js and offers automatic deployment from Git repositories, serverless functions, and a global content delivery network (CDN) for fast performance. Vercel simplifies workflows with features like continuous integration, previews for every pull request, and automatic scaling.";

<Collapsible title={COLLAPSIBLE_TITLE_1} variant="contained">
  <Text disableColor size="small" style={{padding: "1rem"}}>{COLLAPSIBLE_CONTENT_1}</Text>
</Collapsible>
<Collapsible title={COLLAPSIBLE_TITLE_1} variant="outlined">
  <Text disableColor size="small" style={{padding: "1rem"}}>{COLLAPSIBLE_CONTENT_1}</Text>
</Collapsible>
<Collapsible title={COLLAPSIBLE_TITLE_1} variant="soft">
  <Text disableColor size="small" style={{padding: "1rem"}}>{COLLAPSIBLE_CONTENT_1}</Text>
</Collapsible>
<Collapsible title={COLLAPSIBLE_TITLE_1} variant="transparent">
  <Text disableColor size="small" style={{padding: "1rem"}}>{COLLAPSIBLE_CONTENT_1}</Text>
</Collapsible>
`;
