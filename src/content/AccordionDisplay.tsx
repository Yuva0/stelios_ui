import React from "react";
import {
  Text,
  useTheme,
  Tabs,
  TabPanels,
  TabPanel,
  Accordion,
  AccordionItem,
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

const ACCORDION = i18n.accordion;
const AccordionDisplay = () => {
  const windowSize = useWindowSize();
  const laptop = windowSize.width < 768;
  const mobile = windowSize.width < 480;
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;
  const variationRefs = Array.from({ length: 2 }, () => React.createRef<HTMLDivElement>());
  const propsRef = Array.from({ length: 1 }, () => React.createRef<HTMLDivElement>());

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
    <div style={{ margin: "1.5rem 0 4rem 0", width: mobile ? "100%" : laptop ? "calc(100% - 12rem)" : "calc(100% - 22rem)"}}>
      <RenderBreadcrumbsForComponent
        name={ACCORDION.title}
        path={ACCORDION.path}
      />

      <div style={{ padding: "1rem" }}>
        <RenderComponentHeading
          title={ACCORDION.title}
          description={ACCORDION.description}
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
                label={ACCORDION.usage.installation.label}
                text={ACCORDION.usage.installation.description}
              />
              <RenderVariations
                ref={variationRefs[1]}
                label={ACCORDION.usage.variants.label}
                description={ACCORDION.usage.variants.description}
                code={CODE_1}
                text={TEXT_1}
                language="javascript"
              />

              {!laptop && renderSideBarItem([
                ACCORDION.usage.installation.label,
                ACCORDION.usage.variants.label,
              ], selectedVariationSideBarItem, variationRefs)}
            </TabPanel>
            <TabPanel value="props">
              <Text
                preciseColor={textColor}
                size="large"
                style={{ marginTop: "2rem" }}
              >
                {ACCORDION.props._label}
              </Text>
              <RenderProps
                ref={propsRef[0]}
                propName={ACCORDION.props.variant.name}
                description={ACCORDION.props.variant.description}
                type={ACCORDION.props.variant.type}
                defaultValue={ACCORDION.props.variant.default}
                marginTop="1rem"
              />

              {!laptop && renderSideBarItem([
                ACCORDION.props.variant.name,
              ], selectedPropsSideBarItem, propsRef)}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};
export default AccordionDisplay;

const ACCORDION_ITEM_1 =
  "React is one of the most influential technologies in modern web development. Created by Facebook in 2013, it revolutionized the way developers think about building user interfaces. React introduced a component-based architecture that allows developers to create reusable, modular pieces of code, which can be combined to form complex user interfaces. This approach not only enhances code maintainability but also improves development efficiency, as components can be independently developed and tested.";
const ACCORDION_ITEM_2 =
  "Vue.js is a progressive JavaScript framework for building user interfaces. It is designed from the ground up to be incrementally adoptable, and can easily scale between a library and a framework depending on different use cases. Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.";
const ACCORDION_ITEM_3 =
  "Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.";

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
    <Accordion color="component" variant="contained">
      <AccordionItem title="React">
        <Text size="small" disableColor>
          {ACCORDION_ITEM_1}
        </Text>
      </AccordionItem>
      <AccordionItem title="Vue">
        <Text size="small" disableColor>
          {ACCORDION_ITEM_2}
        </Text>
      </AccordionItem>
      <AccordionItem title="Angular">
        <Text size="small" disableColor>
          {ACCORDION_ITEM_3}
        </Text>
      </AccordionItem>
    </Accordion>
    <Accordion color="component" variant="outlined">
      <AccordionItem title="React">
        <Text size="small" disableColor>
          {ACCORDION_ITEM_1}
        </Text>
      </AccordionItem>
      <AccordionItem title="Vue">
        <Text size="small" disableColor>
          {ACCORDION_ITEM_2}
        </Text>
      </AccordionItem>
      <AccordionItem title="Angular">
        <Text size="small" disableColor>
          {ACCORDION_ITEM_3}
        </Text>
      </AccordionItem>
    </Accordion>
    <Accordion color="component" variant="soft">
      <AccordionItem title="React">
        <Text size="small" disableColor>
          {ACCORDION_ITEM_1}
        </Text>
      </AccordionItem>
      <AccordionItem title="Vue">
        <Text size="small" disableColor>
          {ACCORDION_ITEM_2}
        </Text>
      </AccordionItem>
      <AccordionItem title="Angular">
        <Text size="small" disableColor>
          {ACCORDION_ITEM_3}
        </Text>
      </AccordionItem>
    </Accordion>
  </div>
);
const TEXT_1 = `
const ACCORDION_ITEM_1 = "React is one of the most influential technologies in modern web development. Created by Facebook in 2013, it revolutionized the way developers think about building user interfaces. React introduced a component-based architecture that allows developers to create reusable, modular pieces of code, which can be combined to form complex user interfaces. This approach not only enhances code maintainability but also improves development efficiency, as components can be independently developed and tested.";
const ACCORDION_ITEM_2 = "Vue.js is a progressive JavaScript framework for building user interfaces. It is designed from the ground up to be incrementally adoptable, and can easily scale between a library and a framework depending on different use cases. Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.";
const ACCORDION_ITEM_3 = "Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.";

<div>
  <Accordion variant="contained">
    <AccordionItem title="React"> <Text size="small" disableColor> {ACCORDION_ITEM_1} </Text> </AccordionItem>
    <AccordionItem title="Vue"> <Text size="small" disableColor> {ACCORDION_ITEM_2} </Text> </AccordionItem>
    <AccordionItem title="Angular"> <Text size="small" disableColor> {ACCORDION_ITEM_2} </Text> </AccordionItem>
  </Accordion>

  <Accordion variant="outlined">
    <AccordionItem title="React"> <Text size="small" disableColor> {ACCORDION_ITEM_1} </Text> </AccordionItem>
    <AccordionItem title="Vue"> <Text size="small" disableColor> {ACCORDION_ITEM_2} </Text> </AccordionItem>
    <AccordionItem title="Angular"> <Text size="small" disableColor> {ACCORDION_ITEM_3} </Text> </AccordionItem>
  </Accordion>

  <Accordion variant="soft"> <AccordionItem title="React"> <Text size="small" disableColor> {ACCORDION_ITEM_1} </Text> </AccordionItem>
    <AccordionItem title="Vue"> <Text size="small" disableColor> {ACCORDION_ITEM_2} </Text> </AccordionItem>
    <AccordionItem title="Angular">  <Text size="small" disableColor> {ACCORDION_ITEM_3} </Text> </AccordionItem>
  </Accordion>
</div>
`;
