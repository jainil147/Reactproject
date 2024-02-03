
from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)  # Enable CORS

client = MongoClient("mongodb://127.0.0.1:27017/yourDB-name")
db = client["yourDB-name"]  # Access the specific database
user_collection = db["users"]  # Access the "users" collection

@app.route("/")
def index():
    return jsonify({"message": "App is Working"})

@app.route("/register", methods=["POST"])
def register():
    user_data = request.json

    try:
        result = user_collection.insert_one(user_data)
        registered_user = user_collection.find_one({"_id": result.inserted_id})

        # Exclude password from response
        registered_user.pop("password")

        return jsonify(registered_user)

    except Exception as e:
        return jsonify({"error": "Something went wrong"}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
