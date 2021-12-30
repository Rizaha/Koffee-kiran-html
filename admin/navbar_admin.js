const divnavbar = document.querySelector('#navbar')

divnavbar.innerHTML += `<div class="navisi">
<div class="logo">
<a href="home_admin.html"><img src="logi.png"></a>
</div>

<div class="hai">
    <span > <i class="fa fa-coffee"></i> Welcome Home Rizki !</span>
</div>

<div class="logout">
<a><button style="font-size:24px" onclick="logout()">Logout <i class="fa fa-sign-out"></i></button></a>
</div>
</div>`;