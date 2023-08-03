<template>
<!DOCTYPE html>
<html>
<head>
<title></title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>
<body>

<!-- !PAGE CONTENT! -->
<div class="w3-content" style="max-width:1500px">

<!-- Header -->
<header class="w3-center w3-margin-bottom w3-white" style="padding:128px 16px">
    <h1><b>PHOTFOLIO</b></h1>
    <br><br>
  <p>Celebrate the artistry of our members through captivating visual narratives exhibited in our portfolio.</p>

  <div class="w3-bar w3-light-grey w3-round w3-display-bottommiddle w3-hide-small" style="bottom:15px">
    <a href="/" class="w3-bar-item w3-button w3-text-black">Home</a>
    <a href="/annoncing" class="w3-bar-item w3-button w3-text-black">Announcing</a>
    <a href="/front" class="w3-bar-item w3-button w3-text-black">Article</a>
  </div>
  
 
</header>

<!-- Photo Grid -->
<!-- <div class="w3-row-padding" id="myGrid" style="margin-bottom:128px">
  
  
  <div class="w3-third" v-for="values in post_data" :key="values.id">
    <img :src="values.url" style="width:100%" alt="peera">
  
  </div>

 
  

  
</div> -->



<div class="w3-row-padding">
    <div class="w3-third w3-container w3-margin-bottom" v-for="values in post_data" :key="values.id">
      <img :src="values.url" style="width:100%" alt="peera">
      <div class="w3-container w3-white">
        <p><b>{{values.title}}</b></p>
        <p>{{values.description}}</p>
      </div>
    </div>

  </div>
  
<!-- End Page Content -->
</div>

<!-- Footer -->


</body>
<!-- <footer class="w3-container w3-padding-64 w3-dark-grey w3-center w3-opacity w3-large"> 
  <i class="fa fa-facebook-official w3-hover-opacity"></i>
  <i class="fa fa-instagram w3-hover-opacity"></i>
  <i class="fa fa-snapchat w3-hover-opacity"></i>
  <i class="fa fa-pinterest-p w3-hover-opacity"></i>
  <i class="fa fa-twitter w3-hover-opacity"></i>
  <i class="fa fa-linkedin w3-hover-opacity"></i>
  <p class="w3-medium">Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" class="w3-hover-opacity w3-medium">University of Jaffna#media club</a></p> 
 <p class="w3-medium">Powered by university of jaffna#media club</p> -->
 <!-- </footer> --> 
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
        .get("http://127.0.0.1:8000/api/getImage")
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
<style scoped>



@media screen and (max-width: 600px)
{
  body,h1 {font-family: "Raleway", Arial, sans-serif}
h1 {letter-spacing: 6px}
.w3-row-padding img {margin-bottom: 12px}

.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    padding: 5px;
    
}
}


</style>