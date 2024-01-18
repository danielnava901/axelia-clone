"use client"
import {useEffect, useRef, useState} from "react";
import {MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents} from "react-leaflet";


const Page = () => {
    const center = [51.505, -0.09];
    const zoom = 4;
    const map = useMap();

    const whenMapCreated = (map: any) => {

        //setMap(map);
    }

    useEffect(() => {
        setTimeout(() => {

            if(map) {

                map.invalidateSize();
            }
        }, 1000);

    },  [map]);

    return (
        <div className="w-[calc(100vw-100px)] h-[calc(100vh-100px)]">
            <MapContainer
                center={center}
                zoom={zoom}
                whenReady={() => {
                    console.log("....newmap");
                }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">
                    OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={center}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
};


export default Page;