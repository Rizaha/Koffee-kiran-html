const divnavbarlogin = document.querySelector('#login')

divnavbarlogin.innerHTML += `<form class="modal-content animate" id='formlogin' method="post">
<div class="imgcontainer">
    <span onclick="document.getElementById('login').style.display='none'" class="close"
        title="Close Modal">&times;</span>
    <img src="login-avatar.png" alt="Avatar" class="avatar">
</div>
<div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Masukan Username.." id="loguname" name="uname" required>

    <label for="pass"><b>Password</b></label>
    <input type="password" placeholder="Masukan Password.." id="logpass" name="pass" required>

    <submit type="button" id="masuk">Masuk</submit>

    
</div>
<div class="container" style="background-color: white;">
    <span>Belum punya akun?</span>
    <button type="button"
        onclick="document.getElementById('login').style.display='none'; document.getElementById('daftar').style.display='block'"
        class="daftarbtn">Daftar</button>
</div>
</form>`