import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import logo from './logo.png';
import logos from './byr1.png';
import gbr from './byr11.png';
import g1 from './gbr.png';
import g2 from './sos.png';
import g3 from './orang.png';
import pulsa from './pulsa.png';
import lampu from './lampu.png';
import air from './air.png';






class App extends Component {
  render() {
    return (
      <Router> 
  <div className="App">
    <nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#myPage"><h2><b>8Villages BUY</b></h2></a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav navbar-right"><br /><br />
        <li><Link to="/about">BERANDA &nbsp;|</Link></li>
        <li><Link to="/promo">PROMO &nbsp;|</Link></li>
        <li><Link to="/profil">PROFIL</Link></li>
      </ul>
    </div>
  </div>
</nav>
<div class="jumbotron text-center"><br/>

<h2><font color="white">Permudah Aktifitas Transaksi <br/><br/> dengan <i>8 Villages Buy </i></font> </h2> 
  Simpan Uang anda di 8 Villages Buy  lakukan transaksi dengan cepat dan mudah <br />
    Bayar tagihan listrik,tagihan Air , beli pulsa dan Token listrik dan dapatkan promo menarik ayo download 
    aplikasi sekarang.<br/><br/>
    <img src={logos} alt="Logo" width="10%" />&nbsp;&nbsp;<img src={logos} alt="Logo" width="10%" />
</div>
<div class="container-fluid ">

  
  <Route path="/about" component={About} />
  <Route path="/promo" component={Promo} />
  <Route path="/profil" component={Profil} />

 
 

</div>
<div class="container-fluid-1"><br/>
<h2> <font color="white">Transaksi Jadi lebih Mudah, Cepat dan Nyaman <br/> dengan 8 Villages Buy </font> </h2>
<img src={g3} alt="Logo" width="30%" /><img src={logos} alt="Logo" width="10%" /><img src={g3} alt="Logo" width="30%" />
<div class="col-sm-4"></div>


</div>

<div class="container-fluid bg-grey">
<h1> FAQ </h1><br />
<div class="col-sm-4"><div class="alert alert-success">
  <strong>Apa itu 8Villages Buy ?</strong> <br /> <b>8Villages Buy</b> adalah sebuah Aplikasi yang memudahkan seseorang dalam 
  bertransaksi dan membayar tagihan dengan mudah dan cepat.
</div>
 </div>
 <div class="col-sm-4"><div class="alert alert-success">
  <strong>Bagaimana Saya mendapatkan Aplikasi 8Villages Buy ? </strong>
  Anda bisa mendapatkan Aplikasi <b>8Villages Buy</b> di <font color="#00b300">App Store, Playstore dan Web Browser</font>
</div>
 </div>
 <div class="col-sm-4">
 <div class="alert alert-success">
  <strong>Layanan Apa  yang tersedia di 8Villages Buy ?</strong> 
  <br /> Layanan yang disediakan oleh <b> 8Villages Buy </b> yaitu pembayaran tagihan Listrik, tagihan Air, Pembelian pulsa
  Pembelian Token Listrik, Pembayaran Belanjaan .
</div>
 </div>
  </div>

  <footer class="container-fluid text-center">
  <div class="col-sm-8"><p align="left"><br/><br /> <h1>Dapatkan Aplikasi 8 Villages Buy</h1></p>
  <p align="left"> <img src={g1} alt="Logo" width="60%" /></p>
  <p align="left"> <b>8Villages</b> sudah terpercaya dan sudah banyak yang terbantu dan memakai aplikasi
  ini untuk <br />kemudahan bertransaksi dengan nyaman dan aman </p></div>
  <div class="col-sm-4"><img src={gbr} alt="Logo" width="40%" /><br/><br /> Sosial Media <br /><br /><img src={g2} alt="Logo" width="90%" />
  </div>
</footer>
 </div>
 </Router>
    );
    
  }
}


class About extends Component {
  render() {
 

  return (
    <div>
      <div class="col-sm-8"> 
 
     
 <img src={gbr} alt="Logo" width="30%" />

  
 
</div>
<div class="col-sm-4"> <p align="left"><h1> Satu Akun Untuk Kemudahan Transaksi </h1></p><br/>
<p align="justify"> Hanya dengan mendownload Aplikasi <b>8Villages Buy</b> di Playstore, kamu bisa melakukan 
banyak transaksi dengan mudah dan cepat, seperti membayar tagihan listrik, tagihan air, beli token listrik 
dan pulsa hanya dengan sekali klik saja. Selain itu <b>8Villages Buy</b> menyediakan promo menarik dan menggiurkan 
loh akan selalu ada diskon disetiap minggunya, dan bagi Customer yang sering melakukan transaksi dengan <b>
8Villages Buy </b> akan ada bonus atau hadiah menarik. ayo tunggu apalagi donwload aplikasi 
<b> 8Villages Buy</b> sekarang juga !!!</p>
</div>
    </div>
  );

    
}
}


