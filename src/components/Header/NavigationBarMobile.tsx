import { IconMenu2 } from "@tabler/icons-react";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  Text,
  useTheme,
} from "stelios";
import Topics, { TopicsProps } from "../../content/Topics";

const TOPICS: TopicsProps = Topics;

const NavigationBarMobile = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const colorPalette = useTheme().theme!.colorPalette;
  const [appearance, setAppearance] = React.useState<"light" | "dark">(
    colorPalette.primary.appearance
  );
  const [primaryColor, setPrimaryColor] = React.useState(
    colorPalette.primary.main
  );
  const [componentColor, setComponentColor] = React.useState(
    colorPalette.component.main
  );
  const navigate = useNavigate();

  const _handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
  const _handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const _handleSelectNavigationItem = (path: string) => {
    navigate(path);
    setDrawerOpen(false);
  };

  const DrawerChildren = Object.keys(TOPICS).map((topicGroup) => {
    const groupedTopics = TOPICS[topicGroup];
    return (
      <AccordionItem color="primary" title={groupedTopics.title} variant="soft">
        <List color="primary" style={{marginTop:0}}>
          {Object.keys(groupedTopics.content).map((topic) => {
            const topics = groupedTopics.content[topic];
            if (!topics.content) {
              return (
                <ListItem>
                  <Link
                    variant="hover"
                    color="primary"
                    onClick={() =>
                      _handleSelectNavigationItem(`/components/${topic}`)
                    }
                  >
                    {topics.title}
                  </Link>
                </ListItem>
              );
            }

            return (
              <List title={<Text size="small" disableColor>{topics.title}</Text>} color="primary" variant="none" containerStyle={{marginTop:"0.5rem"}}>
                {Object.keys(topics.content).map((subTopic) => {
                  const subTopics = topics.content![subTopic];
                  return (
                    <ListItem>
                      <Link
                        variant="hover"
                        color="primary"
                        onClick={() =>
                          _handleSelectNavigationItem(`/components/${subTopic}`)
                        }
                      >
                        {subTopics.title}
                      </Link>
                    </ListItem>
                  );
                })}
              </List>
            );
          })}
        </List>
      </AccordionItem>
    );
  });

  return (
    <>
      <IconButton
        size="small"
        variant="soft"
        color="primary"
        alt="Menu"
        icon={<IconMenu2 />}
        onClick={_handleDrawerOpen}
      />
      <Drawer
        open={drawerOpen}
        title={<Text color="primary">Navigation Drawer</Text>}
        size="small"
        position="left"
        onClose={_handleDrawerClose}
        color="primary"
        style={{ backgroundColor: colorPalette.primary.accentScale[1] }}
      >
        {DrawerChildren}
        <Accordion>
          {DrawerChildren}
        </Accordion>
      </Drawer>
    </>
  );
};

export default NavigationBarMobile;
