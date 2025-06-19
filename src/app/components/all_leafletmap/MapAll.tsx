"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Campings } from "@/typesCampings";
import "@/app/components/leafletmap/fixLeafletIcons";
import Image from "next/image";
const MapAll = ({ campings }: { campings: Campings }) => {
  return (
    <MapContainer className="w-screen h-100 lg:h-150 md:h-150" zoom={7} maxZoom={18} center={[50.68072319026102, 5.299799969579857]}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {campings.data
        .filter((camping) => camping.field_camping_location.lat !== undefined && camping.field_camping_location.lon !== undefined)
        .map((camping) => (
          <Marker key={camping.nid} position={[camping.field_camping_location.lat, camping.field_camping_location.lon]}>
            <Popup>
              <Image
                src={camping.field_camping_image.url}
                width={300}
                height={200}
                sizes="100%"
                alt={camping.field_camping_image.alt}
                className="w-full h-full"
              />
              <p>{camping.title}</p>
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
};
export default MapAll;
