let lats = 37.54129,
  lons = -77.434769;
navigator.geolocation.getCurrentPosition(position => {
  const { latitude, longitude } = position.coords;

  lats = latitude;
  lons = longitude;
});