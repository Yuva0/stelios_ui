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

const TITLE = "IconButton";
const DESCRIPTION = "IconButton is a button component that can be used to trigger an event or action.";

const BANNER_GRATEFUL_TITLE = "Thank you for using Stelios!";

const INSTALLATION_1 = `import { IconButton } from "stelios"`;

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

const CODE_5 = (
  <div style={{ display: "flex", gap: "2rem" }}>
    <IconButton icon={<IconAwardFilled/>} alt="Award" color="primary" disabled>
      Click Me
    </IconButton>
  </div>
);
const TEXT_5 = `
    <IconButton color="primary" disabled> Click Me </IconButton>`;

const CODE_7 = (
  <div style={{ display: "flex", gap: "2rem", width: "100%", justifyContent:"center", alignItems: "center" }}>
    <ThemeProvider accents={{primary: "#0096ee", secondary: "#305c84", success: "#639765", info: "#376390", warning: "#dbc533", danger: "#ee0032"}}>
      <IconButton alt="Award" icon={<IconAwardFilled/>} color="primary">
        Click Me
      </IconButton>
      <IconButton alt="Award" icon={<IconAwardFilled/>} color="secondary">
        Click Me
      </IconButton>
      <IconButton alt="Award" icon={<IconAwardFilled/>} color="success">
        Click Me
      </IconButton>
      <IconButton alt="Award" icon={<IconAwardFilled/>} color="info">
        Click Me
      </IconButton>
      <IconButton alt="Award" icon={<IconAwardFilled/>} color="warning">
        Click Me
      </IconButton>
      <IconButton alt="Award" icon={<IconAwardFilled/>} color="danger">
        Click Me
      </IconButton>
    </ThemeProvider>
  </div>
)
const TEXT_7 = `
    <ThemeProvider accents={{primary: "#0096ee", secondary: "#305c84", success: "#639765", info: "#376390", warning: "#dbc533", danger: "#ee0032"}}>
      <IconButton alt="Award" icon={<IconAwardFilled/>} color="primary">
        Click Me
      </IconButton>
      <IconButton alt="Award" icon={<IconAwardFilled/>} color="secondary">
        Click Me
      </IconButton>
      <IconButton alt="Award" icon={<IconAwardFilled/>} color="success">
        Click Me
      </IconButton>
      <IconButton alt="Award" icon={<IconAwardFilled/>} color="info">
        Click Me
      </IconButton>
      <IconButton alt="Award" icon={<IconAwardFilled/>} color="warning">
        Click Me
      </IconButton>
      <IconButton alt="Award" icon={<IconAwardFilled/>} color="danger">
        Click Me
      </IconButton
    </ThemeProvider>`;

const BANNER_GRATEFUL_DESC = (
  <>
    <Text disableColor size="small" style={{ marginTop: "0.5rem" }}>
      If you've enjoyed using my design system and appreciate it's features, I
      would be incredibly grateful if you could show your support by starring
      the{" "}
      <Link
        variant="underline"
        size="small"
        color="primary"
        href="https://github.com/Yuva0/stelios"
        target={"_blank"}
      >
        repository
      </Link>
      .
    </Text>
    <Text disableColor size="small">
      A tremendous amount of thought, effort, and time has gone into crafting a
      responsive, accessible, and versatile system and one star would be a great
      way to show your appreciation.
    </Text>
  </>
);

const onClickEvent = `(e: React.MouseEvent<HTMLButtonElement>) => void;`;

const ButtonDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";
  const bgColor =
    colorPalette.primary.appearance === "light" ? "white" : "black";

  const line = <div
  style={{
    height: "1px",
    width: "100%",
    backgroundColor: colorPalette.primary.grayScale[1],
    marginTop: "1rem",
  }}/>

  return (
    <div>
      <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 10rem)" }}>
        <Breadcrumbs
          color="primary"
          variant="text"
          style={{ padding: 0 }}
          delimiter="/"
        >
          <BreadcrumbsItem title="Components" />
          <BreadcrumbsItem link="item" title="IconButton" />
        </Breadcrumbs>
        <div style={{ padding: "1rem" }}>
          <Text preciseColor={textColor} variant="h1">
            {TITLE}
          </Text>
          <Text
            preciseColor={textColor}
            variant="paragraph"
            style={{ marginTop: "0.5rem" }}
          >
            {DESCRIPTION}
          </Text>
          <Banner
            width="100%"
            title={BANNER_GRATEFUL_TITLE}
            color="secondary"
            description={BANNER_GRATEFUL_DESC}
            titleIcon={<IconHeartFilled />}
            style={{ marginTop: "1rem" }}
            variant="outlined"
          />
          <Tabs color="primary" style={{ marginTop: "2rem" }} value="usage">
            <TabList width="100%">
              <Tab label="Usage" value="usage" />
              <Tab label="Props" value="props" />
              <Tab label="Theme" value="theme" />
            </TabList>
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
                  Installation Guides
                </Text>
                <CodeDisplay
                  color="primary"
                  language="jsx"
                  text={INSTALLATION_1}
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
                  code={CODE_5}
                  text={TEXT_5}
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
                <Tag color="primary" variant="outlined" style={{marginTop: "1rem",}}>variant</Tag>
                {line}
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{minWidth: "200px"}}><b>Description</b></Text>
                  <Text preciseColor={textColor}>The variant of the icon button</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{minWidth: "200px"}}><b>Type</b></Text>
                  <Text color="primary" style={{wordSpacing: "1rem"}}>"contained" | "outlined" | "soft" | "outlined-soft" | "neumorph" | "neumorph-contained"</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{minWidth: "200px"}}><b>Default</b></Text>
                  <Text color="primary" style={{wordSpacing: "1rem"}}>contained</Text>
                </div>

                <Tag color="primary" variant="outlined" style={{marginTop: "3rem",}}>size</Tag>
                {line}
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{minWidth: "200px"}}><b>Description</b></Text>
                  <Text preciseColor={textColor}>The size of the icon button</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{minWidth: "200px"}}><b>Type</b></Text>
                  <Text color="primary" style={{wordSpacing: "1rem"}}>"small" | "medium" | "large"</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{minWidth: "200px"}}><b>Default</b></Text>
                  <Text color="primary" style={{wordSpacing: "1rem"}}>medium</Text>
                </div>

                <Tag color="primary" variant="outlined" style={{marginTop: "3rem",}}>disabled</Tag>
                {line}
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{minWidth: "200px"}}><b>Description</b></Text>
                  <Text preciseColor={textColor}>Whether the icon button is disabled or not</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{minWidth: "200px"}}><b>Type</b></Text>
                  <Text color="primary" style={{wordSpacing: "1rem"}}>boolean</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{minWidth: "200px"}}><b>Default</b></Text>
                  <Text color="primary" style={{wordSpacing: "1rem"}}>false</Text>
                </div>

                <Tag color="primary" variant="outlined" style={{marginTop: "3rem",}}>children</Tag>
                {line}
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{minWidth: "200px"}}><b>Description</b></Text>
                  <Text preciseColor={textColor}>Children of the icon button</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{minWidth: "200px"}}><b>Type</b></Text>
                  <Text color="primary" style={{wordSpacing: "1rem"}}>React.ReactNode | React.ReactNode[]</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{minWidth: "200px"}}><b>Default</b></Text>
                  <Text color="primary" style={{wordSpacing: "1rem"}}>undefined</Text>
                </div>

                <Tag color="primary" variant="outlined" style={{marginTop: "3rem",}}>onClick</Tag>
                {line}
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{minWidth: "200px"}}><b>Description</b></Text>
                  <Text preciseColor={textColor}>Called on click of the icon button</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{minWidth: "200px"}}><b>Type</b></Text>
                  <Text color="primary">{onClickEvent}</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{minWidth: "200px"}}><b>Default</b></Text>
                  <Text color="primary">undefined</Text>
                </div>

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
              <TabPanel value="theme">
                <Text
                    preciseColor={textColor}
                    size="large"
                    style={{ marginTop: "2rem" }}
                  >
                  Theme Props
                </Text>
                <Text
                  preciseColor={textColor}
                  size="medium"
                  color="primary"
                  style={{ marginTop: "0.25rem" }}
                >
                  ThemeProvider with accents prop can be used to change the color of the icon button.
                </Text>
                <CodePreview
                  code={CODE_7}
                  text={TEXT_7}
                  codeStyle={{ backgroundColor: bgColor }}
                  textStyle={{ padding: "0 0 1rem 0" }}
                  style={{ marginTop: "1rem" }}
                  color="primary"
                  language="jsx"
                />
                <SideBar style={{ width: "10rem", top: "5rem" }}>
                  <SideBarItem color="primary" selected>Theme</SideBarItem>
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
