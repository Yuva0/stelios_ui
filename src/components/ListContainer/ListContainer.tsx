import * as React from "react";
import { useTheme } from "stelios";
import styled from "styled-components";

interface ListContainerStyleProps {
  $colorPalette: any;
}

interface ListContainerProps {
  children?: React.ReactNode | [React.ReactNode];
}

const ListContainer: React.FunctionComponent<ListContainerProps> = ({
  children,
}) => {
  const theme = useTheme().theme;

  return (
    <StyledContainer $colorPalette={theme!.colorPalette}>
        {children}
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
