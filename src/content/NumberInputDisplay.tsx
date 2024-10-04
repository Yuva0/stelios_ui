import React from "react";
import {
  Text,
  useTheme,
  Tabs,
  TabPanels,
  TabPanel,
  NumberInput,
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

const NUMBERINPUT = i18n.numberInput;
const NumberInputDisplay = () => {
  const windowSize = useWindowSize();
  const laptop = windowSize.width < 768;
  const mobile = windowSize.width < 480;
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const variationRefs = Array.from({ length: 3 }, () =>
    React.createRef<HTMLDivElement>()
  );
  const propsRef = Array.from({ length: 11 }, () =>
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
    <div style={{ margin: "1.5rem 0 4rem 0", width: mobile ? "100%" : laptop ? "calc(100% - 12rem)" : "calc(100% - 22rem)"}}>
      <RenderBreadcrumbsForComponent
        name={NUMBERINPUT.title}
        path={NUMBERINPUT.path}
      />
      <div style={{ padding: "1rem" }}>
        <RenderComponentHeading
          title={NUMBERINPUT.title}
          description={NUMBERINPUT.description}
        />
        <Tabs color="primary" style={{ marginTop: "2rem" }}
            value={selectedTab}
            onChange={(value) => setSelectedTab(value)}>
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
                label={NUMBERINPUT.usage.installation.label}
                text={NUMBERINPUT.usage.installation.description}
              />
              <RenderVariations
                ref={variationRefs[1]}
                label={NUMBERINPUT.usage.variants.label}
                description={NUMBERINPUT.usage.variants.description}
                code={CODE_1}
                text={TEXT_1}
              />
              <RenderVariations
                ref={variationRefs[2]}
                label={NUMBERINPUT.usage.sizes.label}
                description={NUMBERINPUT.usage.sizes.description}
                code={CODE_2}
                text={TEXT_2}
              />

              {!laptop && renderSideBarItem([NUMBERINPUT.usage.installation.label, NUMBERINPUT.usage.variants.label, NUMBERINPUT.usage.sizes.label], selectedVariationSideBarItem, variationRefs)}
            </TabPanel>
            <TabPanel value="props">
              <Text
                preciseColor={textColor}
                size="large"
                style={{ marginTop: "2rem" }}
              >
                {NUMBERINPUT.props._label}
              </Text>

              <RenderProps
                ref={propsRef[0]}
                propName={NUMBERINPUT.props.variant.name}
                description={NUMBERINPUT.props.variant.description}
                type={NUMBERINPUT.props.variant.type}
                defaultValue={NUMBERINPUT.props.variant.default}
                marginTop="1rem"
              />
              <RenderProps
                ref={propsRef[1]}
                propName={NUMBERINPUT.props.size.name}
                description={NUMBERINPUT.props.size.description}
                type={NUMBERINPUT.props.size.type}
                defaultValue={NUMBERINPUT.props.size.default}
              />
              <RenderProps
                ref={propsRef[2]}
                propName={NUMBERINPUT.props.color.name}
                description={NUMBERINPUT.props.color.description}
                type={NUMBERINPUT.props.color.type}
                defaultValue={NUMBERINPUT.props.color.default}
              />
              <RenderProps
                ref={propsRef[3]}
                propName={NUMBERINPUT.props.max.name}
                description={NUMBERINPUT.props.max.description}
                type={NUMBERINPUT.props.max.type}
                defaultValue={NUMBERINPUT.props.max.default}
              />
              <RenderProps
                ref={propsRef[4]}
                propName={NUMBERINPUT.props.value.name}
                description={NUMBERINPUT.props.value.description}
                type={NUMBERINPUT.props.value.type}
                defaultValue={NUMBERINPUT.props.value.default}
              />
              <RenderProps
                ref={propsRef[5]}
                propName={NUMBERINPUT.props.onChange.name}
                description={NUMBERINPUT.props.min.description}
                type={NUMBERINPUT.props.min.type}
                defaultValue={NUMBERINPUT.props.min.default}
              />
              <RenderProps
                ref={propsRef[6]}
                propName={NUMBERINPUT.props.value.name}
                description={NUMBERINPUT.props.value.description}
                type={NUMBERINPUT.props.value.type}
                defaultValue={NUMBERINPUT.props.value.default}
              />
              <RenderProps
                ref={propsRef[7]}
                propName={NUMBERINPUT.props.label.name}
                description={NUMBERINPUT.props.label.description}
                type={NUMBERINPUT.props.label.type}
                defaultValue={NUMBERINPUT.props.label.default}
              />
              <RenderProps
                ref={propsRef[8]}
                propName={NUMBERINPUT.props.onChange.name}
                description={NUMBERINPUT.props.onChange.description}
                type={NUMBERINPUT.props.onChange.type}
                defaultValue={NUMBERINPUT.props.onChange.default}
                wordSpacing="2px"
              />
              <RenderProps
                ref={propsRef[9]}
                propName={NUMBERINPUT.props.onIncrement.name}
                description={NUMBERINPUT.props.onIncrement.description}
                type={NUMBERINPUT.props.onIncrement.type}
                defaultValue={NUMBERINPUT.props.onIncrement.default}
                wordSpacing="2px"
              />
              <RenderProps
                ref={propsRef[10]}
                propName={NUMBERINPUT.props.onDecrement.name}
                description={NUMBERINPUT.props.onDecrement.description}
                type={NUMBERINPUT.props.onDecrement.type}
                defaultValue={NUMBERINPUT.props.onDecrement.default}
                wordSpacing="2px"
              />

              {!laptop && renderSideBarItem([NUMBERINPUT.props.variant.name, NUMBERINPUT.props.size.name, NUMBERINPUT.props.color.name, NUMBERINPUT.props.max.name, NUMBERINPUT.props.value.name, NUMBERINPUT.props.onChange.name, NUMBERINPUT.props.value.name, NUMBERINPUT.props.label.name, NUMBERINPUT.props.onChange.name, NUMBERINPUT.props.onIncrement.name, NUMBERINPUT.props.onDecrement.name], selectedPropsSideBarItem, propsRef)}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};
export default NumberInputDisplay;

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
    <NumberInput color="component" variant="contained"/>
    <NumberInput color="component" variant="outlined"/>
    <NumberInput color="component" variant="soft"/>
  </div>
);
const TEXT_1 = `<NumberInput variant="contained"/>
<NumberInput variant="outlined"/>
<NumberInput variant="soft"/>
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
    <NumberInput color="component" size="small"/>
    <NumberInput color="component" size="medium"/>
    <NumberInput color="component" size="large"/>
  </div>
);
const TEXT_2 = `<NumberInput size="small"/>
<NumberInput size="medium"/>
<NumberInput size="large"/>
`;
