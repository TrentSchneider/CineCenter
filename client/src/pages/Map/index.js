// import API_PW from "./MAP_PW.js";
import React from "react";
import {
  compose,
  withProps,
  withHandlers,
  withState,
  withStateHandlers
} from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import Window from "../../components/Window";

let lats = 37.54129,
  lons = -77.434769;
navigator.geolocation.getCurrentPosition(position => {
  const { latitude, longitude } = position.coords;

  lats = latitude;
  lons = longitude;
});

/*global google*/
const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=" +
      process.env.REACT_APP_API,
    // API_PW,

    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `80%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withStateHandlers(
    () => ({
      isOpen: null,
      lati: 37.54129,
      long: -77.434769
    }),
    {
      onToggleOpen: ({ isOpen }) => index => ({
        isOpen: index
      }),
      getLat: ({ lati }) => latitude => ({
        lati: latitude
      }),
      getLon: ({ long }) => longitude => ({
        long: longitude
      })
    }
  ),
  withScriptjs,
  withGoogleMap,
  withState("places", "updatePlaces", ""),
  withHandlers(() => {
    const refs = {
      map: undefined
    };

    return {
      onMapMounted: () => ref => {
        refs.map = ref;
      },

      fetchPlaces: ({ updatePlaces }) => {
        let places;
        const bounds = refs.map.getBounds();
        const service = new google.maps.places.PlacesService(
          refs.map.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
        );
        const request = {
          bounds: bounds,
          type: ["movie_theater"]
        };
        service.nearbySearch(request, (results, status) => {
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            console.log(results);
            updatePlaces(results);
          }
        });
      }
    };
  })
)(props => {
  let la, lo;
  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    props.getLat(latitude);
    props.getLon(longitude);
  });
  return (
    <div>
      <GoogleMap
        onTilesLoaded={props.fetchPlaces}
        ref={props.onMapMounted}
        // onBoundsChanged={props.fetchPlaces}
        defaultZoom={10}
        center={{ lat: props.lati, lng: props.long }}
        options={{ draggable: true }}
      >
        {props.places &&
          props.places.map((place, i) => (
            <Marker
              key={i}
              position={{
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
              }}
              onClick={() => props.onToggleOpen(i)}
            >
              {props.isOpen === i && (
                <InfoWindow onCloseClick={() => props.onToggleOpen(null)}>
                  <Window place={place} />
                </InfoWindow>
              )}
            </Marker>
          ))}
      </GoogleMap>
    </div>
  );
});

export default class MyFancyComponent extends React.PureComponent {
  render() {
    return <MyMapComponent />;
  }
}
