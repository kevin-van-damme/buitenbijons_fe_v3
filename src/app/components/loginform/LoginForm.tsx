"use client";

import { useActionState } from "react";
import Link from "next/link";
import { handleLoginFormSubmit } from "@/app/server-actions/handleLoginFormSubmit"; // adjust your import path

export default function LoginForm() {
  const [state, formAction] = useActionState(handleLoginFormSubmit, { success: false });

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg md:mt-50 md:mb-74">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Log In</h1>

      {/* Show success or error messages */}
      {state?.success && <div className="mb-4 p-3 text-green-700 bg-green-100 rounded-lg">Login successful!</div>}
      {state?.error && <div className="mb-4 p-3 text-red-700 bg-red-100 rounded-lg">{state.error}</div>}

      <form className="space-y-5" noValidate action={formAction}>
        <div>
          <label htmlFor="username" className="block mb-1 font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1 font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-slate-600 hover:bg-slate-300 hover:text-black hover:cursor-pointer text-white font-semibold rounded-lg shadow-md transition duration-300"
        >
          Log In
        </button>
      </form>

      <p className="text-center mt-5">
        Don&apos;t have an account?
        <Link href="/register" className="text-blue-500 hover:text-blue-900 underline">
          Click here to sign up.
        </Link>
      </p>
    </div>
  );
}
