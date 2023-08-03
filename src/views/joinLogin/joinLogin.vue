<template>

<section class="vh-100  " style="background-color: #000;">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="card" style="border-radius: 1rem;">
            <div class="row g-0">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <img src="@/assets/stu.jpg"
                  alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem;" />
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">
  
                  <form>
  
                    <div class="d-flex align-items-center mb-3 pb-1">
                      <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i>
                      <span class="h1 fw-bold mb-0">Login In</span>
                    </div>
                    
  
                    <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Sign into your account</h5>
  
                    <div class="form-outline mb-4">
                      <input type="email" id="form2Example17" v-model="user.username" class="form-control form-control-lg" />
                      <label class="form-label" for="form2Example17" >User name</label>
                    </div>
  
                    <div class="form-outline mb-4">
                      <input type="password" id="form2Example27" v-model="user.password" class="form-control form-control-lg" />
                      <label class="form-label" for="form2Example27">Password</label>
                    </div>
  
                    <div class="pt-1 mb-4 cttn">
                      <button class="btn btn-dark btn-lg btn-block" type="button" @click="login()">Login</button>
                    </div>
                    <div class="pt-1 mb-4 ctb">
                      <button class="btn btn-dark btn-lg btn-block" type="button" @click="login()"><a href="/joinRegistration">Register Now</a></button>
                    </div>
                    
                  
                    <a class="small text-muted" href="#!">Forgot password?</a>
                    <p class="mb-5 pb-lg-2" style="color: #393f81;">Don't have an account? 
                     </p>
                    <a href="#!" class="small text-muted">Terms of use.</a>
                    <a href="#!" class="small text-muted">Privacy policy</a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default{
    data(){
        return{
            user:{
                username:"",
                password:"",
            },
            
        };
    },

    methods:{
        login(){
     
        axios
        .post("http://127.0.0.1:8000/api/loginJoin",this.user)
        .then((response)=>{

            localStorage.setItem(
                "userDetails",
                JSON.stringify(response.data.data)
            );

           

            if(response.data.status=="200"){
                alert("login successed");
                this.$router.push({name:"joinourteam"});
            }
            else if(response.data.status=="500"){
                alert("incorrect username or password");
                this.$router.push({name:"joinLogin"});
                // this.$router.back();
            }
        })

        .catch((error)=>{
            console.log(error);
        })
        .finally(()=>{});
    },
    },

};
</script>
<style>
.cttn{
  float: left;
}
.ctb{
  margin:0px 0px 0px 80px;
 
 
}
.ctb a{
  font-size: 12px;
}

</style>