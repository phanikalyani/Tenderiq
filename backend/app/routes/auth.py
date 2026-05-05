from fastapi import APIRouter
from app.auth_utils import create_token

router = APIRouter()
class User(BaseModel):
    email: str
    password: str

@router.post("/signup")
def signup(user: User):
    return {"message": "User created successfully"}
@router.post("/login")
def login(data: dict):
    email = data.get("email")
    password = data.get("password")

    # 🔴 Replace with DB validation later
    if email == "admin@test.com" and password == "root":
        token = create_token({"sub": email})
        return {"access_token": token}

    return {"error": "Invalid credentials"}
