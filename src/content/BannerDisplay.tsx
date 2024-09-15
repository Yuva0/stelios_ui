import {
  Text,
  useTheme,
  SideBar,
  SideBarItem,
  Tabs,
  TabPanels,
  TabPanel,
  Banner
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

const BANNER = i18n.banner;
const BannerDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";

    return (
      <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 22rem)" }}>
        <RenderBreadcrumbsForComponent name={BANNER.title} path={BANNER.path}/>
  
        <div style={{ padding: "1rem" }}>
          <RenderComponentHeading
            title={BANNER.title}
            description={BANNER.description}
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
                  label={BANNER.usage.installation.label}
                  text={BANNER.usage.installation.description}
                />
                <RenderVariations
                  label={BANNER.usage.variants.label}
                  description={BANNER.usage.variants.description}
                  code={CODE_1}
                  text={TEXT_1}
                />
                <RenderVariations
                  label={BANNER.usage.title.label}
                  description={BANNER.usage.title.description}
                  code={CODE_2}
                  text={TEXT_2}
                />
                <RenderVariations
                  label={BANNER.usage.width.label}
                  description={BANNER.usage.width.description}
                  code={CODE_3}
                  text={TEXT_3}
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
                  {BANNER.props._label}
                </Text>
                <RenderProps
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
                  propName={BANNER.props.color.name}
                  description={
                    BANNER.props.color.description
                  }
                  type={BANNER.props.color.type}
                  defaultValue={
                    BANNER.props.color.default
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
