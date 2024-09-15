import React, { lazy, useEffect, useState } from "react";
import { useTheme } from "stelios";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import NavigationBarDisplay from "../../content/NavigationBarDisplay";

interface ListContainerStyleProps {
  $colorPalette: any;
}
const TimeoutPromise = new Promise((resolve) => setTimeout(resolve, 300));
const importComponent = (path: string) => {
  return import(`../../content/${path}`);
};
const renderLazyComponent = (path: string) => {
  return lazy(() => {
    return Promise.all([importComponent(path), TimeoutPromise]).then(
      ([moduleExports]) => moduleExports
    );
  });
}

const ButtonDisplay = renderLazyComponent("ButtonDisplay");
const ToggleButtonDisplay = renderLazyComponent("ToggleButtonDisplay");
const IconButtonDisplay = renderLazyComponent("IconButtonDisplay");
const InputDisplay = renderLazyComponent("InputDisplay");
const PasswordDisplay = renderLazyComponent("PasswordDisplay");
const SelectDisplay = renderLazyComponent("SelectDisplay");
const AutocompleteDisplay = renderLazyComponent("AutocompleteDisplay");
const NumberInputDisplay = renderLazyComponent("NumberInputDisplay");
const CheckboxDisplay = renderLazyComponent("CheckboxDisplay");
const RadioDisplay = renderLazyComponent("RadioDisplay");
const SwitchDisplay = renderLazyComponent("SwitchDisplay");
const AvatarDisplay = renderLazyComponent("AvatarDisplay");
const TagDisplay = renderLazyComponent("TagDisplay");
const BannerDisplay = renderLazyComponent("BannerDisplay");
const CapsuleDisplay = renderLazyComponent("CapsuleDisplay");
const CardDisplay = renderLazyComponent("CardDisplay");
const ListDisplay = renderLazyComponent("ListDisplay");
const LinkDisplay = renderLazyComponent("LinkDisplay");
const TextDisplay = renderLazyComponent("TextDisplay");
const SideBarDisplay = renderLazyComponent("SideBarDisplay");

const ListContainer: React.FunctionComponent = () => {
  const theme = useTheme().theme;
  const path = useParams();
  const [component, setComponent] = useState(path.idComponent);

  useEffect(() => {
    setComponent(path.idComponent);
  },[path]);

  const RenderComponent = () => {
    switch (component) {
      case "button":
        return <ButtonDisplay />;
      case "toggle-button":
        return <ToggleButtonDisplay />;
      case "icon-button":
        return <IconButtonDisplay />;
      case "input":
        return <InputDisplay />;
      case "password":
        return <PasswordDisplay />;
      case "select":
        return <SelectDisplay />;
      case "autocomplete":
        return <AutocompleteDisplay />;
      case "number-input":
        return <NumberInputDisplay />;
      case "checkbox":
        return <CheckboxDisplay />;
      case "radio":
        return <RadioDisplay />;
      case "switch":
        return <SwitchDisplay />;
      case "avatar":
        return <AvatarDisplay />;
      case "tag":
        return <TagDisplay />;
      case "banner":
        return <BannerDisplay />;
      case "capsule":
        return <CapsuleDisplay />;
      case "card":
        return <CardDisplay />;
      case "list":
        return <ListDisplay />;
      case "link":
        return <LinkDisplay />;
      case "text":
        return <TextDisplay />;
      case "navigation-bar":
        return <NavigationBarDisplay />;
      case "sidebar":
        return <SideBarDisplay />;
      default:
        return <ButtonDisplay />;
    }
  };


  return (
    <StyledContainer $colorPalette={theme!.colorPalette}>
      <NavigationBar />
      <RenderComponent />
    </StyledContainer>
  );
};
export default ListContainer;

const StyledContainer = styled.div<ListContainerStyleProps>`
  display: flex;
  flex-direction: row;
  background-color: ${(props) =>
    props.$colorPalette.primary.appearance === "light" ? "white" : "black"};
  min-height: 100vh;
  width: 100%;
`;
