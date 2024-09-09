export interface TopicsProps {
  [key: string]: {
    title: string;
    content: {
      [key: string]: {
        title: string;
        content?: {
          [key: string]: {
            title: string;
          }
        }
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
            title: "Input"
          },
          password: {
            title: "Password"
          },
          select: {
            title: "Select"
          },
          autocomplete: {
            title: "Autocomplete"
          },
          numberInput: {
            title: "Number Input"
          }
        }
      },
      formControl: {
        title: "Form Control",
        content: {
          checkbox: {
            title: "Checkbox"
          },
          radio: {
            title: "Radio"
          },
          switch: {
            title: "Switch"
          },
          formControlLabel: {
            title: "Form Control Label"
          }
        }
      },
      buttonBase: {
        title: "Button Base",
        content: {
          button: {
            title: "Button"
          },
          iconButton: {
            title: "Icon Button"
          },
          toggleButton: {
            title: "Toggle Button"
          }
        }
      },
    }
  },
  display: {
    title: "Display",
    content: {
      avatar: {
        title: "Avatar"
      },
      badge: {
        title: "Tag"
      },
      banner: {
        title: "Banner"
      },
      capsule: {
        title: "Capsule"
      },
      card: {
        title: "Card"
      },
      list: {
        title: "List"
      },
      link: {
        title: "Link"
      },
      text: {
        title: "Text"
      }
    }
  },
  navigation: {
    title: "Navigation",
    content: {
      navigationBar:{
        title: "Navigation Bar"
      },
      sidebar: {
        title: "Side Bar"
      },
      drawer: {
        title: "Drawer"
      },
      tabs: {
        title: "Tabs"
      },
      breadcrumbs: {
        title: "Breadcrumbs"
      },
    }
  }
};

export default Topics;