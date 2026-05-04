from fastapi import FastAPI
from app.database import Base, engine

# ✅ CREATE APP FIRST
app = FastAPI()

# ✅ CREATE TABLES
Base.metadata.create_all(bind=engine)

# ✅ IMPORT ROUTES AFTER APP
from app.routes.auth import router as auth_router
from app.routes.tender import router as tender_router
from app.routes.evaluate import router as evaluate_router

# ✅ INCLUDE ROUTERS
app.include_router(auth_router, prefix="/auth")
app.include_router(tender_router, prefix="/tenders")
app.include_router(evaluate_router, prefix="/evaluate")


@app.get("/")
def root():
    return {"message": "TenderIQ Backend Running 🚀"}