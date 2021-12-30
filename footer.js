const divfooter = document.querySelector('#footer')

divfooter.innerHTML += `<div class="footeratas">
<div class="footerkiri">
  <img src="logi.jpeg"><br><br>
  <p style="margin-left: 20px;">Koffee Kiran adalah sebuah cafe bergaya neo klasik menyajikan segala macam jenis kopi yang akan membuat para pelanggan melepasakan segala pikiran dan mulai memikirkan hal positif untuk memulai produktifitas yang lebih baik</p>
</div>
<div class="footertengah"> 
  <p style="color: rgb(77, 39, 17);">Ketahui Kami Lebih Lengkap di: </p><hr><br>
  <p><i class="fab fa-facebook-square fa-3x"></i>&nbsp; &nbsp;
  <i class="fab fa-instagram-square fa-3x"></i>&nbsp; &nbsp;
  <i class="fab fa-twitter-square fa-3x"></i>&nbsp; &nbsp;
  <i class="fab fa-pinterest-square fa-3x"></i>&nbsp; &nbsp;
  <i class="fab fa-youtube-square fa-3x"></i>&nbsp; &nbsp;
  <i class="fab fa-tiktok fa-3x"></i></p>
   <br>
  <p style="color: rgb(77, 39, 17);">Hubungi Kami: </p><hr>
  <p><i class="fas fa-phone-square-alt"></i> +62 877 776631123</p>
  <p><i class="fas fa-paper-plane"></i> koffeekiran@info.com</p>
</div>
<div class="footerkanan">
  <p style="color: rgb(77, 39, 17);">Kunjungi Kami: </p><hr><br>
  <p><i class="fa fa-map-marker"></i> Jln. Dr. Rum No. 24A, Pasir Kaliki Cicendo Bandung, Jawa Barat</p><br>
  <p><i class="fa fa-map-marker"></i> Jln. Pejuang 45 Gg. H. Sulaeman 1 No 14 Subang, Jawa Barat</p>
</div>
</div>
<div class="footerbawah">
<p><i class="fa fa-copyright"></i>2021 Copyright: KoffeeKiran <i class="fas fa-mug-hot"></i> | All Right Reserved</p>
</div>`

function bottom() {
    const footer = document.getElementById("footer");
    footer.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  };