<script setup>
import { reactive } from 'vue';
import { register } from '../endpoints/UserEndpoint';
import { useRouter } from 'vue-router';

const router = useRouter()

const data = reactive({
    name: "",
    email: "",
    mobile: "",
    password: "",
    gender: "",
    nameBlured: false,
    emailBlured: false,
    mobileBlured: false,
    passwordBlured: false,
    genderBlured: false,
    valid: false,
    submitted: false,
})

const validate = () => {
    data.emailBlured = true;
    data.passwordBlured = true;
    if (validEmail(data.email) && validPassword(data.password) && validName(data.name) && validMobile(data.mobile)) {
        data.valid = true;
    }
}

const validName = (name) => {
    // let re = /{a,z}/;
    // if (re.test(name)) {
    //     return true;
    // }

    if (name.length > 3) {
        return true
    }
}

const validEmail = (email) => {
    let re = /(.+)@(.+){2,}\.(.+){2,}/;
    if (re.test(email.toLowerCase())) {
        return true;
    }
}

const validMobile = (mobile) => {
    // let re = /(.+)(.+){2,}\.(.+){2,}/;
    // if (re.test(mobile)) {
    //     return true;
    // }
    if (mobile.length > 9) {
        return true
    }
}

const validPassword = (password) => {
    if (password.length > 8) {
        return true;
    }
}

const submit = async () => {
    validate();
    console.log(data.password);
    // if (data.valid) {
    const response = await register({
        name: data.name,
        email: data.email,
        mobile: data.mobile,
        password: data.password,
        gender: data.gender
    })

    if (response.status == 'success') {
        data.submitted = true;
        alert('Registration successfull.')
        router.push('/login')
    }
    else {
        data.submitted = false
        alert(response.message)
    }
    // }
}
</script>

<template>
    <div class="container mt-5">
        <div class="row d-flex justify-content-center">
            <div class="col-md-6">
                <div class="card px-5 py-5" id="form1">
                    <div class="form-data" v-if="!data.submitted">
                        <div class="forms-inputs mb-4"> <span>Name</span> <input autocomplete="off" type="text"
                                v-model="data.name"
                                v-bind:class="{ 'form-control': true, 'is-invalid': !validName(data.name) && nameBlured }"
                                v-on:blur="nameBlured = true">
                            <div class="invalid-feedback">Please enter your name</div>
                        </div>
                        <div class="forms-inputs mb-4"> <span>Gender</span>
                            <input autocomplete="off" type="text" v-model="data.gender"
                                v-bind:class="{ 'form-control': true }" v-on:blur="genderBlured = true">
                        </div>
                        <div class="forms-inputs mb-4"> <span>Email or username</span> <input autocomplete="off" type="text"
                                v-model="data.email"
                                v-bind:class="{ 'form-control': true, 'is-invalid': !validEmail(data.email) && emailBlured }"
                                v-on:blur="emailBlured = true">
                            <div class="invalid-feedback">A valid email is required!</div>
                        </div>
                        <div class="forms-inputs mb-4"> <span>Mobile</span> <input autocomplete="off" type="number"
                                v-model="data.mobile"
                                v-bind:class="{ 'form-control': true, 'is-invalid': !validMobile(data.mobile) && mobileBlured }"
                                v-on:blur="mobileBlured = true">
                            <div class="invalid-feedback">A valid mobile number is required!</div>
                        </div>
                        <div class="forms-inputs mb-4"> <span>Password</span> <input autocomplete="off" type="password"
                                v-model="data.password"
                                v-bind:class="{ 'form-control': true, 'is-invalid': !validPassword(data.password) && passwordBlured }"
                                v-on:blur="passwordBlured = true">
                            <div class="invalid-feedback">Password must be 8 character!</div>
                        </div>
                        <div class="mb-3"> <button @click.prevent="submit" class="btn btn-dark w-100">Register</button>
                        </div>
                    </div>
                    <div class="success-data" v-else>
                        <div class="text-center d-flex flex-column"> <i class='bx bxs-badge-check'></i> <span
                                class="text-center fs-1">You have been registered <br> Successfully</span> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
body {
    background: #000
}

.card {
    border: none;
    height: 320px
}

.forms-inputs {
    position: relative
}

.forms-inputs span {
    position: absolute;
    top: -18px;
    left: 10px;
    background-color: #fff;
    padding: 5px 10px;
    font-size: 15px
}

.forms-inputs input {
    height: 50px;
    border: 2px solid #eee
}

.forms-inputs input:focus {
    box-shadow: none;
    outline: none;
    border: 2px solid #000
}

.btn {
    height: 50px
}

.success-data {
    display: flex;
    flex-direction: column
}

.bxs-badge-check {
    font-size: 90px
}
</style>