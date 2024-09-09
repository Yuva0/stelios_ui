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

const ButtonStelios = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";
  const bgColor =
    colorPalette.primary.appearance === "light" ? "white" : "black";

  return (
    <div>
    <div style={{ margin: "1rem 0 4rem 0", width: "calc(100% - 10rem)" }}>
      <Breadcrumbs
        color="primary"
        variant="text"
        style={{ padding: 0 }}
        delimiter="/"
      >
        <BreadcrumbsItem link="test" title="Components" />
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
        <Text
          preciseColor={textColor}
          size="large"
          style={{ marginTop: "1.5rem" }}
        >
          Installation Guides
        </Text>
        <CodeDisplay color="primary" language="jsx" text={INSTALLATION_1} style={{marginTop: "0.5rem"}}/>
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
          Text comes in multiple variants: contained, outlined, soft,
          outlined-soft & neumorph
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
          size="medium"
          color="primary"
          style={{ marginTop: "0.25rem" }}
        >
          Text comes in multiple sizes: small, medium & large
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
          Text can have icons: leading, trailing or both
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
      </div>
    </div>
    <SideBar style={{width: "10rem", top: "4rem"}}>
      <SideBarItem color="primary">Title</SideBarItem>
    </SideBar>
    </div>
  );
};
export default ButtonStelios;
