import React from "react";
import YouTube from "react-youtube";
import styles from "./styles.module.css";

const Thanks = () => {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      autohide: 1,
      modestbranding: 0,
      rel: 0,
      showinfo: 0,
      controls: 0,
      disablekb: 1,
      enablejsapi: 0,
      iv_load_policy: 3
    }
  };

  return (
    <YouTube
      videoId="Adutfxh6yTg"
      id="video"
      className={styles.video}
      //   containerClassName={styles.video}
      opts={opts}
    />
  );
};

export default Thanks;
