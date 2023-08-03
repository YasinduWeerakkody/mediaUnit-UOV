<template><section class="vh-100 xee">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="ss">
            <div class="row g-0">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <img src="@/assets/12.jpeg"
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
                      <input type="email" id="form2Example17" v-model="user.userid" class="form-control form-control-lg " />
                      <label class="form-label " for="form2Example17" >User id</label>
                    </div>
  
                    <div class="pt-1 mb-4 cttn">
                      <button class="btn btn-dark btn-lg btn-block" type="button" @click="login()">Login</button>
                    </div>
                    <div class="pt-1 mb-4 ctb">
                      <button class="btn btn-dark btn-lg btn-block" type="button" ><a href="/registrationArticle">Register Now</a></button>
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
                userid:"",
                localhostId:"",
            },
            
        };
    },

    methods:{
        login(){
     
        axios
        .post("http://127.0.0.1:8000/api/authenticateArticle",this.user)
        .then((response)=>{

 

            if(response.status=="200"){
                alert("login successed");
                 this.$router.push({name:"articlepage"});
            }
            else{
                alert("incorrect username or password");
                this.$router.push({name:"loginarticle"});
                // this.$router.back();
            }
        })

        .catch((error)=>{
            console.log(error);
        })
        .finally(()=>{});
    },
    },

    mounted(){
      let user=localStorage.getItem("userDetails");
      user=JSON.parse(user);
      this.user.localhostId=user.id;
    }
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

.ss{
   background-color: rgba(255, 255, 255, 0.577);
   
}
.xee{
    background-image:url('@/assets/12.jpeg');
    background-repeat:no-repeat;
    background-image: cover;
    background-size: cover;
}
.ctttb{
    font-size: 12px;
}
</style>