import React from "react";
import {
  Text,
  useTheme,
  Button,
  Tabs,
  TabPanels,
  TabPanel,
} from "stelios";
import { IconAwardFilled, IconHeartFilled } from "@tabler/icons-react";
import {
  RenderBreadcrumbsForComponent,
  RenderComponentHeading,
  RenderProps,
  renderSideBarItem,
  RenderTabsList,
  RenderVariations,
} from "../helpers/helpers";
import i18n from "../i18n/i18n_en.json";

const BUTTONTEXT = i18n.button;

const ButtonDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;
  const variationRefs = Array.from({ length: 7 }, () => React.createRef<HTMLDivElement>());
  const propsRef = Array.from({ length: 10 }, () => React.createRef<HTMLDivElement>());

  const [selectedTab, setSelectedTab] = React.useState("usage");
  const [selectedVariationSideBarItem, setSelectedVariationSideBarItem] = React.useState(0);
  const [selectedPropsSideBarItem, setSelectedPropsSideBarItem] = React.useState(0);

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";

  React.useEffect(() => {
    const handleScroll = () => {
      if(selectedTab === "usage"){
      for(let i=0; i<variationRefs.length; i++){
        if(variationRefs[i].current?.getBoundingClientRect().top! > 0){
          setSelectedVariationSideBarItem(i);
          return;
        }
      }}
      else if(selectedTab === "props"){
        for(let i=0; i<propsRef.length; i++){
          if(propsRef[i].current?.getBoundingClientRect().top! > 0){
            setSelectedPropsSideBarItem(i);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[variationRefs, propsRef, selectedTab]);

  return (
    <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 22rem)" }}>
      <RenderBreadcrumbsForComponent name={BUTTONTEXT.title} path={BUTTONTEXT.path}/>
      <div style={{ padding: "1rem" }}>
        <RenderComponentHeading
          title={BUTTONTEXT.title}
          description={BUTTONTEXT.description}
        />

        <Tabs color="primary" style={{ marginTop: "2rem" }} value={selectedTab} onChange={(value) => setSelectedTab(value)}>
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
                ref={variationRefs[0]}
                label={BUTTONTEXT.usage.installation.label}
                text={BUTTONTEXT.usage.installation.description}
              />
              <RenderVariations
                ref={variationRefs[1]}
                label={BUTTONTEXT.usage.variants.label}
                description={BUTTONTEXT.usage.variants.description}
                code={CODE_1}
                text={TEXT_1}
              />
              <RenderVariations
                ref={variationRefs[2]}
                label={BUTTONTEXT.usage.sizes.label}
                description={BUTTONTEXT.usage.sizes.description}
                code={CODE_2}
                text={TEXT_2}
              />
              <RenderVariations
                ref={variationRefs[3]}
                label={BUTTONTEXT.usage.icons.label}
                description={BUTTONTEXT.usage.icons.description}
                code={CODE_3}
                text={TEXT_3}
              />
              <RenderVariations
                ref={variationRefs[4]}
                label={BUTTONTEXT.usage.rounded.label}
                description={BUTTONTEXT.usage.rounded.description}
                code={CODE_4}
                text={TEXT_4}
              />
              <RenderVariations
                ref={variationRefs[5]}
                label={BUTTONTEXT.usage.disabled.label}
                description={BUTTONTEXT.usage.disabled.description}
                code={CODE_5}
                text={TEXT_5}
              />
              <RenderVariations
                ref={variationRefs[6]}
                label={BUTTONTEXT.usage.fullWidth.label}
                description={BUTTONTEXT.usage.fullWidth.description}
                code={CODE_6}
                text={TEXT_6}
              />

              {renderSideBarItem([
                BUTTONTEXT.usage.installation.label,
                BUTTONTEXT.usage.variants.label,
                BUTTONTEXT.usage.sizes.label,
                BUTTONTEXT.usage.icons.label,
                BUTTONTEXT.usage.rounded.label,
                BUTTONTEXT.usage.disabled.label,
                BUTTONTEXT.usage.fullWidth.label,
              ], selectedVariationSideBarItem, variationRefs)}
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
                ref={propsRef[0]}
                propName={BUTTONTEXT.props.variant.name}
                description={BUTTONTEXT.props.variant.description}
                type={BUTTONTEXT.props.variant.type}
                defaultValue={BUTTONTEXT.props.variant.default}
                marginTop="1rem"
              />
              {/* Size */}
              <RenderProps
                ref={propsRef[1]}
                propName={BUTTONTEXT.props.size.name}
                description={BUTTONTEXT.props.size.description}
                type={BUTTONTEXT.props.size.type}
                defaultValue={BUTTONTEXT.props.size.default}
              />
              {/* Rounded */}
              <RenderProps
                ref={propsRef[2]}
                propName={BUTTONTEXT.props.rounded.name}
                description={BUTTONTEXT.props.rounded.description}
                type={BUTTONTEXT.props.rounded.type}
                defaultValue={BUTTONTEXT.props.rounded.default}
              />
              {/* Disabled */}
              <RenderProps
                ref={propsRef[3]}
                propName={BUTTONTEXT.props.disabled.name}
                description={BUTTONTEXT.props.disabled.description}
                type={BUTTONTEXT.props.disabled.type}
                defaultValue={BUTTONTEXT.props.disabled.default}
              />
              {/* isFullWidth */}
              <RenderProps
                ref={propsRef[4]}
                propName={BUTTONTEXT.props.isFullWidth.name}
                description={BUTTONTEXT.props.isFullWidth.description}
                type={BUTTONTEXT.props.isFullWidth.type}
                defaultValue={BUTTONTEXT.props.isFullWidth.default}
              />
              {/* Color */}
              <RenderProps
                ref={propsRef[5]}
                propName={BUTTONTEXT.props.color.name}
                description={BUTTONTEXT.props.color.description}
                type={BUTTONTEXT.props.color.type}
                defaultValue={BUTTONTEXT.props.color.default}
              />
              {/* Leading Icon */}
              <RenderProps
                ref={propsRef[6]}
                propName={BUTTONTEXT.props.leadingIcon.name}
                description={BUTTONTEXT.props.leadingIcon.description}
                type={BUTTONTEXT.props.leadingIcon.type}
                defaultValue={BUTTONTEXT.props.leadingIcon.default}
              />
              {/* Trailing Icon */}
              <RenderProps
                ref={propsRef[7]}
                propName={BUTTONTEXT.props.trailingIcon.name}
                description={BUTTONTEXT.props.trailingIcon.description}
                type={BUTTONTEXT.props.trailingIcon.type}
                defaultValue={BUTTONTEXT.props.trailingIcon.default}
              />
              {/* Children */}
              <RenderProps
                ref={propsRef[8]}
                propName={BUTTONTEXT.props.children.name}
                description={BUTTONTEXT.props.children.description}
                type={BUTTONTEXT.props.children.type}
                defaultValue={BUTTONTEXT.props.children.default}
              />
              {/* onClick */}
              <RenderProps
                ref={propsRef[9]}
                propName={BUTTONTEXT.props.onClick.name}
                description={BUTTONTEXT.props.onClick.description}
                type={BUTTONTEXT.props.onClick.type}
                defaultValue={BUTTONTEXT.props.onClick.default}
              />

              {renderSideBarItem([
                BUTTONTEXT.props.variant.name,
                BUTTONTEXT.props.size.name,
                BUTTONTEXT.props.rounded.name,
                BUTTONTEXT.props.disabled.name,
                BUTTONTEXT.props.isFullWidth.name,
                BUTTONTEXT.props.color.name,
                BUTTONTEXT.props.leadingIcon.name,
                BUTTONTEXT.props.trailingIcon.name,
                BUTTONTEXT.props.children.name,
                BUTTONTEXT.props.onClick.name,
              ], selectedPropsSideBarItem, propsRef)}
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
