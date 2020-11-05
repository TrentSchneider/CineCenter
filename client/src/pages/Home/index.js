import React from "react";
import "./style.css";

function Home(props) {
  console.log("home user", props.user);
  return (
    <div className="d-flex justify-content-center backC minH-600">
      <div className="card col-8 minH-8">
        <h1 className="bf">Placeholder</h1>
      </div>
    </div>
  );
}

export default Home;
