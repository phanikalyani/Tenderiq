"use client";

import { useState } from "react";
import API from "@/lib/api";

export default function PdfEvaluation() {
  const [file, setFile] = useState(null);
  const [bidderText, setBidderText] = useState("");
  const [result, setResult] = useState("");

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("tender_pdf", file);
    formData.append("bidder_text", bidderText);

    const res = await API.post("/evaluate/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    setResult(res.data.ai_result);
  };

  return (
    <div className="p-4 border mt-4">
      <h2>Upload Tender PDF</h2>

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />

      <textarea
        placeholder="Bidder proposal"
        onChange={(e) => setBidderText(e.target.value)}
      />

      <button onClick={handleUpload}>Evaluate</button>

      {result && (
        <div className="mt-4">
          <h3>AI Result:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}