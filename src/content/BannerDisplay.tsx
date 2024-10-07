import React from "react";
import {
  Text,
  useTheme,
  Tabs,
  TabPanels,
  TabPanel,
  Banner
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
import { IconAward } from "@tabler/icons-react";

const BANNER = i18n.banner;
const BannerDisplay = () => {
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

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";

    return (
      <div style={{ margin: "1.5rem 0 4rem 0", width: mobile ? "100%" : laptop ? "calc(100% - 12rem)" : "calc(100% - 22rem)"}}>
        <RenderBreadcrumbsForComponent name={BANNER.title} path={BANNER.path}/>
  
        <div style={{ padding: "1rem" }}>
          <RenderComponentHeading
            title={BANNER.title}
            description={BANNER.description}
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
                  label={BANNER.usage.installation.label}
                  text={BANNER.usage.installation.description}
                />
                <RenderVariations
                  ref={variationRefs[1]}
                  label={BANNER.usage.variants.label}
                  description={BANNER.usage.variants.description}
                  code={CODE_1}
                  text={TEXT_1}
                />
                <RenderVariations
                  ref={variationRefs[2]}
                  label={BANNER.usage.title.label}
                  description={BANNER.usage.title.description}
                  code={CODE_2}
                  text={TEXT_2}
                />
                <RenderVariations
                  ref={variationRefs[3]}
                  label={BANNER.usage.width.label}
                  description={BANNER.usage.width.description}
                  code={CODE_3}
                  text={TEXT_3}
                />
  
                {!laptop && renderSideBarItem([
                  BANNER.usage.installation.label,
                  BANNER.usage.variants.label,
                  BANNER.usage.title.label,
                  BANNER.usage.width.label,
                ], selectedVariationSideBarItem, variationRefs)}
              </TabPanel>
              <TabPanel value="props">
                <Text
                  preciseColor={textColor}
                  size="large"
                  style={{ marginTop: "2rem" }}
                >
                  {BANNER.props._label}
                </Text>
                <RenderProps
                  ref={propsRef[0]}
                  propName={BANNER.props.variant.name}
                  description={
                    BANNER.props.variant.description
                  }
                  type={BANNER.props.variant.type}
                  defaultValue={
                    BANNER.props.variant.default
                  }
                  marginTop="1rem"
                />
                <RenderProps
                  ref={propsRef[1]}
                  propName={BANNER.props.title.name}
                  description={
                    BANNER.props.title.description
                  }
                  type={BANNER.props.title.type}
                  defaultValue={
                    BANNER.props.title.default
                  }
                />
                <RenderProps
                  ref={propsRef[2]}
                  propName={BANNER.props.description.name}
                  description={
                    BANNER.props.description.description
                  }
                  type={BANNER.props.description.type}
                  defaultValue={
                    BANNER.props.description.default
                  }
                />
                <RenderProps
                  ref={propsRef[3]}
                  propName={BANNER.props.titleIcon.name}
                  description={
                    BANNER.props.titleIcon.description
                  }
                  type={BANNER.props.titleIcon.type}
                  defaultValue={
                    BANNER.props.titleIcon.default
                  }
                />
                <RenderProps
                  ref={propsRef[4]}
                  propName={BANNER.props.leadingIcon.name}
                  description={
                    BANNER.props.leadingIcon.description
                  }
                  type={BANNER.props.leadingIcon.type}
                  defaultValue={
                    BANNER.props.leadingIcon.default
                  }
                />
                <RenderProps
                  ref={propsRef[5]}
                  propName={BANNER.props.width.name}
                  description={
                    BANNER.props.width.description
                  }
                  type={BANNER.props.width.type}
                  defaultValue={
                    BANNER.props.width.default
                  }
                />
                <RenderProps
                  ref={propsRef[6]}
                  propName={BANNER.props.color.name}
                  description={
                    BANNER.props.color.description
                  }
                  type={BANNER.props.color.type}
                  defaultValue={
                    BANNER.props.color.default
                  }
                />
  
                {!laptop && renderSideBarItem([
                  BANNER.props.variant.name,
                  BANNER.props.title.name,
                  BANNER.props.description.name,
                  BANNER.props.titleIcon.name,
                  BANNER.props.leadingIcon.name,
                  BANNER.props.width.name,
                  BANNER.props.color.name,
                ], selectedPropsSideBarItem, propsRef)}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    );
}
export default BannerDisplay;

const title = "MERN Stack";
const description = "The MERN stack, comprising MongoDB, Express, React, and Node.js, is a powerful combination for full-stack web development. MongoDB, a NoSQL database, provides a flexible and scalable way to manage data, while Express and Node.js handle the server-side logic, enabling efficient data processing and API creation. React, a popular front-end library, brings dynamic and responsive user interfaces, allowing developers to create seamless single-page applications.";
const CODE_1 = (
  <div
    style={{
      display: "flex",
      gap: "2rem",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "100%",
    }}
  >
    <Banner title={title} description={description} variant="contained" color="component"/>
    <Banner title={title} description={description} variant="outlined" color="component"/>
    <Banner title={title} description={description} variant="outlined-soft" color="component"/>
    <Banner title={title} description={description} variant="soft" color="component"/>
  </div>
);
const TEXT_1 = `const title = "MERN Stack";
const description = "The MERN stack, comprising MongoDB, Express, React, and Node.js, is a powerful combination for full-stack web development. MongoDB, a NoSQL database, provides a flexible and scalable way to manage data, while Express and Node.js handle the server-side logic, enabling efficient data processing and API creation. React, a popular front-end library, brings dynamic and responsive user interfaces, allowing developers to create seamless single-page applications.";
<Banner title={title} description={description} variant="contained" color="component"/>
<Banner title={title} description={description} variant="outlined" color="component"/>
<Banner title={title} description={description} variant="outlined-soft" color="component"/>
<Banner title={title} description={description} variant="soft" color="component"/>`;

const CODE_2 = (
  <div
    style={{
      display: "flex",
      gap: "2rem",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "100%",
    }}
  >
    <Banner title={title} description={description} variant="contained" color="component" titleIcon={<IconAward/>}/>
    <Banner title={title} description={description} variant="outlined" color="component" leadingIcon={<IconAward/>}/>
  </div>
);
const TEXT_2 = `const title = "MERN Stack";
const description = "The MERN stack, comprising MongoDB, Express, React, and Node.js, is a powerful combination for full-stack web development. MongoDB, a NoSQL database, provides a flexible and scalable way to manage data, while Express and Node.js handle the server-side logic, enabling efficient data processing and API creation. React, a popular front-end library, brings dynamic and responsive user interfaces, allowing developers to create seamless single-page applications.";
<Banner title={title} description={description} variant="contained" color="component" titleIcon={<IconAward/>}/>
<Banner title={title} description={description} variant="outlined" color="component" leadingIcon={<IconAward/>}/>`;

const CODE_3 = (
  <div
    style={{
      display: "flex",
      gap: "2rem",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "100%",
    }}
  >
    <Banner title={title} description={description} variant="contained" color="component" width="400px"/>
    <Banner title={title} description={description} variant="contained" color="component" width="auto"/>
  </div>
);
const TEXT_3 = `const title = "MERN Stack";
const description = "The MERN stack, comprising MongoDB, Express, React, and Node.js, is a powerful combination for full-stack web development. MongoDB, a NoSQL database, provides a flexible and scalable way to manage data, while Express and Node.js handle the server-side logic, enabling efficient data processing and API creation. React, a popular front-end library, brings dynamic and responsive user interfaces, allowing developers to create seamless single-page applications.";
<Banner title={title} description={description} variant="contained" color="component" width="400px"/>
<Banner title={title} description={description} variant="contained" color="component" width="auto"/>`;
