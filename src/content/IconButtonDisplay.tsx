import {
  Text,
  useTheme,
  SideBar,
  SideBarItem,
  Tabs,
  TabPanels,
  TabPanel,
  IconButton,
} from "stelios";
import { IconAwardFilled } from "@tabler/icons-react";
import {
  RenderBreadcrumbsForComponent,
  RenderComponentHeading,
  RenderProps,
  RenderTabsList,
  RenderVariations,
} from "../helpers/helpers";
import i18n from "../i18n/i18n_en.json";

const ICONBUTTON = i18n.iconButton;

const IconButtonDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";

  return (
    <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 22rem)" }}>
      <RenderBreadcrumbsForComponent name={i18n.iconButton.title} />

      <div style={{ padding: "1rem" }}>
        <RenderComponentHeading
          title={ICONBUTTON.title}
          description={ICONBUTTON.description}
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
                label={ICONBUTTON.usage.installation.label}
                text={ICONBUTTON.usage.installation.description}
              />
              <RenderVariations
                label={ICONBUTTON.usage.variants.label}
                description={ICONBUTTON.usage.variants.description}
                code={CODE_1}
                text={TEXT_1}
              />
              <RenderVariations
                label={ICONBUTTON.usage.sizes.label}
                description={ICONBUTTON.usage.sizes.description}
                code={CODE_2}
                text={TEXT_2}
              />
              <RenderVariations
                label={ICONBUTTON.usage.disabled.label}
                description={ICONBUTTON.usage.disabled.description}
                code={CODE_3}
                text={TEXT_3}
              />

              <SideBar style={{ width: "10rem", top: "5rem" }}>
                <SideBarItem color="primary" selected>
                  {i18n.iconButton.usage.installation.label}
                </SideBarItem>
                <SideBarItem color="primary">{i18n.iconButton.usage.variants.label}</SideBarItem>
                <SideBarItem color="primary">{i18n.iconButton.usage.sizes.label}</SideBarItem>
                <SideBarItem color="primary">{i18n.iconButton.usage.disabled.label}</SideBarItem>
              </SideBar>
            </TabPanel>
            <TabPanel value="props">
              <Text
                preciseColor={textColor}
                size="large"
                style={{ marginTop: "2rem" }}
              >
                {ICONBUTTON.props.label}
              </Text>

              <RenderProps
                propName={ICONBUTTON.props.variant.name}
                description={ICONBUTTON.props.variant.description}
                type={ICONBUTTON.props.variant.type}
                defaultValue={ICONBUTTON.props.variant.default}
                marginTop="1rem"
              />
              <RenderProps
                propName={ICONBUTTON.props.size.name}
                description={ICONBUTTON.props.size.description}
                type={ICONBUTTON.props.size.type}
                defaultValue={ICONBUTTON.props.size.default}
              />
              <RenderProps
                propName={ICONBUTTON.props.disabled.name}
                description={ICONBUTTON.props.disabled.description}
                type={ICONBUTTON.props.disabled.type}
                defaultValue={ICONBUTTON.props.disabled.default}
              />
              <RenderProps
                propName={ICONBUTTON.props.color.name}
                description={ICONBUTTON.props.color.description}
                type={ICONBUTTON.props.color.type}
                defaultValue={ICONBUTTON.props.color.default}
              />
              <RenderProps
                propName={ICONBUTTON.props.icon.name}
                description={ICONBUTTON.props.icon.description}
                type={ICONBUTTON.props.icon.type}
                defaultValue={ICONBUTTON.props.icon.default}
              />
              <RenderProps
                propName={ICONBUTTON.props.alt.name}
                description={ICONBUTTON.props.alt.description}
                type={ICONBUTTON.props.alt.type}
                defaultValue={ICONBUTTON.props.alt.default}
              />
              <RenderProps
                propName={ICONBUTTON.props.onClick.name}
                description={ICONBUTTON.props.onClick.description}
                type={ICONBUTTON.props.onClick.type}
                defaultValue={ICONBUTTON.props.onClick.default}
                wordSpacing="4px"
              />

              <SideBar style={{ width: "10rem", top: "5rem" }}>
                <SideBarItem color="primary" selected size="small">
                  {i18n.iconButton.props.variant.name}
                </SideBarItem>
                <SideBarItem color="primary" size="small">
                  {i18n.iconButton.props.size.name}
                </SideBarItem>
                <SideBarItem color="primary" size="small">
                  {i18n.iconButton.props.disabled.name}
                </SideBarItem>
                <SideBarItem color="primary" size="small">
                  {i18n.iconButton.props.color.name}
                </SideBarItem>
                <SideBarItem color="primary" size="small">
                  {i18n.iconButton.props.icon.name}
                </SideBarItem>
                <SideBarItem color="primary" size="small">
                  {i18n.iconButton.props.alt.name}
                </SideBarItem>
                <SideBarItem color="primary" size="small">
                  {i18n.iconButton.props.onClick.name}
                </SideBarItem>
              </SideBar>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};
