from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
import os

app = Flask(__name__)

ADMIN_WEB = 'admin'
PASSWORD = 'login123'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/dashboard')
def halaman_utama():
    return render_template('dashboard/halaman_utama.html')
    

@app.route('/login', methods=['POST'])
def validation():
    username = request.form.get('username')
    password = request.form.get('password')
    
    if username != ADMIN_WEB and password != PASSWORD:
        return jsonify({'status': 'error', 'message': 'Username dan Password salah'}), 400
    elif username != ADMIN_WEB:
        return jsonify({'status': 'error', 'message': 'Username salah'}), 401
    elif password != PASSWORD:
        return jsonify({'status': 'error', 'message': 'Password salah'}), 401
    else:
        return jsonify({'status': 'succes', 'message': 'login berhassil'}), 200


if __name__ == '__main__':
    app.run(debug=True)