from flask import Flask, render_template, request, jsonify
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/detect', methods=['POST'])
def detect():
    data = request.json

    # ---- CNN MODEL YAHAN AAYEGA ----
    # abhi demo ke liye random
    disease = random.choice(["YES", "NO"])

    return jsonify({
        "disease": disease
    })

if __name__ == '__main__':
    app.run(debug=True)
