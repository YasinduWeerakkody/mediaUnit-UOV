<template>
    <body>
        <div class="seee"></div>
    
    <section class="h-100 h-custom  seeie">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12">
                    <div class="card card-registration card-registration-2" style="border-radius: 15px;">
                        <div class="card-body p-0">
                            <h3 class="fw-normal mb-5 ghf" style="color: #000;"><b>Student & Staff Registration Form</b></h3>
                            <div class="row g-0">
                                <div class="col-lg-6">
                                    <div class="p-5">
                                        


                                        <div class="row">
                                            <div class="col-md-6 mb-4 pb-2">

                                                <div class="form-outline ctttb">
                                                    <input type="text" id="form3Examplev2"
                                                    v-model="form.Firstname"
                                                        class="form-control form-control-lg" />
                                                    <label class="form-label" for="form3Examplev2" >First name</label>
                                                </div>

                                            </div>
                                            <div class="col-md-6 mb-4 pb-2">

                                                <div class="form-outline ctttb">
                                                    <input type="text" id="form3Examplev3"
                                                    v-model="form.Lastname"
                                                        class="form-control form-control-lg" />
                                                    <label class="form-label" for="form3Examplev3">Last name</label>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-6 mb-4 pb-2">

                                                <div class="form-outline ctttb">
                                                    <input type="text" id="form3Examplev2"
                                                    v-model="form.age"
                                                        class="form-control form-control-lg" />
                                                    <label class="form-label" for="form3Examplev2">age</label>
                                                </div>

                                            </div>
                                            <div class="col-md-6 mb-4 pb-2">

                                                <div class="form-outline ctttb">
                                                    <input type="text" id="form3Examplev3"
                                                    v-model="form.birthdate"
                                                        class="form-control form-control-lg" />
                                                    <label class="form-label" for="form3Examplev3">birthdate</label>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-6 mb-4 pb-2">

                                                <div class="form-outline ctttb">
                                                    <input type="text" id="form3Examplev2"
                                                    v-model="form.gender"
                                                        class="form-control form-control-lg" />
                                                    <label class="form-label" for="form3Examplev2">faculty</label>
                                                </div>

                                            </div>
                                            <div class="col-md-6 mb-4 pb-2">

                                                <div class="form-outline ctttb">
                                                    <input type="text" id="form3Examplev3"
                                                    v-model="form.registration_number"
                                                        class="form-control form-control-lg" />
                                                    <label class="form-label"
                                                        for="form3Examplev3">registration_number</label>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-6 mb-4 pb-2">

                                                <div class="form-outline ctttb">
                                                    <input type="text" id="form3Examplev2"
                                                    v-model="form.department"
                                                        class="form-control form-control-lg" />
                                                    <label class="form-label" for="form3Examplev2">Department</label>
                                                </div>

                                            </div>
                                            <div class="col-md-6 mb-4 pb-2">

                                                <div class="form-outline ctttb">
                                                    <input type="text" id="form3Examplev3"
                                                    v-model="form.academic_year"
                                                        class="form-control form-control-lg" />
                                                    <label class="form-label" for="form3Examplev3">academic_year</label>
                                                </div>

                                            </div>
                                        </div>

                                        
   

                                        <div class="row">
                                            <div class="col-md-6 mb-4 pb-2">

                                                <!-- <div class="form-outline ctttb">
                                                    <input type="text" id="form3Examplev2"
                                                    v-model="form.department"
                                                        class="form-control form-control-lg" />
                                                    <label class="form-label" for="form3Examplev2">Department</label>
                                                </div> -->

                                            </div>
                                            <div class="col-md-6 mb-4 pb-2 ctttb">

                                                <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">

                                            <h6 class="mb-0 me-4">Gender: </h6>

                                            <div class="form-check form-check-inline mb-0 me-4">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
    value="option1"  v-model="form.wanted" />
  <label class="form-check-label " for="femaleGender" >Female</label>
</div>

<div class="form-check form-check-inline mb-0 me-4">
  <input class="form-check-input " type="radio" name="inlineRadioOptions" id="maleGender"
    value="option2"  v-model="form.wanted"/>
  <label class="form-check-label " for="maleGender">Male</label>
</div>

