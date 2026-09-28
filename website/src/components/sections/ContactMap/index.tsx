"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = new L.Icon({
  iconUrl: "/location.png",
  iconSize: [50, 50],
  iconAnchor: [17, 35],
});

export default function index() {
  const location: [number, number] = [34.053194, -118.265658];

  return (
    <section className="section-padding">
      <div className="w-full h-120 xl:h-160">
        <MapContainer
          center={location}
          zoom={16}
          scrollWheelZoom={false}
          className="w-full h-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={location} icon={customIcon}>
            <Popup>
              <strong>1234 Wilshire Blvd</strong>
              <br />
              Suite 101
              <br />
              Los Angeles, CA 90017
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
}
