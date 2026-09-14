"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import heroImage from "../images/hero.jpg";
import aboutImage from "../images/about.jpg";
import aiAssistantImage from "../images/ai-assistant.jpg";
import professionalCareImage from "../images/professional-care.jpg";
import wellbeingImage from "../images/wellbeing-monitoring.jpg";
import appointmentImage from "../images/appointment.jpg";

import MindCareLogo from "./components/MindCareLogo";

export default function Home() {
  const [languageOpen, setLanguageOpen] = useState(false);

  return (
    <main>
      {/* NAVIGATION BAR */}
      <nav className="absolute top-0 left-0 z-20 w-full">
        <div className="flex items-center justify-between px-8 py-6 md:px-16 lg:px-24">
          <Link
            href="/"
            className="transition-opacity duration-200 hover:opacity-90"
          >
            <MindCareLogo light />
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            <Link
              href="/"
              className="font-medium text-white transition-colors duration-200 hover:text-blue-400"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="font-medium text-white transition-colors duration-200 hover:text-blue-400"
            >
              About
            </Link>

            <Link
              href="/services"
              className="font-medium text-white transition-colors duration-200 hover:text-blue-400"
            >
              Services
            </Link>

            <Link
              href="/our-approach"
              className="font-medium text-white transition-colors duration-200 hover:text-blue-400"
            >
              Our Approach
            </Link>

            <Link
              href="/contact"
              className="font-medium text-white transition-colors duration-200 hover:text-blue-400"
            >
              Contact
            </Link>

            {/* LANGUAGE SELECTOR */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center gap-1 font-medium text-white transition-colors duration-200 hover:text-blue-400"
              >
                EN
                <span className="text-sm">▾</span>
              </button>

              {languageOpen && (
                <div className="absolute right-0 mt-3 w-44 overflow-hidden rounded-lg bg-white shadow-xl">
                  <button
                    type="button"
                    onClick={() => setLanguageOpen(false)}
                    className="block w-full px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    English
                  </button>

                  <button
                    type="button"
                    onClick={() => setLanguageOpen(false)}
                    className="block w-full px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Français
                  </button>

                  <button
                    type="button"
                    onClick={() => setLanguageOpen(false)}
                    className="block w-full px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Pidgin
                  </button>

                  <button
                    type="button"
                    onClick={() => setLanguageOpen(false)}
                    className="block w-full px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Fulfulde / Fulbe
                  </button>
                </div>
              )}
            </div>

            <Link
              href="/assessment"
              className="rounded-lg bg-blue-600 px-5 py-3 font-bold text-white transition-colors duration-200 hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src={heroImage}
          alt="Mental health support"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center">
          <div className="px-8 md:px-16 lg:px-24">
            <div className="max-w-3xl text-white">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em]">
                JAMOT HOSPITAL
              </p>

              <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                Mental health support,
                <br />
                Designed around you.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 sm:text-lg">
                MindCare AI provides accessible digital mental health support,
                guidance, wellbeing monitoring, and connection with professional
                care through Jamot Hospital.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/assessment"
                  className="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition-colors duration-200 hover:bg-blue-700"
                >
                  Start Assessment
                </Link>

                <Link
                  href="/about"
                  className="rounded-lg border border-white px-6 py-3 font-bold text-white transition-colors duration-200 hover:bg-white hover:text-black"
                >
                  Learn More
                </Link>
              </div>

              <div className="mt-8 flex gap-8 text-sm font-medium">
                <span>Secure</span>
                <span>Professional</span>
                <span>Accessible</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-blue-50 px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative mx-auto h-[340px] w-full max-w-[560px] overflow-hidden rounded-2xl">
              <Image
                src={aboutImage}
                alt="Mental health support"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-base font-bold uppercase tracking-[0.25em] text-blue-600">
                About MindCare AI
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                Supporting mental wellbeing through technology
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                MindCare AI is a digital mental health support platform
                developed for Jamot Hospital. It is designed to make mental
                health support more accessible through a secure and convenient
                digital environment.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                The platform brings together AI-powered support, wellbeing
                monitoring, communication with healthcare professionals,
                consultations, and other services that can support patients
                throughout their care journey.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900">
                    Accessible
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Access support through a simple digital platform.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900">
                    Secure
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Designed with the protection of sensitive information in
                    mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY FEATURES SECTION */}
<section className="bg-blue-50 px-6 py-10 sm:px-8 lg:px-12">
  <div className="mx-auto max-w-7xl">
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-lg font-bold uppercase tracking-[0.25em] text-blue-600">
        Key Features
      </p>

      <h2 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
        Everything you need for better mental wellbeing
      </h2>

      <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
        MindCare AI brings together practical digital tools and
        professional support to make mental health care more accessible
        and convenient.
      </p>
    </div>

    <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {/* AI ASSISTANT */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative h-40 w-full">
          <Image
            src={aiAssistantImage}
            alt="AI Assistant"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover"
          />
        </div>

        <div className="p-5">
          <h3 className="text-lg font-bold text-slate-900">
            AI Assistant
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Get preliminary mental health guidance, information, and
            supportive conversations whenever you need them.
          </p>
        </div>
      </div>

      {/* PROFESSIONAL CARE */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative h-40 w-full">
          <Image
            src={professionalCareImage}
            alt="Professional Care"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover"
          />
        </div>

        <div className="p-5">
          <h3 className="text-lg font-bold text-slate-900">
            Professional Care
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Connect with healthcare professionals for guidance,
            consultations, and continued care.
          </p>
        </div>
      </div>

      {/* WELLBEING MONITORING */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative h-40 w-full">
          <Image
            src={wellbeingImage}
            alt="Wellbeing Monitoring"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover"
          />
        </div>

        <div className="p-5">
          <h3 className="text-lg font-bold text-slate-900">
            Wellbeing Monitoring
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Monitor your mood and wellbeing over time and follow your
            personal progress.
          </p>
        </div>
      </div>

      {/* APPOINTMENTS */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative h-40 w-full">
          <Image
            src={appointmentImage}
            alt="Appointments"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover"
          />
        </div>

        <div className="p-5">
          <h3 className="text-lg font-bold text-slate-900">
            Appointments
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Choose a healthcare professional and book a convenient
            consultation through the platform.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
      {/* OUR APPROACH SECTION */}
<section className="bg-white px-6 py-24 sm:px-8 lg:px-12">
  <div className="mx-auto max-w-7xl">

    <div className="mx-auto max-w-4xl text-center">
      <p className="text-lg font-bold uppercase tracking-[0.25em] text-blue-600">
        Our Approach
      </p>

      <h2 className="mt-5 text-4xl font-bold text-slate-900 sm:text-5xl">
        A simple path to better mental wellbeing
      </h2>

      <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg">
        MindCare AI is designed to guide users through a simple and
        supportive digital care journey.
      </p>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-3">

      {/* STEP 1 */}
      <div className="rounded-2xl bg-blue-50 p-9 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
          01
        </div>

        <h3 className="mt-7 text-2xl font-bold text-slate-900">
          Assess
        </h3>

        <p className="mt-4 text-base leading-7 text-slate-600">
          Begin with an initial assessment that helps provide appropriate
          guidance and direction.
        </p>
      </div>

      {/* STEP 2 */}
      <div className="rounded-2xl bg-blue-50 p-9 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
          02
        </div>

        <h3 className="mt-7 text-2xl font-bold text-slate-900">
          Connect
        </h3>

        <p className="mt-4 text-base leading-7 text-slate-600">
          Connect with healthcare professionals through appointments,
          messaging, and consultations.
        </p>
      </div>

      {/* STEP 3 */}
      <div className="rounded-2xl bg-blue-50 p-9 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
          03
        </div>

        <h3 className="mt-7 text-2xl font-bold text-slate-900">
          Monitor
        </h3>

        <p className="mt-4 text-base leading-7 text-slate-600">
          Follow wellbeing and progress over time while receiving
          continued support.
        </p>
      </div>

    </div>
  </div>
</section>

{/* FINAL CALL TO ACTION */}
<section className="bg-blue-50 px-6 py-12 sm:px-8 lg:px-12">
  <div className="mx-auto max-w-4xl rounded-3xl bg-blue-600 px-8 py-10 text-center text-white shadow-lg sm:px-10">

    <h2 className="text-3xl font-bold sm:text-4xl">
      Ready to take the first step toward better mental wellbeing?
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
      Start your journey with MindCare AI and discover a more accessible
      way to receive mental health support through Jamot Hospital.
    </p>

    <Link
      href="/assessment"
      className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-bold text-blue-600 transition-colors duration-200 hover:bg-blue-50"
    >
      Start Assessment
    </Link>

  </div>
</section>
      {/* FOOTER */}
<footer className="bg-blue-900 px-6 py-5 text-white sm:px-8 lg:px-12">
  <div className="mx-auto max-w-7xl">

    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

      {/* BRAND */}
      <div>
        <MindCareLogo light />

        <p className="mt-2 max-w-sm text-xs leading-5 text-blue-100">
          A digital mental health support platform developed for Jamot
          Hospital to make mental health support more accessible,
          connected, and convenient.
        </p>
      </div>

      {/* QUICK LINKS */}
      <div>
        <h3 className="text-sm font-bold">
          Quick Links
        </h3>

        <div className="mt-2 flex flex-col gap-1 text-xs">
          <Link href="/" className="text-blue-100 hover:text-white">
            Home
          </Link>

          <Link href="/about" className="text-blue-100 hover:text-white">
            About
          </Link>

          <Link href="/services" className="text-blue-100 hover:text-white">
            Services
          </Link>

          <Link
            href="/our-approach"
            className="text-blue-100 hover:text-white"
          >
            Our Approach
          </Link>

          <Link href="/contact" className="text-blue-100 hover:text-white">
            Contact
          </Link>
        </div>
      </div>

      {/* PLATFORM */}
      <div>
        <h3 className="text-sm font-bold">
          Platform
        </h3>

        <div className="mt-2 flex flex-col gap-1 text-xs">
          <Link
            href="/assessment"
            className="text-blue-100 hover:text-white"
          >
            Mental Health Assessment
          </Link>

          <span className="text-blue-100">AI Assistant</span>
          <span className="text-blue-100">Professional Care</span>
          <span className="text-blue-100">Wellbeing Monitoring</span>
          <span className="text-blue-100">Appointments</span>
        </div>
      </div>

      {/* LANGUAGES */}
      <div>
        <h3 className="text-sm font-bold">
          Available Languages
        </h3>

        <div className="mt-2 flex flex-col gap-1 text-xs text-blue-100">
          <span>English</span>
          <span>Français</span>
          <span>Pidgin</span>
          <span>Fulfulde / Fulbe</span>
        </div>
      </div>

    </div>

    {/* COPYRIGHT */}
    <div className="mt-4 border-t border-blue-700 pt-3">
      <div className="flex flex-col gap-1 text-[10px] text-blue-100 md:flex-row md:items-center md:justify-between">
        <p>
          © 2026 MindCare AI. Developed for Jamot Hospital.
        </p>

        <p>
          Secure • Professional • Accessible
        </p>
      </div>
    </div>

  </div>
</footer>
    </main>
  );
}