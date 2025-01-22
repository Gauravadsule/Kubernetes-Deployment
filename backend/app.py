from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({"message": "Hello from Flask!"})

@app.route('/api/submit', methods=['POST'])
def submit_data():
    data = request.json
    response = {
        "selected_option": data.get("option"),
        "status": "Data received successfully!"
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)