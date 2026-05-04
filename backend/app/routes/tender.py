from fastapi import APIRouter
from app.database import SessionLocal
from app.models.tender import Tender

router = APIRouter()

@router.post("/")
def create_tender(title: str, description: str):
    db = SessionLocal()
    tender = Tender(title=title, description=description)
    db.add(tender)
    db.commit()
    return {"message": "Tender created"}
@router.get("/")
def get_tenders():
    db = SessionLocal()
    return db.query(Tender).all()