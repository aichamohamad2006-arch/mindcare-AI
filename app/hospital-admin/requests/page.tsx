"use client";

import { useState } from "react";

type Request = {
  id: number;
  name: string;
  phone: string;
  email: string;
  age: number;
  sex: string;
  reason: string;
  date: string;
  status: "Pending" | "Approved" | "Rejected";
};

const initialRequests: Request[] = [
  {
    id: 1,
    name: "Amina Hassan",
    phone: "+237 6XX XXX XXX",
    email: "amina@example.com",
    age: 24,
    sex: "Female",
    reason:
      "I would like access to mental health support and information.",
    date: "12 September 2026",
    status: "Pending",
  },
  {
    id: 2,
    name: "David Mbarga",
    phone: "+237 6XX XXX XXX",
    email: "david@example.com",
    age: 31,
    sex: "Male",
    reason:
      "I would like to communicate with a mental health professional.",
    date: "12 September 2026",
    status: "Pending",
  },
];

export default function HospitalAdminRequestsPage() {
  const [requests, setRequests] = useState<Request[]>(initialRequests);
  const [selectedRequest, setSelectedRequest] =
    useState<Request | null>(null);

  const approveRequest = (id: number) => {
    setRequests((currentRequests) =>
      currentRequests.map((request) =>
        request.id === id
          ? { ...request, status: "Approved" }
          : request
      )
    );

    setSelectedRequest(null);
  };

  const rejectRequest = (id: number) => {
    setRequests((currentRequests) =>
      currentRequests.map((request) =>
        request.id === id
          ? { ...request, status: "Rejected" }
          : request
      )
    );

    setSelectedRequest(null);
  };

  const pendingCount = requests.filter(
    (request) => request.status === "Pending"
  ).length;

  const approvedCount = requests.filter(
    (request) => request.status === "Approved"
  ).length;

  const rejectedCount = requests.filter(
    (request) => request.status === "Rejected"
  ).length;

  return (
    <main className="min-h-screen bg-slate-100">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div>
            <h1 className="text-xl font-bold text-blue-700">
              MindCare AI
            </h1>

            <p className="text-xs text-slate-500">
              Hospital Administration
            </p>
          </div>

          <div className="rounded-lg bg-blue-50 px-4 py-2 text-right">
            <p className="text-xs font-semibold text-blue-700">
              Hospital Admin
            </p>

            <p className="text-xs text-slate-500">
              Account Requests
            </p>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Administration
          </p>

          <h2 className="mt-1 text-3xl font-bold text-slate-900">
            Account Requests
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Review visitor requests for access to MindCare AI and
            decide whether each request should be approved or rejected.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Pending
            </p>

            <p className="mt-2 text-3xl font-bold text-amber-500">
              {pendingCount}
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Approved
            </p>

            <p className="mt-2 text-3xl font-bold text-green-600">
              {approvedCount}
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Rejected
            </p>

            <p className="mt-2 text-3xl font-bold text-red-500">
              {rejectedCount}
            </p>
          </div>
        </div>

        <div className="mt-7 overflow-hidden rounded-2xl bg-white shadow-sm">
          <div className="border-b border-slate-200 px-5 py-4">
            <h3 className="text-lg font-bold text-slate-900">
              Visitor Requests
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              Select a request to view the visitor&apos;s information.
            </p>
          </div>

          <div className="divide-y divide-slate-100">
            {requests.map((request) => (
              <div
                key={request.id}
                className="flex flex-col gap-4 px-5 py-5 lg:flex-row lg:items-center lg:justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                    {request.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">
                      {request.name}
                    </h4>

                    <p className="mt-1 text-xs text-slate-500">
                      {request.email}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Submitted {request.date}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      request.status === "Pending"
                        ? "bg-amber-100 text-amber-700"
                        : request.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {request.status}
                  </span>

                  <button
                    type="button"
                    onClick={() => setSelectedRequest(request)}
                    className="rounded-lg border border-slate-300 px-4 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-50"
                  >
                    View Request
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedRequest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4 py-6">
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="border-b border-slate-200 px-6 py-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    Account Request
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-slate-900">
                    {selectedRequest.name}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedRequest(null)}
                  className="text-xl text-slate-400 hover:text-slate-700"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="space-y-4 px-6 py-5">
              <div>
                <p className="text-xs font-semibold text-slate-500">
                  Full Name
                </p>

                <p className="mt-1 text-sm font-medium text-slate-900">
                  {selectedRequest.name}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold text-slate-500">
                    Phone Number
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-900">
                    {selectedRequest.phone}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-500">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm font-medium text-slate-900">
                    {selectedRequest.email}
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold text-slate-500">
                    Age
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-900">
                    {selectedRequest.age}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-500">
                    Sex
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-900">
                    {selectedRequest.sex}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-500">
                  Reason for Request
                </p>

                <div className="mt-2 rounded-lg bg-slate-50 p-4">
                  <p className="text-sm leading-6 text-slate-700">
                    {selectedRequest.reason}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-500">
                  Current Status
                </p>

                <p className="mt-1 text-sm font-bold text-amber-600">
                  {selectedRequest.status}
                </p>
              </div>
            </div>

            {selectedRequest.status === "Pending" && (
              <div className="flex gap-3 border-t border-slate-200 px-6 py-5">
                <button
                  type="button"
                  onClick={() => rejectRequest(selectedRequest.id)}
                  className="flex-1 rounded-lg border border-red-300 px-4 py-3 text-sm font-bold text-red-600 transition hover:bg-red-50"
                >
                  Reject Request
                </button>

                <button
                  type="button"
                  onClick={() => approveRequest(selectedRequest.id)}
                  className="flex-1 rounded-lg bg-green-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-green-700"
                >
                  Approve Request
                </button>
              </div>
            )}

            {selectedRequest.status !== "Pending" && (
              <div className="border-t border-slate-200 px-6 py-5">
                <button
                  type="button"
                  onClick={() => setSelectedRequest(null)}
                  className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-bold text-white hover:bg-blue-700"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}