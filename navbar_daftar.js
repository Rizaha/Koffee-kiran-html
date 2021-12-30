const divnavbardaftar = document.querySelector('#daftar')

divnavbardaftar.innerHTML += `<form class="modal-content animate" name="RegistForm" method="post">
<div class="imgcontainer">
    <span onclick="clsdaf()" class="close" title="Close Modal">&times;</span>
    <img src="welcome.jpg" alt="Avatar" class="avatar">
</div>
<div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Masukan Username.." id="rgstuname" name="uname" required>

    <label for="mail"><b>Email</b></label>
    <input type="email" placeholder="Masukan Email.." id="rgstmail" name="mail" required>


    <label for="pass"><b>Password</b></label>
    <input type="password" placeholder="Masukan Password.." id="rgstpass" name="pass" required>



    <submit type="button" onclick=" validasi(); regist(); done()" id="done">Daftar</submit>

    
</div>
<div class="container" style="background-color: white;">
    <button type="button" onclick="clsdaf()" class="cancelbtn">Cancel</button>
</div>
</form>`