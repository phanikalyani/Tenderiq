import google.generativeai as genai
import os

genai.configure(api_key="YOUR_GEMINI_API_KEY")

model = genai.GenerativeModel("gemini-pro")

def evaluate_with_ai(tender_text, bidder_text):
    prompt = f"""
    Analyze this tender and bidder proposal.

    Tender:
    {tender_text}

    Bidder:
    {bidder_text}

    Give:
    - Score (0-100)
    - Decision (Approved/Rejected)
    - Reason
    """

    response = model.generate_content(prompt)
    return response.text