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
<body class="w3-light-grey w3-content" style="max-width:1600px">

<!-- Sidebar/menu -->
<nav class="w3-sidebar w3-collapse w3-white w3-animate-left" style="z-index:3;width:300px;" id="mySidebar"><br>
  <div class="w3-container">
    <a href="#" onclick="w3_close()" class="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey" title="close menu">
      <i class="fa fa-remove"></i>
    </a>
    <img src="@/assets/unnamed.png" style="width:45%;" class="w3-round"><br><br>
    <h4><b>Churangi de silva</b></h4>
    <p class="w3-text-grey">photographer</p>
  </div>
  <div class="w3-bar-block">
    <a href="#portfolio" onclick="w3_close()" class="w3-bar-item w3-button w3-padding w3-text-teal"><i class="fa fa-th-large fa-fw w3-margin-right"></i>Media library</a> 
    
    <a href="#about" onclick="w3_close()" class="w3-bar-item w3-button w3-padding w3-text-teal"><i class="fa fa-th-large fa-fw w3-margin-right"></i>Works</a> 
  </div>
 
</nav>

<!-- Overlay effect when opening sidebar on small screens -->
<div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

<!-- !PAGE CONTENT! -->
<div class="w3-main" style="margin-left:300px">

  <!-- Header -->
  <header id="portfolio">
    <a href="#"><img src="@/assets/unnamed.png" style="width:65px;" class="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity"></a>
    <span class="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey" onclick="w3_open()"><i class="fa fa-bars"></i></span>
    <div class="w3-container">
    <h1><b>My media library</b></h1>
    <div class="w3-section w3-bottombar w3-padding-16">
      <span class="w3-margin-right">Filter:</span> 
      <button class="w3-button w3-black">ALL</button>
      <button class="w3-button w3-white w3-hide-small"><i class="fa fa-photo w3-margin-right"></i>Photos</button>
    </div>
    </div>
  </header>
  
  <!-- First Photo Grid-->
  <form id="upload_form" enctype="multipart/form-data" method="post" @submit="formSubmit" class="cttttn">
  <input type="file" name="file" id="file1" v-on:change="onImageChange" @input="pickFile" ref="fileInput"><br>
  <progress id="progressBar" value="0" max="100" style="width:300px;"></progress>
  <h3 id="status"></h3>
  <p id="loaded_n_total"></p>
  <div class="col-md-6 mb-4 pb-2 cttttn">

<div class="form-outline ">
      <input type="text" id="form3Examplev3"
          v-model="title"
          class=" form-control-lg" placeholder="Title" />
   
  </div>

</div>
<div class="col-md-6 mb-4 pb-2 cttttn">

  <div class="form-outline ">
      <input type="text" id="form3Examplev3"
          v-model="description"
          class=" form-control-lg" placeholder="Description-date/venue" />
   
  </div>

</div>
<div class="npn">
<button class="w3-button w3-black">Upload</button>
</div>
  
</form>
  
 

  <!-- Pagination -->


  <!-- Images of Me -->
  <div class="w3-row-padding w3-padding-16" id="about">
   
<div class="container table-responsive py-5"> 
<table class="table table-bordered table-hover">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
     <tr>
      <th scope="row">4</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>
  
  </div>

<hr>
  

  <!-- Footer -->
  <footer class="w3-container w3-padding-32 w3-dark-grey">
  <div class="w3-row-padding">
    <div class="w3-third">
      <h3>media unit-#UOV</h3>
        </div>
  
    <div class="w3-third">
      <h3>BLOG POSTS</h3>
      <ul class="w3-ul w3-hoverable">
        <li class="w3-padding-16">
          <img src="@/assets/1.jpg" class="w3-left w3-margin-right" style="width:50px">
          <span class="w3-large">2022-Orientation</span><br>
          <span>Faculty of Technology</span>
        </li>
        <li class="w3-padding-16">
          <img src="@/assets/5.jpg" class="w3-left w3-margin-right" style="width:50px">
          <span class="w3-large">2019-Welcome party</span><br>
          <span>Faculty of Technology</span>
        </li> 
      </ul>
    </div>

    

  </div>
  
  </footer>
  
  <div class="w3-black w3-center w3-padding-24">Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" class="w3-hover-opacity">#UOV</a></div>

<!-- End page content -->
</div>



</body>
</html>

</template>
<style>
html{
  background-color: rgba(205, 205, 205, 0.816);
}
body,h1,h2,h3,h4,h5,h6 {font-family: "Raleway", sans-serif}
.w3-col img{
  width: 350px;
  height: 350px;
  margin: 0px 0px 0px 300px;
 
}
.thead-dark{
  background-color: black;
  color: rgb(250, 250, 250);
}
.npn{
  margin: -15px 0px 0px 230px;
}
</style>

<script>
import axios from 'axios';
export default{
  mounted(){
    console.log("component mounted")
  },

  data(){
    return{
      form:{
        localId:"",
      },
      
      title:"",
      description:"",
      image:"",

    };
  },

  methods:{
    onImageChange(e){
      console.log(e.target.files[0]);
      this.image=e.target.files[0];
    },
    formSubmit(e){
      e.preventDefault();
      let currentObj=this;

      const config={
        headers:{"content-type":"multipart/form-data"},
      };

      let formData=new FormData();
      formData.append("image",this.image);
      formData.append("description",this.description);
      formData.append("title",this.title);
      formData.append("localId",this.form.localId);

      axios

      .post("http://127.0.0.1:8000/api/saveimage",formData,config)
      .then(function(response){
        alert("image Saved Succesfully");
        currentObj.success=response.data.success;
      })
      .catch(function (error){
        currentObj.output=error;
      });
    },

    selectImage(){
      this.$refs.fileInput.click();
    },

    mounted(){
      let user=localStorage.getItem("userDetails");
      user=JSON.parse(user);
      this.form.localId=user.id;
    },

    pickFile(){
      let input=this.$refs.fileInput;
      let file=input.files;

      if(file && file[0]){
        let reader =new FileReader();
        reader.onload=(e)=>{
          this.previewImage=e.target.result;
        };
        reader.readAsDataURL(file[0]);
        this.$emit("input",file[0]);
      }
    },
  },
};
</script>