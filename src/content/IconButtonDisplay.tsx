import {
  Banner,
  Breadcrumbs,
  BreadcrumbsItem,
  CodePreview,
  Text,
  useTheme,
  Link,
  CodeDisplay,
  SideBar,
  SideBarItem,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tag,
  ThemeProvider,
  IconButton,
} from "stelios";
import { IconAwardFilled, IconHeartFilled } from "@tabler/icons-react";
import { RenderBreadcrumbsForComponent, RenderComponentHeading, RenderProps, RenderTabsList } from "../helpers/helpers";
import i18n from "../i18n/i18n_en.json";

const ICONBUTTON = i18n.iconButton;

const ButtonDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";
  const bgColor =
    colorPalette.primary.appearance === "light" ? "white" : "black";

  return (
    <div>
      <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 10rem)" }}>

        <RenderBreadcrumbsForComponent name={i18n.iconButton.title}/>

        <div style={{ padding: "1rem" }}>
          <RenderComponentHeading title={ICONBUTTON.title} description={ICONBUTTON.description}/>

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
                <Text
                  preciseColor={textColor}
                  size="large"
                  style={{ marginTop: "2rem" }}
                >
                  {ICONBUTTON.usage.installation.label}
                </Text>
                <CodeDisplay
                  color="primary"
                  language="jsx"
                  text={ICONBUTTON.usage.installation.description}
                  style={{ marginTop: "0.5rem" }}
                />
                <Text
                  preciseColor={textColor}
                  size="large"
                  color="primary"
                  style={{ marginTop: "2rem" }}
                >
                  Variants
                </Text>
                <Text
                  preciseColor={textColor}
                  size="medium"
                  style={{ marginTop: "0.25rem" }}
                >
                  IconButton comes in multiple variants: contained, outlined, soft,
                  outlined-soft & neumorph.
                </Text>
                <CodePreview
                  code={CODE_1}
                  text={TEXT_1}
                  codeStyle={{ backgroundColor: bgColor }}
                  textStyle={{ padding: "0 0 1rem 0" }}
                  style={{ marginTop: "1rem" }}
                  color="primary"
                  language="jsx"
                />
                <Text
                  preciseColor={textColor}
                  size="large"
                  color="primary"
                  style={{ marginTop: "2rem" }}
                >
                  Sizes
                </Text>
                <Text
                  preciseColor={textColor}
                  variant="paragraph"
                  style={{ marginTop: "0.5rem" }}
                      >
                  IconButton comes in multiple sizes: small, medium & large.
                </Text>
                <CodePreview
                  code={CODE_2}
                  text={TEXT_2}
                  codeStyle={{ backgroundColor: bgColor }}
                  textStyle={{ padding: "0 0 1rem 0" }}
                  style={{ marginTop: "1rem" }}
                  color="primary"
                  language="jsx"
                />
                <Text
                  preciseColor={textColor}
                  size="large"
                  color="primary"
                  style={{ marginTop: "2rem" }}
                >
                  Disabled
                </Text>
                <Text
                  preciseColor={textColor}
                  size="medium"
                  color="primary"
                  style={{ marginTop: "0.25rem" }}
                >
                  IconButton can be disabled
                </Text>
                <CodePreview
                  code={CODE_3}
                  text={TEXT_3}
                  codeStyle={{ backgroundColor: bgColor }}
                  textStyle={{ padding: "0 0 1rem 0" }}
                  style={{ marginTop: "1rem" }}
                  color="primary"
                  language="jsx"
                />
                <SideBar style={{ width: "10rem", top: "5rem" }}>
                  <SideBarItem color="primary" selected>
                    Installation
                  </SideBarItem>
                  <SideBarItem color="primary">Variants</SideBarItem>
                  <SideBarItem color="primary">Sizes</SideBarItem>
                  <SideBarItem color="primary">Disabled</SideBarItem>
                </SideBar>
              </TabPanel>
              <TabPanel value="props">
                <Text
                  preciseColor={textColor}
                  size="large"
                  style={{ marginTop: "2rem" }}
                >
                  IconButton Props
                </Text>

                <RenderProps propName={ICONBUTTON.props.variant.name} description={ICONBUTTON.props.variant.description} type={ICONBUTTON.props.variant.type} defaultValue={ICONBUTTON.props.variant.default} marginTop="1rem"/>
                <RenderProps propName={ICONBUTTON.props.size.name} description={ICONBUTTON.props.size.description} type={ICONBUTTON.props.size.type} defaultValue={ICONBUTTON.props.size.default} />
                <RenderProps propName={ICONBUTTON.props.disabled.name} description={ICONBUTTON.props.disabled.description} type={ICONBUTTON.props.disabled.type} defaultValue={ICONBUTTON.props.disabled.default} />
                <RenderProps propName={ICONBUTTON.props.color.name} description={ICONBUTTON.props.color.description} type={ICONBUTTON.props.color.type} defaultValue={ICONBUTTON.props.color.default} />
                <RenderProps propName={ICONBUTTON.props.icon.name} description={ICONBUTTON.props.icon.description} type={ICONBUTTON.props.icon.type} defaultValue={ICONBUTTON.props.icon.default} />
                <RenderProps propName={ICONBUTTON.props.alt.name} description={ICONBUTTON.props.alt.description} type={ICONBUTTON.props.alt.type} defaultValue={ICONBUTTON.props.alt.default} />
                <RenderProps propName={ICONBUTTON.props.onClick.name} description={ICONBUTTON.props.onClick.description} type={ICONBUTTON.props.onClick.type} defaultValue={ICONBUTTON.props.onClick.default} wordSpacing="4px"/>

                <SideBar style={{ width: "10rem", top: "5rem" }}>
                  <SideBarItem color="primary" selected size="small">
                    variant
                  </SideBarItem>
                  <SideBarItem color="primary" size="small">size</SideBarItem>
                  <SideBarItem color="primary" size="small">rounded</SideBarItem>
                  <SideBarItem color="primary" size="small">disabled</SideBarItem>
                  <SideBarItem color="primary" size="small">isFullWidth</SideBarItem>
                  <SideBarItem color="primary" size="small">color</SideBarItem>
                  <SideBarItem color="primary" size="small">leadingIcon</SideBarItem>
                  <SideBarItem color="primary" size="small">trailingIcon</SideBarItem>
                  <SideBarItem color="primary" size="small">onClick</SideBarItem>
                </SideBar>

              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
