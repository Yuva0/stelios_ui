import {
  Text,
  useTheme,
  SideBar,
  SideBarItem,
  Tabs,
  TabPanels,
  TabPanel,
  Link
} from "stelios";
import {
  RenderBreadcrumbsForComponent,
  RenderComponentHeading,
  RenderProps,
  RenderTabsList,
  RenderVariations,
} from "../helpers/helpers";
import i18n from "../i18n/i18n_en.json";

const LINK = i18n.link;
const LinkDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";

    return (
      <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 22rem)" }}>
        <RenderBreadcrumbsForComponent name={LINK.title} path={LINK.path}/>
  
        <div style={{ padding: "1rem" }}>
          <RenderComponentHeading
            title={LINK.title}
            description={LINK.description}
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
                  label={LINK.usage.installation.label}
                  text={LINK.usage.installation.description}
                />
                <RenderVariations
                  label={LINK.usage.variants.label}
                  description={LINK.usage.variants.description}
                  code={CODE_1}
                  text={TEXT_1}
                />
                <RenderVariations
                  label={LINK.usage.sizes.label}
                  description={LINK.usage.sizes.description}
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
                  {LINK.props._label}
                </Text>
                <RenderProps
                  propName={LINK.props.variant.name}
                  description={
                    LINK.props.variant.description
                  }
                  type={LINK.props.variant.type}
                  defaultValue={
                    LINK.props.variant.default
                  }
                  marginTop="1rem"
                />
                <RenderProps
                  propName={LINK.props.size.name}
                  description={
                    LINK.props.size.description
                  }
                  type={LINK.props.size.type}
                  defaultValue={
                    LINK.props.size.default
                  }
                  marginTop="1rem"
                />
                <RenderProps
                  propName={LINK.props.href.name}
                  description={
                    LINK.props.href.description
                  }
                  type={LINK.props.href.type}
                  defaultValue={
                    LINK.props.href.default
                  }
                  marginTop="1rem"
                />
                <RenderProps
                  propName={LINK.props.target.name}
                  description={
                    LINK.props.target.description
                  }
                  type={LINK.props.target.type}
                  defaultValue={
                    LINK.props.target.default
                  }
                  marginTop="1rem"
                />
                <RenderProps
                  propName={LINK.props.color.name}
                  description={
                    LINK.props.color.description
                  }
                  type={LINK.props.color.type}
                  defaultValue={
                    LINK.props.color.default
                  }
                />
                <RenderProps
                  propName={LINK.props.children.name}
                  description={
                    LINK.props.children.description
                  }
                  type={LINK.props.children.type}
                  defaultValue={
                    LINK.props.children.default
                  }
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
export default LinkDisplay;

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
    <Link href="#" color="component" variant="default"> Default Link </Link>
    <Link href="#" color="component" variant="underline"> Underline Link </Link>
    <Link href="#" color="component" variant="hover"> None Link </Link>
  </div>
);
const TEXT_1 = `<Link href="#" color="component" variant="default"> Default Link </Link>
<Link href="#" color="component" variant="underline"> Underline Link </Link>
<Link href="#" color="component" variant="hover"> None Link </Link>
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
    <Link href="#" color="component" size="small"> Small Link </Link>
    <Link href="#" color="component" size="medium"> Medium Link </Link>
    <Link href="#" color="component" size="large"> Large Link </Link>
  </div>
);
const TEXT_2 = `<Link href="#" color="component" size="small"> Small Link </Link>
<Link href="#" color="component" size="medium"> Medium Link </Link>
<Link href="#" color="component" size="large"> Large Link </Link>
`;