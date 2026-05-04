export const stats = [
  { label: "Tenders Evaluated", value: "128", trend: "+24%" },
  { label: "Bidders Processed", value: "1,842", trend: "+31%" },
  { label: "Manual Reviews", value: "21", trend: "-12%" },
  { label: "Audit Coverage", value: "100%", trend: "Full" },
];

export const bidders = [
  {
    name: "Alpha Infra Pvt Ltd",
    score: 94,
    status: "Eligible",
    risk: "Low",
    verdict: "Strongly Recommended",
  },
  {
    name: "Zenith Build Systems",
    score: 76,
    status: "Review",
    risk: "Medium",
    verdict: "Officer Review Needed",
  },
  {
    name: "Nova Works Consortium",
    score: 48,
    status: "Not Eligible",
    risk: "High",
    verdict: "Not Recommended",
  },
  {
    name: "Kaveri Tech Infra",
    score: 88,
    status: "Eligible",
    risk: "Low",
    verdict: "Recommended",
  },
];

export const chartData = [
  { day: "Mon", evaluated: 16, review: 5 },
  { day: "Tue", evaluated: 28, review: 8 },
  { day: "Wed", evaluated: 35, review: 9 },
  { day: "Thu", evaluated: 52, review: 13 },
  { day: "Fri", evaluated: 74, review: 14 },
  { day: "Sat", evaluated: 91, review: 19 },
  { day: "Sun", evaluated: 108, review: 21 },
];

export const riskFlags = [
  "Expired ISO 9001 certificate detected",
  "Turnover mismatch found in Nova Works",
  "Low OCR confidence in scanned compliance file",
  "One bidder has incomplete project proof",
];