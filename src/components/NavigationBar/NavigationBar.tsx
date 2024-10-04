import React, { useEffect, useState } from "react";
import {
  NavigationBarGroup,
  NavigationBar as NavigationBarUI,
  NavigationBarGroupItem,
  NavigationBarHeader,
  Text,
  useTheme,
} from "stelios";
import Topics, { TopicsProps } from "../../content/Topics";
import { useNavigate, useParams } from "react-router-dom";
import { memo } from "react";
import { useWindowSize } from "../../helpers/helpers";

const TOPICS: TopicsProps = Topics;

const NavigationBar = () => {
  const windowSize = useWindowSize();
  const mobile = windowSize.width < 480;
  const theme = useTheme().theme!;
  const colorPalette = theme.colorPalette;
  const navigate = useNavigate();
  const path = useParams();
  const [component, setComponent] = useState(path.idComponent);
  const [category, setCategory] = useState<string | null | undefined>(
    getSelectedCategory(path.idComponent)
  );

  useEffect(() => {
    setComponent(path.idComponent);
    setCategory(getSelectedCategory(path.idComponent));
  }, [path]);

  const _onNavigationBarClick = (value: string) => {
    navigate(`/components/${value}`);
  };

  const ChildrenArray = Object.keys(TOPICS).map((topicGroup) => {
    const groupedTopics = TOPICS[topicGroup];
    return (
      <NavigationBarGroup
        title={groupedTopics.title}
        key={topicGroup}
        expanded={topicGroup === category}
      >
        {Object.keys(groupedTopics.content).map((topic) => {
          const topics = groupedTopics.content[topic];
          if (!topics.content) {
            return (
              <NavigationBarGroupItem
                value={topic}
                size="small"
                key={topic}
                onClick={() => _onNavigationBarClick(topic)}
                selected={topic === component}
              >
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
                  selected={subTopic === component}
                  onClick={() => _onNavigationBarClick(subTopic)}
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

  return (!mobile ? (
    <NavigationBarUI
      color="primary"
      style={{
        minWidth: "12rem",
        width: "12rem",
        height: "calc(100vh - 3.5rem)",
        padding: "1rem 0",
        boxSizing: "border-box",
        backgroundColor:
          colorPalette.primary.appearance === "light" ? "white" : "black",
        borderRight: 0,
        top: "4rem",
      }}
    >
      {ChildrenArray}
    </NavigationBarUI>
  ):<></>);
};
export default memo(NavigationBar);

const getSelectedCategory = (topic?: string) => {
  if (!topic) return null;

  const category = Object.keys(TOPICS).find((categories) => {
    const allCategoryKeys = Object.keys(TOPICS[categories].content);
    return allCategoryKeys.find((category) => {

      const subCategories = TOPICS[categories].content[category];
      if (subCategories.content) {
        return Object.keys(subCategories.content).includes(topic);
      } else {
        return category === topic;
      }
    });
  });
  return category;
};
