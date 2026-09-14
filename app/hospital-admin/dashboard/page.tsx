"use client";

import Link from "next/link";

export default function HospitalAdminDashboard() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex min-h-screen">
        {/* SIDEBAR */}
        <aside className="hidden w-64 shrink-0 bg-white shadow-sm lg:flex lg:flex-col">
          {/* LOGO */}
          <div className="border-b border-slate-100 px-6 py-6">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              <span className="text-blue-700">MindCare</span>
              <span className="text-slate-900"> AI</span>
            </Link>

            <div className="mt-1 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-600"></span>
              <p className="text-xs font-medium text-slate-500">
                Jamot Hospital
              </p>
            </div>
          </div>

          {/* NAVIGATION */}
          <nav className="flex-1 px-4 py-6">
            <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Overview
            </p>

            <div className="space-y-1">
              <Link
                href="/hospital-admin/dashboard"
                className="flex items-center gap-3 rounded-xl bg-blue-50 px-3 py-3 text-sm font-semibold text-blue-700"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-xs text-white">
                  D
                </span>
                Dashboard
              </Link>

              <Link
                href="#"
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-blue-700"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold">
                  P
                </span>
                Patients
              </Link>

              <Link
                href="#"
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-blue-700"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold">
                  Dr
                </span>
                Doctors
              </Link>

              <Link
                href="/hospital-admin/requests"
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-blue-700"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold">
                  R
                </span>

                <span className="flex-1">Account Requests</span>

                <span className="rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-bold text-white">
                  3
                </span>
              </Link>

              <Link
                href="#"
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-blue-700"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold">
                  A
                </span>
                Appointments
              </Link>

              <Link
                href="#"
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-blue-700"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold">
                  L
                </span>
                Activity Log
              </Link>
            </div>

            <p className="mb-3 mt-9 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Administration
            </p>

            <div className="space-y-1">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-blue-700"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold">
                  N
                </span>
                Notifications
              </Link>

              <Link
                href="#"
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-blue-700"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold">
                  S
                </span>
                Settings
              </Link>
            </div>
          </nav>

          {/* SIDEBAR PROFILE */}
          <div className="border-t border-slate-100 p-4">
            <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">
                HA
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-900">
                  Hospital Admin
                </p>

                <p className="truncate text-[11px] text-slate-500">
                  Administrator
                </p>
              </div>
            </div>

            <button className="mt-2 w-full rounded-lg px-3 py-2 text-left text-xs font-medium text-slate-500 transition hover:bg-slate-100 hover:text-red-600">
              Sign out
            </button>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <div className="min-w-0 flex-1">
          {/* TOP BAR */}
          <header className="border-b border-slate-200 bg-white">
            <div className="flex h-20 items-center justify-between px-5 sm:px-8">
              <div>
                <p className="text-xs font-medium text-slate-400">
                  Jamot Hospital
                </p>

                <h1 className="mt-1 text-xl font-bold text-slate-900">
                  Hospital Administration
                </h1>
              </div>

              <div className="flex items-center gap-3 sm:gap-5">
                {/* SEARCH */}
                <div className="hidden items-center rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 md:flex">
                  <span className="mr-2 text-xs text-slate-400">⌕</span>

                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-32 bg-transparent text-xs outline-none placeholder:text-slate-400"
                  />
                </div>

                {/* NOTIFICATION */}
                <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-sm text-slate-500 transition hover:bg-slate-50">
                  N

                  <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
                </button>

                {/* ADMIN */}
                <div className="flex items-center gap-3 border-l border-slate-200 pl-3 sm:pl-5">
                  <div className="hidden text-right sm:block">
                    <p className="text-xs font-semibold text-slate-900">
                      Hospital Administrator
                    </p>

                    <p className="mt-0.5 text-[10px] text-slate-400">
                      Jamot Hospital
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">
                    HA
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* PAGE */}
          <section className="p-5 sm:p-8">
            <div className="mx-auto max-w-7xl">
              {/* WELCOME CARD */}
              <div className="relative overflow-hidden rounded-2xl bg-blue-700 px-6 py-7 text-white shadow-lg sm:px-8">
                <div className="relative z-10 max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                    MindCare AI
                  </p>

                  <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                    Welcome back, Administrator
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100">
                    Monitor mental health services, manage hospital users,
                    review account requests, and keep the MindCare AI
                    platform running smoothly.
                  </p>
                </div>

                <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-white/10"></div>
                <div className="absolute -bottom-20 right-20 h-40 w-40 rounded-full bg-white/10"></div>
              </div>

              {/* STATISTICS */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {/* PATIENTS */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Total Patients
                      </p>

                      <p className="mt-3 text-3xl font-bold text-slate-900">
                        248
                      </p>

                      <p className="mt-2 text-xs font-medium text-green-600">
                        +12 this month
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700">
                      P
                    </div>
                  </div>
                </div>

                {/* DOCTORS */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Active Doctors
                      </p>

                      <p className="mt-3 text-3xl font-bold text-slate-900">
                        18
                      </p>

                      <p className="mt-2 text-xs font-medium text-blue-600">
                        14 currently available
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700">
                      Dr
                    </div>
                  </div>
                </div>

                {/* REQUESTS */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Pending Requests
                      </p>

                      <p className="mt-3 text-3xl font-bold text-slate-900">
                        3
                      </p>

                      <p className="mt-2 text-xs font-medium text-orange-600">
                        Requires your review
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-sm font-bold text-orange-600">
                      R
                    </div>
                  </div>
                </div>

                {/* APPOINTMENTS */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Todays Appointments
                      </p>

                      <p className="mt-3 text-3xl font-bold text-slate-900">
                        12
                      </p>

                      <p className="mt-2 text-xs font-medium text-blue-600">
                        4 still upcoming
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700">
                      A
                    </div>
                  </div>
                </div>
              </div>

              {/* MAIN GRID */}
              <div className="mt-6 grid gap-6 xl:grid-cols-3">
                {/* ACCOUNT REQUESTS */}
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm xl:col-span-2">
                  <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        Account Requests
                      </h3>

                      <p className="mt-1 text-xs text-slate-400">
                        Recent requests requiring administration review
                      </p>
                    </div>

                    <Link
                      href="/hospital-admin/requests"
                      className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700 transition hover:bg-blue-100"
                    >
                      View all
                    </Link>
                  </div>

                  <div className="divide-y divide-slate-100">
                    <div className="flex items-center gap-4 px-5 py-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                        AH
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-slate-900">
                          Amina Hassan
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          New patient account request
                        </p>
                      </div>

                      <div className="text-right">
                        <span className="rounded-full bg-orange-50 px-3 py-1 text-[10px] font-semibold text-orange-600">
                          Pending
                        </span>

                        <p className="mt-2 text-[10px] text-slate-400">
                          Today
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 px-5 py-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">
                        DM
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-slate-900">
                          David Mbarga
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          New patient account request
                        </p>
                      </div>

                      <div className="text-right">
                        <span className="rounded-full bg-orange-50 px-3 py-1 text-[10px] font-semibold text-orange-600">
                          Pending
                        </span>

                        <p className="mt-2 text-[10px] text-slate-400">
                          Yesterday
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 px-5 py-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                        GT
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-slate-900">
                          Grace Tamba
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          Patient account request
                        </p>
                      </div>

                      <div className="text-right">
                        <span className="rounded-full bg-green-50 px-3 py-1 text-[10px] font-semibold text-green-600">
                          Approved
                        </span>

                        <p className="mt-2 text-[10px] text-slate-400">
                          2 days ago
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* QUICK ACTIONS */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Quick Actions
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                      Common administrative tasks
                    </p>
                  </div>

                  <div className="mt-5 space-y-3">
                    <button className="flex w-full items-center gap-3 rounded-xl border border-slate-200 p-3 text-left transition hover:border-blue-200 hover:bg-blue-50">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-xs font-bold text-blue-700">
                        +
                      </span>

                      <div>
                        <p className="text-xs font-semibold text-slate-900">
                          Add Patient
                        </p>

                        <p className="mt-0.5 text-[10px] text-slate-400">
                          Create a hospital patient account
                        </p>
                      </div>
                    </button>

                    <button className="flex w-full items-center gap-3 rounded-xl border border-slate-200 p-3 text-left transition hover:border-blue-200 hover:bg-blue-50">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-xs font-bold text-blue-700">
                        +
                      </span>

                      <div>
                        <p className="text-xs font-semibold text-slate-900">
                          Add Doctor
                        </p>

                        <p className="mt-0.5 text-[10px] text-slate-400">
                          Create a doctor account
                        </p>
                      </div>
                    </button>

                    <Link
                      href="/hospital-admin/requests"
                      className="flex w-full items-center gap-3 rounded-xl border border-slate-200 p-3 text-left transition hover:border-blue-200 hover:bg-blue-50"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 text-xs font-bold text-orange-600">
                        3
                      </span>

                      <div>
                        <p className="text-xs font-semibold text-slate-900">
                          Review Requests
                        </p>

                        <p className="mt-0.5 text-[10px] text-slate-400">
                          Review pending account requests
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* APPOINTMENTS + ACTIVITIES */}
              <div className="mt-6 grid gap-6 xl:grid-cols-2">
                {/* APPOINTMENTS */}
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        Todays Appointments
                      </h3>

                      <p className="mt-1 text-xs text-slate-400">
                        Upcoming consultations
                      </p>
                    </div>

                    <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-semibold text-blue-700">
                      12 Total
                    </span>
                  </div>

                  <div className="divide-y divide-slate-100">
                    <div className="flex items-center gap-4 px-5 py-4">
                      <div className="w-14 rounded-lg bg-blue-50 px-2 py-2 text-center">
                        <p className="text-xs font-bold text-blue-700">
                          09:00
                        </p>
                      </div>

                      <div className="flex-1">
                        <p className="text-sm font-semibold text-slate-900">
                          Patient Consultation
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          Dr. Sarah • Video Consultation
                        </p>
                      </div>

                      <span className="hidden rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-semibold text-green-600 sm:block">
                        Confirmed
                      </span>
                    </div>

                    <div className="flex items-center gap-4 px-5 py-4">
                      <div className="w-14 rounded-lg bg-blue-50 px-2 py-2 text-center">
                        <p className="text-xs font-bold text-blue-700">
                          11:30
                        </p>
                      </div>

                      <div className="flex-1">
                        <p className="text-sm font-semibold text-slate-900">
                          Patient Consultation
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          Dr. Emmanuel • In Person
                        </p>
                      </div>

                      <span className="hidden rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-semibold text-green-600 sm:block">
                        Confirmed
                      </span>
                    </div>

                    <div className="flex items-center gap-4 px-5 py-4">
                      <div className="w-14 rounded-lg bg-blue-50 px-2 py-2 text-center">
                        <p className="text-xs font-bold text-blue-700">
                          14:00
                        </p>
                      </div>

                      <div className="flex-1">
                        <p className="text-sm font-semibold text-slate-900">
                          Follow-up Consultation
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          Dr. Michael • Video Consultation
                        </p>
                      </div>

                      <span className="hidden rounded-full bg-orange-50 px-2.5 py-1 text-[10px] font-semibold text-orange-600 sm:block">
                        Pending
                      </span>
                    </div>
                  </div>
                </div>

                {/* ACTIVITY */}
                <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="border-b border-slate-100 px-5 py-5">
                    <h3 className="text-base font-bold text-slate-900">
                      Recent Activity
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                      Latest actions on the platform
                    </p>
                  </div>

                  <div className="space-y-5 p-5">
                    <div className="flex gap-3">
                      <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-600"></div>

                      <div>
                        <p className="text-xs font-semibold text-slate-900">
                          New account request received
                        </p>

                        <p className="mt-1 text-[11px] leading-5 text-slate-400">
                          Amina Hassan submitted a request for access.
                        </p>

                        <p className="mt-1 text-[10px] text-slate-300">
                          10 minutes ago
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-green-500"></div>

                      <div>
                        <p className="text-xs font-semibold text-slate-900">
                          Doctor availability updated
                        </p>

                        <p className="mt-1 text-[11px] leading-5 text-slate-400">
                          Dr. Sarah is now available for consultations.
                        </p>

                        <p className="mt-1 text-[10px] text-slate-300">
                          35 minutes ago
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-600"></div>

                      <div>
                        <p className="text-xs font-semibold text-slate-900">
                          Appointment confirmed
                        </p>

                        <p className="mt-1 text-[11px] leading-5 text-slate-400">
                          A patient consultation was confirmed.
                        </p>

                        <p className="mt-1 text-[10px] text-slate-300">
                          1 hour ago
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500"></div>

                      <div>
                        <p className="text-xs font-semibold text-slate-900">
                          Account request requires attention
                        </p>

                        <p className="mt-1 text-[11px] leading-5 text-slate-400">
                          A new request is waiting for administration review.
                        </p>

                        <p className="mt-1 text-[10px] text-slate-300">
                          2 hours ago
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FOOTER NOTE */}
              <div className="mt-6 flex flex-col gap-2 border-t border-slate-200 py-5 text-[10px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                <p>
                  MindCare AI • Hospital Administration • Jamot Hospital
                </p>

                <p>
                  Secure hospital platform
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}