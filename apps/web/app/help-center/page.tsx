"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

const faqs = [
  {
    question: "How do I create a new tender application?",
    answer:
      "Go to the dashboard and click 'Apply Now'. Fill in the details and submit your application.",
  },
  {
    question: "How does AI evaluation work?",
    answer:
      "TenderIQ uses AI to analyze tender documents and bidder proposals, then generates scores and recommendations.",
  },
  {
    question: "Can I upload PDF documents?",
    answer:
      "Yes. Use the Document Checker to upload tender PDFs and get AI-based insights.",
  },
  {
    question: "Why am I not seeing my tenders?",
    answer:
      "Ensure your backend is running and connected. Also check if the database is properly configured.",
  },
];

export default function HelpCenterPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />

      <div className="mx-auto max-w-4xl p-6">
        <h1 className="mb-4 text-3xl font-bold">Help Center</h1>
        <p className="mb-8 text-slate-500">
          Find answers to common questions and learn how to use TenderIQ.
        </p>

        {/* FAQ Section */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border bg-white p-5 shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between text-left"
              >
                <span className="font-semibold">{faq.question}</span>
                <span className="text-xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <p className="mt-3 text-slate-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="mt-10 rounded-2xl border bg-slate-50 p-6">
          <h2 className="mb-2 text-xl font-semibold">Need more help?</h2>
          <p className="text-slate-600 mb-4">
            If you can't find your answer here, contact support or explore more
            documentation.
          </p>

          <button className="rounded-xl bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
            Contact Support
          </button>
        </div>
      </div>
    </>
  );
}