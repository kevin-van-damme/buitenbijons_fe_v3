"use client";
import { useActionState } from "react";
import { handleContactSubmit, ContactFormState } from "@/app/server-actions/handleContactSubmit";

const Contactform = () => {
  const initialState: ContactFormState = { success: false, message: "" };
  const [state, formAction] = useActionState(handleContactSubmit, initialState);

  return (
    <form action={formAction} className="space-y-4" noValidate>
      <div>
        <label className="block mb-1 font-semibold text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          className="w-full px-4 py-2 border rounded-xl border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          className="w-full px-4 py-2 border rounded-xl border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold text-gray-700">Message</label>
        <textarea
          name="message"
          rows={5}
          className="w-full px-4 py-2 border rounded-xl border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      {state.message && <div className={`${state.success ? "text-green-600" : "text-red-600"} text-sm`}>{state.message}</div>}
      <button
        type="submit"
        className="hover:cursor-pointer w-full bg-slate-600 text-white font-semibold py-2 rounded-xl hover:bg-slate-400 transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default Contactform;
