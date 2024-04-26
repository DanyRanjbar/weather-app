"use client";
import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useGlobalContext } from "@/app/context/globalContext";

//mapbox components
function FlyToActiveCity({ activeCityCoords }: any) {
  const map = useMap();

  useEffect(() => {
    if (activeCityCoords) {
      const zoomLev = 13;
      const flyToOptions = {
        duration: 1.5,
      };

      map.flyTo(
        [activeCityCoords.lat, activeCityCoords.lon],
        zoomLev,
        flyToOptions
      );
    }
  }, [activeCityCoords, map]);
  return null;
}
function Mapbox() {
  const { forecast } = useGlobalContext();
  const activeCityCoords = forecast?.coord;

  if (!forecast || !forecast.coord || !activeCityCoords) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }
  const position: [any, any] = [activeCityCoords.lat, activeCityCoords.lon];
  return (
    <div className=" flex-1 basis-[50%] border rounded-lg">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className=" rounded-lg m-4"
        style={{ height: "calc(100% - 2rem)", width: "calc(100% - 2rem)" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <FlyToActiveCity activeCityCoords={activeCityCoords} />
      </MapContainer>
    </div>
  );
}

export default Mapbox;
