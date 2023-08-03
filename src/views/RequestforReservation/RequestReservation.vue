<template>
    


    <section class="vh-100 gradient-custom" style="background-color: #000;">
        <div class="container py-5 h-100">
            <div class="row justify-content-center align-items-center h-100">
                <div class="col-12 col-lg-9 col-xl-7">
                    <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
                        <div class="card-body p-4 p-md-5">
                            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5"><b>Reservation Form</b></h3>
                            <form @submit.prevent>

                                <div class="row gh">
                                    <div class="col-md-6 mb-4">

                                        <div class="form-outline ">
                                            <input type="text" id="firstName" class="form-control form-control-lg" v-model="form.fullname" />
                                            <label class="form-label" for="firstName">Full Name</label>
                                        </div>

                                    </div>
                                    <div class="col-md-6 mb-4 ">

                                        <div class="form-outline">
                                            <input type="text" id="lastName" class="form-control form-control-lg" v-model="form.regOrstaffNo" />
                                            <label class="form-label" for="lastName">Reg no or staff no</label>
                                        </div>

                                    </div>
                                </div>

                                <div class="row gh">
                                    <div class="col-md-6 mb-4">

                                        <div class="form-outline">
                                            <input type="text" id="firstName" class="form-control form-control-lg" v-model="form.acedamicyr"/>
                                            <label class="form-label" for="firstName">Academic Year</label>
                                        </div>

                                    </div>
                                    <div class="col-md-6 mb-4">

                                        <div class="form-outline">
                                            <input type="text" id="lastName" class="form-control form-control-lg" v-model="form.faculty"  />
                                            <label class="form-label" for="lastName">Faculty</label>
                                        </div>

                                    </div>
                                </div>

                                <div class="row gh">
                                    <div class="col-md-6 mb-4">

                                        <div class="form-outline">
                                            <input type="text" id="firstName" class="form-control form-control-lg" v-model="form.department" />
                                            <label class="form-label" for="firstName">Department</label>
                                        </div>

                                    </div>
                                    <div class="col-md-6 mb-4">

                                        <div class="form-outline">
                                            <input type="text" id="lastName" class="form-control form-control-lg" v-model="form.venue" />
                                            <label class="form-label" for="lastName">Venue</label>
                                        </div>

                                    </div>
                                </div>

                                <div class="row gh">
                                    <div class="col-md-6 mb-4">

                                        <div class="form-outline">
                                            <input type="text" id="firstName" class="form-control form-control-lg" v-model="form.email"/>
                                            <label class="form-label" for="firstName">Email</label>
                                        </div>

                                    </div>
                                    <div class="col-md-6 mb-4">

                                        <div class="form-outline">
                                            <input type="text" id="lastName" class="form-control form-control-lg" v-model="form.eventdate" />
                                            <label class="form-label" for="lastName">Event date</label>
                                        </div>

                                    </div>
                                </div>

                                <div class="row gh">
                                    <div class="col-md-6 mb-4">

                                        <div class="form-outline">
                                            <input type="text" id="firstName" class="form-control form-control-lg" v-model="form.contactno" />
                                            <label class="form-label" for="firstName">Contact Number</label>
                                        </div>

                                    </div>
                                    <div class="col-md-6 mb-4">
                                    

                                        <!-- <input type="checkbox" id="Photograpper" value="Photograpper" v-model="form.wanted">
                                        <label for="jack">Jack</label>

                                        <input type="checkbox" id="Anouncer" value="Anouncer" v-model="form.wanted">
                                        <label for="john">John</label> -->

                                        <label class="form-label" for="firstName">Who do you need from us</label>
                                        <div class="form-check">Photograper
                                            <input class="form-check-input" type="checkbox" value="Photograper" id="Photograper" v-model="form.wanted" >
                                           
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="Anouncer" id="Anouncer"
                                            v-model="form.wanted"
                                                checked>
                                            <label class="form-check-label" for="flexCheckChecked">
                                                Anouncer
                                            </label>

                                            
                                        </div>

                                        <div class="mt-4 pt-2">
                                           <a href="/"> <input class="btn btn-dark btn-lg cttnnq" type="button" value="back" /></a>
                                            <input class="btn btn-primary btn-lg cttnnq" type="submit" value="Submit" @click="save()"/>
                                        </div>

                                        

                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

</template>

<style>




.cttnnq{
    margin:10px;
    width:100px;
    height:30px;
}
.gh{
    font-size: 15px;
}
.gradient-custom {
    /* fallback for old browsers */
    background: #ffffff;

    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(to bottom right, rgb(11, 11, 11), rgb(93, 62, 66));

    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to bottom right, rgb(0, 0, 0), rgba(249, 74, 98, 0.642))
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
import axios from 'axios';

export default {
    data() {
        return {
            form: {
                localId:"",
                fullname:"",
                regOrstaffNo:"",
                acedamicyr:"",
                faculty:"",
                department:"",
                venue:"",
                email:"",
                eventdate:"",
                contactno:"",
                wanted:[],
            },
        };
    },

    methods:{
        save(){
            axios
            .post("http://127.0.0.1:8000/api/sendrequestReservation",this.form)
            .then((response)=>{
                if(response.status=='200'){
                    alert(response.data.message);
                }
            })

            .catch((error)=>{

                console.log(error);
            })
        }
    },

    mounted(){
        let user=localStorage.getItem("userDetails");
        user=JSON.parse(user);
        this.form.localId=user.id;
    },
};

</script>