// rafce --> react allow func
import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import BaseMap from "./layer/BaseMap";
import CSVFileLocal from "./layer/CSVFileLocal";

const MapContent = () => {
  // javascript

  return (
    <div>
      {/* HTML */}
      <MapContainer 
        style={{width:'100%',height:'100vh'}}
        center={[13, 100]} // latitude longtitude thai
        zoom={6} 
        >
       
       {/* เรียกใช้ Component */}
        <BaseMap/>
        <CSVFileLocal/>

      </MapContainer>
    </div>
  );
};

export default MapContent;
