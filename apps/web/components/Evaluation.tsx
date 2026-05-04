"use client";

import { useState } from "react";
import API from "@/lib/api";

export default function Evaluation() {
  const [tenderText, setTenderText] = useState("");
  const [bidderText, setBidderText] = useState("");
  const [result, setResult] = useState<any>(null);

  const runEvaluation = async () => {
    const res = await API.post("/evaluate/", {
      tender_text: tenderText,
      bidder_text: bidderText
    });

    setResult(res.data);
  };

  return (
    <div className="p-4 border rounded mt-4">
      <h2>Evaluate Tender</h2>

      <textarea
        placeholder="Tender Text"
        onChange={(e) => setTenderText(e.target.value)}
        className="border p-2 block mb-2"
      />

      <textarea
        placeholder="Bidder Text"
        onChange={(e) => setBidderText(e.target.value)}
        className="border p-2 block mb-2"
      />

      <button onClick={runEvaluation} className="bg-blue-600 text-white px-4 py-2">
        Evaluate
      </button>

      {result && (
        <div className="mt-4">
          <p>Score: {result.score}</p>
          <p>Decision: {result.decision}</p>
          <p>Reason: {result.reason}</p>
        </div>
      )}
    </div>
  );
}