import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// function DropMenu(props) {
//   const coll = document.getElementsByClassName("collapsible");
//   let i;
//   for (i = 0; i < coll.length; i++) {
//     coll[i].addEventListener("click", function () {
//       this.classList.toggle("active");
//       var content = this.nextElementSibling;
//       if (content.style.display === "block") {
//         content.style.display = "none";
//       } else {
//         content.style.display = "block";
//       }
//     });
//   }
//   return (
//     <div className="card dmen col-12 p-0">
//       <button type="button" className="card-header collapsible">
//         Menu
//       </button>
//       <div className="card-body content">
//         <ul className="p-0">
//           <li>
//             <Link
//               to={{
//                 pathname: "/home",
//                 state: { isLoggedIn: true, user: true }
//               }}
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               to={{
//                 pathname: "/moviesearch",
//                 state: { isLoggedIn: true, user: true }
//               }}
//             >
//               Movie Search
//             </Link>
//           </li>
//           <li>
//             <Link
//               to={{ pathname: "/map", state: { isLoggedIn: true, user: true } }}
//             >
//               Find Nearby Theaters
//             </Link>
//           </li>
//           <li>
//             <Link
//               to={{
//                 pathname: "/login",
//                 state: { isLoggedIn: true, user: true }
//               }}
//             >
//               Sign In
//             </Link>
//           </li>
//           <li>
//             <Link
//               to={{
//                 pathname: "/signup",
//                 state: { isLoggedIn: true, user: true }
//               }}
//             >
//               Sign Up
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default DropMenu;

function DropMenu(props) {
  return (
    <nav>
      <h1 className="text-center">CineCenter</h1>
      <div className="menu">
        <input type="checkbox" id="menuToggle" />
        <label htmlFor="menuToggle">
          <span>
            <h5>Menu</h5>
          </span>
          <span>
            <h5>Menu</h5>
          </span>
        </label>

        <ul>
          <li className="card">
            <Link
              to={{
                pathname: "/home",
                state: { isLoggedIn: true, user: true }
              }}
            >
              Home
            </Link>
          </li>
          <li className="card">
            <Link
              to={{
                pathname: "/moviesearch",
                state: { isLoggedIn: true, user: true }
              }}
            >
              Movie Search
            </Link>
          </li>
          <li className="card">
            <Link
              to={{
                pathname: "/map",
                state: { isLoggedIn: true, user: true }
              }}
            >
              Find Nearby Theaters
            </Link>
          </li>
          <li className="card">
            <Link
              to={{
                pathname: "/login",
                state: { isLoggedIn: true, user: true }
              }}
            >
              Sign In
            </Link>
          </li>
          <li className="card">
            <Link
              to={{
                pathname: "/signup",
                state: { isLoggedIn: true, user: true }
              }}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default DropMenu;
