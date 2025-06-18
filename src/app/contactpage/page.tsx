import { useFormState } from "react-dom";
import { handleContactSubmit, ContactFormState } from "@/app/server-actions/handleContactSubmit";

export default function ContactPage() {
  const initialState: ContactFormState = { success: false, message: "" };
  const [state, formAction] = useFormState(handleContactSubmit, initialState);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 to-green-300">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-800">Contact Us</h1>

        <form action={formAction} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Message</label>
            <textarea
              name="message"
              rows={5}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          {state.message && <div className={`${state.success ? "text-green-600" : "text-red-600"} text-sm`}>{state.message}</div>}

          <button type="submit" className="w-full bg-green-500 text-white font-semibold py-2 rounded-xl hover:bg-green-600 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
