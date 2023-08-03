<template>
<head>
    

<title></title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">




</head>
    <body class="hm-gradient">

    
    <main>
        
        
        <!--MDB Buttons-->
        <div class="container text-center mt-4 ">
            <div class="mun">
            <img src="@/assets/111.png" alt="image of spaceship" class="mun"/>
            <div class="dir"><button class="button"><span> photographer: {{form.photograpperId}} </span></button></div>
            <div class="dirr"><button class="button"><span>announcer: {{form.announcerId}}</span></button></div>
            <div class="dirrq"><button class="button"><span>article: {{form.articleId}}</span></button></div>
           
        </div>

     

        

            <div class="text-center darken-grey-text mb-4">
                <h1 class="font-bold mt-4 mb-3 h1">Join our team</h1>
                
                
                <br><br>
                <p class="">We are looking forward to expand our team with some passionate, high-spirited artists and leaders! 
                Please check the vacancies given below for more information. Kindly note that all the vacancies 
                mentioned below are full time jobs.</p>
            </div>

           
           
         
         
            <div class="card mb-4 btmcntn">
                <hr class="my-4">
                <div class="text-center darken-grey-text mb-4">
                <h3 class="font-bold mb-3 h2">What's your path:</h3>
                <a class="btn btn-danger cbtn" href="/loginPhotography"> Photography</a>
                <a class="btn btn-danger cbtn" href="/loginannouncer" > Announcer</a>
                <a class="btn btn-danger cbtn" href="/loginarticle"> Article</a>
            </div>
            </div>
          
          
            <hr class="my-4">
          
          

        </div>
        <!--MDB Buttons-->
        



    </main>


  
</body>

</template>
<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:900i');

.dir{
    margin: -100px 100px 0px 950px;
    
}
.dirr{
    margin: 0px 0px 0px 950px;
    
}
.dirrq{
    margin: 0px 0px 0px 950px;
    
}
.nmmn{
    margin: 0px 0px 0px 900px;
}

@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Poppins:wght@100&display=swap');
.font-bold{
    font-family: 'Dancing Script', cursive;
}

.darken-grey-text {
    color: #2E2E2E;
}
.cbtn {
    margin: 0 5%;
    width : 15rem;
}
.tcontwrap {
    padding-top: 10vh;
}
.btmcntn {
    margin-top: 20vh;
}
.mun{
    width: 100px;
    height: 100px;
    margin: 0px 0px 0px 300px;
    padding: 0px;
}


/* button */

.button {
  display: inline-block;
  border-radius: 4px;
  background-color: #fa2727;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 10px;
  padding: 10px;
  width: 110px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  margin-left:40%;
  margin-top:10%;
  /* box-shadow: 5px 10px #888888; */
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '\2709';
  position: absolute;
  opacity: 0;
  top: 2px;
  right: 5px;
  transition: 0.5s;
  
}

.button:hover span {
  padding-right: 50px;
  padding-bottom:5px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
<script>

import axios from "axios"

export default{

    data(){
        return{
            form:{
                localId:"",

                photograpperId:"",
                announcerId:"",
                articleId:"",
            }
            
        }
       
    },

    mounted(){
        let user=localStorage.getItem('userDetails');
        user=JSON.parse(user);
        this.form.localId=user.id;

        axios
        .post("http://127.0.0.1:8000/api/getuserId",this.form)
        .then((response=>{
         
                alert('ok');
                this.form.photograpperId=response.data.data2[0].NewAdminCreateID;
                this.form.announcerId=response.data.data1[0].AdminCreateID;
                this.form.articleId=response.data.data3[0].AdminCreateID;
       
        }))
        .catch((error)=>{
            console.log((error));
        })
    }


}
</script>