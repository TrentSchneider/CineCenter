import React from "react";

function Window(props) {
  const urlName = props.place.name,
    formName = urlName.replace(/\s/g, "+");
  const url =
    "https://www.google.com/maps/dir/?api=1&destination=" +
    formName +
    "&destination_place_id=" +
    props.place.place_id;
  return (
    <div id="content" className="bf">
      <div id="siteNotice"></div>
      <h5 id="firstHeading" className="firstHeading">
        {props.place.name}
      </h5>
      <div id="bodyContent">
        <p>Address: {props.place.vicinity}</p>
        <p>
          Average Rating: {props.place.rating} out of{" "}
          {props.place.user_ratings_total} reviews
        </p>
        <a href={url} target="#">
          Get Directions
        </a>
      </div>
    </div>
  );
}

export default Window;
