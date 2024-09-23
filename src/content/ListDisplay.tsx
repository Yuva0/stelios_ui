import React from "react";
import {
  Text,
  useTheme,
  SideBar,
  SideBarItem,
  Tabs,
  TabPanels,
  TabPanel,
  List,
  ListItem
} from "stelios";
import {
  RenderBreadcrumbsForComponent,
  RenderComponentHeading,
  RenderProps,
  RenderTabsList,
  RenderVariations,
} from "../helpers/helpers";
import i18n from "../i18n/i18n_en.json";

const LIST = i18n.list;
const ListDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";

    return (
      <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 22rem)" }}>
        <RenderBreadcrumbsForComponent name={LIST.title} path={LIST.path}/>
  
        <div style={{ padding: "1rem" }}>
          <RenderComponentHeading
            title={LIST.title}
            description={LIST.description}
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
                  label={LIST.usage.installation.label}
                  text={LIST.usage.installation.description}
                />
                <RenderVariations
                  label={LIST.usage.variants.label}
                  description={LIST.usage.variants.description}
                  code={CODE_1}
                  text={TEXT_1}
                />
                <RenderVariations
                  label={LIST.usage.sizes.label}
                  description={LIST.usage.sizes.description}
                  code={CODE_2}
                  text={TEXT_2}
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
                  {LIST.props._label}
                </Text>
                <RenderProps
                  propName={LIST.props.variant.name}
                  description={
                    LIST.props.variant.description
                  }
                  type={LIST.props.variant.type}
                  defaultValue={
                    LIST.props.variant.default
                  }
                  marginTop="1rem"
                />
                <RenderProps
                  propName={LIST.props.color.name}
                  description={
                    LIST.props.color.description
                  }
                  type={LIST.props.color.type}
                  defaultValue={
                    LIST.props.color.default
                  }
                />
                <RenderProps
                  propName={LIST.props.children.name}
                  description={
                    LIST.props.children.description
                  }
                  type={LIST.props.children.type}
                  defaultValue={
                    LIST.props.children.default
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
export default ListDisplay;

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
    <List color="component" variant="ordered" title={LIST.code.title}>
      {LIST.code.items.map((item: string, index: number) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </List> 
    <List color="component" variant="unordered" title={LIST.code.title}>
      {LIST.code.items.map((item: string, index: number) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </List>
    <List color="component" variant="none" title={LIST.code.title}>
      {LIST.code.items.map((item: string, index: number) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </List>
  </div>
);
const TEXT_1 = `<List color="component" variant="ordered" title="${LIST.code.title}">
${LIST.code.items.map((item: string, index: number) => (
  `<ListItem key={${index}}>${item}</ListItem>`
))}
</List>

<List color="component" variant="unordered" title="${LIST.code.title}">
${LIST.code.items.map((item: string, index: number) => (
  `<ListItem key={${index}}>${item}</ListItem>`
))}
</List>;

<List color="component" variant="none" title="${LIST.code.title}">
${LIST.code.items.map((item: string, index: number) => (
  `<ListItem key={${index}}>${item}</ListItem>`
))}
</List>
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
    <List color="component" size="small" title={LIST.code.title}>
      {LIST.code.items.map((item: string, index: number) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </List> 
    <List color="component" size="medium" title={LIST.code.title}>
      {LIST.code.items.map((item: string, index: number) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </List>
    <List color="component" size="large" title={LIST.code.title}>
      {LIST.code.items.map((item: string, index: number) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </List>
  </div>
);
const TEXT_2 = `<List color="component" size="small" title="${LIST.code.title}">
${LIST.code.items.map((item: string, index: number) => (
  ` <ListItem key={${index}}>${item}</ListItem>`
))}
</List>

<List color="component" size="medium" title="${LIST.code.title}">
${LIST.code.items.map((item: string, index: number) => (
  ` <ListItem key={${index}}>${item}</ListItem>`
))}
</List>;

<List color="component" size="large" title="${LIST.code.title}">
${LIST.code.items.map((item: string, index: number) => (
  ` <ListItem key={${index}}>${item}</ListItem>`
))}
</List>
`;