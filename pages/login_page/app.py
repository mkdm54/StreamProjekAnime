from flask import Flask, render_template, request, redirect, url_for, flash, send_from_directory
import os

app = Flask(__name__)

ADMIN_WEB = 'admin'
PASSWORD = 'login123'

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/login', methods=['POST'])
def validation():
    username = request.form.get('username')
    password = request.form.get('password')
    
    if username != ADMIN_WEB:
        flash('Username salah')
        return redirect(url_for('index'))


if __name__ == '__main__':
    app.run(debug=True)