// import API from "./MAP_PW.js";
import React, { Component, createRef } from "react";
import ReactDOM from "react-dom";
import GoogleMapReact from "google-map-react";
import MapMarker from "../../components/MapMarker";
import PlaceCard from "../../components/PlaceCard";

/*global map google*/
class GoogleMap extends Component {
  get googleMapDiv() {
    return document.getElementById("google-map");
  }

  googleMapRef = createRef();

  componentDidMount() {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API}&libraries=places`;

    window.document.body.appendChild(googleMapScript);

    // googleMapScript.addEventListener("load", () => {
    //   this.googleMap = this.createGoogleMap();
    //   this.marker = this.createMarker();
    // });
  }

  createGoogleMap = () => {
    const center = { lat: 43.642567, lng: -79.387054 };
    new window.google.maps.Map(this.googleMapRef.current, {
      zoom: 16,
      center: center,
      disableDefaultUI: true
    });
    const request = {
      location: center,
      radius: "8047",
      types: ["car_repair"]
    };
    // // uses the query to search near the map location and adds markers to the results
    // var service = new google.maps.places.PlacesService(map);
    // service.nearbySearch(request, callback);
    // // the function to add markers to all result locations
    // function callback(results, status) {
    //   if (status == google.maps.places.PlacesServiceStatus.OK) {
    //     console.log(results);
    //     for (var i = 0; i < results.length; i++) {
    //       createMarker(results[i]);
    //     }
    //   }
    //   // the function to create the markers and attach them to the infowindows
    //   function createMarker(place) {
    //     const infowindow = new google.maps.InfoWindow();

    //     var placeLoc = place.geometry.location;
    //     var marker = new google.maps.Marker({
    //       map: map,
    //       position: place.geometry.location
    //     });
    //     google.maps.event.addListener(marker, "click", function () {
    //       var urlName = place.name,
    //         formName = urlName.replace(/\s/g, "+");
    //       // inserts the location's name, address, rating, and link to driving directions to the location from the users's location
    //       var windowContent = `<div id="content"> 
    //         <div id="siteNotice"> 
    //         </div>
    //         <h5 id="firstHeading" class="firstHeading">${place.name}</h5>
    //         <div id="bodyContent">
    //         <p>Address: ${place.vicinity}</p>
    //         <p>Average Rating: ${place.rating} out of 
    //         ${place.user_ratings_total} reviews</p>" +
    //         <a href="https://www.google.com/maps/dir/?api=1&destination=${formName}&destination_place_id=${place.place_id}>Get Directions</a>
    //         </div>
    //          </div>`;
    //       infowindow.setContent(windowContent);
    //       infowindow.open(map, this);
    //     });
    //   }
    // }
  };

  render() {
    return (
      <div
        id="google-map"
        ref={this.googleMapRef}
        style={{ width: "400px", height: "300px" }}
      />
    );
  }
}
export default GoogleMap;
