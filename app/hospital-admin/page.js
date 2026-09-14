"use client";

import { useState } from "react";
import Link from "next/link";

export default function HospitalAdminLogin() {
const [showPassword, setShowPassword] = useState(false);

return ( <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-10"> <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">

    <div
      className="relative min-h-[600px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('/image/hospital-admin/medical-background.png')"
      }}
    >

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 p-10 md:p-14 text-white">

        <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-8">
          <span className="text-2xl font-bold">MC</span>
        </div>

        <p className="text-blue-100 text-sm font-semibold uppercase tracking-wider mb-3">
          Jamot Hospital
        </p>

        <h1 className="text-4xl font-bold leading-tight mb-5">
          Hospital Administration
        </h1>

        <p className="text-white/90 leading-relaxed max-w-md">
          Secure access for authorized hospital administrators to manage
          patients, doctors, account requests, and hospital activities.
        </p>

        <div className="border-t border-white/30 pt-6 mt-8">
          <p className="text-sm font-semibold">
            MindCare AI
          </p>

          <p className="text-sm text-white/70 mt-1">
            Mental health support platform
          </p>
        </div>

      </div>
    </div>

    <div className="p-8 md:p-14 flex items-center">

      <div className="max-w-md mx-auto w-full">

        <div className="mb-8">

          <p className="text-blue-600 font-semibold text-sm mb-2">
            ADMINISTRATOR ACCESS
          </p>

          <h2 className="text-3xl font-bold text-slate-900">
            Welcome back
          </h2>

          <p className="text-slate-500 mt-3 leading-relaxed">
            Sign in to access the Jamot Hospital administration dashboard.
          </p>

        </div>

        <form className="space-y-6">

          <div>

            <label
              htmlFor="email"
              className="block text-sm font-semibold text-slate-700 mb-2"
            >
              Email address
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-xl border border-slate-300 px-4 py-3.5 text-slate-900 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              required
            />

          </div>

          <div>

            <div className="flex items-center justify-between mb-2">

              <label
                htmlFor="password"
                className="block text-sm font-semibold text-slate-700"
              >
                Password
              </label>

              <button
                type="button"
                className="text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                Forgot password?
              </button>

            </div>

            <div className="relative">

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-slate-300 px-4 py-3.5 pr-20 text-slate-900 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-blue-600 hover:text-blue-800"
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>

          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-700 px-4 py-3.5 font-semibold text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            Sign in to Dashboard
          </button>

        </form>

        <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200 p-4">

          <div className="flex gap-3">

            <div className="text-blue-600 font-bold">
              ✓
            </div>

            <div>

              <p className="text-sm font-semibold text-slate-800">
                Authorized access only
              </p>

              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                This area is restricted to authorized Jamot Hospital
                administrators.
              </p>

            </div>

          </div>

        </div>

        <div className="text-center mt-8">

          <Link
            href="/"
            className="text-sm font-medium text-slate-500 hover:text-blue-600"
          >
            ← Back to MindCare AI
          </Link>

        </div>

      </div>

    </div>

  </div>
</main>

);
}