class Promo extends Component {
  render() {
 

  return (
     <div>
     <h3> <b>8Villages Buy Promo </b></h3>
     <div class="row"><br/>
     
  <div class="col-sm-4"> <div class="panel panel-danger">
      <div class="panel-heading"> <img src={pulsa} alt="Logo" width="60%" /><br/> PULSA GRATIS Sampai Akhir Januari 2019</div>
      <div class="panel-body"> Jika kamu ingin mendapatkan pulsa gratis, buat akun <b> 8Villages Buy </b> dan gunakan 
      aplikasi mobile terbaru dari <b>8Villages buy</b>. Setiap kali kamu bertransaksi via aplikasi atau web <b>8Villages Buy</b>
       , kamu akan secara otomatis mendapatkan 8VillagesPoints, yang bisa ditukarkan dengan 
       berbagai voucher pulsa.</div>
    </div>
  </div>
  <div class="col-sm-4"> <div class="panel panel-danger">
      <div class="panel-heading"><img src={lampu} alt="Logo" width="44%" /><br /> <b>Promo Tagihan Listrik</b> </div>
      <div class="panel-body">Cashback hingga Rp75.000 Bayar Tagihan Listrik Promo berlaku untuk minimum transaksi Rp200.000.
      Promo berlaku selama periode 1-3 Januari dan 7-8 Januari 2019.Satu pengguna <b>8Villages Buy</b> 
      bisa mengikuti promo ini sebanyak 1 (satu) kali selama  promo.</div>
    </div>
  </div>

  <div class="col-sm-4"> <div class="panel panel-danger">
      <div class="panel-heading"><img src={air} alt="Logo" width="44%" /><br /> <b>Promo Tagihan Air Cashback s.d Rp100.000</b></div>
      <div class="panel-body">Promo berlaku selama periode 1 Februari – Akhir Februari 2019
      Promo hanya berlaku untuk pembayaran tagihan air Aetra di 8Villages Buy Untuk mengikuti promo ini, pengguna harus memasukkan kode 
      promo (yang dikirimkan melalui SMS) pada halaman pembayaran.. </div>
    </div>
  </div>
  <div class="col-sm-4"> <div class="panel panel-danger">
      <div class="panel-heading"><img src={air} alt="Logo" width="44%" /><br /> <b>Promo Tagihan Air Cashback s.d Rp100.000</b></div>
      <div class="panel-body">Promo berlaku selama periode 1 Februari – Akhir Februari 2019
      Promo hanya berlaku untuk pembayaran tagihan air Aetra di 8Villages Buy Untuk mengikuti promo ini, pengguna harus memasukkan kode 
      promo (yang dikirimkan melalui SMS) pada halaman pembayaran.. </div>
    </div>
  </div>
  <div class="col-sm-4"> <div class="panel panel-danger">
      <div class="panel-heading"> <img src={pulsa} alt="Logo" width="60%" /><br/> PULSA GRATIS Sampai Akhir Januari 2019</div>
      <div class="panel-body"> Jika kamu ingin mendapatkan pulsa gratis, buat akun <b> 8Villages Buy </b> dan gunakan 
      aplikasi mobile terbaru dari <b>8Villages buy</b>. Setiap kali kamu bertransaksi via aplikasi atau web <b>8Villages Buy</b>
       , kamu akan secara otomatis mendapatkan 8VillagesPoints, yang bisa ditukarkan dengan 
       berbagai voucher pulsa.</div>
    </div>
  </div>
  <div class="col-sm-4"> <div class="panel panel-danger">
      <div class="panel-heading"><img src={lampu} alt="Logo" width="44%" /><br /> <b>Promo Tagihan Listrik</b> </div>
      <div class="panel-body">Cashback hingga Rp75.000 Bayar Tagihan Listrik Promo berlaku untuk minimum transaksi Rp200.000.
      Promo berlaku selama periode 1-3 Januari dan 7-8 Januari 2019.Satu pengguna <b>8Villages Buy</b> 
      bisa mengikuti promo ini sebanyak 1 (satu) kali selama  promo.</div>
    </div>
  </div>
</div>

</div>
     
  

   
  );

    
}
}

class Profil extends Component {
  render() {
 


  return (
     <div>
      <div class="panel panel-success">
      <div class="panel-heading">Hasil Test Koding React JS. </div>
      <div class="panel-body"><p align="left"><font color="black">Berikut Hasil Test Soal dari React JS, mohon
      maaf apabila masih adanya kekurangan dalam tampilan website dengan menggunakan React JS. terimakasi atas perhatian
      dan waktunya yang sudah diluangkan untuk melihat hasil test React Js ini. Besar harapan saya agar dapat diterima 
      di PT.8 Villages.<br/>
      Dengan Hormat <br/>
      Nadia Salsabil</font></p></div>
    </div>



</div>
     
  

   
  );

    
}
}




export default App;
