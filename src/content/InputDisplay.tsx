import React from "react";
import {
  Text,
  useTheme,
  Tabs,
  TabPanels,
  TabPanel,
  Input,
} from "stelios";
import i18n from "../i18n/i18n_en.json";
import {
  RenderBreadcrumbsForComponent,
  RenderComponentHeading,
  RenderProps,
  renderSideBarItem,
  RenderTabsList,
  RenderVariations,
  useWindowSize,
} from "../helpers/helpers";

const INPUTTEXT = i18n.input;
const InputDisplay = () => {
  const windowSize = useWindowSize();
  const mobile = windowSize.width < 768;
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const variationRefs = Array.from({ length: 3 }, () =>
    React.createRef<HTMLDivElement>()
  );
  const propsRef = Array.from({ length: 16 }, () =>
    React.createRef<HTMLDivElement>()
  );
  const [selectedTab, setSelectedTab] = React.useState("usage");
  const [selectedVariationSideBarItem, setSelectedVariationSideBarItem] =
    React.useState(0);
  const [selectedPropsSideBarItem, setSeletedPropsSideBarItem] =
    React.useState(0);

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";

  React.useEffect(() => {
    const handleScroll = () => {
      if (selectedTab === "usage") {
        for (let i = 0; i < variationRefs.length; i++) {
          if (variationRefs[i].current?.getBoundingClientRect().top! > 0) {
            setSelectedVariationSideBarItem(i);
            return;
          }
        }
      } else if (selectedTab === "props") {
        for (let i = 0; i < propsRef.length; i++) {
          if (propsRef[i].current?.getBoundingClientRect().top! > 0) {
            setSeletedPropsSideBarItem(i);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [variationRefs, propsRef, selectedTab]);

  return (
    <div style={{ margin: "1.5rem 0 4rem 0", width: mobile ? "calc(100% - 12rem)" : "calc(100% - 22rem)" }}>
      <RenderBreadcrumbsForComponent
        name={INPUTTEXT.title}
        path={INPUTTEXT.path}
      />
      <div style={{ padding: "1rem" }}>
        <RenderComponentHeading
          title={INPUTTEXT.title}
          description={INPUTTEXT.description}
        />
        <Tabs
          color="primary"
          style={{ marginTop: "2rem" }}
          value={selectedTab}
          onChange={(value) => setSelectedTab(value)}
        >
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
                ref={variationRefs[0]}
                label={INPUTTEXT.usage.installation.label}
                text={INPUTTEXT.usage.installation.description}
              />
              <RenderVariations
                ref={variationRefs[1]}
                label={INPUTTEXT.usage.variants.label}
                description={INPUTTEXT.usage.variants.description}
                code={CODE_1}
                text={TEXT_1}
              />
              <RenderVariations
                ref={variationRefs[2]}
                label={INPUTTEXT.usage.sizes.label}
                description={INPUTTEXT.usage.sizes.description}
                code={CODE_2}
                text={TEXT_2}
              />

              {!mobile && renderSideBarItem(
                [
                  INPUTTEXT.usage.installation.label,
                  INPUTTEXT.usage.variants.label,
                  INPUTTEXT.usage.sizes.label,
                ],
                selectedVariationSideBarItem,
                variationRefs
              )}
            </TabPanel>
            <TabPanel value="props">
              <Text
                preciseColor={textColor}
                size="large"
                style={{ marginTop: "2rem" }}
              >
                {INPUTTEXT.props._label}
              </Text>

              <RenderProps
                ref={propsRef[0]}
                propName={INPUTTEXT.props.variant.name}
                description={INPUTTEXT.props.variant.description}
                type={INPUTTEXT.props.variant.type}
                defaultValue={INPUTTEXT.props.variant.default}
                marginTop="1rem"
              />
              <RenderProps
                ref={propsRef[1]}
                propName={INPUTTEXT.props.size.name}
                description={INPUTTEXT.props.size.description}
                type={INPUTTEXT.props.size.type}
                defaultValue={INPUTTEXT.props.size.default}
              />
              <RenderProps
                ref={propsRef[2]}
                propName={INPUTTEXT.props.type.name}
                description={INPUTTEXT.props.type.description}
                type={INPUTTEXT.props.type.type}
                defaultValue={INPUTTEXT.props.type.default}
              />
              <RenderProps
                ref={propsRef[3]}
                propName={INPUTTEXT.props.cursor.name}
                description={INPUTTEXT.props.cursor.description}
                type={INPUTTEXT.props.cursor.type}
                defaultValue={INPUTTEXT.props.cursor.default}
              />
              <RenderProps
                ref={propsRef[4]}
                propName={INPUTTEXT.props.color.name}
                description={INPUTTEXT.props.color.description}
                type={INPUTTEXT.props.color.type}
                defaultValue={INPUTTEXT.props.color.default}
              />
              <RenderProps
                ref={propsRef[5]}
                propName={INPUTTEXT.props.cursor.name}
                description={INPUTTEXT.props.disableSearch.description}
                type={INPUTTEXT.props.disableSearch.type}
                defaultValue={INPUTTEXT.props.disableSearch.default}
              />
              <RenderProps
                ref={propsRef[6]}
                propName={INPUTTEXT.props.disableSearch.name}
                description={INPUTTEXT.props.cursor.description}
                type={INPUTTEXT.props.cursor.type}
                defaultValue={INPUTTEXT.props.cursor.default}
              />
              <RenderProps
                ref={propsRef[7]}
                propName={INPUTTEXT.props.width.name}
                description={INPUTTEXT.props.width.description}
                type={INPUTTEXT.props.width.type}
                defaultValue={INPUTTEXT.props.width.default}
              />
              <RenderProps
                ref={propsRef[8]}
                propName={INPUTTEXT.props.value.name}
                description={INPUTTEXT.props.value.description}
                type={INPUTTEXT.props.value.type}
                defaultValue={INPUTTEXT.props.value.default}
              />
              <RenderProps
                ref={propsRef[9]}
                propName={INPUTTEXT.props.disabled.name}
                description={INPUTTEXT.props.disabled.description}
                type={INPUTTEXT.props.disabled.type}
                defaultValue={INPUTTEXT.props.disabled.default}
              />
              <RenderProps
                ref={propsRef[10]}
                propName={INPUTTEXT.props.fullWidth.name}
                description={INPUTTEXT.props.fullWidth.description}
                type={INPUTTEXT.props.fullWidth.type}
                defaultValue={INPUTTEXT.props.fullWidth.default}
              />
              <RenderProps
                ref={propsRef[11]}
                propName={INPUTTEXT.props.label.name}
                description={INPUTTEXT.props.label.description}
                type={INPUTTEXT.props.label.type}
                defaultValue={INPUTTEXT.props.label.default}
              />
              <RenderProps
                ref={propsRef[12]}
                propName={INPUTTEXT.props.labelPosition.name}
                description={INPUTTEXT.props.labelPosition.description}
                type={INPUTTEXT.props.labelPosition.type}
                defaultValue={INPUTTEXT.props.labelPosition.default}
              />
              <RenderProps
                ref={propsRef[13]}
                propName={INPUTTEXT.props.placeholder.name}
                description={INPUTTEXT.props.placeholder.description}
                type={INPUTTEXT.props.placeholder.type}
                defaultValue={INPUTTEXT.props.placeholder.default}
              />
              <RenderProps
                ref={propsRef[14]}
                propName={INPUTTEXT.props.leadingIcon.name}
                description={INPUTTEXT.props.leadingIcon.description}
                type={INPUTTEXT.props.leadingIcon.type}
                defaultValue={INPUTTEXT.props.leadingIcon.default}
              />
              <RenderProps
                ref={propsRef[15]}
                propName={INPUTTEXT.props.trailingIcon.name}
                description={INPUTTEXT.props.trailingIcon.description}
                type={INPUTTEXT.props.trailingIcon.type}
                defaultValue={INPUTTEXT.props.trailingIcon.default}
              />

              {!mobile && renderSideBarItem(
                [
                  INPUTTEXT.props.variant.name,
                  INPUTTEXT.props.size.name,
                  INPUTTEXT.props.type.name,
                  INPUTTEXT.props.cursor.name,
                  INPUTTEXT.props.color.name,
                  INPUTTEXT.props.disableSearch.name,
                  INPUTTEXT.props.width.name,
                  INPUTTEXT.props.value.name,
                  INPUTTEXT.props.disabled.name,
                  INPUTTEXT.props.fullWidth.name,
                  INPUTTEXT.props.label.name,
                  INPUTTEXT.props.labelPosition.name,
                  INPUTTEXT.props.placeholder.name,
                  INPUTTEXT.props.leadingIcon.name,
                  INPUTTEXT.props.trailingIcon.name,
                ],
                selectedPropsSideBarItem,
                propsRef
              )}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};
export default InputDisplay;

const CODE_1 = (
  <div
    style={{
      display: "flex",
      gap: "2rem",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Input color="component" variant="contained" placeholder="Search here" />
    <Input color="component" variant="outlined" placeholder="Search here" />
    <Input color="component" variant="soft" placeholder="Search here" />
  </div>
);
const TEXT_1 = `<Input variant="contained" placeholder="Search here" />
<Input variant="outlined" placeholder="Search here" />
<Input variant="soft" placeholder="Search here" />
`;

const CODE_2 = (
  <div
    style={{
      display: "flex",
      gap: "2rem",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Input color="component" size="small" placeholder="Search here" />
    <Input color="component" size="medium" placeholder="Search here" />
    <Input color="component" size="large" placeholder="Search here" />
  </div>
);
const TEXT_2 = `<Input size="small" placeholder="Search here" />
<Input size="medium" placeholder="Search here" />
<Input size="large" placeholder="Search here" />
`;