</div>

                                            </div>
                                        </div>

                                        
                                        <!--   
                    <div class="mb-4 pb-2">
                      <select class="select">
                        <option value="1">Position</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                      </select>
                    </div> -->

                                        <!-- <div class="mb-4 pb-2">
                      <div class="form-outline">
                        <input type="text" id="form3Examplev4" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Examplev4">Position</label>
                      </div>
                    </div> -->



                                    </div>
                                </div>
                                <div class="col-lg-6 bg-indigo text-white">
                                    <div class="p-5">
                                        <h3 class="fw-normal mb-5"></h3>

                                        <div class="mb-4 pb-2">
                                            <div class="form-outline form-white ctttb">
                                                <input type="text" id="form3Examplea2"
                                                v-model="form.contact_number"
                                                    class="form-control form-control-lg" />
                                                <label class="form-label" for="form3Examplea2">contact_number</label>
                                            </div>
                                        </div>

                                        <div class="mb-4 pb-2">
                                            <div class="form-outline form-white ctttb">
                                                <input type="text" id="form3Examplea3"
                                                v-model="form.address"
                                                    class="form-control form-control-lg" />
                                                <label class="form-label" for="form3Examplea3">address</label>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-5 mb-4 pb-2">

                                                <div class="form-outline form-white ctttb">
                                                    <input type="text" id="form3Examplea4"
                                                    v-model="form.city"
                                                        class="form-control form-control-lg" />
                                                    <label class="form-label" for="form3Examplea4">city</label>
                                                </div>

                                            </div>
                                            <div class="col-md-7 mb-4 pb-2">

                                                <div class="form-outline form-white ctttb">
                                                    <input type="text" id="form3Examplea5"
                                                    v-model="form.province"
                                                        class="form-control form-control-lg" />
                                                    <label class="form-label" for="form3Examplea5">province</label>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="mb-4 pb-2">
                                            <div class="form-outline form-white ctttb">
                                                <input type="text" id="form3Examplea6"
                                                v-model="form.district"
                                                    class="form-control form-control-lg" />
                                                <label class="form-label" for="form3Examplea6">district</label>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-5 mb-4 pb-2">

                                                <div class="form-outline form-white ctttb ">
                                                    <input type="text" id="form3Examplea7"
                                                    v-model="form.postal_code"
                                                        class="form-control form-control-lg" />
                                                    <label class="form-label" for="form3Examplea7">postal_code</label>
                                                </div>

                                            </div>
                                            <div class="col-md-7 mb-4 pb-2">

                                                <div class="form-outline form-white ctttb">
                                                    <input type="text" id="form3Examplea8"
                                                    v-model="form.username"
                                                        class="form-control form-control-lg" />
                                                    <label class="form-label" for="form3Examplea8">username</label>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="mb-4">
                                            <div class="form-outline form-white ctttb">
                                                <input type="text" id="form3Examplea9"
                                                v-model="form.email"
                                                    class="form-control form-control-lg" />
                                                <label class="form-label" for="form3Examplea9">email</label>
                                            </div>
                                        </div>

                                        <div class="mb-4">
                                            <div class="form-outline form-white ctttb">
                                                <input type="text" id="form3Examplea9"
                                                    v-model="form.password"
                                                    class="form-control form-control-lg" />
                                                <label class="form-label" for="form3Examplea9">password</label>
                                            </div>
                                        </div>

                                        <div class="form-check d-flex justify-content-start mb-4 pb-3 ctttb">
                                            <input class="form-check-input me-3" type="checkbox" value=""
                                                id="form2Example3c" />
                                            <label class="form-check-label text-white " for="form2Example3">
                                                I do accept thr Terms and
                                                        Conditions  of your
                                                site.
                                            </label>
                                        </div>

                                        <button type="button" class="btn btn-light btn-lg ctbt"
                                            data-mdb-ripple-color="dark" @click="save()">Register</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</body>
</template>

<style scoped>
.ghf{
    margin: 10px 0px 0px 500px;
}
@media (min-width: 1025px) {
    .h-custom {
        height: 100vh !important;
    }
}
.seeie{
    background-image:url('@/assets/1472.jpeg');
    background-repeat:no-repeat;
    background-image: cover;
    background-size: cover;
}

.ctttb{
    font-size: 12px;
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

.gradient-custom-2 {
    /* fallback for old browsers */
    background: #111111;

    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(to right, rgb(4, 4, 4), rgb(0, 0, 0));

    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to right, rgb(0, 0, 0), rgb(0, 0, 0));

    
    
    
}

.bg-indigo {
    background-color: #f1c461e3;
}

@media (min-width: 992px) {
    .card-registration-2 .bg-indigo {
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
    }
}

@media (max-width: 991px) {
    .card-registration-2 .bg-indigo {
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }
}</style>

<script>
import axios from "axios";

export default{
    data(){
        return {
            form:{
            Firstname:"",
            Lastname:"",
            registration_number:"",
            age:"",
            academic_year:"",
            faculty:"",
            department:"",
            contact_number:"",
            birthdate:"",
            address:"",
            city:"",
            province:"",
            district:"",
            gender:"",
            postal_code:"",
            username:"",
            email:"",
            password:"",
            },
            
        };
    },

    mounted(){

    },

    methods:{
        save(){
            axios
            .post("http://127.0.0.1:8000/api/register_form",this.form)
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