import React from "react";

function Home(props) {
  console.log("getuser", props.getUser);
  console.log("data", props.data);
  return <div className="card"></div>;
}

export default Home;
