from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import numpy as np

app = FastAPI(title="FraudShield AI")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

model = joblib.load("../models/fraud_model.pkl")
scaler = joblib.load("../models/scaler.pkl")

class Transaction(BaseModel):
    features: list[float]

@app.get("/")
def home():
    return {"message": "FraudShield AI is running !"}

@app.get("/health")
def health():
    return {"status": "active", "model": "RandomForest"}

@app.post("/predict")
def predict(transaction: Transaction):
    data = np.array(transaction.features).reshape(1, -1)
    data_scaled = scaler.transform(data)
    proba = model.predict_proba(data_scaled)[0][1]
    prediction = "fraude" if proba > 0.76 else "normal"
    return {
        "prediction": prediction,
        "probabilite": round(float(proba), 4)
    }