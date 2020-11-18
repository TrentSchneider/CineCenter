import React from "react";
import Map from "../Map";

function MapWrapper(props) {
  return (
    <div className="d-flex justify-content-center minH-600 pb-5">
      <div className="card col-sm-12 col-md-10 minH-8-5 bf">
        <h1 className="text-center mt-2 mb-2">Theaters Near You</h1>
        <Map />
      </div>
    </div>
  );
}

export default MapWrapper;
