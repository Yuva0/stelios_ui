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
  useWindowSize,
} from "../helpers/helpers";
import i18n from "../i18n/i18n_en.json";

const BUTTON = i18n.button;

const ButtonDisplay = () => {
  const windowSize = useWindowSize();
  const mobile = windowSize.width < 768;
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
    <div style={{ margin: "1.5rem 0 4rem 0", width: mobile ? "calc(100% - 12rem)" : "calc(100% - 22rem)"}}>
      <RenderBreadcrumbsForComponent name={BUTTON.title} path={BUTTON.path}/>
      <div style={{ padding: "1rem" }}>
        <RenderComponentHeading
          title={BUTTON.title}
          description={BUTTON.description}
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
                label={BUTTON.usage.installation.label}
                text={BUTTON.usage.installation.description}
              />
              <RenderVariations
                ref={variationRefs[1]}
                label={BUTTON.usage.variants.label}
                description={BUTTON.usage.variants.description}
                code={CODE_1}
                text={TEXT_1}
              />
              <RenderVariations
                ref={variationRefs[2]}
                label={BUTTON.usage.sizes.label}
                description={BUTTON.usage.sizes.description}
                code={CODE_2}
                text={TEXT_2}
              />
              <RenderVariations
                ref={variationRefs[3]}
                label={BUTTON.usage.icons.label}
                description={BUTTON.usage.icons.description}
                code={CODE_3}
                text={TEXT_3}
              />
              <RenderVariations
                ref={variationRefs[4]}
                label={BUTTON.usage.rounded.label}
                description={BUTTON.usage.rounded.description}
                code={CODE_4}
                text={TEXT_4}
              />
              <RenderVariations
                ref={variationRefs[5]}
                label={BUTTON.usage.disabled.label}
                description={BUTTON.usage.disabled.description}
                code={CODE_5}
                text={TEXT_5}
              />
              <RenderVariations
                ref={variationRefs[6]}
                label={BUTTON.usage.fullWidth.label}
                description={BUTTON.usage.fullWidth.description}
                code={CODE_6}
                text={TEXT_6}
              />

              {!mobile && renderSideBarItem([
                BUTTON.usage.installation.label,
                BUTTON.usage.variants.label,
                BUTTON.usage.sizes.label,
                BUTTON.usage.icons.label,
                BUTTON.usage.rounded.label,
                BUTTON.usage.disabled.label,
                BUTTON.usage.fullWidth.label,
              ], selectedVariationSideBarItem, variationRefs)}
            </TabPanel>
            <TabPanel value="props">
              <Text
                preciseColor={textColor}
                size="large"
                style={{ marginTop: "2rem" }}
              >
                {BUTTON.props.label}
              </Text>

              {/* Variant */}
              <RenderProps
                ref={propsRef[0]}
                propName={BUTTON.props.variant.name}
                description={BUTTON.props.variant.description}
                type={BUTTON.props.variant.type}
                defaultValue={BUTTON.props.variant.default}
                marginTop="1rem"
              />
              {/* Size */}
              <RenderProps
                ref={propsRef[1]}
                propName={BUTTON.props.size.name}
                description={BUTTON.props.size.description}
                type={BUTTON.props.size.type}
                defaultValue={BUTTON.props.size.default}
              />
              {/* Rounded */}
              <RenderProps
                ref={propsRef[2]}
                propName={BUTTON.props.rounded.name}
                description={BUTTON.props.rounded.description}
                type={BUTTON.props.rounded.type}
                defaultValue={BUTTON.props.rounded.default}
              />
              {/* Disabled */}
              <RenderProps
                ref={propsRef[3]}
                propName={BUTTON.props.disabled.name}
                description={BUTTON.props.disabled.description}
                type={BUTTON.props.disabled.type}
                defaultValue={BUTTON.props.disabled.default}
              />
              {/* isFullWidth */}
              <RenderProps
                ref={propsRef[4]}
                propName={BUTTON.props.isFullWidth.name}
                description={BUTTON.props.isFullWidth.description}
                type={BUTTON.props.isFullWidth.type}
                defaultValue={BUTTON.props.isFullWidth.default}
              />
              {/* Color */}
              <RenderProps
                ref={propsRef[5]}
                propName={BUTTON.props.color.name}
                description={BUTTON.props.color.description}
                type={BUTTON.props.color.type}
                defaultValue={BUTTON.props.color.default}
              />
              {/* Leading Icon */}
              <RenderProps
                ref={propsRef[6]}
                propName={BUTTON.props.leadingIcon.name}
                description={BUTTON.props.leadingIcon.description}
                type={BUTTON.props.leadingIcon.type}
                defaultValue={BUTTON.props.leadingIcon.default}
              />
              {/* Trailing Icon */}
              <RenderProps
                ref={propsRef[7]}
                propName={BUTTON.props.trailingIcon.name}
                description={BUTTON.props.trailingIcon.description}
                type={BUTTON.props.trailingIcon.type}
                defaultValue={BUTTON.props.trailingIcon.default}
              />
              {/* Children */}
              <RenderProps
                ref={propsRef[8]}
                propName={BUTTON.props.children.name}
                description={BUTTON.props.children.description}
                type={BUTTON.props.children.type}
                defaultValue={BUTTON.props.children.default}
              />
              {/* onClick */}
              <RenderProps
                ref={propsRef[9]}
                propName={BUTTON.props.onClick.name}
                description={BUTTON.props.onClick.description}
                type={BUTTON.props.onClick.type}
                defaultValue={BUTTON.props.onClick.default}
              />

              {!mobile && renderSideBarItem([
                BUTTON.props.variant.name,
                BUTTON.props.size.name,
                BUTTON.props.rounded.name,
                BUTTON.props.disabled.name,
                BUTTON.props.isFullWidth.name,
                BUTTON.props.color.name,
                BUTTON.props.leadingIcon.name,
                BUTTON.props.trailingIcon.name,
                BUTTON.props.children.name,
                BUTTON.props.onClick.name,
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
  <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
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
  <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
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
  <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
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