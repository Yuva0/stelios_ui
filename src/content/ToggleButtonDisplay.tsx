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
  ToggleButtonGroup,
  ToggleButton,
} from "stelios";
import {  IconHeartFilled } from "@tabler/icons-react";

const TITLE = "ToggleButton";
const DESCRIPTION = "Button Group with multiple buttons that can be toggled on or off.";

const BANNER_GRATEFUL_TITLE = "Thank you for using Stelios!";
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

const INSTALLATION_1 = `import { ToggleButton, ToggleButtonGroup } from "stelios"`;

const ONCLICK_EVENT = `(e: React.MouseEvent, value?: string, index?: number) => void;`;

const CODE_1 = (
  <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
    <ToggleButtonGroup color="primary" width="400px" value="toggle1" size="small">
      <ToggleButton value="toggle1">Toggle 1</ToggleButton>
      <ToggleButton value="toggle2">Toggle 2</ToggleButton>
      <ToggleButton value="toggle3">Toggle 3</ToggleButton>
    </ToggleButtonGroup>
    <ToggleButtonGroup color="primary" width="400px" value="toggle1" size="medium">
      <ToggleButton value="toggle1">Toggle 1</ToggleButton>
      <ToggleButton value="toggle2">Toggle 2</ToggleButton>
      <ToggleButton value="toggle3">Toggle 3</ToggleButton>
    </ToggleButtonGroup>
    <ToggleButtonGroup color="primary" width="400px" value="toggle1" size="large">
      <ToggleButton value="toggle1">Toggle 1</ToggleButton>
      <ToggleButton value="toggle2">Toggle 2</ToggleButton>
      <ToggleButton value="toggle3">Toggle 3</ToggleButton>
    </ToggleButtonGroup>
  </div>
)
const TEXT_1 = `<ToggleButtonGroup value="toggle1">
  <ToggleButton value="toggle1">Toggle 1</ToggleButton>
  <ToggleButton value="toggle2">Toggle 2</ToggleButton>
  <ToggleButton value="toggle3">Toggle 3</ToggleButton>
</ToggleButtonGroup>
`;

const CODE_2 = (
  <ThemeProvider accents={{ primary: "#0096ee" }}>
    <ToggleButtonGroup color="primary" width="400px" value="toggle1" size="medium">
      <ToggleButton value="toggle1">Toggle 1</ToggleButton>
      <ToggleButton value="toggle2">Toggle 2</ToggleButton>
      <ToggleButton value="toggle3">Toggle 3</ToggleButton>
    </ToggleButtonGroup>
  </ThemeProvider>
);
const TEXT_2 = `<ThemeProvider accents={{ primary: "#0096ee" }}>
  <ToggleButtonGroup color="primary">
    <ToggleButton>Toggle 1</ToggleButton>
    <ToggleButton>Toggle 2</ToggleButton>
    <ToggleButton>Toggle 3</ToggleButton>
  </ToggleButtonGroup>
</ThemeProvider>
`;

const ToggleButtonDisplay = () => {
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
          <BreadcrumbsItem link="item" title="ToggleButton" />
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
                    Sizes
                  </Text>
                  <Text
                    preciseColor={textColor}
                    size="medium"
                    style={{ marginTop: "0.25rem" }}
                  >
                    ToggleButton comes in multiple sizes: small, medium, and large.
                  </Text>
                  <CodePreview
                    code={CODE_1}
                    text={TEXT_1}
                    codeStyle={{ backgroundColor: bgColor }}
                    style={{ marginTop: "1rem" }}
                    color="primary"
                    language="jsx"
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
                  ToggleButtonGroup Props
                </Text>

                <Tag color="primary" variant="outlined" style={{marginTop: "1rem",}}>size</Tag>
                {line}
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{minWidth: "200px"}}><b>Description</b></Text>
                  <Text preciseColor={textColor}>The variant of the toggle button</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{minWidth: "200px"}}><b>Type</b></Text>
                  <Text color="primary" style={{wordSpacing: "1rem"}}>"small" | "medium" | "large"</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{minWidth: "200px"}}><b>Default</b></Text>
                  <Text color="primary" style={{wordSpacing: "1rem"}}>medium</Text>
                </div>

                <Tag color="primary" variant="outlined" style={{marginTop: "3rem",}}>width</Tag>
                {line}
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{minWidth: "200px"}}><b>Description</b></Text>
                  <Text preciseColor={textColor}>The width of the toggle button</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{minWidth: "200px"}}><b>Type</b></Text>
                  <Text color="primary" style={{wordSpacing: "1rem"}}>string</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{minWidth: "200px"}}><b>Default</b></Text>
                  <Text color="primary" style={{wordSpacing: "1rem"}}>fit-content</Text>
                </div>

                <Tag color="primary" variant="outlined" style={{marginTop: "3rem",}}>value</Tag>
                {line}
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{minWidth: "200px"}}><b>Description</b></Text>
                  <Text preciseColor={textColor}>Value of the selected toggle button</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{minWidth: "200px"}}><b>Type</b></Text>
                  <Text color="primary" style={{wordSpacing: "1rem"}}>string</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{minWidth: "200px"}}><b>Default</b></Text>
                  <Text color="primary" style={{wordSpacing: "1rem"}}>undefined</Text>
                </div>

                <Tag color="primary" variant="outlined" style={{marginTop: "3rem",}}>children</Tag>
                {line}
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{minWidth: "200px"}}><b>Description</b></Text>
                  <Text preciseColor={textColor}>Children of the toggle button</Text>
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
                  <Text preciseColor={textColor}>Called on click of the toggle button</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{minWidth: "200px"}}><b>Type</b></Text>
                  <Text color="primary">{ONCLICK_EVENT}</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{minWidth: "200px"}}><b>Default</b></Text>
                  <Text color="primary">undefined</Text>
                </div>
                <SideBar style={{ width: "10rem", top: "5rem" }}>
                  <SideBarItem color="primary">size</SideBarItem>
                  <SideBarItem color="primary">width</SideBarItem>
                  <SideBarItem color="primary">value</SideBarItem>
                  <SideBarItem color="primary">children</SideBarItem>
                  <SideBarItem color="primary">onClick</SideBarItem>
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
                  style={{ marginTop: "0.25rem" }}
                >
                  ThemeProvider with accents prop can be used to change the color of the icon button.
                </Text>
                <CodePreview
                  code={CODE_2}
                  text={TEXT_2}
                  codeStyle={{ backgroundColor: bgColor }}
                  style={{ marginTop: "1rem" }}
                  color="primary"
                  language="jsx"
                />
                <SideBar style={{ width: "10rem", top: "5rem" }}>
                  <SideBarItem color="primary" size="small">ThemeProvider</SideBarItem>
                </SideBar>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
export default ToggleButtonDisplay;

