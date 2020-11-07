import React, { useEffect, useState } from "react";
import "./style.css";
import ReactPlayer from "react-player";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Carousel = require("react-responsive-carousel").Carousel;

function Home(props) {
  const [trailers, setTrailers] = useState([]);
  const [trailerURL, setTrailerURL] = useState([]);
  console.log("home user", props.user);
  useEffect(() => {
    props.API.getTrailers().then(res => {
      console.log("movie playlist res", res);
      setTrailers(res.data.items);
    });
  }, []);
  useEffect(() => {
    let data = [];
    trailers.forEach(vid => {
      data.push(
        "https://www.youtube.com/watch?v=" +
          vid.snippet.resourceId.videoId +
          "&ab_channel=MovieclipsTrailers"
      );
    });
    setTrailerURL(data);
  }, [trailers]);
  console.log("trailers", trailers);
  console.log("trailer ids", trailerURL);
  return (
    <div className="d-flex justify-content-center backC minH-600 pb-5">
      <div className="card col-sm-12 col-md-8">
        <h1 className="bf text-center m-4">
          <u>Trailers</u>
        </h1>
        <div className="col-sm-12 col-md-8 carCent">
          <Carousel
            showArrows={true}
            // onChange={onChange}
            // onClickItem={onClickItem}
            // onClickThumb={onClickThumb}
          >
            {trailerURL.map((data, i) => (
              <div className="d-flex justify-content-center" key={i}>
                <ReactPlayer url={data} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Home;
