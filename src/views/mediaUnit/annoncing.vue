<template>
<!DOCTYPE html>
<html>
<head>
<title></title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>
<body>

<!-- Sidebar with image -->
<nav class="w3-sidebar w3-hide-medium w3-hide-small" style="width:40%">
  <div class="bgimg"></div>
</nav>

<!-- Hidden Sidebar (reveals when clicked on menu icon)-->
<nav class="w3-sidebar w3-black w3-animate-right w3-xxlarge" style="display:none;padding-top:150px;right:0;z-index:2" id="mySidebar">
  <a href="javascript:void(0)" onclick="closeNav()" class="w3-button w3-black w3-xxxlarge w3-display-topright" style="padding:0 12px;">
    <i class="fa fa-remove"></i>
  </a>
  <div class="w3-bar-block w3-center">
    <a href="#" class="w3-bar-item w3-button w3-text-grey w3-hover-black" onclick="closeNav()">Home</a>
    <a href="#portfolio" class="w3-bar-item w3-button w3-text-grey w3-hover-black" onclick="closeNav()">Portfolio</a>
    <a href="#about" class="w3-bar-item w3-button w3-text-grey w3-hover-black" onclick="closeNav()">About</a>
    <a href="#contact" class="w3-bar-item w3-button w3-text-grey w3-hover-black" onclick="closeNav()">Contact</a>
  </div>
</nav>

<!-- Page Content -->
<div class="w3-main w3-padding-large" style="margin-left:40%">

  <!-- Menu icon to open sidebar -->
 
  <!-- Header -->
  <header class="w3-container w3-center" style="padding:128px 16px" id="home">
    <h1 class="w3-jumbo"><b>Announcing</b></h1>
    <p>MEDIA unit-university of vavuniya</p>
   
  </header>

  <!-- Portfolio Section -->
  <div class="w3-padding-32 w3-content" id="portfolio">
    <h2 class="w3-text-grey">Events</h2>
    <hr class="w3-opacity">

    <!-- Grid for photos -->
    <div class="w3-row-padding">
    <div class="w3-third w3-container w3-margin-bottom" v-for="values in post_data" :key="values.id">
      <img :src="values.url" style="width:100%" alt="peera">
      <div class="w3-container w3-white">
        <p><b>{{values.title}}</b></p>
        <p>{{values.description}}</p>
      </div>
    </div>

  </div>
  <!-- End Portfolio Section -->
  </div>

  <!-- About Section -->
  <div class="w3-content w3-justify w3-text-grey w3-padding-32" id="about">
    
    <hr class="w3-opacity">
 
    


  <!-- End About Section -->
  </div>

 
  
  <!-- Footer -->
  <footer class="w3-container w3-padding-64 w3-light-grey w3-center w3-opacity w3-xlarge" style="margin:-24px">
    <i class="fa fa-facebook-official w3-hover-opacity"></i>
    <i class="fa fa-instagram w3-hover-opacity"></i>
    <i class="fa fa-snapchat w3-hover-opacity"></i>
    <i class="fa fa-pinterest-p w3-hover-opacity"></i>
    <i class="fa fa-twitter w3-hover-opacity"></i>
    <i class="fa fa-linkedin w3-hover-opacity"></i>
    <p class="w3-medium">Powered by University of Jaffna#media club</p>
  <!-- End footer -->
  </footer>
  
<!-- END PAGE CONTENT -->
</div>



</body>
</html>

</template>

<script>

import axios from "axios";
  export default{
    data(){
      return {
        post_data:[],
      };
    },

    created(){
      this.get_post_data();
    },

    methods:{
      get_post_data(){
        axios
        .get("http://127.0.0.1:8000/api/getAnnounce")
        .then((response)=>{
          {
           
            this.post_data=response.data.data;
          }
        })
        .catch((error)=>{
          console.log(error);
        });
      },
    },
  };
</script>

<style>
body, h1,h2,h3,h4,h5,h6 {font-family: "Montserrat", sans-serif}
.w3-row-padding img {margin-bottom: 12px}
.bgimg {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('@/assets/123.jpg');
  min-height: 100%;

}
</style>