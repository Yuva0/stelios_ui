import {
  Text,
  useTheme,
  SideBar,
  SideBarItem,
  Tabs,
  TabPanels,
  TabPanel,
  Drawer,
  Button,
} from "stelios";
import {
  RenderBreadcrumbsForComponent,
  RenderComponentHeading,
  RenderProps,
  RenderTabsList,
  RenderVariations,
} from "../helpers/helpers";
import i18n from "../i18n/i18n_en.json";
import { useRef, useState } from "react";

const DRAWER = i18n.drawer;
const SelectDisplay = () => {
  const btnRef = useRef(null);
  const [open, setOpen] = useState(false);
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";

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
      <Button ref={btnRef} onClick={() => {setOpen(!open)}} color="component">Open Drawer</Button>
      <Drawer color="component" open={open} title="Settings" size="small" position="right">
        <Text color="component">This is the drawer container</Text>
      </Drawer>
    </div>
  );
  const TEXT_1 = `<Drawer open={true} title="Settings" size="small" position="right">
  <Text>This is the drawer container</Text>
</Drawer>`;

  return (
    <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 22rem)" }}>
      <RenderBreadcrumbsForComponent name={DRAWER.title} path={DRAWER.path} />

      <div style={{ padding: "1rem" }}>
        <RenderComponentHeading
          title={DRAWER.title}
          description={DRAWER.description}
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
                label={DRAWER.usage.installation.label}
                text={DRAWER.usage.installation.description}
              />
              <RenderVariations
                label={DRAWER.usage.default.label}
                description={DRAWER.usage.default.description}
                code={CODE_1}
                text={TEXT_1}
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
                {DRAWER.props._label}
              </Text>
              <RenderProps
                propName={DRAWER.props.children.name}
                description={DRAWER.props.children.description}
                type={DRAWER.props.children.type}
                defaultValue={DRAWER.props.children.default}
                marginTop="1rem"
              />
              <RenderProps
                propName={DRAWER.props.color.name}
                description={DRAWER.props.color.description}
                type={DRAWER.props.color.type}
                defaultValue={DRAWER.props.color.default}
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
};
export default SelectDisplay;
