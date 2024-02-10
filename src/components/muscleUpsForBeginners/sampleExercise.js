import { Carousel, Button } from "antd";

export const SampleExercise = ({ exercises }) => {
  //   const [imageFormat, setImageFormat] = useState(true);

  //   const listThumbnailGifs = exercises.thumbnailGif.map((data) => {
  //     return (
  //       <div>
  //         <img
  //           alt={data?.title}
  //           style={{ width: "100%", height: "100%" }}
  //           src={data.url}
  //         />
  //       </div>
  //     );
  //   });
  const listImages = exercises.images.map((data) => {
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

  const listRoutine = (
    <div style={{ textAlign: "center", padding: "10px" }}>
      <Button shape="round" style={{ margin: "2px" }}>
        <p>
          {exercises.sets} Sets X {exercises.reps} Reps{" "}
          {exercises.rest && `- Rest ${exercises.rest}`}
        </p>
      </Button>
    </div>
  );

  // console.log(Boolean(exercises));

  return (
    <div>
      {/* {!imageFormat && <Carousel>{listThumbnailGifs}</Carousel>} */}
      <Carousel>{listImages}</Carousel>
      {listRoutine}
    </div>
  );
};
