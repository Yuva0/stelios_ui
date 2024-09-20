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
                  {i18n.button.usage.installation.label}
                </SideBarItem>
                <SideBarItem color="primary">{i18n.button.usage.variants.label}</SideBarItem>
                <SideBarItem color="primary">{i18n.button.usage.sizes.label}</SideBarItem>
                <SideBarItem color="primary">{i18n.button.usage.icons.label}</SideBarItem>
                <SideBarItem color="primary">{i18n.button.usage.rounded.label}</SideBarItem>
                <SideBarItem color="primary">{i18n.button.usage.disabled.label}</SideBarItem>
                <SideBarItem color="primary">{i18n.button.usage.fullWidth.label}</SideBarItem>
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
                  {i18n.button.props.variant.name}
                </SideBarItem>
                <SideBarItem color="primary" size="small">
                  {i18n.button.props.size.name}
                </SideBarItem>
                <SideBarItem color="primary" size="small">
                  {i18n.button.props.rounded.name}
                </SideBarItem>
                <SideBarItem color="primary" size="small">
                  {i18n.button.props.disabled.name}
                </SideBarItem>
                <SideBarItem color="primary" size="small">
                  {i18n.button.props.isFullWidth.name}
                </SideBarItem>
                <SideBarItem color="primary" size="small">
                  {i18n.button.props.color.name}
                </SideBarItem>
                <SideBarItem color="primary" size="small">
                  {i18n.button.props.leadingIcon.name}
                </SideBarItem>
                <SideBarItem color="primary" size="small">
                  {i18n.button.props.trailingIcon.name}
                </SideBarItem>
                <SideBarItem color="primary" size="small">
                  {i18n.button.props.children.name}
                </SideBarItem>
                <SideBarItem color="primary" size="small">
                  {i18n.button.props.onClick.name}
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
    <Button color="component" variant="contained">
      {i18n.button.code.content}
    </Button>
    <Button color="component" variant="outlined">
      {i18n.button.code.content}
    </Button>
    <Button color="component" variant="outlined-soft">
      {i18n.button.code.content}
    </Button>
    <Button color="component" variant="soft">
      {i18n.button.code.content}
    </Button>
    <Button color="component" variant="neumorph">
      {i18n.button.code.content}
    </Button>
    <Button color="component" disabled>
      {i18n.button.code.content}
    </Button>
  </div>
);
const TEXT_1 = `<Button variant="contained"> ${i18n.button.code.content} </Button>
<Button variant="outlined"> ${i18n.button.code.content} </Button>
<Button variant="outlined-soft"> ${i18n.button.code.content} </Button>
<Button variant="soft">  ${i18n.button.code.content}</Button>
<Button variant="neumorph"> ${i18n.button.code.content} </Button>
<Button disabled> ${i18n.button.code.content} </Button>`;

const CODE_2 = (
  <div style={{ display: "flex", gap: "2rem" }}>
    <Button color="component" size="small">
      {i18n.button.code.content}
    </Button>
    <Button color="component" size="medium">
      {i18n.button.code.content}
    </Button>
    <Button color="component" size="large">
      {i18n.button.code.content}
    </Button>
  </div>
);
const TEXT_2 = `<Button size="small"> ${i18n.button.code.content} </Button>
<Button size="medium"> ${i18n.button.code.content} </Button>
<Button size="large"> ${i18n.button.code.content} </Button>`;

const CODE_3 = (
  <div style={{ display: "flex", gap: "2rem" }}>
    <Button color="component" leadingIcon={<IconHeartFilled />}>
      {i18n.button.code.content}
    </Button>
    <Button color="component" trailingIcon={<IconAwardFilled />}>
      {i18n.button.code.content}
    </Button>
    <Button
      color="component"
      leadingIcon={<IconHeartFilled />}
      trailingIcon={<IconAwardFilled />}
    >
      {i18n.button.code.content}
    </Button>
  </div>
);
const TEXT_3 = `<Button leadingIcon={<IconHeartFilled />}> ${i18n.button.code.content} </Button>
<Button trailingIcon={<IconHeartFilled />}> ${i18n.button.code.content} </Button>
<Button leadingIcon={<IconHeartFilled />} trailingIcon={<IconTrophy/>}> ${i18n.button.code.content} </Button>`;

const CODE_4 = (
  <div style={{ display: "flex", gap: "2rem" }}>
    <Button color="component" rounded>
      {i18n.button.code.content}
    </Button>
  </div>
);
const TEXT_4 = `<Button rounded> ${i18n.button.code.content}} </Button>`;

const CODE_5 = (
  <div style={{ display: "flex", gap: "2rem" }}>
    <Button color="component" disabled>
      {i18n.button.code.content}
    </Button>
  </div>
);
const TEXT_5 = `<Button disabled> ${i18n.button.code.content}} </Button>`;

const CODE_6 = (
  <div style={{ display: "flex", gap: "2rem", width: "100%" }}>
    <Button color="component" isFullWidth>
      {i18n.button.code.content}
    </Button>
  </div>
);
const TEXT_6 = `<Button isFullWidth> ${i18n.button.code.content}} </Button>`;
