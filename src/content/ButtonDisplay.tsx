import * as React from "react";
import {
  Banner,
  Breadcrumbs,
  BreadcrumbsItem,
  CodePreview,
  Text,
  useTheme,
  Button,
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
} from "stelios";
import { IconAwardFilled, IconHeartFilled } from "@tabler/icons-react";

const TITLE = "Button";
const DESCRIPTION = "A button initiates an action when clicked.";

const BANNER_GRATEFUL_TITLE = "Thank you for using Stelios!";

const INSTALLATION_1 = `import { Button } from "stelios"`;

const CODE_1 = (
  <div style={{ display: "flex", gap: "2rem" }}>
    <Button color="primary" variant="contained">
      Click Me
    </Button>
    <Button color="primary" variant="outlined">
      Click Me
    </Button>
    <Button color="primary" variant="outlined-soft">
      Click Me
    </Button>
    <Button color="primary" variant="soft">
      Click Me
    </Button>
    <Button color="primary" variant="neumorph">
      Click Me
    </Button>
    <Button color="primary" disabled>
      Click Me
    </Button>
  </div>
);
const TEXT_1 = `
    <Button color="primary" variant="contained"> Click Me </Button>
    <Button color="primary" variant="outlined"> Click Me </Button>
    <Button color="primary" variant="outlined-soft"> Click Me </Button>
    <Button color="primary" variant="soft"> Click Me </Button>
    <Button color="primary" variant="neumorph"> Click Me </Button>
    <Button color="primary" disabled>Click Me</Button>`;

const CODE_2 = (
  <div style={{ display: "flex", gap: "2rem" }}>
    <Button color="primary" size="small">
      Click Me
    </Button>
    <Button color="primary" size="medium">
      Click Me
    </Button>
    <Button color="primary" size="large">
      Click Me
    </Button>
  </div>
);
const TEXT_2 = `
    <Button color="primary" size="small"> Click Me </Button>
    <Button color="primary" size="medium"> Click Me </Button>
    <Button color="primary" size="large"> Click Me </Button>`;

const CODE_3 = (
  <div style={{ display: "flex", gap: "2rem" }}>
    <Button color="primary" leadingIcon={<IconHeartFilled />}>
      Click Me
    </Button>
    <Button color="primary" trailingIcon={<IconAwardFilled />}>
      Click Me
    </Button>
    <Button
      color="primary"
      leadingIcon={<IconHeartFilled />}
      trailingIcon={<IconAwardFilled />}
    >
      Click Me
    </Button>
  </div>
);
const TEXT_3 = `
    <Button color="primary" leadingIcon={<IconHeartFilled />}> Click Me </Button>
    <Button color="primary" trailingIcon={<IconHeartFilled />}> Click Me </Button>
    <Button color="primary" leadingIcon={<IconHeartFilled />} trailingIcon={<IconTrophy/>}> Click Me </Button>`;

const CODE_4 = (
  <div style={{ display: "flex", gap: "2rem" }}>
    <Button color="primary" rounded>
      Click Me
    </Button>
  </div>
);
const TEXT_4 = `
    <Button color="primary" rounded> Click Me </Button>`;

const CODE_5 = (
  <div style={{ display: "flex", gap: "2rem" }}>
    <Button color="primary" disabled>
      Click Me
    </Button>
  </div>
);
const TEXT_5 = `
    <Button color="primary" disabled> Click Me </Button>`;

const CODE_6 = (
  <div style={{ display: "flex", gap: "2rem", width: "100%" }}>
    <Button color="primary" isFullWidth>
      Click Me
    </Button>
  </div>
);
const TEXT_6 = `
    <Button color="primary" isFullWidth> Click Me </Button>`;

