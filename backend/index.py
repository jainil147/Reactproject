from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from werkzeug.security import generate_password_hash

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])  # Allow frontend at this origin

client = MongoClient("mongodb://127.0.0.1:27017/yourDB-name")  # Replace with your MongoDB connection details
db = client["yourDB-name"]
users_collection = db["users"]

@app.route("/")
def index():
    return jsonify({"message": "App is Working"})

@app.route("/register", methods=["POST"])
def register():

    user_data = request.get_json()

    username = user_data['name']
    email = user_data['email']
    password = user_data['password']
    mobilenumber = user_data['moblieNumber']

    hashed_password = generate_password_hash(password)

    user = {
        'name' : username,
        'password' : hashed_password,
        'email': email ,
        'moblieNumber' : mobilenumber


    }

    users_collection.insert_one(user)
    # registered_user = users_collection.find_one({"_id": result.inserted_id})

    return jsonify({"message": "successful fuck"})


    # user_data = request.get_json()

    # try:
    #     result = users_collection.insert_one(user_data)
    #     registered_user = users_collection.find_one({"_id": result.inserted_id})

    #     # Exclude password from response
    #     registered_user.pop("password")

    #     return jsonify(registered_user)

    # except Exception as e:
    #     return jsonify({"error": "Something went wrong"}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
