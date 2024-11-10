import sys
import subprocess

# Jika tidak ada libary flask dan werkzeug, akan diinstal otomatis menggunakan try except
try:
    from flask import Flask, render_template, request, jsonify
    from werkzeug.security import check_password_hash, generate_password_hash
except ImportError as e:
    missing_package = str(e).split(" ")[-1]
    print(f"{missing_package} tidak ditemukan. Menginstal {missing_package}...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", missing_package])
    from flask import Flask, render_template, request, jsonify
    from werkzeug.security import check_password_hash, generate_password_hash

app = Flask(__name__)

ADMIN_WEB = 'admin'
PASSWORD_HASH = generate_password_hash('admin123')

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
    
    errors = []
    
    if username != ADMIN_WEB:
        errors.append('Username salah')
    if not check_password_hash(PASSWORD_HASH, password):
        errors.append('Password salah')
    
    # Jika ada error, kirim semua pesan error
    if errors:
        return jsonify({'status': 'error', 'messages': errors}), 400
    
    # * Jika username dan password benar
    return jsonify({'status': 'success', 'message': 'login berhasil'}), 200

if __name__ == '__main__':
    app.run(debug=True)