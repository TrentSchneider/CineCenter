import React from "react";

function Home(props) {
  console.log("data", props.data);
  return (
    <div className="d-flex justify-content-center">
      <div className="card col-8"></div>
    </div>
  );
}

export default Home;
