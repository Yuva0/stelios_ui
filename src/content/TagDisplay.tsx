import React from "react";
import {
  Text,
  useTheme,
  SideBar,
  SideBarItem,
  Tabs,
  TabPanels,
  TabPanel,
  Tag
} from "stelios";
import {
  RenderBreadcrumbsForComponent,
  RenderComponentHeading,
  RenderProps,
  RenderTabsList,
  RenderVariations,
} from "../helpers/helpers";
import i18n from "../i18n/i18n_en.json";
import { IconAward } from "@tabler/icons-react";

const TAG = i18n.tag;
const TagDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";

    return (
      <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 22rem)" }}>
        <RenderBreadcrumbsForComponent name={TAG.title} path={TAG.path}/>
  
        <div style={{ padding: "1rem" }}>
          <RenderComponentHeading
            title={TAG.title}
            description={TAG.description}
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
                  label={TAG.usage.installation.label}
                  text={TAG.usage.installation.description}
                />
                <RenderVariations
                  label={TAG.usage.sizes.label}
                  description={TAG.usage.sizes.description}
                  code={CODE_1}
                  text={TEXT_1}
                />
                <RenderVariations
                  label={TAG.usage.variants.label}
                  description={TAG.usage.variants.description}
                  code={CODE_2}
                  text={TEXT_2}
                />
                <RenderVariations
                  label={TAG.usage.icons.label}
                  description={TAG.usage.icons.description}
                  code={CODE_3}
                  text={TEXT_3}
                />
                <RenderVariations
                  label={TAG.usage.clickable.label}
                  description={TAG.usage.clickable.description}
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
                  {TAG.props._label}
                </Text>
                <RenderProps
                  propName={TAG.props.variant.name}
                  description={
                    TAG.props.variant.description
                  }
                  type={TAG.props.variant.type}
                  defaultValue={
                    TAG.props.variant.default
                  }
                  marginTop="1rem"
                />
                <RenderProps
                  propName={TAG.props.size.name}
                  description={
                    TAG.props.size.description
                  }
                  type={TAG.props.size.type}
                  defaultValue={
                    TAG.props.size.default
                  }
                  marginTop="1rem"
                />
                <RenderProps
                  propName={TAG.props.color.name}
                  description={
                    TAG.props.color.description
                  }
                  type={TAG.props.color.type}
                  defaultValue={
                    TAG.props.color.default
                  }
                  marginTop="1rem"
                />
                <RenderProps
                  propName={TAG.props.leadingIcon.name}
                  description={
                    TAG.props.leadingIcon.description
                  }
                  type={TAG.props.leadingIcon.type}
                  defaultValue={
                    TAG.props.leadingIcon.default
                  }
                  marginTop="1rem"
                />
                <RenderProps
                  propName={TAG.props.trailingIcon.name}
                  description={
                    TAG.props.trailingIcon.description
                  }
                  type={TAG.props.trailingIcon.type}
                  defaultValue={
                    TAG.props.trailingIcon.default
                  }
                />
                <RenderProps
                  propName={TAG.props.clickable.name}
                  description={
                    TAG.props.clickable.description
                  }
                  type={TAG.props.clickable.type}
                  defaultValue={
                    TAG.props.clickable.default
                  }
                />
                <RenderProps
                  propName={TAG.props.onClick.name}
                  description={
                    TAG.props.onClick.description
                  }
                  type={TAG.props.onClick.type}
                  defaultValue={
                    TAG.props.onClick.default
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
export default TagDisplay;

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
    <Tag size="small" variant="contained" color="component">Tag</Tag>
    <Tag size="medium" variant="contained" color="component">Tag</Tag>
    <Tag size="large" variant="contained" color="component">Tag</Tag>
  </div>
);
const TEXT_1 = `<Tag size="small" variant="contained" color="component">Tag</Tag>
<Tag size="medium" variant="contained" color="component">Tag</Tag>
<Tag size="large" variant="contained" color="component">Tag</Tag>
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
    <Tag variant="contained" color="component">Tag</Tag>
    <Tag variant="outlined" color="component">Tag</Tag>
  </div>
);
const TEXT_2 = `<Avatar variant="contained" src={IMG_SRC} alt="human profile" type="image"/>
<Avatar variant="outlined" src={IMG_SRC} alt="human profile" type="image"/>`;

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
    <Tag variant="contained" color="component" leadingIcon={<IconAward/>}>Tag</Tag>
    <Tag variant="contained" color="component" trailingIcon={<IconAward/>}>Tag</Tag>
    <Tag variant="contained" color="component" leadingIcon={<IconAward/>} trailingIcon={<IconAward/>}>Tag</Tag>
  </div>
);
const TEXT_3 = `<Tag variant="contained" color="component" leadingIcon={<IconAward/>}>Tag</Tag>
<Tag variant="contained" color="component" trailingIcon={<IconAward/>}>Tag</Tag>
<Tag variant="contained" color="component" leadingIcon={<IconAward/>} trailingIcon={<IconAward/>}>Tag</Tag>`;

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
    <Tag variant="contained" color="component">Clickable Tag</Tag>
    <Tag variant="contained" color="component" disableClick>Non-Clickable Tag</Tag>
  </div>
);
const TEXT_4 = `<Tag variant="contained" color="component">Tag</Tag>
<Tag variant="contained" color="component" disableClick>Tag</Tag>`;