import React from "react";
import GoogleMapReact from "google-map-react";

export const GoogleMaps = () => {
  const style = {
    position: "relative",
    left: 0,
    top: 0,
    overflow: "hidden",
    width: "90%",
    height: "50vh",
  };
  const defaultProps = {
    center: {
      lat: 52.0,
      lng: 20.0,
    },
    zoom: 9,
  };
  return (
    <div style={{ height: "40vh", width: "100wh" }}>
      <GoogleMapReact
        style={style}
        bootstrapURLKeys={{
          key: "AIzaSyClMjUz9NMSmpRwI0IYzDBxtM4Qx2pf4Q8",
          libraries: ["visualization"],
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
};

export default GoogleMaps;
