"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import API from "@/lib/api";

export default function AssistantPage() {
  const [question, setQuestion] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question) {
      alert("Please enter a question");
      return;
    }

    setLoading(true);
    setReply("");

    try {
      // 🔥 call backend AI endpoint (create if not exists)
      const res = await API.post("/evaluate/", {
        tender_text: question,
        bidder_text: "assistant",
      });

      setReply(JSON.stringify(res.data, null, 2));
    } catch (err) {
      console.log(err);
      setReply("Error getting AI response");
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">AI Assistant</h1>
        <p className="text-slate-500 mb-6">
          Ask anything about tenders, documents, or procurement.
        </p>

        {/* Input */}
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask your question..."
          className="w-full border rounded-xl p-4 mb-4"
          rows={5}
        />

        {/* Button */}
        <button
          onClick={askAI}
          className="bg-purple-600 text-white px-5 py-2 rounded-xl hover:bg-purple-700 transition"
        >
          {loading ? "Thinking..." : "Ask AI"}
        </button>

        {/* Result */}
        {reply && (
          <div className="mt-6 p-4 border rounded-xl bg-gray-50">
            <h2 className="font-semibold mb-2">Response:</h2>
            <pre className="text-sm whitespace-pre-wrap">{reply}</pre>
          </div>
        )}
      </div>
    </>
  );
}