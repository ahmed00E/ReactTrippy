import React from 'react'

import { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
// import HotelMarker from './HotelMarker'
import styled from 'styled-components'

const MapContainer = styled.div`
  height: 80vh;
  width: 80%;
`
const Container = styled.div`
    display : flex;
    justify-content : center;
`


export default function HotelPagesMap(props) {
    const [centerLocation, setCenterLocation] = useState(null)
    const {hotelElement} = props
    useEffect(() => {
        setCenterLocation({
            lat: hotelElement.lat,
            lng: hotelElement.lon
        })
    },[hotelElement])
    if(!hotelElement){
        return <h1>error, there is no pictures</h1>
    }
    // console.log("map",hotelElement);

    return (
        <Container>
            <MapContainer>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={centerLocation}
                    defaultZoom={16}
                >
                    <i 
                        class="fas fa-map-marker-alt"
                        style= {{fontSize : "30px", color : "red"}}
                    >
                    </i>
                </GoogleMapReact>
            </MapContainer>
        </Container>
    )
}
