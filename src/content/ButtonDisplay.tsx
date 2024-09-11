import {
  Text,
  useTheme,
  Button,
  SideBar,
  SideBarItem,
  Tabs,
  TabPanels,
  TabPanel,
} from "stelios";
import { IconAwardFilled, IconHeartFilled } from "@tabler/icons-react";
import {
  RenderBreadcrumbsForComponent,
  RenderComponentHeading,
  RenderProps,
  RenderTabsList,
  RenderVariations,
} from "../helpers/helpers";
import i18n from "../i18n/i18n_en.json";

const BUTTONTEXT = i18n.button;

const ButtonDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";

  return (
    <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 22rem)" }}>
      <RenderBreadcrumbsForComponent name={BUTTONTEXT.title} path={BUTTONTEXT.path}/>
      <div style={{ padding: "1rem" }}>
        <RenderComponentHeading
          title={BUTTONTEXT.title}
          description={BUTTONTEXT.description}
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
              {/* Usage Variations */}
              <RenderVariations
                label={BUTTONTEXT.usage.installation.label}
                text={BUTTONTEXT.usage.installation.description}
              />
              <RenderVariations
                label={BUTTONTEXT.usage.variants.label}
                description={BUTTONTEXT.usage.variants.description}
                code={CODE_1}
                text={TEXT_1}
              />
              <RenderVariations
                label={BUTTONTEXT.usage.sizes.label}
                description={BUTTONTEXT.usage.sizes.description}
                code={CODE_2}
                text={TEXT_2}
              />
              <RenderVariations
                label={BUTTONTEXT.usage.icons.label}
                description={BUTTONTEXT.usage.icons.description}
                code={CODE_3}
                text={TEXT_3}
              />
              <RenderVariations
                label={BUTTONTEXT.usage.rounded.label}
                description={BUTTONTEXT.usage.rounded.description}
                code={CODE_4}
                text={TEXT_4}
              />
              <RenderVariations
                label={BUTTONTEXT.usage.disabled.label}
                description={BUTTONTEXT.usage.disabled.description}
                code={CODE_5}
                text={TEXT_5}
              />
              <RenderVariations
                label={BUTTONTEXT.usage.fullWidth.label}
                description={BUTTONTEXT.usage.fullWidth.description}
                code={CODE_6}
                text={TEXT_6}
              />

              {/* Usage Variations Sidebar */}
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
                {BUTTONTEXT.props.label}
              </Text>

              {/* Variant */}
              <RenderProps
                propName={BUTTONTEXT.props.variant.name}
                description={BUTTONTEXT.props.variant.description}
                type={BUTTONTEXT.props.variant.type}
                defaultValue={BUTTONTEXT.props.variant.default}
                marginTop="1rem"
              />
              {/* Size */}
              <RenderProps
                propName={BUTTONTEXT.props.size.name}
                description={BUTTONTEXT.props.size.description}
                type={BUTTONTEXT.props.size.type}
                defaultValue={BUTTONTEXT.props.size.default}
              />
              {/* Rounded */}
              <RenderProps
                propName={BUTTONTEXT.props.rounded.name}
                description={BUTTONTEXT.props.rounded.description}
                type={BUTTONTEXT.props.rounded.type}
                defaultValue={BUTTONTEXT.props.rounded.default}
              />
              {/* Disabled */}
              <RenderProps
                propName={BUTTONTEXT.props.disabled.name}
                description={BUTTONTEXT.props.disabled.description}
                type={BUTTONTEXT.props.disabled.type}
                defaultValue={BUTTONTEXT.props.disabled.default}
              />
              {/* isFullWidth */}
              <RenderProps
                propName={BUTTONTEXT.props.isFullWidth.name}
                description={BUTTONTEXT.props.isFullWidth.description}
                type={BUTTONTEXT.props.isFullWidth.type}
                defaultValue={BUTTONTEXT.props.isFullWidth.default}
              />
              {/* Color */}
              <RenderProps
                propName={BUTTONTEXT.props.color.name}
                description={BUTTONTEXT.props.color.description}
                type={BUTTONTEXT.props.color.type}
                defaultValue={BUTTONTEXT.props.color.default}
              />
              {/* Leading Icon */}
              <RenderProps
                propName={BUTTONTEXT.props.leadingIcon.name}
                description={BUTTONTEXT.props.leadingIcon.description}
                type={BUTTONTEXT.props.leadingIcon.type}
                defaultValue={BUTTONTEXT.props.leadingIcon.default}
              />
              {/* Trailing Icon */}
              <RenderProps
                propName={BUTTONTEXT.props.trailingIcon.name}
                description={BUTTONTEXT.props.trailingIcon.description}
                type={BUTTONTEXT.props.trailingIcon.type}
                defaultValue={BUTTONTEXT.props.trailingIcon.default}
              />
              {/* Children */}
              <RenderProps
                propName={BUTTONTEXT.props.children.name}
                description={BUTTONTEXT.props.children.description}
                type={BUTTONTEXT.props.children.type}
                defaultValue={BUTTONTEXT.props.children.default}
              />
              {/* onClick */}
              <RenderProps
                propName={BUTTONTEXT.props.onClick.name}
                description={BUTTONTEXT.props.onClick.description}
                type={BUTTONTEXT.props.onClick.type}
                defaultValue={BUTTONTEXT.props.onClick.default}
              />

              <SideBar style={{ width: "10rem", top: "5rem" }}>
                <SideBarItem color="primary" selected size="small">
                  variant
                </SideBarItem>
                <SideBarItem color="primary" size="small">
                  size
                </SideBarItem>
                <SideBarItem color="primary" size="small">
                  rounded
                </SideBarItem>
                <SideBarItem color="primary" size="small">
                  disabled
                </SideBarItem>
                <SideBarItem color="primary" size="small">
                  isFullWidth
                </SideBarItem>
                <SideBarItem color="primary" size="small">
                  color
                </SideBarItem>
                <SideBarItem color="primary" size="small">
                  leadingIcon
                </SideBarItem>
                <SideBarItem color="primary" size="small">
                  trailingIcon
                </SideBarItem>
                <SideBarItem color="primary" size="small">
                  onClick
                </SideBarItem>
              </SideBar>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};
export default ButtonDisplay;

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
const TEXT_1 = `<Button color="primary" variant="contained"> Click Me </Button>
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
const TEXT_2 = `<Button color="primary" size="small"> Click Me </Button>
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
const TEXT_3 = `<Button color="primary" leadingIcon={<IconHeartFilled />}> Click Me </Button>
<Button color="primary" trailingIcon={<IconHeartFilled />}> Click Me </Button>
<Button color="primary" leadingIcon={<IconHeartFilled />} trailingIcon={<IconTrophy/>}> Click Me </Button>`;

const CODE_4 = (
  <div style={{ display: "flex", gap: "2rem" }}>
    <Button color="primary" rounded>
      Click Me
    </Button>
  </div>
);
const TEXT_4 = `<Button color="primary" rounded> Click Me </Button>`;

const CODE_5 = (
  <div style={{ display: "flex", gap: "2rem" }}>
    <Button color="primary" disabled>
      Click Me
    </Button>
  </div>
);
const TEXT_5 = `<Button color="primary" disabled> Click Me </Button>`;

const CODE_6 = (
  <div style={{ display: "flex", gap: "2rem", width: "100%" }}>
    <Button color="primary" isFullWidth>
      Click Me
    </Button>
  </div>
);
const TEXT_6 = `<Button color="primary" isFullWidth> Click Me </Button>`;
