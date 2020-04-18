import React from "react";
import {VideoItem} from "./VideoItem";

const VideoList = (props) => {
  const renderedList = props.videos.map((video, index) => {
    return <VideoItem key={index} video={video}/>;
  });
  return(
    <div>{renderedList}</div>
  );
}

export {VideoList};