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
                <div class="col-xl-6 ccb">
                  <div class="card-body p-md-5 text-black">
                    <h3 class="mb-5 text-uppercase">register Now-welcome to team</h3>
                    
    
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="form3Example1m" class="form-control form-control-lg" v-model="form.Firstname"/>
                          <label class="form-label" for="form3Example1m">First Name</label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="form3Example1m" class="form-control form-control-lg" v-model="form.Lastname"/>
                          <label class="form-label" for="form3Example1m">Last Name</label>
                        </div>
                      </div>
                      
                    </div>

                    <div class="form-outline mb-4">
                  <input type="text" id="form3Example8" class="form-control form-control-lg" v-model="form.experience"/>
                  <label class="form-label" for="form3Example8">Experience</label>
                </div>
                      
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="form3Example1m1" class="form-control form-control-lg" v-model="form.faculty"/>
                          <label class="form-label" for="form3Example1m1">Faculty</label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="form3Example1n1" class="form-control form-control-lg" v-model="form.academic_year"/>
                          <label class="form-label" for="form3Example1n1">Academic Year</label>
                        </div>
                      </div>
                    </div>
                    <br>
                    <div class="row">
                    <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="form3Example1n1" class="form-control form-control-lg" v-model="form.department"/>
                          <label class="form-label" for="form3Example1n1">Department</label>
                        </div>
                    </div> 
                    <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="form3Example1n1" class="form-control form-control-lg" v-model="form.registration_number"/>
                          <label class="form-label" for="form3Example1n1">Registration Number</label>
                        </div>
                      </div>  
    
                    </div>
                    <br>
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
                    <br>
                    <div class="row">
                    <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="form3Example1n1" class="form-control form-control-lg" v-model="form.username"/>
                          <label class="form-label" for="form3Example1n1">User name</label>
                        </div>
                    </div> 
                    <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="form3Example1n1" class="form-control form-control-lg" v-model="form.password"/>
                          <label class="form-label" for="form3Example1n1">password</label>
                        </div>
                      </div>  
    
                    </div>
                    
                    <br>
    
                   
    
    
                    
    
                    <div class="d-flex justify-content-end pt-3">
                      <button type="button" class="btn btn-light btn-lg">Reset all</button>
                      <button type="button" class="btn btn-warning btn-lg ms-2">Sign Up</button>
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
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11 rrrqq">
        <div class="card text-black" style="border-radius: 25px;">
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up As Article Writter</p>

                <form class="mx-1 mx-md-4">

                  <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="form3Example1m" class="form-control form-control-lg" v-model="form.Fullname"/>
                          <label class="form-label" for="form3Example1m">full Name</label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="form3Example1m" class="form-control form-control-lg" v-model="form.academic_year"/>
                          <label class="form-label" for="form3Example1m">academic year</label>
                        </div>
                      </div>
                      
                    </div>

                  <div class="form-outline mb-4">
                  <input type="text" id="form3Example8" class="form-control form-control-lg" v-model="form.article_name"/>
                  <label class="form-label" for="form3Example8">have you written articles/books,mention it</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example8" class="form-control form-control-lg" v-model="form.experience_time"/>
                  <label class="form-label" for="form3Example8">How long have you been writing</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example8" class="form-control form-control-lg" v-model="form.digital_post"/>
                  <label class="form-label" for="form3Example8">have you written digital articles,mention it</label>
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
                    
                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in Terms of service
                    </label>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg" @click="save()">REQUEST</button>
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
    <style>
   
    .card-registration .select-input.form-control[readonly]:not([disabled]) {
    font-size: 1rem;
    line-height: 2.15;
    padding-left: .75em;
    padding-right: .75em;
    }
    .ccb{
      background-color: rgba(225, 225, 225, 0.577);
    }
    .card-registration .select-arrow {
    top: 13px;
    }
    /* .ses{
      background-image:url('@/assets/123123.png');
    background-repeat:no-repeat;
    background-image: cover;
    background-size: cover;
    } */
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
            article_name:"",
            experience_time:"",
            digital_post:"",
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
          alert("Request sent");
            axios
            .post("http://127.0.0.1:8000/api/article_writers",this.form)
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