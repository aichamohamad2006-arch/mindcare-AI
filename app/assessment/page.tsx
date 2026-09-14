"use client";

import { useState } from "react";
import Link from "next/link";
import MindCareLogo from "../components/MindCareLogo";

const questions = [
  {
    question: "How have you been feeling emotionally recently?",
    options: ["Very good", "Good", "Okay", "Not very good", "Very difficult"],
  },
  {
    question: "How often have you felt worried, nervous, or overwhelmed?",
    options: ["Never", "Sometimes", "Often", "Very often", "Almost every day"],
  },
  {
    question: "How would you describe your sleep recently?",
    options: ["Very good", "Good", "Average", "Poor", "Very poor"],
  },
  {
    question: "How much have your emotions affected your daily activities?",
    options: ["Not at all", "A little", "Moderately", "A lot", "Extremely"],
  },
  {
    question: "How often have you felt that you needed someone to talk to?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very often"],
  },
  {
    question: "How would you describe your current stress level?",
    options: ["Very low", "Low", "Moderate", "High", "Very high"],
  },
  {
    question:
      "How often have you had difficulty concentrating on your usual activities?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very often"],
  },
  {
    question:
      "How connected and supported do you currently feel by the people around you?",
    options: [
      "Very supported",
      "Supported",
      "Somewhat supported",
      "Not very supported",
      "Not supported at all",
    ],
  },
  {
    question:
      "How often have you found it difficult to enjoy things you normally like?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very often"],
  },
  {
    question:
      "How confident do you feel about managing your emotions and wellbeing right now?",
    options: [
      "Very confident",
      "Confident",
      "Somewhat confident",
      "Not very confident",
      "Not confident at all",
    ],
  },
];

export default function AssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [completed, setCompleted] = useState(false);

  const question = questions[currentQuestion];

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  const handleNext = () => {
    if (!selectedAnswer) return;

    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = selectedAnswer;

    setAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      const nextQuestion = currentQuestion + 1;
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(updatedAnswers[nextQuestion] || "");
    } else {
      setCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      const previousQuestion = currentQuestion - 1;
      setCurrentQuestion(previousQuestion);
      setSelectedAnswer(answers[previousQuestion] || "");
    }
  };

  const restartAssessment = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer("");
    setCompleted(false);
  };

  if (completed) {
    return (
      <main
        className="relative h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/image/assessment/assessment-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex h-screen items-center justify-center px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-5 text-center shadow-xl">

            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-blue-100">
              <span className="text-lg text-blue-600">✓</span>
            </div>

            <p className="mt-3 text-xs font-bold uppercase tracking-widest text-blue-600">
              Assessment Completed
            </p>

            <h1 className="mt-2 text-xl font-bold text-slate-900">
              Thank you for sharing.
            </h1>

            <p className="mt-2 text-sm leading-5 text-slate-600">
              Your responses have been recorded for this preliminary
              assessment. This assessment does not provide a medical
              diagnosis.
            </p>

            <div className="mt-4 rounded-xl bg-blue-50 p-4 text-left">
              <h2 className="text-base font-bold text-slate-900">
                What would you like to do next?
              </h2>

              <p className="mt-1 text-xs leading-5 text-slate-600">
                Request access to MindCare AI or continue exploring
                mental health information as a guest.
              </p>

              <div className="mt-3 flex flex-col gap-2">
                <Link
                  href="/request-account"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-bold text-white hover:bg-blue-700"
                >
                  Request an Account
                </Link>

                <Link
                  href="/"
                  className="rounded-lg border border-blue-600 px-4 py-2 text-center text-sm font-bold text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  Continue as Guest
                </Link>
              </div>
            </div>

            <button
              type="button"
              onClick={restartAssessment}
              className="mt-3 text-xs text-slate-500 hover:text-blue-600"
            >
              Retake Assessment
            </button>

          </div>
        </div>
      </main>
    );
  }

  return (
    <main
      className="relative h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/image/assessment/assessment-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex h-screen flex-col">

        <header className="shrink-0 bg-white/95 shadow-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2">
            <Link href="/" className="flex items-center">
              <MindCareLogo />
            </Link>

            <Link
              href="/"
              className="text-xs font-medium text-slate-600 hover:text-blue-600"
            >
              Back to Home
            </Link>
          </div>
        </header>

        <section className="flex flex-1 items-center justify-center px-4 py-2 sm:px-6">

          <div className="w-full max-w-xl">

            <div className="text-center">
              <h1 className="text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
                Mental Health Assessment
              </h1>

              <p className="mx-auto mt-1 max-w-lg text-xs leading-4 text-white sm:text-sm">
                Take a moment to check in and tell us how you are feeling.
              </p>
            </div>

            <div className="mt-2">
              <div className="flex justify-between text-[11px] font-medium text-white">
                <span>
                  Question {currentQuestion + 1} of {questions.length}
                </span>

                <span>{Math.round(progress)}%</span>
              </div>

              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/30">
                <div
                  className="h-full rounded-full bg-blue-400 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            <div className="mx-auto mt-2 max-w-md rounded-2xl bg-white p-3.5 shadow-xl">

              <p className="text-[11px] font-semibold text-blue-600">
                Question {currentQuestion + 1}
              </p>

              <h2 className="mt-1 text-sm font-bold leading-snug text-slate-900 sm:text-base">
                {question.question}
              </h2>

              <div className="mt-2.5 space-y-1.5">
                {question.options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSelectedAnswer(option)}
                    className={`w-full rounded-lg border px-3 py-1.5 text-left text-xs font-medium transition ${
                      selectedAnswer === option
                        ? "border-blue-600 bg-blue-50 text-blue-700"
                        : "border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-blue-50"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className="mt-2.5 flex justify-between gap-3">

                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="rounded-lg border border-slate-300 px-4 py-1.5 text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Previous
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!selectedAnswer}
                  className="rounded-lg bg-blue-600 px-5 py-1.5 text-xs font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {currentQuestion === questions.length - 1
                    ? "Finish"
                    : "Next"}
                </button>

              </div>

            </div>

            <div className="mx-auto mt-1.5 max-w-md rounded-lg bg-white/95 px-3 py-1.5 text-center">
              <p className="text-[10px] leading-3.5 text-slate-500">
                This assessment provides preliminary support and guidance
                only. It does not replace professional medical evaluation
                or diagnosis.
              </p>
            </div>

          </div>

        </section>
      </div>
    </main>
  );
}