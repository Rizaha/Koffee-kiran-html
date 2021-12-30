const divnavbar = document.querySelector('#navbar')

divnavbar.innerHTML += `<div class="logo">
<a href="home.html"><img src="logi.jpeg"></a>
</div>

<div>
<ul class="atas" id="navmasuk">
    <li><a onclick="document.getElementById('login').style.display='block'">Masuk</a></li>
    <li><a onclick="document.getElementById('daftar').style.display='block'">Daftar</a></li>
</ul>

<ul class="dropdown" id="navuser">
    <button class="dropbtn"> Hai <span id=useer>user</span>
        <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
        <a href="profil.html" id="profil">Profil</a>
        <a href="pesanan_berjalan.html" id="profil">Pesanan Berjalan</a>
        <a href="pesanan.html" id="profil">Riwayat Pemesanan</a>
        <a href="#" id="logout">Logout</a>
    </div>
</ul>

<ul class="bawah">
    <li><a href="home.html">Home</a></li>
    <li><a href="menu.html">Menu</a></li>
    <li><a onclick="bottom()">Tentang Kami</a></li>
</ul>
</div>

<div class="keranjang">
<a href="keranjang.html"><img src="shp_bskt.png"></a>
</div>`;