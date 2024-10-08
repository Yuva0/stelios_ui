import React from "react";
import {
    Avatar,
    Card,
    IconButton,
    Slider,
    Text,
} from "stelios";
import {
  IconArrowLeft,
  IconMenu,
  IconPlayerPauseFilled,
  IconPlayerTrackNextFilled,
  IconPlayerTrackPrevFilled,
} from "@tabler/icons-react";

const MUSIC_NAME = "BYE BYE BYE";
const MUSIC_AUTHOR = "NSYNC";
const MUSIC_IMG_URL =
  "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg";
const PRIMARY = "#ef476f";
const SECONDARY = "#343a40";

const MusicPlayerComp = () => {

  return (
    <Card
      width="350px"
      variant="neumorph"
      color="primary"
      header={<MusicPlayerHeader />}
      footer={<MusicPlayerFooter />}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <Avatar
          type="image"
          size="xlarge"
          src={MUSIC_IMG_URL}
          alt="profile picture"
        />
        <Text size="large" color="secondary" style={{ marginTop: "2rem" }}>
          {MUSIC_NAME}
        </Text>
        <Text color="secondary" style={{ marginTop: "0.5rem" }}>
          {MUSIC_AUTHOR}
        </Text>
        <Slider
          width="80%"
          size="small"
          min={0}
          minDisplay="00:00"
          max={100}
          maxDisplay="04:10"
          step={1}
          defaultValue={34}
          color="primary"
          variant="contained"
        />
      </div>
    </Card>
  );
};
const MusicPlayerHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "2.5rem",
      }}
    >
      <IconButton
        alt="back"
        color="secondary"
        icon={<IconArrowLeft />}
        variant="neumorph"
      />
      <Text color="secondary">PLAYING NOW</Text>
      <IconButton alt="Menu" color="secondary" icon={<IconMenu />} variant="neumorph" />
    </div>
  );
};
const MusicPlayerFooter = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "2.5rem",
      }}
    >
      <IconButton
        alt="prev"
        color="secondary"
        icon={<IconPlayerTrackPrevFilled />}
        variant="neumorph"
      />
      <IconButton
        alt="pause"
        color="primary"
        size="large"
        icon={<IconPlayerPauseFilled />}
        variant="neumorph"
      />
      <IconButton
        alt="next"
        color="secondary"
        icon={<IconPlayerTrackNextFilled />}
        variant="neumorph"
      />
    </div>
  );
};

export default MusicPlayerComp;
