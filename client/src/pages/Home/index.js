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
    <div className="d-flex justify-content-center backC minH-600">
      <div className="card col-8 minH-8">
        <h1 className="bf">Trailers</h1>
        <Carousel
          showArrows={true}
          // onChange={onChange}
          // onClickItem={onClickItem}
          // onClickThumb={onClickThumb}
        >
          {trailerURL.map((data, i) => (
            <div>
              <ReactPlayer url={data} key={i} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Home;

// class TrailerCarousel extends Component {
//   render() {
//     return (
//       <Carousel
//         showArrows={true}
//         // onChange={onChange}
//         // onClickItem={onClickItem}
//         // onClickThumb={onClickThumb}
//       >
//         <div>
//           <img src="assets/1.jpeg" />
//           <p className="legend">Legend 1</p>
//         </div>
//         <div>
//           <img src="assets/2.jpeg" />
//           <p className="legend">Legend 2</p>
//         </div>
//         <div>
//           <img src="assets/3.jpeg" />
//           <p className="legend">Legend 3</p>
//         </div>
//         <div>
//           <img src="assets/4.jpeg" />
//           <p className="legend">Legend 4</p>
//         </div>
//         <div>
//           <img src="assets/5.jpeg" />
//           <p className="legend">Legend 5</p>
//         </div>
//         <div>
//           <img src="assets/6.jpeg" />
//           <p className="legend">Legend 6</p>
//         </div>
//       </Carousel>
//     );
//   }
// }
