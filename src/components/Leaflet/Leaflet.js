import React from 'react'
import { Map as LeafletMap, TileLayer, Popup, Circle } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { getCenter } from 'geolib'

const Leaflet = ({coordinateCenter, dataCountries, dataColor, isCases}) => {
   
    const center = getCenter(coordinateCenter)

    if(center) {
        return (
            <LeafletMap className="h-500" center={[center.latitude, center.longitude]} zoom={2} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {dataCountries?.map(ctry => (
                    <Circle key={ctry.country} 
                        center={[ctry.countryInfo?.lat, ctry.countryInfo?.long]} 
                        radius={ctry[isCases] * 30} 
                        color={ctry[isCases] !== 0 && dataColor[isCases]}
                        fillColor={ctry[isCases] !== 0 && dataColor[isCases]}>
                        <Popup>
                            {ctry.country}
                        </Popup>
                    </Circle>
                ))}  
            </LeafletMap>
        )
    } else {
        return 'loading...'
    } 
}

export default Leaflet
