from flask import Flask, request, jsonify
from flask_cors import CORS
from password_gen import PasswordGenerator

app = Flask(__name__)
CORS(app)

@app.route('/generate', methods=['POST'])
def generate():
    data = request.get_json()
    password = PasswordGenerator.generate(data)
    return jsonify({'password': password})
