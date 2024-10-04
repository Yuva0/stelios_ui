import * as React from 'react';
import {
  Text,
  IconButton,
  Breadcrumbs,
  BreadcrumbsItem,
  Button,
  Banner,
  Avatar,
  ColorPicker,
  ToggleButtonGroup,
  ToggleButton,
  CodeDisplay,
  useTheme,
  ThemeProvider,
  Accordion,
  AccordionItem,
  Collapsible,
  useUpdateTheme,
  Input,
  Tag,
} from "stelios";

import {
  IconSun,
  IconMoon,
  IconAward,
  Icon12Hours,
  Icon24Hours,
  Icon3dCubeSphereOff,
} from "@tabler/icons-react";

const COLOR = "#006d77";

const LandingPageGroup = () => {
  return (
    <ThemeProvider accents={{ primary: COLOR }}>
      <LandingPageThemeProvider />
    </ThemeProvider>
  );
};

const LandingPageThemeProvider = () => {
  const theme = useTheme().theme!;
  const updateTheme = useUpdateTheme();
  const [_color, setColor] = React.useState(COLOR);
  const [_appearance, setAppearance] = React.useState<"light" | "dark" | undefined>("light");
  const colorPalette = theme.colorPalette;

  const onChangeColorPalette = (color: string | undefined) => {
    if (!color) return;
    updateTheme({
      accents: { primary: color },
      appearance: _appearance,
    })
    setColor(color);
  }

  return (
    <div
      style={{
        background: colorPalette.primary.accentScale[0],
        padding: "2rem 4rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        boxSizing: "border-box",
        borderRadius: "8px",
        width: "100%"
      }}
    >
      <Breadcrumbs color="primary" variant="contained" size="small">
        <BreadcrumbsItem title="Text 1" />
        <BreadcrumbsItem title="Link 1" link="test" />
        <BreadcrumbsItem title="Link 2" link="test" />
        <BreadcrumbsItem title="Link 3" link="test" />
      </Breadcrumbs>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          marginTop: "2rem",
          flexWrap: "wrap",
          gap: "1rem"
        }}
      >
        <Button variant="contained" color="primary" size="small">
          Contained
        </Button>
        <Button variant="outlined" color="primary" size="small">
          Outlined
        </Button>
        <Button variant="outlined-soft" color="primary" size="small">
          Outlined Soft
        </Button>
        <Button variant="soft" color="primary" size="small">
          Soft
        </Button>
        <Button variant="neumorph" color="primary" size="small">
          Neumorph
        </Button>
        <Input color="primary" variant="contained" placeholder="Search here" />
        <Input color="primary" variant="outlined" placeholder="Search here" />
        <Input color="primary" variant="soft" placeholder="Search here" />
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          marginTop: "2rem",
          alignItems:"center",
          gap: "1rem",
          flexWrap: "wrap"
        }}
      >
        <Avatar
          type="initials"
          variant="contained"
          initials="TS"
          color="primary"
          size="small"
        />
        <Avatar
          type="initials"
          variant="outlined"
          initials="TS"
          color="primary"
          size="small"
        />
        <IconButton
          alt="Award"
          icon={<IconAward />}
          variant="soft"
          color="primary"
        />
        <IconButton
          alt="12 Hours"
          icon={<Icon12Hours />}
          variant="outlined-soft"
          color="primary"
        />
        <IconButton
          alt="24 Hours"
          icon={<Icon24Hours />}
          variant="neumorph"
          color="primary"
        />
        <IconButton
          alt="3D Cube Sphere Off"
          icon={<Icon3dCubeSphereOff />}
          variant="neumorph-contained"
          color="primary"
        />
        <Tag variant="contained" color="primary" size="medium">Clickable Tag</Tag>
        <Tag variant="contained" color="primary" disableClick size="medium" >Non-Clickable Tag</Tag>
      </div>
      <div
        style={{
          padding: "2rem 0 1rem 0",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text color="primary" size="large" style={{ marginTop: "1rem" }}>
          Choose your color palette
        </Text>
        <Text color="primary" style={{ paddingBottom: "1rem" }}>
          This story is created using only one color.
        </Text>
        <ColorPicker color="primary" width="100%" onChange={onChangeColorPalette} />
        <ToggleButtonGroup
          width="240px"
          color="primary"
          value={_appearance}
          onClick={(e,value) => {updateTheme({ accents: { primary: _color }, appearance: value as "light"|"dark"|undefined }); setAppearance(value as "light"|"dark"|undefined);}}
        >
          <ToggleButton value="light" color="primary">
            <IconSun />
            <Text disableColor variant="paragraph">
              Light
            </Text>
          </ToggleButton>
          <ToggleButton value="dark" color="primary">
            <IconMoon width={20} height={20} />
            <Text disableColor variant="paragraph">
              Dark
            </Text>
          </ToggleButton>
        </ToggleButtonGroup>
        <Text color="primary" size="small">
          (Change color and appearance here)
        </Text>
      </div>

      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          flexDirection: "row",
          gap: "1rem"
        }}
      >
        <Banner
          title="Banner"
          description="This is the description of a banner. It can contain a lot of text. A lot and a lot of text."
          color="primary"
          variant="soft"
        />
        <Accordion color="primary" variant="soft">
          <AccordionItem title="React">
            <Text size="small" disableColor>
              Accordion Item 1
            </Text>
          </AccordionItem>
          <AccordionItem title="Vue">
            <Text size="small" disableColor>
              Accordion Item 2
            </Text>
          </AccordionItem>
          <AccordionItem title="Accordion">
            <Text size="small" disableColor>
              Accordion Item 3
            </Text>
          </AccordionItem>
        </Accordion>
        <Accordion color="primary" variant="outlined-soft">
          <AccordionItem title="React">
            <Text size="small" disableColor>
              Accordion Item 1
            </Text>
          </AccordionItem>
          <AccordionItem title="Vue">
            <Text size="small" disableColor>
              Accordion Item 2
            </Text>
          </AccordionItem>
          <AccordionItem title="Accordion">
            <Text size="small" disableColor>
              Accordion Item 3
            </Text>
          </AccordionItem>
        </Accordion>
        <Collapsible open={false} width="400px" color="primary" title="Collapsible Title" variant="transparent">
          <Text disableColor size="small" style={{padding: "1rem"}}>Collapsible Content 1</Text>
        </Collapsible>
      </div>
      <CodeDisplay
        language="JSX"
        title="JSX"
        text={`<Button variant="contained" color="primary" size="small">`}
        color="primary"
        style={{ marginTop: "1rem" }}
      />
    </div>
  );
};

export default LandingPageGroup;
