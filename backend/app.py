from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message')
    # Here you would integrate your AI model to generate a response
    response = f"You said: {user_input}"  # Placeholder response
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)