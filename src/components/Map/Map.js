import React from "react";
import  GoogleMap from "google-map-react";

class DataMap extends React.Component {
  static defaultProps = {
    center: {lat: 41.7, lng: -70.5},
    zoom: 9
  };

  render() {
    return (
      <div className="map" style={{width:"100%", height:"20em"}}>
      <GoogleMap
        bootstrapURLKeys ={{key: "AIzaSyD9dj2ywbl2jTN_qw8JAtxgrB_y47OBfiE"}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        >
      </GoogleMap>
      </div>
    );
  }
};

export default DataMap;