import * as React from "react";
import { Loader } from "stelios";
import { useWindowSize } from "../../helpers/helpers";

const getRandomInt = () => {
  return Math.random() * 0.5;
};

const Loading: React.FunctionComponent = () => {
  const windowSize = useWindowSize();
  const mobile = windowSize.width < 480;
  const laptop = windowSize.width < 768;
  return (
    <div style={{ margin: "1.5rem 0 4rem 1rem", width: mobile ? "100%" : laptop ? "calc(100% - 12rem)" : "calc(100% - 22rem)" }}>
      <div
        style={{ display: "flex", flexDirection: "row", paddingTop: "0.5rem" }}
      >
        <Loader width="3rem" height="1.25rem" color="component" />
        <span style={{ margin: "0 0.5rem" }}>/</span>
        <Loader width="10rem" height="1.25rem" color="component" />
      </div>
      <Loader
        width="12rem"
        height="3rem"
        style={{ marginTop: "2rem" }}
        startTime={getRandomInt()}
        color="component"
      />
      <Loader
        style={{ marginTop: "1rem" }}
        width="100%"
        height="1rem"
        startTime={getRandomInt()}
        color="component"
      />
      <Loader
        style={{ marginTop: "1rem" }}
        width="100%"
        height="8rem"
        startTime={getRandomInt()}
        color="component"
      />

      <Loader
        width="100%"
        height="3rem"
        style={{ marginTop: "2rem" }}
        startTime={getRandomInt()}
        color="component"
      />
      <Loader
        width="100%"
        height="0.5rem"
        style={{ marginTop: "0.5rem" }}
        startTime={getRandomInt()}
        color="component"
      />
      <Loader
        width="12rem"
        height="2rem"
        style={{ marginTop: "2rem" }}
        startTime={getRandomInt()}
        color="component"
      />
      <Loader
        width="100%"
        height="3rem"
        style={{ marginTop: "1rem" }}
        startTime={getRandomInt()}
        color="component"
      />
      <Loader
        width="12rem"
        height="2rem"
        style={{ marginTop: "2rem" }}
        startTime={getRandomInt()}
        color="component"
      />
      <Loader
        width="100%"
        height="3rem"
        style={{ marginTop: "1rem" }}
        startTime={getRandomInt()}
        color="component"
      />
      <Loader
        width="12rem"
        height="2rem"
        style={{ marginTop: "2rem" }}
        startTime={getRandomInt()}
        color="component"
      />
      <Loader
        width="100%"
        height="3rem"
        style={{ marginTop: "1rem" }}
        startTime={getRandomInt()}
        color="component"
      />
      <Loader
        width="12rem"
        height="2rem"
        style={{ marginTop: "2rem" }}
        startTime={getRandomInt()}
        color="component"
      />
      <Loader
        width="100%"
        height="3rem"
        style={{ marginTop: "1rem" }}
        startTime={getRandomInt()}
        color="component"
      />
    </div>
  );
};

export default Loading;
