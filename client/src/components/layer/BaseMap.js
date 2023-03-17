// rafce
import React from 'react'
import { LayersControl, TileLayer } from 'react-leaflet'

const BaseMap = () => {
    // javascript

  return (
    <LayersControl position='topright'>

        {/* 1 แผนที่  checked คือset เป็น default */} 
        <LayersControl.BaseLayer name='ภูเขาแจ่มๆ' checked> 
            <TileLayer url='https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png' />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name='ภาพถ่ายดาวเทียม' > 
            <TileLayer url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}' />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name='openstreetmap'>
             {/* TileLayer คือแสดงแผนที่  */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        </LayersControl.BaseLayer>
      
    </LayersControl>
  )
}

export default BaseMap
