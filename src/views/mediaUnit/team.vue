<template>
<!DOCTYPE html>
<html>
<head>
<title></title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-black.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body id="myPage">

<!-- Sidebar on click -->
<nav class="w3-sidebar w3-bar-block w3-white w3-card w3-animate-left w3-xxlarge" style="display:none;z-index:2" id="mySidebar">
  <a href="javascript:void(0)" onclick="w3_close()" class="w3-bar-item w3-button w3-display-topright w3-text-teal">Close
    <i class="fa fa-remove"></i>
  </a>
  <!-- <a href="#" class="w3-bar-item w3-button">Link 1</a>
  <a href="#" class="w3-bar-item w3-button">Link 2</a>
  <a href="#" class="w3-bar-item w3-button">Link 3</a>
  <a href="#" class="w3-bar-item w3-button">Link 4</a>
  <a href="#" class="w3-bar-item w3-button">Link 5</a> -->
</nav>

<!-- Navbar -->
<div class="w3-top">
 <div class="w3-bar w3-theme-d2 w3-left-align">
  <a class="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-hover-white w3-theme-d2" href="javascript:void(0);" onclick="openNav()"><i class="fa fa-bars"></i></a>
  <a href="/" class="w3-bar-item w3-button w3-teal"><i class="fa fa-home w3-margin-right"></i>Home</a>
  <!-- <a href="#/front" class="w3-bar-item w3-button w3-hide-small w3-hover-white">Contact</a> -->
  
    <div class="w3-dropdown-hover w3-hide-small">
      
   
  </div>
   </div>

  <!-- Navbar on small screens -->
 
</div>

<!-- Image Header -->
<div class="w3-display-container w3-animate-opacity">
  <img src="/w3images/sailboat.jpg" alt="boat" style="width:100%;min-height:350px;max-height:600px;">
 
</div>

<!-- Modal -->


<!-- Team Container -->
<div class="w3-container w3-padding-64 w3-center" id="team">
<h2><b>OUR TEAM</b></h2>
<p>Meet the team</p>

<div class="w3-row nkn"><br>

<div class="w3-quarter xzx">
  <img src="@/assets/51.jpg" alt="Boss" style="width:45%" class="w3-circle w3-hover-opacity">
  <h3 class="kkkl">Peerix Imesh</h3>
  <p>photographer</p>
</div>

<div class="w3-quarter">
  <img src="@/assets/ht.jpg" alt="Boss" style="width:45%" class="w3-circle w3-hover-opacity">
  <h3 class="kkkl">Yasindu Weerakkody</h3>
  <p>Announcer</p>
</div>

<div class="w3-quarter">
  <img src="@/assets/6.jpg" alt="Boss" style="width:45%" class="w3-circle w3-hover-opacity">
  <h3 class="kkkl">Sanju bandara</h3>
  <p>Article</p>
</div>



</div>
</div>

<!-- Work Row -->
<div class="w3-row-padding w3-padding-64 w3-theme-l1" id="work">

<div class="w3-quarter">
<h2>Our Team</h2>
<p>Our creativity is without limits, while our styling and tone are tailor-made to satisfy your needs and meet your target audience.
Our editors have the drive and years of experience in different types of writing, with a passion for languages.Our multimedia experts incorporate the latest developments and trends to create remarkable content in any sformat.</p>
</div>

<div class="w3-quarter">
<div class="w3-card w3-white">
  <img src="@/assets/5885.jpg" alt="Snow" style="width:100%">
  <div class="w3-container">
  <h3><b>Imesh peeris</b></h3>
  <h4><b>Announcer</b></h4>
  <p>2018/2019 Batch</p>
  </div>
  </div>
</div>

<div class="w3-quarter">
<div class="w3-card w3-white ftv">
  <img src="@/assets/htt.jpg" alt="Lights" style="width:100%">
  <div class="w3-container">
  <h3><b>Yasindu Weerakkody</b></h3>
  <h4><b>photographer</b></h4>
  <p>2018/2019 Batch</p>
  
  </div>
  </div>
</div>

<div class="w3-quarter">
<div class="w3-card w3-white">
  <img src="@/assets/6.jpg" alt="Mountains" style="width:100%">
  <div class="w3-container">
    <h3><b>Sanju Bandara</b></h3>
  <h4><b>Article</b></h4>
  <p>2019/2020 Batch</p>
  </div>
  </div>
</div>

</div>

<!-- Container -->
<!-- <div class="w3-container" style="position:relative">
  <a onclick="w3_open()" class="w3-button w3-xlarge w3-circle w3-teal"
  style="position:absolute;top:-28px;right:24px">+</a>
</div> -->

<!-- Pricing Row -->

<!-- Contact Container -->
<!-- <div class="w3-container w3-padding-64 w3-theme-l5" id="contact">
  <div class="w3-row">
    <div class="w3-col m5">
    <div class="w3-padding-16"><span class="w3-xlarge w3-border-teal w3-bottombar">Contact Us</span></div>
      <h3>Address</h3>
      <p>Swing by for a cup of coffee, or whatever.</p>
      <p><i class="fa fa-map-marker w3-text-teal w3-xlarge"></i>  Vavuniya, sl</p>
      <p><i class="fa fa-phone w3-text-teal w3-xlarge"></i>  +00 1515151515</p>
      <p><i class="fa fa-envelope-o w3-text-teal w3-xlarge"></i>  test@test.com</p>
    </div>
    <div class="w3-col m7">
      <form class="w3-container w3-card-4 w3-padding-16 w3-white" action="/action_page.php" target="_blank">
      <div class="w3-section">      
        <label>Name</label>
        <input class="w3-input" type="text" name="Name" required>
      </div>
      <div class="w3-section">      
        <label>Email</label>
        <input class="w3-input" type="text" name="Email" required>
      </div>
      <div class="w3-section">      
        <label>Message</label>
        <input class="w3-input" type="text" name="Message" required>
      </div>  
      <input class="w3-check" type="checkbox" checked name="Like">
      <label>I Like it!</label>
      <button type="submit" class="w3-button w3-right w3-theme">Send</button>
      </form>
    </div>
  </div>
</div> -->

<!-- Image of location/map -->


<!-- Footer -->
<footer class="w3-container w3-padding-32 w3-theme-d1 w3-center">
  <h4>Follow Us</h4>
  <a class="w3-button w3-large w3-teal" href="javascript:void(0)" title="Facebook"><i class="fa fa-facebook"></i></a>
  <a class="w3-button w3-large w3-teal" href="javascript:void(0)" title="Twitter"><i class="fa fa-twitter"></i></a>
  <a class="w3-button w3-large w3-teal" href="javascript:void(0)" title="Google +"><i class="fa fa-google-plus"></i></a>
  <a class="w3-button w3-large w3-teal" href="javascript:void(0)" title="Google +"><i class="fa fa-instagram"></i></a>
  <a class="w3-button w3-large w3-teal w3-hide-small" href="javascript:void(0)" title="Linkedin"><i class="fa fa-linkedin"></i></a>
  <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">#uov</a></p>

  <div style="position:relative;bottom:100px;z-index:1;" class="w3-tooltip w3-right">
    <span class="w3-text w3-padding w3-teal w3-hide-small">Go To Top</span>   
    <a class="w3-button w3-theme" href="#myPage"><span class="w3-xlarge">
    <i class="fa fa-chevron-circle-up"></i></span></a>
  </div>
</footer>



</body>
</html>

</template>
<script>
</script>
<style>

.nkn{
  margin: 50px 0px 0px 400px;
  display:block;
 
}

.kkkl{
  font-size: 20px;
}
</style>