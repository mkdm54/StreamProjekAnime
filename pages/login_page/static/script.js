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

document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const url = this.action;
    try {
        const response = await fetch(url, { method: 'POST', body: formData });
        const result = await response.json();
        if (result.status === 'error') {
            alert(result.message);
        }
        else {
            alert(result.message);
        }
    }
    catch (error) {
        console.error(error.message); }
});