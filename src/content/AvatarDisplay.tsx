import React from "react";
import {
  Text,
  useTheme,
  Tabs,
  TabPanels,
  TabPanel,
  Avatar
} from "stelios";
import {
  RenderBreadcrumbsForComponent,
  RenderComponentHeading,
  RenderProps,
  renderSideBarItem,
  RenderTabsList,
  RenderVariations,
} from "../helpers/helpers";
import i18n from "../i18n/i18n_en.json";

const AVATAR = i18n.avatar;
const AvatarDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;
  const variationRefs = Array.from({ length: 5 }, () => React.createRef<HTMLDivElement>());
  const propsRef = Array.from({ length: 5 }, () => React.createRef<HTMLDivElement>());
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
      <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 22rem)" }}>
        <RenderBreadcrumbsForComponent name={AVATAR.title} path={AVATAR.path}/>
  
        <div style={{ padding: "1rem" }}>
          <RenderComponentHeading
            title={AVATAR.title}
            description={AVATAR.description}
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
                  label={AVATAR.usage.installation.label}
                  text={AVATAR.usage.installation.description}
                />
                <RenderVariations
                  ref={variationRefs[1]}
                  label={AVATAR.usage.sizes.label}
                  description={AVATAR.usage.sizes.description}
                  code={CODE_1}
                  text={TEXT_1}
                />
                <RenderVariations
                  ref={variationRefs[2]}
                  label={AVATAR.usage.shape.label}
                  description={AVATAR.usage.shape.description}
                  code={CODE_2}
                  text={TEXT_2}
                />
                <RenderVariations
                  ref={variationRefs[3]}
                  label={AVATAR.usage.initials.label}
                  description={AVATAR.usage.initials.description}
                  code={CODE_3}
                  text={TEXT_3}
                />
                <RenderVariations
                  ref={variationRefs[4]}
                  label={AVATAR.usage.variant.label}
                  description={AVATAR.usage.variant.description}
                  code={CODE_4}
                  text={TEXT_4}
                />
  
                {renderSideBarItem([
                  AVATAR.usage.installation.label,
                  AVATAR.usage.sizes.label,
                  AVATAR.usage.shape.label,
                  AVATAR.usage.initials.label,
                  AVATAR.usage.variant.label,
                ], selectedVariationSideBarItem, variationRefs)}
              </TabPanel>
              <TabPanel value="props">
                <Text
                  preciseColor={textColor}
                  size="large"
                  style={{ marginTop: "2rem" }}
                >
                  {AVATAR.props._label}
                </Text>
                <RenderProps
                  ref={propsRef[0]}
                  propName={AVATAR.props.src.name}
                  description={
                    AVATAR.props.src.description
                  }
                  type={AVATAR.props.src.type}
                  defaultValue={
                    AVATAR.props.src.default
                  }
                  marginTop="1rem"
                />
                <RenderProps
                  ref={propsRef[1]}
                  propName={AVATAR.props.alt.name}
                  description={
                    AVATAR.props.alt.description
                  }
                  type={AVATAR.props.alt.type}
                  defaultValue={
                    AVATAR.props.alt.default
                  }
                  marginTop="1rem"
                />
                <RenderProps
                  ref={propsRef[2]}
                  propName={AVATAR.props.type.name}
                  description={
                    AVATAR.props.type.description
                  }
                  type={AVATAR.props.type.type}
                  defaultValue={
                    AVATAR.props.type.default
                  }
                  marginTop="1rem"
                />
                <RenderProps
                  ref={propsRef[3]}
                  propName={AVATAR.props.variant.name}
                  description={
                    AVATAR.props.variant.description
                  }
                  type={AVATAR.props.variant.type}
                  defaultValue={
                    AVATAR.props.variant.default
                  }
                  marginTop="1rem"
                />
                <RenderProps
                  ref={propsRef[4]}
                  propName={AVATAR.props.size.name}
                  description={
                    AVATAR.props.size.description
                  }
                  type={AVATAR.props.size.type}
                  defaultValue={
                    AVATAR.props.size.default
                  }
                />
  
                {renderSideBarItem([
                  AVATAR.props.src.name,
                  AVATAR.props.alt.name,
                  AVATAR.props.type.name,
                  AVATAR.props.variant.name,
                  AVATAR.props.size.name,
                ], selectedPropsSideBarItem, propsRef)}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    );
}
export default AvatarDisplay;

const IMG_SRC = `https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg`;
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
    <Avatar size="small" src={IMG_SRC} alt="human profile" type="image"/>
    <Avatar size="medium" src={IMG_SRC} alt="human profile" type="image"/>
    <Avatar size="large" src={IMG_SRC} alt="human profile" type="image"/>
    <Avatar size="xlarge" src={IMG_SRC} alt="human profile" type="image"/>
  </div>
);
const TEXT_1 = `const IMG_SRC = "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg";
<Avatar size="small" src={IMG_SRC} alt="human profile" type="image"/>
<Avatar size="medium" src={IMG_SRC} alt="human profile" type="image"/>
<Avatar size="large" src={IMG_SRC} alt="human profile" type="image"/>
<Avatar size="xlarge" src={IMG_SRC} alt="human profile" type="image"/>
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
    <Avatar shape="rounded" src={IMG_SRC} alt="human profile" type="image"/>
    <Avatar shape="square" size="medium" src={IMG_SRC} alt="human profile" type="image"/>
  </div>
);
const TEXT_2 = `const IMG_SRC = "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg";
<Avatar shape="rounded" src={IMG_SRC} alt="human profile" type="image"/>
<Avatar shape="square" size="medium" src={IMG_SRC} alt="human profile" type="image"/>`;

const CODE_3 = (
  <div
    style={{
      display: "flex",
      gap: "2rem",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Avatar type="initials" initials="AB" size="medium"/>
    <Avatar type="initials" initials="CD" size="medium"/>
    <Avatar type="initials" initials="EF" size="medium"/>
    <Avatar type="initials" initials="GH" size="medium"/>
  </div>
);
const TEXT_3 = `<Avatar type="initials" initials="AB" size="medium"/>
<Avatar type="initials" initials="CD" size="medium"/>
<Avatar type="initials" initials="EF" size="medium"/>
<Avatar type="initials" initials="GH" size="medium"/>`;

const CODE_4 = (
  <div
    style={{
      display: "flex",
      gap: "2rem",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Avatar type="initials" initials="AB" variant="contained"/>
    <Avatar type="initials" initials="AB" variant="outlined"/>
  </div>
);
const TEXT_4 = `<Avatar type="initials" initials="AB" variant="contained"/>
<Avatar type="initials" initials="AB" variant="outlined"/>`;