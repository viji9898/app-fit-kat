import { Button, Carousel } from "antd";
import { useState } from "react";

export const ExerciseCard = ({ exercises }) => {
  const [imageFormat, setImageFormat] = useState(true);

  const listThumbnailGifs = exercises.thumbnailGif.map((data) => {
    return (
      <div>
        <img
          alt={data?.title}
          style={{ width: "100%", height: "100%" }}
          src={data.url}
        />
      </div>
    );
  });
  const listImages = exercises.images.map((data) => {
    return (
      <div>
        <img alt={data?.title} style={{ width: "100%" }} src={data.url} />
      </div>
    );
  });

  const listRoutine = (
    <div style={{ textAlign: "center", padding: "10px" }}>
      <Button shape="round" style={{ margin: "2px" }}>
        <p>{exercises.sets} Sets </p>
      </Button>
      <Button shape="round" style={{ margin: "2px" }}>
        <p>{exercises.reps} Reps </p>
      </Button>
      {exercises.rest && (
        <Button shape="round" style={{ margin: "2px" }}>
          <p>Rest {exercises.rest}</p>
        </Button>
      )}
      {imageFormat && (
        <Button
          size="small"
          shape="round"
          style={{
            backgroundColor: "black",
            color: "white",
            width: "70px",
          }}
          onClick={() => {
            setImageFormat(false);
          }}
        >
          {"GIF"}
        </Button>
      )}
      {!imageFormat && (
        <Button
          style={{
            backgroundColor: "black",
            color: "white",
            width: "70px",
          }}
          size="small"
          shape="round"
          onClick={() => {
            setImageFormat(true);
          }}
        >
          <p>Images</p>
        </Button>
      )}
    </div>
  );

  // console.log(Boolean(exercises));

  return (
    <div>
      {!imageFormat && <Carousel>{listThumbnailGifs}</Carousel>}
      {imageFormat && <Carousel>{listImages}</Carousel>}
      {listRoutine}
    </div>
  );
};
