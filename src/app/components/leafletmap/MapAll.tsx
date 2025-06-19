"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { Campings } from "@/typesCampings";
import "@/app/components/leafletmap/fixLeafletIcons";
import Image from "next/image";
const MapAll = ({ campings }: { campings: Campings[] }) => {
  return (
    <MapContainer className="w-screen h-100" zoom={7} maxZoom={18} center={[50.68072319026102, 5.299799969579857]}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {campings.length > 0 ? (
        <MarkerClusterGroup>
          {campings
            .filter((camping) => camping.data[0].field_camping_location.lat !== undefined && camping.data[0].field_camping_location.lon !== undefined)
            .map((camping) => (
              <Marker key={camping.data[0].nid} position={[camping.data[0].field_camping_location.lat, camping.data[0].field_camping_location.lon]}>
                <Popup>
                  <Image src={camping.data[0].field_camping_image.url} width={200} height={200} alt={camping.data[0].field_camping_image.alt} />
                  <p>{camping.data[0].title}</p>
                </Popup>
              </Marker>
            ))}
        </MarkerClusterGroup>
      ) : (
        <p>There seems to be a problem loading the campings...</p>
      )}
    </MapContainer>
  );
};
export default MapAll;
