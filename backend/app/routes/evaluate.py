from fastapi import APIRouter, UploadFile, File, Form
from app.services.pdf_service import extract_text_from_pdf
from app.services.ai_service import evaluate_with_ai

router = APIRouter()

@router.post("/upload")
async def evaluate_pdf(
    tender_pdf: UploadFile = File(...),
    bidder_text: str = Form(...)
):
    tender_text = extract_text_from_pdf(tender_pdf)

    result = evaluate_with_ai(tender_text, bidder_text)

    return {
        "tender_text_preview": tender_text[:500],
        "ai_result": result
    }