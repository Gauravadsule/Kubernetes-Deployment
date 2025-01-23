from flask import Flask, jsonify, request

app = Flask(__name__)

# In-memory task list
tasks = [{"id": 1, "task": "Learn Flask"}, {"id": 2, "task": "Deploy with Kubernetes"}]

# REST API Routes
@app.route('/api/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

@app.route('/api/tasks', methods=['POST'])
def add_task():
    task = request.json
    tasks.append({"id": len(tasks) + 1, "task": task["task"]})
    return jsonify({"message": "Task added successfully!"}), 201

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)