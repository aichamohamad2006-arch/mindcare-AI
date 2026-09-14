"use client";

import { useState } from "react";
import Link from "next/link";

import MindCareLogo from "../components/MindCareLogo";

export default function RequestAccountPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <main
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/image/request-account/request-account-bg.png')",
        }}
      >
        <div className="min-h-screen bg-white/20">
          <div className="flex min-h-screen items-center justify-center px-4 py-6">
            <div className="w-full max-w-md rounded-2xl bg-white/95 p-6 text-center shadow-2xl">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                <span className="text-2xl text-green-600">✓</span>
              </div>

              <p className="mt-4 text-xs font-bold uppercase tracking-widest text-blue-600">
                Request Submitted
              </p>

              <h1 className="mt-2 text-2xl font-bold text-slate-900">
                Thank you for your request
              </h1>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Your request has been submitted to Jamot Hospital for
                review. You will receive further instructions once your
                request has been reviewed.
              </p>

              <div className="mt-4 rounded-xl bg-blue-50 p-4 text-left">
                <h2 className="text-sm font-bold text-slate-900">
                  What happens next?
                </h2>

                <p className="mt-2 text-xs leading-5 text-slate-600">
                  The hospital administration will review your request.
                  If approved, you will receive an activation message
                  with the next steps.
                </p>
              </div>

              <Link
                href="/"
                className="mt-4 block rounded-lg bg-blue-600 px-4 py-3 text-sm font-bold text-white hover:bg-blue-700"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/image/request-account/request-account-bg.png')",
      }}
    >
      <header className="bg-white/95 shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2.5">
          <Link href="/" className="flex items-center">
            <MindCareLogo />
          </Link>

          <Link
            href="/assessment"
            className="text-xs font-medium text-slate-600 hover:text-blue-600"
          >
            Back to Assessment
          </Link>
        </div>
      </header>

      <section className="px-4 py-4 sm:px-6 sm:py-5">
        <div className="mx-auto max-w-xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-700">
              MindCare AI
            </p>

            <h1 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
              Request an Account
            </h1>

            <p className="mx-auto mt-1.5 max-w-md text-xs leading-5 text-slate-700">
              Please provide your information so Jamot Hospital can
              review your request for access to MindCare AI.
            </p>
          </div>

          <div className="mt-3 rounded-2xl bg-white/95 p-4 shadow-2xl backdrop-blur-sm sm:p-5">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-2.5"
            >
              {/* FULL NAME */}
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-1 block text-xs font-semibold text-slate-700"
                >
                  Full Name
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* PHONE + EMAIL */}
              <div className="grid gap-2.5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1 block text-xs font-semibold text-slate-700"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Phone number"
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-xs font-semibold text-slate-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email address"
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              {/* AGE + SEX */}
              <div className="grid gap-2.5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="age"
                    className="mb-1 block text-xs font-semibold text-slate-700"
                  >
                    Age
                  </label>

                  <input
                    id="age"
                    name="age"
                    type="number"
                    min="18"
                    required
                    placeholder="Enter your age"
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="sex"
                    className="mb-1 block text-xs font-semibold text-slate-700"
                  >
                    Sex
                  </label>

                  <select
                    id="sex"
                    name="sex"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="" disabled>
                      Select your sex
                    </option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">
                      Prefer not to say
                    </option>
                  </select>
                </div>
              </div>

              {/* REASON */}
              <div>
                <label
                  htmlFor="reason"
                  className="mb-1 block text-xs font-semibold text-slate-700"
                >
                  Reason for Request
                </label>

                <textarea
                  id="reason"
                  name="reason"
                  required
                  rows={2}
                  placeholder="Briefly tell us why you would like access to MindCare AI."
                  className="w-full resize-none rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                ></textarea>
              </div>

              {/* INFORMATION NOTICE */}
              <div className="rounded-lg bg-blue-50 p-2.5">
                <p className="text-[10px] leading-4 text-slate-600">
                  Your request will be reviewed by the hospital
                  administration. Submitting this form does not
                  automatically create a patient account.
                </p>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                Submit Account Request
              </button>
            </form>
          </div>

          <p className="mt-2 pb-1 text-center text-xs text-slate-700">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-blue-700 underline hover:text-blue-800"
            >
              Log in
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}