const CODE_7 = (
  <div style={{ display: "flex", gap: "2rem", width: "100%", justifyContent:"center", alignItems: "center" }}>
    <ThemeProvider accents={{primary: "#0096ee", secondary: "#305c84", success: "#639765", info: "#376390", warning: "#dbc533", danger: "#ee0032"}}>
      <Button color="primary">
        Click Me
      </Button>
      <Button color="secondary">
        Click Me
      </Button>
      <Button color="success">
        Click Me
      </Button>
      <Button color="info">
        Click Me
      </Button>
      <Button color="warning">
        Click Me
      </Button>
      <Button color="danger">
        Click Me
      </Button>
    </ThemeProvider>
  </div>
)
const TEXT_7 = `
    <ThemeProvider accents={{primary: "#0096ee", secondary: "#305c84", success: "#639765", info: "#376390", warning: "#dbc533", danger: "#ee0032"}}>
      <Button color="primary"> Click Me </Button>
      <Button color="secondary"> Click Me </Button>
      <Button color="success"> Click Me </Button>
      <Button color="info"> Click Me </Button>
      <Button color="warning"> Click Me </Button>
      <Button color="danger"> Click Me </Button>
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
          <BreadcrumbsItem link="item" title="Button" />
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
          <Tabs color="primary" style={{ marginTop: "2rem" }}>
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
                  Button comes in multiple variants: contained, outlined, soft,
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
                  Button comes in multiple sizes: small, medium & large.
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
                  Icons
                </Text>
                <Text
                  preciseColor={textColor}
                  size="medium"
                  color="primary"
                  style={{ marginTop: "0.25rem" }}
                >
                  Button can have icons: leading, trailing or both.
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
                <Text
                  preciseColor={textColor}
                  size="large"
                  color="primary"
                  style={{ marginTop: "2rem" }}
                >
                  Rounded
                </Text>
                <Text
                  preciseColor={textColor}
                  size="medium"
                  color="primary"
                  style={{ marginTop: "0.25rem" }}
                >
                  Button can be rounded
                </Text>
                <CodePreview
                  code={CODE_4}
                  text={TEXT_4}
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
                  Button can be disabled
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
                                <Text
                  preciseColor={textColor}
                  size="large"
                  color="primary"
                  style={{ marginTop: "2rem" }}
                >
                  Full Width
                </Text>
                <Text
                  preciseColor={textColor}
                  size="medium"
                  color="primary"
                  style={{ marginTop: "0.25rem" }}
                >
                  Button can take full width of the container
                </Text>
                <CodePreview
                  code={CODE_6}
                  text={TEXT_6}
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
                  <SideBarItem color="primary">Icons</SideBarItem>
                  <SideBarItem color="primary">Rounded</SideBarItem>
                  <SideBarItem color="primary">Disabled</SideBarItem>
                  <SideBarItem color="primary">Full Width</SideBarItem>
                </SideBar>
              </TabPanel>
              <TabPanel value="props">
                <Text
                  preciseColor={textColor}
                  size="large"
                  style={{ marginTop: "2rem" }}
                >
                  Button Props
                </Text>
                <Tag color="primary" variant="outlined" style={{marginTop: "1rem",}}>variant</Tag>
                {line}
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{width: "200px"}}><b>Description</b></Text>
                  <Text preciseColor={textColor}>The variant of the button</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{width: "200px"}}><b>Type</b></Text>
                  <Text color="primary" style={{wordSpacing: "1rem"}}>"contained" | "outlined" | "soft" | "outlined-soft" | "neumorph"</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{width: "200px"}}><b>Default</b></Text>
                  <Text color="primary" style={{wordSpacing: "1rem"}}>contained</Text>
                </div>

                <Tag color="primary" variant="outlined" style={{marginTop: "3rem",}}>size</Tag>
                {line}
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{width: "200px"}}><b>Description</b></Text>
                  <Text preciseColor={textColor}>The size of the button</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{width: "200px"}}><b>Type</b></Text>
                  <Text color="primary" style={{wordSpacing: "1rem"}}>"small" | "medium" | "large"</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{width: "200px"}}><b>Default</b></Text>
                  <Text color="primary" style={{wordSpacing: "1rem"}}>medium</Text>
                </div>

                <Tag color="primary" variant="outlined" style={{marginTop: "3rem",}}>rounded</Tag>
                {line}
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{width: "200px"}}><b>Description</b></Text>
                  <Text preciseColor={textColor}>Whether the button should be rounded or not</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{width: "200px"}}><b>Type</b></Text>
                  <Text color="primary" style={{wordSpacing: "1rem"}}>boolean</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{width: "200px"}}><b>Default</b></Text>
                  <Text color="primary" style={{wordSpacing: "1rem"}}>false</Text>
                </div>

                <Tag color="primary" variant="outlined" style={{marginTop: "3rem",}}>disabled</Tag>
                {line}
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{width: "200px"}}><b>Description</b></Text>
                  <Text preciseColor={textColor}>Whether the button is disabled or not</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{width: "200px"}}><b>Type</b></Text>
                  <Text color="primary" style={{wordSpacing: "1rem"}}>boolean</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{width: "200px"}}><b>Default</b></Text>
                  <Text color="primary" style={{wordSpacing: "1rem"}}>false</Text>
                </div>

                <Tag color="primary" variant="outlined" style={{marginTop: "3rem",}}>isFullWidth</Tag>
                {line}
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{width: "200px"}}><b>Description</b></Text>
                  <Text preciseColor={textColor}>Whether the button should take full width of the container or not</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{width: "200px"}}><b>Type</b></Text>
                  <Text color="primary" style={{wordSpacing: "1rem"}}>boolean</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{width: "200px"}}><b>Default</b></Text>
                  <Text color="primary" style={{wordSpacing: "1rem"}}>false</Text>
                </div>

                <Tag color="primary" variant="outlined" style={{marginTop: "3rem",}}>color</Tag>
                {line}
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{width: "200px"}}><b>Description</b></Text>
                  <Text preciseColor={textColor}>Color of the button created using colorPalette</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{width: "200px"}}><b>Type</b></Text>
                  <Text color="primary" style={{wordSpacing: "1rem"}}>string</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{width: "200px"}}><b>Default</b></Text>
                  <Text color="primary" style={{wordSpacing: "1rem"}}>#00b4d8</Text>
                </div>

                <Tag color="primary" variant="outlined" style={{marginTop: "3rem",}}>leadingIcon</Tag>
                {line}
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{width: "200px"}}><b>Description</b></Text>
                  <Text preciseColor={textColor}>Leading Icon of the button</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{width: "200px"}}><b>Type</b></Text>
                  <Text color="primary" style={{wordSpacing: "1rem"}}>React.ReactNode</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{width: "200px"}}><b>Default</b></Text>
                  <Text color="primary" style={{wordSpacing: "1rem"}}>none</Text>
                </div>

                <Tag color="primary" variant="outlined" style={{marginTop: "3rem",}}>trailingIcon</Tag>
                {line}
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{width: "200px"}}><b>Description</b></Text>
                  <Text preciseColor={textColor}>Trailing Icon of the button</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{width: "200px"}}><b>Type</b></Text>
                  <Text color="primary" style={{wordSpacing: "1rem"}}>React.ReactNode</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{width: "200px"}}><b>Default</b></Text>
                  <Text color="primary" style={{wordSpacing: "1rem"}}>none</Text>
                </div>

                <Tag color="primary" variant="outlined" style={{marginTop: "3rem",}}>children</Tag>
                {line}
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{width: "200px"}}><b>Description</b></Text>
                  <Text preciseColor={textColor}>Children of the button</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{width: "200px"}}><b>Type</b></Text>
                  <Text color="primary" style={{wordSpacing: "1rem"}}>React.ReactNode | React.ReactNode[]</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{width: "200px"}}><b>Default</b></Text>
                  <Text color="primary" style={{wordSpacing: "1rem"}}>undefined</Text>
                </div>

                <Tag color="primary" variant="outlined" style={{marginTop: "3rem",}}>onClick</Tag>
                {line}
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{width: "200px"}}><b>Description</b></Text>
                  <Text preciseColor={textColor}>Called on click of the button</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{width: "200px"}}><b>Type</b></Text>
                  <Text color="primary">{onClickEvent}</Text>
                </div>
                <div style={{marginTop: "1rem", display: "flex", flexDirection: "row"}}>
                  <Text preciseColor={textColor} style={{width: "200px"}}><b>Default</b></Text>
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
                  ThemeProvider with accents prop can be used to change the color of the button.
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
