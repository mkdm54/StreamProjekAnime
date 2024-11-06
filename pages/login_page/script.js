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