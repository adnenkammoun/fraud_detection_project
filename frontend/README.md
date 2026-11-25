FraudShield AI 🛡️
Fraud Detection System with Machine Learning, FastAPI & React Dashboard

📋 Project Overview
FraudShield AI is a complete end-to-end Machine Learning system that detects fraudulent credit card transactions in real-time. The system includes a trained ML model, a REST API backend, and an interactive dashboard.
Dataset: Credit Card Fraud Detection (Kaggle)

284,807 transactions
492 fraud cases (0.172%)
Features V1-V28 (PCA transformed)


🎯 Results
MetricValueAUC Score0.9936Precision88.89%Recall76.19%AlgorithmRandom ForestThreshold0.76

🏗️ Project Structure
fraud_detection_project/
│
├── api/                    # FastAPI backend
│   └── app.py
│
├── code/                   # Modular Python scripts
│
├── data/                   # Dataset (not included)
│   └── creditcard_clean.csv
│
├── frontend/               # React dashboard
│
├── models/                 # Saved models
│   ├── fraud_model.pkl
│   └── scaler.pkl
│
├── notebooks/              # Jupyter notebooks
│   └── eda.ipynb
│
├── requirements.txt
└── README.md

⚙️ ML Pipeline

EDA — Exploratory Data Analysis, class imbalance visualization
Preprocessing — Train/test split, StandardScaler normalization
SMOTE — Synthetic Minority Oversampling to handle class imbalance
Modeling — RandomForestClassifier with optimal parameters
Evaluation — Classification report, Confusion Matrix, ROC Curve
Threshold Tuning — Optimal threshold = 0.76
MLflow — Experiment tracking and model logging
FastAPI — REST API for real-time predictions


🚀 Installation & Setup
1. Clone the repository
bashgit clone https://github.com/adnenkammoun/fraud_detection_project.git
cd fraud_detection_project
2. Create virtual environment
bashpython -m venv venv
venv\Scripts\activate      # Windows
source venv/bin/activate   # Linux/Mac
3. Install dependencies
bashpip install -r requirements.txt
4. Download the dataset
Download from Kaggle and place in data/ folder.
5. Run the notebook
Open notebooks/eda.ipynb and run all cells to train the model and save it.

🌐 Running the API
bashcd api
uvicorn app:app --reload
API will be available at: http://127.0.0.1:8000
API Documentation: http://127.0.0.1:8000/docs
Endpoints
MethodEndpointDescriptionGET/API statusGET/healthModel health checkPOST/predictPredict fraud or normal
Example Request
jsonPOST /predict
{
  "features": [0, -1.35, -0.07, 2.53, 1.37, -0.33, 
               0.46, 0.23, 0.09, 0.36, 0.09, -0.55,
               -0.61, -0.99, -0.31, 1.46, -0.47, 0.20,
               0.02, 0.40, 0.25, -0.01, 0.27, -0.11,
               0.06, 0.12, -0.18, 0.13, -0.02, 149.62]
}
Example Response
json{
  "prediction": "normal",
  "probabilite": 0.0234
}

🖥️ Running the Frontend
bashcd frontend
npm install
npm run dev
Dashboard will be available at: http://localhost:5173

📊 MLflow Tracking
bashcd notebooks
mlflow ui --backend-store-uri sqlite:///mlflow.db
MLflow UI: http://127.0.0.1:5000

🤖 Model Details
ParameterValueAlgorithmRandom Forestn_estimators50max_depth10Imbalance handlingSMOTEHyperparameter tuningGridSearchCVExperiment trackingMLflowDecision threshold0.76

👨‍💻 Author
Adnen Kammoun

GitHub: @adnenkammoun


📚 References

Credit Card Fraud Detection Dataset - Kaggle
Scikit-learn Documentation
FastAPI Documentation
MLflow Documentation