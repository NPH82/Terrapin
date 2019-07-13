import React from "react";
import  GoogleMap from "google-map-react";
import Nest from "./Nest";

class DataMap extends React.Component {

  static defaultProps = {
    center: {lat: 41.8, lng: -70.4},
    zoom: 9,
    marker: {lat:41.88, lng: -70.0675}
  };


  render() {
    return (
      <div className="map" style={{width:"100%", height:"25em"}}>
      <GoogleMap
        bootstrapURLKeys ={{key: "AIzaSyD9dj2ywbl2jTN_qw8JAtxgrB_y47OBfiE"}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <Nest {...this.props.marker} text={"Test"}/>
        <Nest lat={41.8} lng={-70.4} text={"Test2"}/>
      </GoogleMap>
      </div>
    );
  }
};

export default DataMap;