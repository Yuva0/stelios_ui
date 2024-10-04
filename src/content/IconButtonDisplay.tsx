import * as React from "react";
import {
  Text,
  useTheme,
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
  renderSideBarItem,
  RenderTabsList,
  RenderVariations,
  useWindowSize,
} from "../helpers/helpers";
import i18n from "../i18n/i18n_en.json";

const ICONBUTTON = i18n.iconButton;

const IconButtonDisplay = () => {
  const windowSize = useWindowSize();
  const laptop = windowSize.width < 768;
  const mobile = windowSize.width < 480;
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;
  const variationRefs = Array.from({ length: 4 }, () => React.createRef<HTMLDivElement>());
  const propsRef = Array.from({ length: 7 }, () => React.createRef<HTMLDivElement>());
  const [selectedTab, setSelectedTab] = React.useState("usage");
  const [selectedVariationSideBarItem, setSelectedVariationSideBarItem] = React.useState(0);
  const [selectedPropsSideBarItem, setSeletedPropsSideBarItem] = React.useState(0);

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
  },[variationRefs, propsRef, selectedTab]);

  return (
    <div style={{ margin: "1.5rem 0 4rem 0", width: mobile ? "100%" : laptop ? "calc(100% - 12rem)" : "calc(100% - 22rem)"}}>
      <RenderBreadcrumbsForComponent name={ICONBUTTON.title} />

      <div style={{ padding: "1rem" }}>
        <RenderComponentHeading
          title={ICONBUTTON.title}
          description={ICONBUTTON.description}
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
              <RenderVariations
                ref={variationRefs[0]}
                label={ICONBUTTON.usage.installation.label}
                text={ICONBUTTON.usage.installation.description}
              />
              <RenderVariations
                ref={variationRefs[1]}
                label={ICONBUTTON.usage.variants.label}
                description={ICONBUTTON.usage.variants.description}
                code={CODE_1}
                text={TEXT_1}
              />
              <RenderVariations
                ref={variationRefs[2]}
                label={ICONBUTTON.usage.sizes.label}
                description={ICONBUTTON.usage.sizes.description}
                code={CODE_2}
                text={TEXT_2}
              />
              <RenderVariations
                ref={variationRefs[3]}
                label={ICONBUTTON.usage.disabled.label}
                description={ICONBUTTON.usage.disabled.description}
                code={CODE_3}
                text={TEXT_3}
              />

              {!laptop && renderSideBarItem([
                ICONBUTTON.usage.installation.label,
                ICONBUTTON.usage.variants.label,
                ICONBUTTON.usage.sizes.label,
                ICONBUTTON.usage.disabled.label,
              ], selectedVariationSideBarItem, variationRefs)}
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
                ref={propsRef[0]}
                propName={ICONBUTTON.props.variant.name}
                description={ICONBUTTON.props.variant.description}
                type={ICONBUTTON.props.variant.type}
                defaultValue={ICONBUTTON.props.variant.default}
                marginTop="1rem"
              />
              <RenderProps
                ref={propsRef[1]}
                propName={ICONBUTTON.props.size.name}
                description={ICONBUTTON.props.size.description}
                type={ICONBUTTON.props.size.type}
                defaultValue={ICONBUTTON.props.size.default}
              />
              <RenderProps
                ref={propsRef[2]}
                propName={ICONBUTTON.props.disabled.name}
                description={ICONBUTTON.props.disabled.description}
                type={ICONBUTTON.props.disabled.type}
                defaultValue={ICONBUTTON.props.disabled.default}
              />
              <RenderProps
                ref={propsRef[3]}
                propName={ICONBUTTON.props.color.name}
                description={ICONBUTTON.props.color.description}
                type={ICONBUTTON.props.color.type}
                defaultValue={ICONBUTTON.props.color.default}
              />
              <RenderProps
                ref={propsRef[4]}
                propName={ICONBUTTON.props.icon.name}
                description={ICONBUTTON.props.icon.description}
                type={ICONBUTTON.props.icon.type}
                defaultValue={ICONBUTTON.props.icon.default}
              />
              <RenderProps
                ref={propsRef[5]}
                propName={ICONBUTTON.props.alt.name}
                description={ICONBUTTON.props.alt.description}
                type={ICONBUTTON.props.alt.type}
                defaultValue={ICONBUTTON.props.alt.default}
              />
              <RenderProps
                ref={propsRef[6]}
                propName={ICONBUTTON.props.onClick.name}
                description={ICONBUTTON.props.onClick.description}
                type={ICONBUTTON.props.onClick.type}
                defaultValue={ICONBUTTON.props.onClick.default}
                wordSpacing="4px"
              />

              {!laptop && renderSideBarItem([
                  ICONBUTTON.props.variant.name,
                  ICONBUTTON.props.size.name,
                  ICONBUTTON.props.disabled.name,
                  ICONBUTTON.props.color.name,
                  ICONBUTTON.props.icon.name,
                  ICONBUTTON.props.alt.name,
                  ICONBUTTON.props.onClick.name,
                ], selectedPropsSideBarItem, propsRef
              )}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};
