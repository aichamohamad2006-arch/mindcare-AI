"use client";

import { useState } from "react";
import Link from "next/link";

export default function HospitalAdminLogin() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main
      className="h-screen overflow-hidden bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('/image/hospital-admin/medical-background.png')",
      }}
    >
      <div className="absolute inset-0 bg-slate-950/40"></div>

      <div className="relative z-10 w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* BLUE PANEL */}

        <div className="bg-blue-700 text-white p-8 md:p-10 flex flex-col justify-start">
          <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-5">
            <span className="text-xl font-bold">MC</span>
          </div>

          <p className="text-blue-100 text-xs font-semibold uppercase tracking-widest mb-2">
            Jamot Hospital
          </p>

          <h1 className="text-3xl font-bold leading-tight mb-4">
            Hospital Administration
          </h1>

          <p className="text-blue-50 text-sm leading-relaxed">
            Secure access for authorized hospital administrators to manage
            patients, doctors, account requests, and hospital activities.
          </p>

          <div className="mt-6 border-t border-white/20 pt-4">
            <p className="font-semibold text-sm">MindCare AI</p>

            <p className="text-xs text-blue-100 mt-1">
              Mental health support platform
            </p>
          </div>

        </div>

        {/* WHITE LOGIN PANEL */}

        <div className="bg-white p-8 md:p-10 flex items-center">

          <div className="w-full max-w-sm mx-auto">

            <div className="mb-6">

              <p className="text-blue-600 font-semibold text-xs mb-2">
                ADMINISTRATOR ACCESS
              </p>

              <h2 className="text-2xl font-bold text-slate-900">
                Welcome back
              </h2>

              <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                Sign in to access the Jamot Hospital administration dashboard.
              </p>

            </div>

            <form className="space-y-4">

              <div>

                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                  required
                />

              </div>

              <div>

                <div className="flex items-center justify-between mb-1.5">

                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs font-medium text-blue-600 hover:text-blue-800"
                  >
                    Forgot password?
                  </button>

                </div>

                <div className="relative">

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-16 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-blue-600 hover:text-blue-800"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>

                </div>

              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-700 px-4 py-3 font-semibold text-sm text-white hover:bg-blue-800 transition focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                Sign in to Dashboard
              </button>

            </form>

            <div className="mt-5 rounded-xl bg-blue-50 border border-blue-100 p-3">

              <div className="flex gap-3">

                <div className="text-blue-600 font-bold text-sm">
                  ✓
                </div>

                <div>

                  <p className="text-xs font-semibold text-slate-800">
                    Authorized access only
                  </p>

                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                    This area is restricted to authorized Jamot Hospital
                    administrators.
                  </p>

                </div>

              </div>

            </div>

            <div className="text-center mt-5">

              <Link
                href="/"
                className="text-xs font-medium text-slate-500 hover:text-blue-600"
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