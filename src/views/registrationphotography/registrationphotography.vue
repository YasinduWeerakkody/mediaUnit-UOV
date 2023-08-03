<template>
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

</head>
<body>
  <div class="rrrqq">
  <!-- <section class="h-100 bg-dark">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <div class="card card-registration my-4">
          <div class="row g-0">
            <div class="col-xl-6 d-none d-xl-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                alt="Sample photo" class="img-fluid"
                style="border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;" />
            </div>
            <div class="col-xl-6 bbt">
              <div class="card-body p-md-5 text-black">
                <h3 class="mb-5 text-uppercase">Student registration form</h3>

                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1m" class="form-control form-control-lg"/>
                      <label class="form-label" for="form3Example1m" >Full name</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1n" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Example1n">User name</label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1m1" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Example1m1">Registration Number</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1n1" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Example1n1">Academic Year</label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1m1" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Example1m1">Faculty</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1n1" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Example1n1">Department</label>
                    </div>
                  </div>
                </div>

                <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">

                  <h6 class="mb-0 me-4">Gender: </h6>

                  <div class="form-check form-check-inline mb-0 me-4">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="option1" />
                    <label class="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div class="form-check form-check-inline mb-0 me-4">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="option2" />
                    <label class="form-check-label" for="maleGender">Male</label>
                  </div>

                </div>

                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1m1" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Example1m1">Experience</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1n1" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Example1n1">Email</label>
                    </div>
                  </div>
                </div>


                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1m1" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Example1m1">Contact Number</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1n1" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Example1n1">Password</label>
                    </div>
                  </div>
                </div>

              <br>
              <hr>
              <br>

                <div class="d-flex justify-content-end pt-3">
                  <button type="button" class="btn btn-light btn-lg">Reset all</button>
                  <button type="button" class="btn btn-warning btn-lg ms-2">Submit form</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> -->
<!-- <section class="vh-100 ses" style="background-color: #000;"> -->
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100 ">
      <div class="col-lg-12 col-xl-11 rrrqq ">
        <div class="card text-black" style="border-radius: 25px;">
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                 
                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up As photograrpher</p>
             
                <form class="mx-1 mx-md-4">

                  <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="form3Example1m1" class="form-control form-control-lg" v-model="form.Fullname"/>
                          <label class="form-label" for="form3Example1m1">Full name</label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="form3Example1n1" class="form-control form-control-lg" v-model="form.academic_year"/>
                          <label class="form-label" for="form3Example1n1">Academic Year</label>
                        </div>
                   
                      </div>

                      
                    </div>

                  

                  <div class="form-outline mb-4">
                  <input type="text" id="form3Example8" class="form-control form-control-lg" v-model="form.experience_time"/>
                  <label class="form-label" for="form3Example8">Experience time</label>
                </div>

                
                <div class="form-outline mb-4">
                  <input type="text" id="form3Example8" class="form-control form-control-lg" v-model="form.company_name"/>
                  <label class="form-label" for="form3Example8"> If you worked,company name</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example8" class="form-control form-control-lg" v-model="form.courses"/>
                  <label class="form-label" for="form3Example8"> what have you done regarding courses photography</label>
                </div>
                
                <div class="form-outline mb-4">
                  <input type="text" id="form3Example8" class="form-control form-control-lg" v-model="form.devices"/>
                  <label class="form-label" for="form3Example8">If you have devices,mention It</label>
                </div>

                    <div class="row">
                    <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="form3Example1n1" class="form-control form-control-lg" v-model="form.email"/>
                          <label class="form-label" for="form3Example1n1">Email</label>
                        </div>
                    </div> 
                    <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="form3Example1n1" class="form-control form-control-lg" v-model="form.contact_number"/>
                          <label class="form-label" for="form3Example1n1">Contact Number</label>
                        </div>
                      </div>  
    
                    </div>
                    <div class="form-outline mb-4">
                  <input type="text" id="form3Example8" class="form-control form-control-lg" v-model="form.pages"/>
                  <label class="form-label" for="form3Example8"> if you have your own page,mention it</label>
                </div>
           
                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary " @click="save()">REQUEST</button>
                  </div>
                

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- </section> -->
 
</body>
</html>
</template>
<style scoped>


.rrrqq{

  background-color: black;
}
.bbt{
  background-color: rgb(255, 255, 255);
  
}
.card-registration .select-input.form-control[readonly]:not([disabled]) {
font-size: 1rem;
line-height: 2.15;
padding-left: .75em;
padding-right: .75em;
}
.card-registration .select-arrow {
top: 13px;
}
</style>
<script>

import axios from "axios";

export default{
    data(){
        return {
            form:{
            localID:"",
            Fullname:"",
            academic_year:"",
            experience_time:"",
            company_name:"",
            courses:"",
            devices:"",
            email:"",
            contact_number:"",
            },
            
        };
    },

    mounted(){
        let user=localStorage.getItem("userDetails");
        user=JSON.parse(user);
        this.form.localID=user.id;
    },

    methods:{
        save(){
            axios
            .post("http://127.0.0.1:8000/api/photographer",this.form)
            .then((response)=>{
                if(response.status=='200'){
                    
                    alert(response.data.message);
                }
            })
            .catch((error)=>{
                console.log(error);
            })
        },
    },
}
</script>