export default IconButtonDisplay;

const CODE_1 = (
  <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
    <IconButton
      icon={<IconAwardFilled />}
      alt={ICONBUTTON.code.alt}
      color="component"
      variant="contained"
    />
    <IconButton
      icon={<IconAwardFilled />}
      alt={ICONBUTTON.code.alt}
      color="component"
      variant="outlined"
    />
    <IconButton
      icon={<IconAwardFilled />}
      alt={ICONBUTTON.code.alt}
      color="component"
      variant="outlined-soft"
    />
    <IconButton
      icon={<IconAwardFilled />}
      alt={ICONBUTTON.code.alt}
      color="component"
      variant="soft"
    />
    <IconButton
      icon={<IconAwardFilled />}
      alt={ICONBUTTON.code.alt}
      color="component"
      variant="neumorph"
    />
    <IconButton
      icon={<IconAwardFilled />}
      alt={ICONBUTTON.code.alt}
      color="component"
      variant="neumorph-contained"
    />
    <IconButton
      icon={<IconAwardFilled />}
      alt={ICONBUTTON.code.alt}
      color="component"
      disabled
    />
  </div>
);
const TEXT_1 = `<IconButton icon={<IconAwardFilled/>} alt="${ICONBUTTON.code.alt}" variant="contained"/>
<IconButton icon={<IconAwardFilled/>} alt="${ICONBUTTON.code.alt}" variant="outlined"/>
<IconButton icon={<IconAwardFilled/>} alt="${ICONBUTTON.code.alt}" variant="outlined-soft"/>
<IconButton icon={<IconAwardFilled/>} alt="${ICONBUTTON.code.alt}" variant="soft"/>
<IconButton icon={<IconAwardFilled/>} alt="${ICONBUTTON.code.alt}" variant="neumorph"/>
<IconButton icon={<IconAwardFilled/>} alt="${ICONBUTTON.code.alt}" variant="neumorph-contained"/>
<IconButton icon={<IconAwardFilled/>} alt="${ICONBUTTON.code.alt}" disabled/>`;

const CODE_2 = (
  <div
    style={{
      display: "flex",
      gap: "2rem",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
    }}
  >
    <IconButton
      icon={<IconAwardFilled />}
      alt={ICONBUTTON.code.alt}
      color="component"
      size="small"
      style={{ height: "fit-content" }}
    />
    <IconButton
      icon={<IconAwardFilled />}
      alt={ICONBUTTON.code.alt}
      color="component"
      size="medium"
      style={{ height: "fit-content" }}
    />
    <IconButton
      icon={<IconAwardFilled />}
      alt={ICONBUTTON.code.alt}
      color="component"
      size="large"
      style={{ height: "fit-content" }}
    />
  </div>
);
const TEXT_2 = `<IconButton icon={<IconAwardFilled/>} alt="${ICONBUTTON.code.alt}" size="small"/>
<IconButton icon={<IconAwardFilled/>} alt="${ICONBUTTON.code.alt}" size="medium"/>
<IconButton icon={<IconAwardFilled/>} alt="${ICONBUTTON.code.alt}" size="large"/>`;

const CODE_3 = (
  <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
    <IconButton icon={<IconAwardFilled />} alt="Award" color="component" disabled/>
  </div>
);
const TEXT_3 = `<IconButton disabled/>`;
