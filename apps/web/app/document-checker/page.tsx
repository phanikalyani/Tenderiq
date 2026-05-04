"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import API from "@/lib/api";

export default function DocumentCheckerPage() {
  const [file, setFile] = useState<File | null>(null);
  const [bidderText, setBidderText] = useState("");
  const [result, setResult] = useState("");
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      alert("Please upload a PDF");
      return;
    }

    setLoading(true);
    setResult("");
    setPreview("");

    try {
      const formData = new FormData();
      formData.append("tender_pdf", file);
      formData.append("bidder_text", bidderText);

      const res = await API.post("/evaluate/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setResult(res.data.ai_result);
      setPreview(res.data.tender_text_preview);
    } catch (err) {
      console.log(err);
      alert("Error processing document");
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Document Checker</h1>
        <p className="text-slate-500 mb-6">
          Upload tender PDF and evaluate with AI.
        </p>

        {/* File Upload */}
        <div className="mb-4">
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </div>

        {/* Bidder Input */}
        <textarea
          placeholder="Enter bidder proposal..."
          value={bidderText}
          onChange={(e) => setBidderText(e.target.value)}
          className="w-full border rounded-xl p-4 mb-4"
          rows={4}
        />

        {/* Button */}
        <button
          onClick={handleUpload}
          className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700"
        >
          {loading ? "Analyzing..." : "Upload & Analyze"}
        </button>

        {/* Preview */}
        {preview && (
          <div className="mt-6 p-4 border rounded-xl bg-gray-50">
            <h2 className="font-semibold mb-2">Extracted Text Preview</h2>
            <p className="text-sm">{preview}</p>
          </div>
        )}

        {/* Result */}
        {result && (
          <div className="mt-6 p-4 border rounded-xl bg-green-50">
            <h2 className="font-semibold mb-2">AI Evaluation</h2>
            <pre className="text-sm whitespace-pre-wrap">{result}</pre>
          </div>
        )}
      </div>
    </>
  );
}