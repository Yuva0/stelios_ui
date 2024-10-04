import React from "react";
import {
  Text,
  useTheme,
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
  renderSideBarItem,
  RenderTabsList,
  RenderVariations,
  useWindowSize,
} from "../helpers/helpers";
import i18n from "../i18n/i18n_en.json";

const LIST = i18n.list;
const ListDisplay = () => {
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
      <div style={{ margin: "1.5rem 0 4rem 0", width: mobile ? "calc(100% - 12rem)" : "calc(100% - 22rem)"}}>
        <RenderBreadcrumbsForComponent name={LIST.title} path={LIST.path}/>
  
        <div style={{ padding: "1rem" }}>
          <RenderComponentHeading
            title={LIST.title}
            description={LIST.description}
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
                  label={LIST.usage.installation.label}
                  text={LIST.usage.installation.description}
                />
                <RenderVariations
                  ref={variationRefs[1]}
                  label={LIST.usage.variants.label}
                  description={LIST.usage.variants.description}
                  code={CODE_1}
                  text={TEXT_1}
                />
                <RenderVariations
                  ref={variationRefs[2]}
                  label={LIST.usage.sizes.label}
                  description={LIST.usage.sizes.description}
                  code={CODE_2}
                  text={TEXT_2}
                />
                {!mobile && renderSideBarItem([LIST.usage.installation.label, LIST.usage.variants.label, LIST.usage.sizes.label], selectedVariationSideBarItem, variationRefs)}
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
                  ref={propsRef[0]}
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
                  ref={propsRef[1]}
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
                  ref={propsRef[2]}
                  propName={LIST.props.children.name}
                  description={
                    LIST.props.children.description
                  }
                  type={LIST.props.children.type}
                  defaultValue={
                    LIST.props.children.default
                  }
                />
                {!mobile && renderSideBarItem([LIST.props.variant.name, LIST.props.color.name, LIST.props.children.name], selectedPropsSideBarItem, propsRef)}
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