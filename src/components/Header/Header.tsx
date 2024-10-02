import React from "react";
import {
  Header as HeaderUI,
  HeaderGroup,
  HeaderItem,
  IconButton,
  useTheme,
  Input,
  Text,
} from "stelios";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandStorybook,
} from "@tabler/icons-react";

import Settings from "./Settings";

const Header = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;
  return (
    <HeaderUI
      id="header"
      expandable={false}
      height="3.5rem"
      style={{ backgroundColor: colorPalette.primary.accentScale[1], outline: `2px solid ${colorPalette.primary.accentScale[2]}` }}
      color="primary"
    >
      <HeaderGroup style={{ marginLeft: "4rem", height: "100%" }}>
        <HeaderItem style={{ height: "100%", display:"flex", justifyContent:"center", alignItems:"center" }}>
          <Text fontFamily='"Caveat", cursive' variant="h3" color="primary" size="large">Stelios</Text>
        </HeaderItem>
      </HeaderGroup>
      <HeaderGroup style={{ marginRight: "1rem" }}>
        {/* <HeaderItem style={{marginRight:"rem"}}>
          <Input size="small" width="200px" color="primary" variant="soft" placeholder="Search" />
        </HeaderItem> */}
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
            icon={<IconBrandStorybook/>}
            onClick={() => window.open("https://yuva0.github.io/stelios/storybook")}
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
        <HeaderItem>
          <Settings/>
        </HeaderItem>
      </HeaderGroup>
    </HeaderUI>
  );
};

export default Header;
