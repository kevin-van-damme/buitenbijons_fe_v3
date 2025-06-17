import { ReactNode } from "react";
import "leaflet/dist/leaflet.css";
import "@/app/globals.css";
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
