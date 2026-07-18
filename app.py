from flask import Flask, render_template, request, jsonify
import joblib

app = Flask(__name__)

# Load Trained Model
model = joblib.load("model.pkl")


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/predict", methods=["POST"])
def predict():

    data = request.get_json()

    area = float(data["area"])
    bedrooms = float(data["bedrooms"])
    bathrooms = float(data["bathrooms"])

    prediction = model.predict([[area, bedrooms, bathrooms]])

    return jsonify({
        "price": round(prediction[0], 2)
    })


if __name__ == "__main__":
    app.run(debug=True)