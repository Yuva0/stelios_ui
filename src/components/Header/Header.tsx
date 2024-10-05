import React from "react";
import {
  Header as HeaderUI,
  HeaderGroup,
  HeaderItem,
  IconButton,
  useTheme,
  Text,
  Link,
} from "stelios";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandStorybook,
} from "@tabler/icons-react";

import Settings from "./Settings";
import { useWindowSize } from "../../helpers/helpers";
import NavigationBarMobile from "./NavigationBarMobile";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;
  const windowSize = useWindowSize();
  const mobile = windowSize.width < 480;
  const navigate = useNavigate();
  return (
    <HeaderUI
      id="header"
      expandable={false}
      height="3.5rem"
      style={{
        backgroundColor: colorPalette.primary.accentScale[1],
        outline: `2px solid ${colorPalette.primary.accentScale[2]}`,
      }}
      color="primary"
    >
      <HeaderGroup
        style={{ marginLeft: mobile ? "0rem" : "4rem", height: "100%" }}
      >
        {mobile && (
          <HeaderItem>
            <NavigationBarMobile />
          </HeaderItem>
        )}
        <HeaderItem
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            onClick={() => {
              navigate("/");
            }}
          >
            <Text
              fontFamily='"Caveat", cursive'
              variant="h3"
              color="primary"
              size="large"
            >
              Stelios
            </Text>
          </Link>
        </HeaderItem>
      </HeaderGroup>
      <HeaderGroup style={{ marginRight: "1rem" }}>
        {/* <HeaderItem style={{marginRight:"rem"}}>
          <Input size="small" width="200px" color="primary" variant="soft" placeholder="Search" />
        </HeaderItem> */}
        {!mobile && <>
          <HeaderItem>
            <IconButton
              size="small"
              variant="soft"
              color="primary"
              alt="github"
              icon={<IconBrandGithub />}
              onClick={() => window.open("https://github.com/yuva0/stelios")}
            />
          </HeaderItem>
          <HeaderItem>
            <IconButton
              size="small"
              variant="soft"
              color="primary"
              alt="storybook"
              icon={<IconBrandStorybook />}
              onClick={() =>
                window.open("https://yuva0.github.io/stelios/storybook")
              }
            />
          </HeaderItem>
          <HeaderItem>
            <IconButton
              size="small"
              variant="soft"
              color="primary"
              alt="linkedin"
              icon={<IconBrandLinkedin />}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/tanuj-sengupta-872a05129/"
                )
              }
            />
          </HeaderItem>
        </>}
        <HeaderItem>
          <Settings />
        </HeaderItem>
      </HeaderGroup>
    </HeaderUI>
  );
};

export default Header;
