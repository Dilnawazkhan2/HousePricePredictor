import pandas as pd
from sklearn.linear_model import LinearRegression
import joblib

# Dataset Load
data = pd.read_csv("house_prices.csv")

# Features (Input)
X = data[["Area", "Bedrooms", "Bathrooms"]]

# Target (Output)
y = data["Price"]

# Model
model = LinearRegression()

# Training
model.fit(X, y)

# Save Model
joblib.dump(model, "model.pkl")

print("✅ Model Trained Successfully!")