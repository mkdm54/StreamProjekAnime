const username = document.getElementsByName('username')[0];
const inputPassword = document.getElementById('password');
const lihatPassword = document.getElementById('lihat-password');

//* fungsi untuk mengubah tipe input menjadi teks jika dicentang input type nya berubah jadi tex, jika tidak berubah jadi password
lihatPassword.addEventListener('input', (e) => {
    if (e.target.checked) {
        inputPassword.setAttribute('type', 'text');
    }
    else {
        inputPassword.setAttribute('type', 'password');
    }
});

const usernameErrorMessage = document.getElementById('username-error-message');
const passwordErrorMessage = document.getElementById('password-error-message');

document.getElementById('form-login').addEventListener('submit', async function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const url = 'http://127.0.0.1:5000/login';

    //* Mengosongkan pesan error setiap kali ada permintaan baru
    usernameErrorMessage.innerHTML = '';
    passwordErrorMessage.innerHTML = '';

    usernameErrorMessage.style.color = 'red';
    passwordErrorMessage.style.color = 'red';

    try {
        const response = await fetch(url, { method: 'POST', body: formData });
        const result = await response.json();
        if (result.status === 'error') {
            // Reset pesan error
            result.messages.forEach(message => {
                if (message.includes('Username')) {
                    usernameErrorMessage.innerHTML = message;
                }
                else if (message.includes('Password')) {
                    passwordErrorMessage.innerHTML = message;
                }
            });
        }
        else {
            alert(result.message);
            window.location.href = '/dashboard'
        }
    }
    catch (error) {
        console.error(error.message);
    }
});