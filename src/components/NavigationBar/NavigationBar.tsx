import * as React from "react";
import {
  NavigationBarGroup,
  NavigationBar as NavigationBarUI,
  NavigationBarGroupItem,
  NavigationBarHeader,
  Text,
  useTheme,
} from "stelios";
import Topics, { TopicsProps } from "../../content/Topics";

const TOPICS: TopicsProps = Topics;

const NavigationBar = () => {
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;

  const ChildrenArray = Object.keys(TOPICS).map((topicGroup) => {
    const groupedTopics = TOPICS[topicGroup];
    return (
      <NavigationBarGroup title={groupedTopics.title} key={topicGroup} selected>
        {Object.keys(groupedTopics.content).map((topic) => {
          const topics = groupedTopics.content[topic];
          if (!topics.content) {
            return (
              <NavigationBarGroupItem value={topic} size="small" key={topics.title}>
                {topics.title}
              </NavigationBarGroupItem>
            );
          }

          return [
            <NavigationBarHeader size="small" key={topics.title}>
              <Text
                style={{ fontSize: "0.75rem" }}
                preciseColor={colorPalette.primary.accentScale[11]}
              >
                {topics.title}
              </Text>
            </NavigationBarHeader>,

            ...Object.keys(topics.content).map((subTopic) => {
              const subTopics = topics.content![subTopic];
              return (
                <NavigationBarGroupItem
                  size="small"
                  key={subTopic}
                  value={subTopic}
                >
                  {subTopics.title}
                </NavigationBarGroupItem>
              );
            }),
          ];
        })}
      </NavigationBarGroup>
    );
  });

  return (
    <NavigationBarUI
      color="primary"
      style={{
        minWidth: "12rem",
        width: "12rem",
        height: "calc(100vh - 3.5rem)",
        padding: "1rem 0",
        boxSizing: "border-box",
        backgroundColor: colorPalette.primary.appearance === "light" ? "white" : "black",
        borderRight: 0,
      }}
    >
      {ChildrenArray}
    </NavigationBarUI>
  );
};
export default NavigationBar;
