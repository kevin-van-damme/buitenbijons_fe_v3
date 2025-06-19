import Contactform from "@/app/components/contactform/Contactform";

export default function ContactPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <Contactform />
      </div>
    </div>
  );
}
