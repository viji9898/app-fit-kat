// import { Button } from "antd";
import { useState } from "react";

export const VideoCard = ({ exercises }) => {
  const [activeVideo, setActiveVideo] = useState(0);
  console.log(setActiveVideo);

  //   const listVideos = exercises.videoUrl.map((data, index) => {
  //     return (
  //       <div style={{ padding: "75% 0 0 0", position: "relative" }}>
  //         <iframe
  //           src={data.url}
  //           frameborder="0"
  //           allow={"autoplay; fullscreen; picture-in-picture"}
  //           style={{
  //             position: "absolute",
  //             top: "0",
  //             left: "0",
  //             width: "100%",
  //             height: "100%",
  //           }}
  //           title="Archer Pushup"
  //         ></iframe>
  //       </div>
  //     );
  //   });

  // const listVideoButtons = exercises.videoUrl.map((data, index) => {
  //   return (
  //     <Button
  //       onClick={() => {
  //         setActiveVideo(index);
  //       }}
  //     >
  //       {data.buttonTitle}
  //     </Button>
  //   );
  // });

  return (
    <span>
      <div style={{ padding: "50% 0 0 0", position: "relative" }}>
        <iframe
          loading="lazy"
          src={exercises.videoUrl[activeVideo].url}
          frameborder="0"
          allow={"autoplay; fullscreen; picture-in-picture"}
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
          title="sample"
        ></iframe>
        <br></br>
      </div>
      {/* <div style={{ textAlign: "center", marginBottom: "5px" }}>
        {listVideoButtons}
      </div> */}
    </span>
  );
};