export default ButtonDisplay;

const CODE_1 = (
  <div style={{ display: "flex", gap: "2rem" }}>
    <IconButton icon={<IconAwardFilled/>} alt="Award" color="primary" variant="contained"/>
    <IconButton icon={<IconAwardFilled/>} alt="Award" color="primary" variant="outlined"/>
    <IconButton icon={<IconAwardFilled/>} alt="Award" color="primary" variant="outlined-soft"/>
    <IconButton icon={<IconAwardFilled/>} alt="Award" color="primary" variant="soft"/>
    <IconButton icon={<IconAwardFilled/>} alt="Award" color="primary" variant="neumorph"/>
    <IconButton icon={<IconAwardFilled/>} alt="Award" color="primary" variant="neumorph-contained"/>
    <IconButton icon={<IconAwardFilled/>} alt="Award" color="primary" disabled/>
  </div>
);
const TEXT_1 = `
    <IconButton icon={<IconAwardFilled/>} alt="Award" color="primary" variant="contained"/>
    <IconButton icon={<IconAwardFilled/>} alt="Award" color="primary" variant="outlined"/>
    <IconButton icon={<IconAwardFilled/>} alt="Award" color="primary" variant="outlined-soft"/>
    <IconButton icon={<IconAwardFilled/>} alt="Award" color="primary" variant="soft"/>
    <IconButton icon={<IconAwardFilled/>} alt="Award" color="primary" variant="neumorph"/>
    <IconButton icon={<IconAwardFilled/>} alt="Award" color="primary" variant="neumorph-contained"/>
    <IconButton icon={<IconAwardFilled/>} alt="Award" color="primary" disabled/>`;

const CODE_2 = (
  <div style={{ display: "flex", gap: "2rem", justifyContent: "center", alignItems: "center" }}>
    <IconButton icon={<IconAwardFilled/>} alt="Award" color="primary" size="small" style={{height: "fit-content"}}/>
    <IconButton icon={<IconAwardFilled/>} alt="Award" color="primary" size="medium" style={{height: "fit-content"}}/>
    <IconButton icon={<IconAwardFilled/>} alt="Award" color="primary" size="large" style={{height: "fit-content"}}/>
  </div>
);
const TEXT_2 = `
    <IconButton icon={<IconAwardFilled/>} alt="Award" color="primary" size="small"/>
    <IconButton icon={<IconAwardFilled/>} alt="Award" color="primary" size="medium"/>
    <IconButton icon={<IconAwardFilled/>} alt="Award" color="primary" size="large"/>`;

const CODE_3 = (
  <div style={{ display: "flex", gap: "2rem" }}>
    <IconButton icon={<IconAwardFilled/>} alt="Award" color="primary" disabled>
      Click Me
    </IconButton>
  </div>
);
const TEXT_3 = `
    <IconButton color="primary" disabled> Click Me </IconButton>`;