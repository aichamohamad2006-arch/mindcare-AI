"use client";

import Link from "next/link";

export default function GuestPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div>
            <h1 className="text-xl font-bold text-blue-700">
              MindCare AI
            </h1>

            <p className="text-xs text-slate-500">
              Mental Health Support
            </p>
          </div>

          <div className="rounded-lg bg-blue-50 px-4 py-2 text-right">
            <p className="text-xs font-semibold text-blue-700">
              Guest Access
            </p>

            <p className="text-xs text-slate-500">
              MindCare AI
            </p>
          </div>
        </div>
      </header>

      {/* Main content */}
      <section className="mx-auto max-w-7xl px-5 py-8">

        {/* Welcome section */}
        <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Guest Dashboard
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Welcome to MindCare AI
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                Your account request has been approved. You currently have
                guest access while waiting for confirmation of your visit and
                examination at Jamot Hospital.
              </p>
            </div>

            <div className="rounded-xl border border-amber-200 bg-amber-50 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                Account Status
              </p>

              <p className="mt-1 font-bold text-amber-800">
                Awaiting Hospital Confirmation
              </p>
            </div>
          </div>
        </div>

        {/* Information notice */}
        <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h3 className="font-bold text-blue-900">
            What happens next?
          </h3>

          <p className="mt-2 text-sm leading-6 text-blue-800">
            Please visit Jamot Hospital for the required examination.
            After the hospital confirms your visit and examination, your
            account can be upgraded from guest access to patient access.
          </p>
        </div>

        {/* Dashboard cards */}
        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {/* Mental health information */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.5 3.5a4 4 0 0 0-4 4v.5a3.5 3.5 0 0 0-1 6.77V16a4 4 0 0 0 4 4h1v-6h-2a2 2 0 0 1 0-4h2V8a2 2 0 0 1 4 0v2h2a2 2 0 0 1 0 4h-2v6h1a4 4 0 0 0 4-4v-1.23a3.5 3.5 0 0 0-1-6.77V7.5a4 4 0 0 0-4-4h-4Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v12"
                />
              </svg>
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              Mental Health Information
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Explore general information about emotional wellbeing,
              stress, sleep, coping strategies and mental health.
            </p>

            <button
              type="button"
              className="mt-5 font-semibold text-blue-700 hover:text-blue-900"
            >
              Learn More →
            </button>
          </div>

          {/* AI support */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-6 w-6"
              >
                <rect
                  x="5"
                  y="5"
                  width="14"
                  height="14"
                  rx="3"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 10h.01M15 10h.01M9 14c.8.8 1.7 1.2 3 1.2s2.2-.4 3-1.2M9 5V3M15 5V3M9 21v-2M15 21v-2M5 9H3M5 15H3M21 9h-2M21 15h-2"
                />
              </svg>
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              AI Mental Health Support
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Get general emotional support and wellbeing information
              from the MindCare AI assistant.
            </p>

            <button
              type="button"
              className="mt-5 font-semibold text-blue-700 hover:text-blue-900"
            >
              Talk to AI →
            </button>
          </div>

          {/* Assessment */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-6 w-6"
              >
                <rect
                  x="5"
                  y="3"
                  width="14"
                  height="18"
                  rx="2"
                />
                <path
                  strokeLinecap="round"
                  d="M9 7h6M9 11h6M9 15h3"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m15 15 1 1 2-2"
                />
              </svg>
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              Mental Health Assessment
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Complete a preliminary wellbeing assessment and review
              your responses.
            </p>

            <Link
              href="/assessment"
              className="mt-5 inline-block font-semibold text-blue-700 hover:text-blue-900"
            >
              Open Assessment →
            </Link>
          </div>

          {/* Emergency support */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3 4 7v5c0 5.25 3.4 8.25 8 9 4.6-.75 8-3.75 8-9V7l-8-4Z"
                />
                <path
                  strokeLinecap="round"
                  d="M12 8v4M12 15h.01"
                />
              </svg>
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              Emergency Support
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              If you are in immediate danger or experiencing a mental
              health emergency, seek urgent professional assistance.
            </p>

            <button
              type="button"
              className="mt-5 font-semibold text-red-600 hover:text-red-800"
            >
              Emergency Information →
            </button>
          </div>

          {/* Request status */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-6 w-6"
              >
                <circle cx="12" cy="12" r="8.5" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.5 12 2.3 2.3 4.7-5"
                />
              </svg>
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              Request Status
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Your account request has been reviewed and approved by
              the Hospital Admin.
            </p>

            <span className="mt-5 inline-block rounded-full bg-green-100 px-4 py-2 text-xs font-bold text-green-700">
              Approved
            </span>
          </div>

          {/* Hospital confirmation */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6M8 10h.01M12 10h.01M16 10h.01"
                />
              </svg>
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              Jamot Hospital
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Your guest account will become a patient account after
              the required hospital confirmation.
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-slate-500">
              Awaiting confirmation
            </span>
          </div>
        </div>

        {/* Access limitation */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="font-bold text-slate-900">
            Guest Access
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Doctor selection, appointments, private messaging, video
            consultations, support groups and patient clinical records
            will become available only after your status is confirmed as
            a Jamot Hospital patient.
          </p>
        </div>

        {/* Footer notice */}
        <p className="mt-8 text-center text-xs leading-5 text-slate-500">
          MindCare AI provides preliminary mental-health support and
          information. It does not replace professional medical diagnosis
          or treatment.
        </p>
      </section>
    </main>
  );
}

