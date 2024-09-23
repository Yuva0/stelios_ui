import React from "react";
import {
  Text,
  useTheme,
  Tabs,
  TabPanels,
  TabPanel,
  Card,
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

const CARD = i18n.card;
const CardDisplay = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const variationRefs = Array.from({ length: 2 }, () =>
    React.createRef<HTMLDivElement>()
  );
  const propsRef = Array.from({ length: 10 }, () =>
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
    <div style={{ margin: "1.5rem 0 4rem 0", width: "calc(100% - 22rem)" }}>
      <RenderBreadcrumbsForComponent name={CARD.title} path={CARD.path} />

      <div style={{ padding: "1rem" }}>
        <RenderComponentHeading
          title={CARD.title}
          description={CARD.description}
        />

        <Tabs
          color="primary"
          style={{ marginTop: "2rem" }}
          value={selectedTab}
          onChange={(value) => setSelectedTab(value)}
        >
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
                label={CARD.usage.installation.label}
                text={CARD.usage.installation.description}
              />
              <RenderVariations
                ref={variationRefs[1]}
                label={CARD.usage.variants.label}
                description={CARD.usage.variants.description}
                code={CODE_1}
                text={TEXT_1}
              />
              {renderSideBarItem(
                [CARD.usage.installation.label, CARD.usage.variants.label],
                selectedVariationSideBarItem,
                variationRefs
              )}
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
                ref={propsRef[0]}
                propName={CARD.props.variant.name}
                description={CARD.props.variant.description}
                type={CARD.props.variant.type}
                defaultValue={CARD.props.variant.default}
                marginTop="1rem"
              />
              <RenderProps
                ref={propsRef[1]}
                propName={CARD.props.color.name}
                description={CARD.props.color.description}
                type={CARD.props.color.type}
                defaultValue={CARD.props.color.default}
              />
              <RenderProps
                ref={propsRef[2]}
                propName={CARD.props.width.name}
                description={CARD.props.width.description}
                type={CARD.props.width.type}
                defaultValue={CARD.props.width.default}
              />
              <RenderProps
                ref={propsRef[3]}
                propName={CARD.props.header.name}
                description={CARD.props.header.description}
                type={CARD.props.header.type}
                defaultValue={CARD.props.header.default}
              />
              <RenderProps
                ref={propsRef[4]}
                propName={CARD.props.footer.name}
                description={CARD.props.footer.description}
                type={CARD.props.footer.type}
                defaultValue={CARD.props.footer.default}
              />
              <RenderProps
                ref={propsRef[5]}
                propName={CARD.props.children.name}
                description={CARD.props.children.description}
                type={CARD.props.children.type}
                defaultValue={CARD.props.children.default}
              />
              {renderSideBarItem(
                [
                  CARD.props.variant.name,
                  CARD.props.color.name,
                  CARD.props.width.name,
                  CARD.props.header.name,
                  CARD.props.footer.name,
                  CARD.props.children.name,
                ],
                selectedPropsSideBarItem,
                propsRef
              )}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};
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
    <Card
      variant="contained"
      color="component"
      header={
        <Text disableColor size="medium">
          {CARD.code.header}
        </Text>
      }
      footer={
        <Text disableColor color="component" size="small">
          {CARD.code.footer}
        </Text>
      }
    >
      <Text disableColor color="component" size="small">
        {CARD.code.content}
      </Text>
    </Card>
    <Card
      variant="outlined"
      color="component"
      header={
        <Text disableColor size="medium">
          {CARD.code.header}
        </Text>
      }
      footer={
        <Text disableColor color="component" size="small">
          {CARD.code.footer}
        </Text>
      }
    >
      <Text disableColor color="component" size="small">
        {CARD.code.content}
      </Text>
    </Card>
    <Card
      variant="soft"
      color="component"
      header={
        <Text disableColor size="medium">
          {CARD.code.header}
        </Text>
      }
      footer={
        <Text disableColor color="component" size="small">
          {CARD.code.footer}
        </Text>
      }
    >
      <Text disableColor color="component" size="small">
        {CARD.code.content}
      </Text>
    </Card>
    <Card
      variant="outlined-soft"
      color="component"
      header={
        <Text disableColor size="medium">
          {CARD.code.header}
        </Text>
      }
      footer={
        <Text disableColor color="component" size="small">
          {CARD.code.footer}
        </Text>
      }
    >
      <Text disableColor color="component" size="small">
        {CARD.code.content}
      </Text>
    </Card>
    <Card
      variant="neumorph"
      color="component"
      header={
        <Text disableColor size="medium">
          {CARD.code.header}
        </Text>
      }
      footer={
        <Text disableColor color="component" size="small">
          {CARD.code.footer}
        </Text>
      }
    >
      <Text disableColor color="component" size="small">
        {CARD.code.content}
      </Text>
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
