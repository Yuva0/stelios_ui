import {
  Text,
  useTheme,
  SideBar,
  SideBarItem,
  Tabs,
  TabPanels,
  TabPanel,
  Avatar
} from "stelios";
import {
  RenderBreadcrumbsForComponent,
  RenderComponentHeading,
  RenderProps,
  RenderTabsList,
  RenderVariations,
} from "../helpers/helpers";
import i18n from "../i18n/i18n_en.json";

const AVATAR = i18n.avatar;
const AvatarDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";

    return (
      <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 22rem)" }}>
        <RenderBreadcrumbsForComponent name={AVATAR.title} path={AVATAR.path}/>
  
        <div style={{ padding: "1rem" }}>
          <RenderComponentHeading
            title={AVATAR.title}
            description={AVATAR.description}
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
                  label={AVATAR.usage.installation.label}
                  text={AVATAR.usage.installation.description}
                />
                <RenderVariations
                  label={AVATAR.usage.sizes.label}
                  description={AVATAR.usage.sizes.description}
                  code={CODE_1}
                  text={TEXT_1}
                />
                <RenderVariations
                  label={AVATAR.usage.shape.label}
                  description={AVATAR.usage.shape.description}
                  code={CODE_2}
                  text={TEXT_2}
                />
                <RenderVariations
                  label={AVATAR.usage.initials.label}
                  description={AVATAR.usage.initials.description}
                  code={CODE_3}
                  text={TEXT_3}
                />
                <RenderVariations
                  label={AVATAR.usage.variant.label}
                  description={AVATAR.usage.variant.description}
                  code={CODE_4}
                  text={TEXT_4}
                />
  
                <SideBar style={{ width: "10rem", top: "5rem" }}>
                  <SideBarItem color="primary" selected>
                    Installation
                  </SideBarItem>
                  <SideBarItem color="primary">Sizes</SideBarItem>
                </SideBar>
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
                  propName={AVATAR.props.size.name}
                  description={
                    AVATAR.props.size.description
                  }
                  type={AVATAR.props.size.type}
                  defaultValue={
                    AVATAR.props.size.default
                  }
                />
  
                <SideBar style={{ width: "10rem", top: "5rem" }}>
                  <SideBarItem color="primary">size</SideBarItem>
                  <SideBarItem color="primary">width</SideBarItem>
                  <SideBarItem color="primary">value</SideBarItem>
                  <SideBarItem color="primary">children</SideBarItem>
                  <SideBarItem color="primary">onClick</SideBarItem>
                </SideBar>
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