import React from "react";
import {
  Header as HeaderUI,
  HeaderGroup,
  HeaderItem,
  IconButton,
  Autocomplete,
  Text,
  useTheme,
  Button,
  Input,
} from "stelios";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconExternalLink
} from "@tabler/icons-react";

import Settings from "./Settings";

const _onStorybookClick = () => {
  window.open("https://yuva0.github.io/stelios/storybook/?path=/docs/foundations-colors--docs");
};

const Header = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;
  return (
    <HeaderUI
      id="header"
      expandable={false}
      height="3.5rem"
      style={{ backgroundColor: colorPalette.primary.accentScale[1] }}
      color="primary"
    >
      <HeaderGroup style={{ marginLeft: "4rem", height: "100%" }}>
        <HeaderItem style={{ height: "100%", display:"flex", justifyContent:"center", alignItems:"center" }}>
          {/* <Text
            variant="h4"
            style={{ fontFamily: `"Playwrite HR Lijeva", cursive` }}
          >
            Stelios
          </Text> */}
        </HeaderItem>
      </HeaderGroup>
      <HeaderGroup style={{ marginRight: "1rem" }}>
        <HeaderItem style={{marginRight:"rem"}}>
          <Input size="small" width="200px" color="primary" variant="soft" placeholder="Search" />
        </HeaderItem>
        <HeaderItem>
          <IconButton
            size="small"
            variant="soft"
            color="primary"
            alt="github"
            icon={<IconBrandGithub />}
            onClick={() => window.open("https://github.com/yuva0")}
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
        <HeaderItem>
          <Button variant="soft" color="secondary" size="small" trailingIcon={<IconExternalLink/>} onClick={_onStorybookClick}>Storybook</Button>
        </HeaderItem>
      </HeaderGroup>
    </HeaderUI>
  );
};

export default Header;
