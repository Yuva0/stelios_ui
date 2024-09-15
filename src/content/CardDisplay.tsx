import {
  Text,
  useTheme,
  SideBar,
  SideBarItem,
  Tabs,
  TabPanels,
  TabPanel,
  Capsule,
  Card
} from "stelios";
import {
  RenderBreadcrumbsForComponent,
  RenderComponentHeading,
  RenderProps,
  RenderTabsList,
  RenderVariations,
} from "../helpers/helpers";
import i18n from "../i18n/i18n_en.json";

const CARD = i18n.card;
const CardDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";

    return (
      <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 22rem)" }}>
        <RenderBreadcrumbsForComponent name={CARD.title} path={CARD.path}/>
  
        <div style={{ padding: "1rem" }}>
          <RenderComponentHeading
            title={CARD.title}
            description={CARD.description}
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
                  label={CARD.usage.installation.label}
                  text={CARD.usage.installation.description}
                />
                <RenderVariations
                  label={CARD.usage.variants.label}
                  description={CARD.usage.variants.description}
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
                  {CARD.props._label}
                </Text>
                <RenderProps
                  propName={CARD.props.variant.name}
                  description={
                    CARD.props.variant.description
                  }
                  type={CARD.props.variant.type}
                  defaultValue={
                    CARD.props.variant.default
                  }
                  marginTop="1rem"
                />
                <RenderProps
                  propName={CARD.props.color.name}
                  description={
                    CARD.props.color.description
                  }
                  type={CARD.props.color.type}
                  defaultValue={
                    CARD.props.color.default
                  }
                />
                <RenderProps
                  propName={CARD.props.width.name}
                  description={
                    CARD.props.width.description
                  }
                  type={CARD.props.width.type}
                  defaultValue={
                    CARD.props.width.default
                  }
                />
                <RenderProps
                  propName={CARD.props.header.name}
                  description={
                    CARD.props.header.description
                  }
                  type={CARD.props.header.type}
                  defaultValue={
                    CARD.props.header.default
                  }
                />
                <RenderProps
                  propName={CARD.props.footer.name}
                  description={
                    CARD.props.footer.description
                  }
                  type={CARD.props.footer.type}
                  defaultValue={
                    CARD.props.footer.default
                  }
                />
                <RenderProps
                  propName={CARD.props.children.name}
                  description={
                    CARD.props.children.description
                  }
                  type={CARD.props.children.type}
                  defaultValue={
                    CARD.props.children.default
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
export default CardDisplay;

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
    <Card variant="contained" color="component" header={<Text disableColor size="medium">{CARD.code.header}</Text>} footer={<Text disableColor color="component" size="small">{CARD.code.footer}</Text>}>
      <Text disableColor color="component" size="small">{CARD.code.content}</Text>
    </Card>
    <Card variant="outlined" color="component" header={<Text disableColor size="medium">{CARD.code.header}</Text>} footer={<Text disableColor color="component" size="small">{CARD.code.footer}</Text>}>
      <Text disableColor color="component" size="small">{CARD.code.content}</Text>
    </Card>
    <Card variant="soft" color="component" header={<Text disableColor size="medium">{CARD.code.header}</Text>} footer={<Text disableColor color="component" size="small">{CARD.code.footer}</Text>}>
      <Text disableColor color="component" size="small">{CARD.code.content}</Text>
    </Card>
    <Card variant="outlined-soft" color="component" header={<Text disableColor size="medium">{CARD.code.header}</Text>} footer={<Text disableColor color="component" size="small">{CARD.code.footer}</Text>}>
      <Text disableColor color="component" size="small">{CARD.code.content}</Text>
    </Card>
    <Card variant="neumorph" color="component" header={<Text disableColor size="medium">{CARD.code.header}</Text>} footer={<Text disableColor color="component" size="small">{CARD.code.footer}</Text>}>
      <Text disableColor color="component" size="small">{CARD.code.content}</Text>
    </Card>
  </div>
);
const TEXT_1 = `<Card variant="contained" color="component" header={<Text disableColor size="medium">${CARD.code.header}</Text>} footer={<Text color="component" size="small">${CARD.code.footer}</Text>}>
  <Text disableColor color="component" size="small">${CARD.code.content}</Text>
</Card>

<Card variant="outlined" color="component" header={<Text disableColor size="medium">${CARD.code.header}</Text>} footer={<Text disableColor color="component" size="small">${CARD.code.footer}</Text>}>
  <Text disableColor color="component" size="small">${CARD.code.content}</Text>
</Card>

<Card variant="soft" color="component" header={<Text disableColor size="medium">${CARD.code.header}</Text>} footer={<Text disableColor color="component" size="small">${CARD.code.footer}</Text>}>
  <Text disableColor color="component" size="small">${CARD.code.content}</Text>
</Card>

<Card variant="outlined-soft" color="component" header={<Text disableColor size="medium">${CARD.code.header}</Text>} footer={<Text disableColor color="component" size="small">${CARD.code.footer}</Text>}>
  <Text disableColor color="component" size="small">${CARD.code.content}</Text>
</Card>

<Card variant="neumorph" color="component" header={<Text disableColor size="medium">${CARD.code.header}</Text>} footer={<Text disableColor color="component" size="small">${CARD.code.footer}</Text>}>
  <Text disableColor color="component" size="small">${CARD.code.content}</Text>
</Card>`;