export default IconButtonDisplay;

const CODE_1 = (
  <div style={{ display: "flex", gap: "2rem" }}>
    <IconButton
      icon={<IconAwardFilled />}
      alt={i18n.iconButton.code.alt}
      color="component"
      variant="contained"
    />
    <IconButton
      icon={<IconAwardFilled />}
      alt={i18n.iconButton.code.alt}
      color="component"
      variant="outlined"
    />
    <IconButton
      icon={<IconAwardFilled />}
      alt={i18n.iconButton.code.alt}
      color="component"
      variant="outlined-soft"
    />
    <IconButton
      icon={<IconAwardFilled />}
      alt={i18n.iconButton.code.alt}
      color="component"
      variant="soft"
    />
    <IconButton
      icon={<IconAwardFilled />}
      alt={i18n.iconButton.code.alt}
      color="component"
      variant="neumorph"
    />
    <IconButton
      icon={<IconAwardFilled />}
      alt={i18n.iconButton.code.alt}
      color="component"
      variant="neumorph-contained"
    />
    <IconButton
      icon={<IconAwardFilled />}
      alt={i18n.iconButton.code.alt}
      color="component"
      disabled
    />
  </div>
);
const TEXT_1 = `<IconButton icon={<IconAwardFilled/>} alt="${i18n.iconButton.code.alt}" variant="contained"/>
<IconButton icon={<IconAwardFilled/>} alt="${i18n.iconButton.code.alt}" variant="outlined"/>
<IconButton icon={<IconAwardFilled/>} alt="${i18n.iconButton.code.alt}" variant="outlined-soft"/>
<IconButton icon={<IconAwardFilled/>} alt="${i18n.iconButton.code.alt}" variant="soft"/>
<IconButton icon={<IconAwardFilled/>} alt="${i18n.iconButton.code.alt}" variant="neumorph"/>
<IconButton icon={<IconAwardFilled/>} alt="${i18n.iconButton.code.alt}" variant="neumorph-contained"/>
<IconButton icon={<IconAwardFilled/>} alt="${i18n.iconButton.code.alt}" disabled/>`;

const CODE_2 = (
  <div
    style={{
      display: "flex",
      gap: "2rem",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <IconButton
      icon={<IconAwardFilled />}
      alt={i18n.iconButton.code.alt}
      color="component"
      size="small"
      style={{ height: "fit-content" }}
    />
    <IconButton
      icon={<IconAwardFilled />}
      alt={i18n.iconButton.code.alt}
      color="component"
      size="medium"
      style={{ height: "fit-content" }}
    />
    <IconButton
      icon={<IconAwardFilled />}
      alt={i18n.iconButton.code.alt}
      color="component"
      size="large"
      style={{ height: "fit-content" }}
    />
  </div>
);
const TEXT_2 = `<IconButton icon={<IconAwardFilled/>} alt="${i18n.iconButton.code.alt}" size="small"/>
<IconButton icon={<IconAwardFilled/>} alt="${i18n.iconButton.code.alt}" size="medium"/>
<IconButton icon={<IconAwardFilled/>} alt="${i18n.iconButton.code.alt}" size="large"/>`;

const CODE_3 = (
  <div style={{ display: "flex", gap: "2rem" }}>
    <IconButton icon={<IconAwardFilled />} alt="Award" color="component" disabled/>
  </div>
);
const TEXT_3 = `<IconButton disabled/>`;
