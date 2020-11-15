import React, { useEffect, useState } from "react";
import { usePosition } from "use-position";
import Map from "../Map";

function MapWrapper(props) {
  return (
    <div>
      <h1>Google Maps</h1>
      <Map />
    </div>
  );
}

export default MapWrapper;
