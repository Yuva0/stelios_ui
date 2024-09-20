export interface TopicsProps {
  [key: string]: {
    title: string;
    content: {
      [key: string]: {
        title: string;
        content?: {
          [key: string]: {
            title: string;
          };
        };
      };
    };
  };
}

const Topics: TopicsProps = {
  forms: {
    title: "Forms",
    content: {
      inputBase: {
        title: "Input Base",
        content: {
          input: {
            title: "Input",
          },
          password: {
            title: "Password",
          },
          select: {
            title: "Select",
          },
          autocomplete: {
            title: "Autocomplete",
          },
          "number-input": {
            title: "Number Input",
          },
        },
      },
      formControl: {
        title: "Form Control",
        content: {
          checkbox: {
            title: "Checkbox",
          },
          radio: {
            title: "Radio",
          },
          switch: {
            title: "Switch",
          },
        },
      },
      buttonBase: {
        title: "Button Base",
        content: {
          button: {
            title: "Button",
          },
          "icon-button": {
            title: "Icon Button",
          },
          "toggle-button": {
            title: "Toggle Button",
          },
        },
      },
      rangeBase: {
        title:"Range Base",
        content: {
          slider: {
            title: "Slider",
          },
        }
      }
    },
  },
  display: {
    title: "Display",
    content: {
      "image-base": {
        title: "Image Base",
        content: {
          avatar: {
            title: "Avatar",
          },
          tag: {
            title: "Tag",
          },
        }
      },
      "container-base": {
        title: "Container Base",
        content: {
          banner: {
            title: "Banner",
          },
          capsule: {
            title: "Capsule",
          },
          card: {
            title: "Card",
          },
        }
      },
      "text-base": {
        title: "Text Base",
        content: {
          list: {
            title: "List",
          },
          link: {
            title: "Link",
          },
          text: {
            title: "Text",
          },
        },
      },
      "focus-base": {
        "title": "Focus Base",
        content: {
          "accordion": {
            title: "Accordion",
          },
          "collapsible": {
            title: "Collapsible",
          },
        }
      },
      "misc": {
        title: "Misc",
        content: {
          "loader": {
            title: "Loader"
          },
        }
      }
    },
  },
  navigation: {
    title: "Navigation",
    content: {
      "navigation-bar": {
        title: "Navigation Bar",
      },
      sidebar: {
        title: "Side Bar",
      },
      drawer: {
        title: "Drawer",
      },
      tabs: {
        title: "Tabs",
      },
      breadcrumbs: {
        title: "Breadcrumbs",
      },
    },
  },
  code: {
    title: "Code",
    content: {
      "code-preview": {
        title: "Code Preview",
      },
      "code-display": {
        title: "Code Display",
      },
    }
  }
};

export default Topics;
