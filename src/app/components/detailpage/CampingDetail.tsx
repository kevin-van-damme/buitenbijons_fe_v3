"use client";
import Image from "next/image";
import { Camping } from "@/typesCampings";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function CampingDetail({ camping }: { camping: Camping }) {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10">
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-6 shadow-md">
        <Image
          src={camping.field_camping_image?.url || "/placeholder.jpg"}
          alt={camping.field_camping_image?.alt || camping.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{camping.title}</h1>
        <p className="text-lg text-gray-600 flex items-center">
          📍 {camping.field_camping_city?.target_id}, {camping.field_camping_country?.target_id}
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Description</h2>
        <p className="text-gray-700 leading-relaxed">{camping.field_camping_description?.value || "No description available."}</p>
      </div>
      <div className="mb-6 flex flex-wrap gap-4">
        <div className="p-4 bg-gray-100 rounded-lg shadow-sm flex-1">
          <h3 className="font-semibold text-gray-600 mb-1">Check-in/out</h3>
          <p className="text-gray-800">{camping.field_camping_checkinout || "N/A"}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-sm flex-1">
          <h3 className="font-semibold text-gray-600 mb-1">Price per night</h3>
          <p className="text-gray-800">{camping.field_camping_price ? `€${camping.field_camping_price}` : "N/A"}</p>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Camping Rules</h2>
        <p className="text-gray-700">{camping.field_camping_rules?.value || "No rules specified."}</p>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Location</h2>
        <div className="w-full h-[300px] bg-gray-200 rounded-lg flex items-center justify-center">
          <MapContainer
            className="w-full h-full rounded-2xl"
            zoom={13}
            maxZoom={18}
            center={[camping.field_camping_location.lat, camping.field_camping_location.lon]}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker key={camping.nid} position={[camping.field_camping_location.lat, camping.field_camping_location.lon]}>
              <Popup>{camping.title}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <div className="mt-10 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-800 mb-1">Owner</h3>
        <p className="text-blue-700">{camping.field_owner_id?.target_id || "Unknown"}</p>
      </div>
    </div>
  );
}
