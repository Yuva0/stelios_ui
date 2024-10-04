import React, { useEffect, forwardRef } from "react";
import { useLocation } from "react-router-dom";
import {
  Banner,
  Breadcrumbs,
  BreadcrumbsItem,
  CodeDisplay,
  CodePreview,
  Link,
  SideBar,
  SideBarItem,
  Tab,
  TabList,
  Tag,
  Text,
  useTheme,
} from "stelios";
import i18n from "../i18n/i18n_en.json";
import { IconHeartFilled } from "@tabler/icons-react";

export function makeFirstLetterCapital(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export const RenderProps = forwardRef<HTMLDivElement, {propName: string, description: string; type: string, defaultValue: string, marginTop?: string, wordSpacing?: string}>(({
  propName,
  description,
  type,
  defaultValue,
  marginTop = "3rem",
  wordSpacing = "1rem"
}, ref) => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";

  const line = (
    <div
      style={{
        height: "1px",
        width: "100%",
        backgroundColor: colorPalette.primary.grayScale[1],
        marginTop: "1rem",
      }}
    />
  );
  return (
    <div ref={ref}>
      <Tag disableClick color="component" variant="outlined" style={{ marginTop: marginTop }}>
        {propName}
      </Tag>
      {line}
      <div style={{ marginTop: "1rem", display: "flex", flexDirection: "row" }}>
        <Text preciseColor={textColor} style={{ minWidth: "200px" }}>
          <b>Description</b>
        </Text>
        <Text preciseColor={textColor}>{description}</Text>
      </div>
      <div style={{ marginTop: "1rem", display: "flex", flexDirection: "row" }}>
        <Text preciseColor={textColor} style={{ minWidth: "200px" }}>
          <b>Type</b>
        </Text>
        <Text color="component" style={{ wordSpacing: wordSpacing }}>
          {type}
        </Text>
      </div>
      <div style={{ marginTop: "1rem", display: "flex", flexDirection: "row" }}>
        <Text preciseColor={textColor} style={{ minWidth: "200px" }}>
          <b>Default</b>
        </Text>
        <Text color="component" style={{ wordSpacing: wordSpacing }}>
          {defaultValue}
        </Text>
      </div>
    </div>
  );
});

export const RenderTabsList = () => {
  return (
    <TabList width="100%">
      <Tab label={i18n.props.usage.label} value={i18n.props.usage.value} />
      <Tab label={i18n.props.props.label} value={i18n.props.props.value} />
    </TabList>
  );
};


export const RenderVariations = forwardRef<HTMLDivElement,{label?: string, description?: string, code?: React.ReactNode, text?: string, language?: string}>(({
  label,
  description,
  code,
  text,
  language = "jsx",
}, ref) => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;
  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";
  const bgColor =
    colorPalette.primary.appearance === "light" ? "white" : "black";

  return (
    <div ref={ref}>
      {label && (
        <Text
          preciseColor={textColor}
          size="large"
          color="primary"
          style={{ marginTop: "2rem" }}
        >
          {label}
        </Text>
      )}
      {description && (
        <Text
          preciseColor={textColor}
          variant="paragraph"
          style={{ marginTop: "0.5rem" }}
        >
          {description}
        </Text>
      )}
      {!code && text && (
        <CodeDisplay
          text={text}
          style={{ marginTop: "1rem", flexWrap: "wrap", width: "100%", boxSizing: "border-box" }}
          syntaxHighlighterStyle={{ width: "100%", boxSizing: "border-box", flexWrap: "wrap" }}
          codeStyle={{ width: "100%", boxSizing: "border-box", flexWrap: "wrap" }}
          color="primary"
          language={language}
        />
      )}
      {code && text && (
        <CodePreview
          code={code}
          text={text}
          textStyle={{ width: "100%", boxSizing: "border-box" }}
          codeStyle={{ backgroundColor: bgColor, width: "100%", boxSizing: "border-box", flexWrap: "wrap", overflow: "scroll" }}
          style={{ marginTop: "1rem", flexWrap: "wrap", width: "100%", boxSizing: "border-box" }}
          color="primary"
          language={language}
        />
      )}
    </div>
  );
});

export const RenderBreadcrumbsForComponent = ({ name, path }: { name: string, path?: string }) => {
  return (
    <Breadcrumbs
      color="component"
      variant="text"
      style={{ padding: 0 }}
      delimiter="/"
    >
      <BreadcrumbsItem title={i18n.components.title} />
      <BreadcrumbsItem link={`/component/${path}`} title={name} />
    </Breadcrumbs>
  );
};
export const RenderComponentHeading = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const textColor =
    colorPalette.primary.appearance === "light" ? "black" : "white";

  const BANNER_GRATEFUL_DESC = (
    <>
      <Text disableColor size="small" style={{ marginTop: "0.5rem" }}>
        {i18n.grateful.description_1}{" "}
        <Link
          variant="underline"
          size="small"
          color="component"
          href="https://github.com/Yuva0/stelios"
          target={"_blank"}
        >
          {i18n.grateful.description_2}
        </Link>
        .
      </Text>
      <Text disableColor size="small">
        {i18n.grateful.description_3}
      </Text>
    </>
  );

  return (
    <>
      <Text preciseColor={textColor} variant="h1">
        {title}
      </Text>
      <Text preciseColor={textColor} style={{ marginTop: "0.5rem" }}>
        {description}{" "}
      </Text>
      <Banner
        width="100%"
        title={i18n.grateful.title}
        color="component"
        description={BANNER_GRATEFUL_DESC}
        titleIcon={<IconHeartFilled />}
        style={{ marginTop: "1rem" }}
        variant="outlined"
      />
    </>
  );
};


export const renderSideBarItem = (values: string[], selectedIndex: number, ref: React.RefObject<HTMLDivElement>[]) => {
  
  const _onClick = (index: number) => {
    const element = ref[index].current;
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 100; // Adjust the marginTop value as needed
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  }
  return (
    <SideBar style={{width: "10rem", top: "5rem"}} color="primary">
      {values.map((value, index) => (
        <SideBarItem key={value} size="small" selected={index === selectedIndex} onClick={() => _onClick(index)}>{value}</SideBarItem>
      ))}
    </SideBar>
  )
}