import React from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

const Video = (props) => {
  const {vidname} = useParams();
  console.log(vidname);
  console.log("Video Player called");
  return (
    <div className="container">
      <div className="video">
        <ReactPlayer
          url={`/${vidname}`}
          controls={true}
          width={"100%"}
          height={"100%"}
        />
      </div>
    </div>
  );
};

export default Video;
