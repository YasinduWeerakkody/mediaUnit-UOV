<template>
    <!DOCTYPE html>
<html>
<head>
<title></title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>
<body class="w3-light-grey">

<!-- Top container -->
<div class="w3-bar w3-top w3-black w3-large" style="z-index:4"> 
  <button class="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" ><i class="fa fa-bars"></i>  Menu</button>
  <span class="w3-bar-item w3-right">Logo</span>
</div>

<!-- Sidebar/menu -->
<nav class="w3-sidebar w3-collapse w3-white w3-animate-left" style="z-index:3;width:300px;" id="mySidebar"><br>
  <div class="w3-container w3-row">
    <div class="w3-col s4">
      <!-- <img src="/w3images/avatar2.png" class="w3-circle w3-margin-right" style="width:46px"> -->
    </div>
    <div class="w3-col s8 w3-bar">
      <span>Welcome, <strong>Mike</strong></span><br>
      <a href="#" class="w3-bar-item w3-button"><i class="fa fa-envelope"></i></a>
      <a href="#" class="w3-bar-item w3-button"><i class="fa fa-user"></i></a>
      <a href="#" class="w3-bar-item w3-button"><i class="fa fa-cog"></i></a>
    </div>
  </div>
  <hr>
  <div class="w3-container">
    <h5>Dashboard</h5>
  </div>
  <div class="w3-bar-block">
    <a href="#" class="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black"  title="close menu"><i class="fa fa-remove fa-fw"></i>  Close Menu</a>
    <a href="#" class="w3-bar-item w3-button w3-padding w3-blue"><i class="fa fa-users fa-fw"></i>  Overview</a>
    <a href="/announceradmin" class="w3-bar-item w3-button w3-padding w3-text-black"> announcer</a>
    <a href="/articleadmin" class="w3-bar-item w3-button w3-padding w3-text-black "> Article</a>
    <!-- <a href="#" class="w3-bar-item w3-button w3-padding"><i class="fa fa-bullseye fa-fw"></i>  Geo</a>
    <a href="#" class="w3-bar-item w3-button w3-padding"><i class="fa fa-diamond fa-fw"></i>  Orders</a>
    <a href="#" class="w3-bar-item w3-button w3-padding"><i class="fa fa-bell fa-fw"></i>  News</a>
    <a href="#" class="w3-bar-item w3-button w3-padding"><i class="fa fa-bank fa-fw"></i>  General</a>
    <a href="#" class="w3-bar-item w3-button w3-padding"><i class="fa fa-history fa-fw"></i>  History</a>
    <a href="#" class="w3-bar-item w3-button w3-padding"><i class="fa fa-cog fa-fw"></i>  Settings</a><br><br> -->
  </div>
</nav>


<!-- Overlay effect when opening sidebar on small screens -->
<div class="w3-overlay w3-hide-large w3-animate-opacity"  style="cursor:pointer" title="close side menu" id="myOverlay"></div>

<!-- !PAGE CONTENT! -->
<div class="w3-main" style="margin-left:300px;margin-top:43px;">

  <!-- Header -->
  <header class="w3-container" style="padding-top:22px">
    <h5><b><i class="fa fa-dashboard"></i> My Dashboard</b></h5>
  </header>

  <div class="w3-row-padding w3-margin-bottom">
    <div class="w3-quarter">
      <div class="w3-container w3-red w3-padding-16">
        <div class="w3-left"><i class="fa fa-comment w3-xxxlarge"></i></div>
        <div class="w3-right">
          <h3>52</h3>
        </div>
        <div class="w3-clear"></div>
        <h4>Messages</h4>
      </div>
    </div>
    <div class="w3-quarter">
      <div class="w3-container w3-blue w3-padding-16">
        <div class="w3-left"><i class="fa fa-eye w3-xxxlarge"></i></div>
        <div class="w3-right">
          <h3>99</h3>
        </div>
        <div class="w3-clear"></div>
        <h4>Views</h4>
      </div>
    </div>
    <div class="w3-quarter">
      <div class="w3-container w3-teal w3-padding-16">
        <div class="w3-left"><i class="fa fa-share-alt w3-xxxlarge"></i></div>
        <div class="w3-right">
          <h3>23</h3>
        </div>
        <div class="w3-clear"></div>
        <h4>Shares</h4>
      </div>
    </div>
    <div class="w3-quarter">
      <div class="w3-container w3-orange w3-text-white w3-padding-16">
        <div class="w3-left"><i class="fa fa-users w3-xxxlarge"></i></div>
        <div class="w3-right">
          <h3>50</h3>
        </div>
        <div class="w3-clear"></div>
        <h4>Users</h4>
      </div>
    </div>
  </div>
  <div class="mam">
    <div class="form-outline ">
      <input type="text" id="form3Examplev3"
          v-model="form.requestId"
          class=" form-control-lg" placeholder="Member ID" />
   
  </div>
  <div class="form-outline mamm">
      <input type="text" id="form3Examplev3"
          v-model="form.newId"
          class=" form-control-lg" placeholder="Create ID" />
   
  </div>
  <div class="mamm ">
<button class="w3-button w3-black" @click="send()">Create ID</button>
</div>
  </div>
  
  <hr>
  <div class="container table-responsive py-5"> 
<table class="table table-bordered table-hover">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Requester_local_id</th>
      <th scope="col">Fullname</th>
      <th scope="col">academic_year</th>
      <th scope="col">experience_time</th>
      <th scope="col">company_name</th>
      <th scope="col">courses</th>
      <th scope="col">devices</th>
      <th scope="col">email</th>
      <th scope="col">contact_number</th>
      <th scope="col">Request date</th>
      <th scope="col">Response</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="values in photographerDetail" :key="values.id">
   
      <td>{{values.local_id}}</td>
      <td>{{values.Fullname}}</td>
      <td>{{values.academic_year}}</td>
      <td>{{values.experience_time}}</td>
      <td>{{values.company_name}}</td>
      <td>{{values.courses}}</td>
      <td>{{values.devices}}</td>
      <td>{{values.email}}</td>
      <td>{{values.contact_number}}</td>
      <td>{{values.created_at}}</td>
      <td><button @click="select(values)">Select</button></td>
    </tr>
    
  </tbody>
</table>
</div>
  
  <hr>

 

  <!-- Footer -->


  <!-- End page content -->
</div>



</body>
</html>
</template>
<script>

import axios from "axios";

export default{
  data(){
      return{
        form:{
          photographyID:"",
          requestId:"",
          newId:"",
          fullname:"",
        },

        photographerDetail:[],
      };
  },

  mounted(){
   
      axios
      .get("http://127.0.0.1:8000/api/getPhotgrapperDetail")
        .then((response)=>{
            if(response.status=='200'){
              this.photographerDetail=response.data.data;
            }
            
        })
  
        .catch((error)=>{
          console.log(error);
        });
      
  },

  methods:{

    select(values){

        this.form.requestId=values.local_id;
        this.form.photographyID=values.id;
        this.form.fullname=values.Fullname;
    },

    send(){
      
      axios 
        .post("http://127.0.0.1:8000/api/sendPhotgrapherID",this.form)
        .then((response)=>{
          if(response.status =='200'){
              alert(response.data.message);
          }
        })

        .catch((error)=>{
          console.log(error);
        })
    }
  } 
}
</script>
<style>
.mam
{
  margin: 10px 0px 0px 400px;
}
.mamm
{
  margin: 10px 10px 0px 0px;
}
</style>