from flask import Flask, render_template, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

# Load the trained model
model = joblib.load('linear_model.pkl')

# Home route to render the front-end
@app.route('/')
def home():
    return render_template('index.html')

# Prediction API
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    x1 = data.get('x1', 0)
    x2 = data.get('x2', 0)
    prediction = model.predict(np.array([[x1, x2]]))[0]
    return jsonify({'prediction': round(prediction, 2)})

if __name__ == '__main__':
    app.run(debug=True)

