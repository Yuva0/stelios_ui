import {
  Text,
  useTheme,
  SideBar,
  SideBarItem,
  Tabs,
  TabPanels,
  TabPanel,
  Capsule
} from "stelios";
import {
  RenderBreadcrumbsForComponent,
  RenderComponentHeading,
  RenderProps,
  RenderTabsList,
  RenderVariations,
} from "../helpers/helpers";
import i18n from "../i18n/i18n_en.json";

const CAPSULE = i18n.capsule;
const CapsuleDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";

    return (
      <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 22rem)" }}>
        <RenderBreadcrumbsForComponent name={CAPSULE.title} path={CAPSULE.path}/>
  
        <div style={{ padding: "1rem" }}>
          <RenderComponentHeading
            title={CAPSULE.title}
            description={CAPSULE.description}
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
                  label={CAPSULE.usage.installation.label}
                  text={CAPSULE.usage.installation.description}
                />
                <RenderVariations
                  label={CAPSULE.usage.variants.label}
                  description={CAPSULE.usage.variants.description}
                  code={CODE_1}
                  text={TEXT_1}
                />
                {/* <RenderVariations
                  label={CAPSULE.usage.width_height.label}
                  description={CAPSULE.usage.width_height.description}
                  code={CODE_2}
                  text={TEXT_2}
                />
                <RenderVariations
                  label={CAPSULE.usage.image.label}
                  description={CAPSULE.usage.image.description}
                  code={CODE_3}
                  text={TEXT_3}
                />
   */}
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
                  {CAPSULE.props._label}
                </Text>
                <RenderProps
                  propName={CAPSULE.props.variant.name}
                  description={
                    CAPSULE.props.variant.description
                  }
                  type={CAPSULE.props.variant.type}
                  defaultValue={
                    CAPSULE.props.variant.default
                  }
                  marginTop="1rem"
                />
                <RenderProps
                  propName={CAPSULE.props.color.name}
                  description={
                    CAPSULE.props.color.description
                  }
                  type={CAPSULE.props.color.type}
                  defaultValue={
                    CAPSULE.props.color.default
                  }
                />
                <RenderProps
                  propName={CAPSULE.props.width.name}
                  description={
                    CAPSULE.props.width.description
                  }
                  type={CAPSULE.props.width.type}
                  defaultValue={
                    CAPSULE.props.width.default
                  }
                />
                <RenderProps
                  propName={CAPSULE.props.height.name}
                  description={
                    CAPSULE.props.height.description
                  }
                  type={CAPSULE.props.height.type}
                  defaultValue={
                    CAPSULE.props.height.default
                  }
                />
                <RenderProps
                  propName={CAPSULE.props.image.name}
                  description={
                    CAPSULE.props.image.description
                  }
                  type={CAPSULE.props.image.type}
                  defaultValue={
                    CAPSULE.props.image.default
                  }
                />
                <RenderProps
                  propName={CAPSULE.props.imageAlt.name}
                  description={
                    CAPSULE.props.imageAlt.description
                  }
                  type={CAPSULE.props.imageAlt.type}
                  defaultValue={
                    CAPSULE.props.imageAlt.default
                  }
                />
                <RenderProps
                  propName={CAPSULE.props.imagePosition.name}
                  description={
                    CAPSULE.props.imagePosition.description
                  }
                  type={CAPSULE.props.imagePosition.type}
                  defaultValue={
                    CAPSULE.props.imagePosition.default
                  }
                />
                <RenderProps
                  propName={CAPSULE.props.title.name}
                  description={
                    CAPSULE.props.title.description
                  }
                  type={CAPSULE.props.title.type}
                  defaultValue={
                    CAPSULE.props.title.default
                  }
                />
                <RenderProps
                  propName={CAPSULE.props.description.name}
                  description={
                    CAPSULE.props.description.description
                  }
                  type={CAPSULE.props.description.type}
                  defaultValue={
                    CAPSULE.props.description.default
                  }
                />
                <RenderProps
                  propName={CAPSULE.props.onClick.name}
                  description={
                    CAPSULE.props.onClick.description
                  }
                  type={CAPSULE.props.onClick.type}
                  defaultValue={
                    CAPSULE.props.onClick.default
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
export default CapsuleDisplay;

const title = "MERN Stack";
const description = "MongoDB, Express, React, and Node.js.";
const IMAGE_URL = `https://static.vecteezy.com/system/resources/previews/003/549/556/non_2x/space-galaxy-background-free-vector.jpg`;

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
    <Capsule image={IMAGE_URL} imageAlt="No Man's Sky" title={title} description={description} variant="contained" color="component"/>
    <Capsule image={IMAGE_URL} imageAlt="No Man's Sky" title={title} description={description} variant="outlined" color="component"/>
    <Capsule image={IMAGE_URL} imageAlt="No Man's Sky" title={title} description={description} variant="soft" color="component"/>
  </div>
);
const TEXT_1 = `const title = "MERN Stack";
const description = "MongoDB, Express, React, and Node.js.";
<Capsule title={title} description={description} variant="contained" color="component"/>
<Capsule title={title} description={description} variant="outlined" color="component"/>
<Capsule title={title} description={description} variant="soft" color="component"/>`;
