import React from "react";
import {
  Text,
  useTheme,
  Tabs,
  TabPanels,
  TabPanel,
  FormControlLabel,
  Radio,
  RadioGroup
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

const RADIO = i18n.radio;
const RadioDisplay = () => {
  const windowSize = useWindowSize();
  const mobile = windowSize.width < 480;
  const laptop = windowSize.width < 768;
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
        name={RADIO.title}
        path={RADIO.path}
      />
      <div style={{ padding: "1rem" }}>
        <RenderComponentHeading
          title={RADIO.title}
          description={RADIO.description}
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
                label={RADIO.usage.installation.label}
                text={RADIO.usage.installation.description}
              />
              <RenderVariations
                ref={variationRefs[1]}
                label={RADIO.usage.sizes.label}
                description={RADIO.usage.sizes.description}
                code={CODE_1}
                text={TEXT_1}
              />

              {!laptop && renderSideBarItem([RADIO.usage.installation.label, RADIO.usage.sizes.label], selectedVariationSideBarItem, variationRefs)}
            </TabPanel>
            <TabPanel value="props">
              <Text
                preciseColor={textColor}
                size="large"
                style={{ marginTop: "2rem" }}
              >
                {RADIO.props._label}
              </Text>

              <RenderProps
                ref={propsRef[0]}
                propName={RADIO.props.size.name}
                description={RADIO.props.size.description}
                type={RADIO.props.size.type}
                defaultValue={RADIO.props.size.default}
              />
              <RenderProps
                ref={propsRef[1]}
                propName={RADIO.props.color.name}
                description={RADIO.props.color.description}
                type={RADIO.props.color.type}
                defaultValue={RADIO.props.color.default}
              />
              <RenderProps
                ref={propsRef[2]}
                propName={RADIO.props.value.name}
                description={RADIO.props.value.description}
                type={RADIO.props.value.type}
                defaultValue={RADIO.props.value.default}
              />
              <RenderProps
                ref={propsRef[3]}
                propName={RADIO.props.disabled.name}
                description={RADIO.props.disabled.description}
                type={RADIO.props.disabled.type}
                defaultValue={RADIO.props.disabled.default}
              />
              <RenderProps
                ref={propsRef[4]}
                propName={RADIO.props.label.name}
                description={RADIO.props.label.description}
                type={RADIO.props.label.type}
                defaultValue={RADIO.props.label.default}
              />

              {!laptop && renderSideBarItem([RADIO.props.size.name, RADIO.props.color.name, RADIO.props.value.name, RADIO.props.disabled.name, RADIO.props.label.name], selectedPropsSideBarItem, propsRef)}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};
export default RadioDisplay;

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
    <RadioGroup size="small">
      <FormControlLabel color="component" control={<Radio />} label="Option 1" />
      <FormControlLabel color="component" control={<Radio />} label="Option 2" />
      <FormControlLabel color="component" control={<Radio />} label="Option 3" />
    </RadioGroup>
    <RadioGroup size="medium">
      <FormControlLabel color="component" control={<Radio />} label="Option 1" />
      <FormControlLabel color="component" control={<Radio />} label="Option 2" />
      <FormControlLabel color="component" control={<Radio />} label="Option 3" />
    </RadioGroup>
    <RadioGroup size="large">
      <FormControlLabel color="component" control={<Radio />} label="Option 1" />
      <FormControlLabel color="component" control={<Radio />} label="Option 2" />
      <FormControlLabel color="component" control={<Radio />} label="Option 3" />
    </RadioGroup>
  </div>
);
const TEXT_1 = `<RadioGroup>
  <FormControlLabel control={<Radio />} label="Option 1" />
  <FormControlLabel control={<Radio />} label="Option 2" />
  <FormControlLabel control={<Radio />} label="Option 3" />
</RadioGroup>

<RadioGroup size="medium">
  <FormControlLabel color="component" control={<Radio />} label="Option 1" />
  <FormControlLabel color="component" control={<Radio />} label="Option 2" />
  <FormControlLabel color="component" control={<Radio />} label="Option 3" />
</RadioGroup>

<RadioGroup size="large">
  <FormControlLabel color="component" control={<Radio />} label="Option 1" />
  <FormControlLabel color="component" control={<Radio />} label="Option 2" />
  <FormControlLabel color="component" control={<Radio />} label="Option 3" />
</RadioGroup>
`;
