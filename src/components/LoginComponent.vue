<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/AuthStore';
import { login } from '../endpoints/UserEndpoint';

const auth = useAuthStore()
const router = useRouter()

const data = reactive({
    email: "",
    password: "",
    emailBlured: false,
    passwordBlured: false,
    valid: false,
    submitted: false,
    error: null
})

const validate = () => {
    data.emailBlured = true;
    data.passwordBlured = true;
    if (validEmail(data.email) && validPassword(data.password)) {
        data.valid = true;
    }
}

const validEmail = (email) => {
    let re = /(.+)@(.+){2,}\.(.+){2,}/;
    if (re.test(email.toLowerCase())) {
        return true;
    }
}

const validPassword = (password) => {
    if (password.length > 7) {
        return true;
    }
}

const submit = async () => {
    validate();
    if (data.valid) {

        const response = await login({ email: data.email, password: data.password })
        if (('data' in response)) {
            data.submitted = true;
            auth.setToken(response.data.token)
            router.push('/')
        } else {
            data.error = response.message
            console.log(response);
        }
    }
}
</script>

<template>
    <div class="container mt-5">
        <div class="row d-flex justify-content-center">
            <div class="col-md-6">
                <div v-if="data.error">
                    <div class="text-center text-danger d-flex flex-column">
                        {{ data.error }}
                    </div>
                </div>
                <div class="card px-5 py-5" id="form1">
                    <div class="form-data" v-if="!data.submitted">
                        <div class="forms-inputs mb-4"> <span>Email or username</span> <input autocomplete="off" type="text"
                                v-model="data.email"
                                v-bind:class="{ 'form-control': true, 'is-invalid': !validEmail(data.email) && emailBlured }"
                                v-on:blur="emailBlured = true">
                            <div class="invalid-feedback">A valid email is required!</div>
                        </div>
                        <div class="forms-inputs mb-4"> <span>Password</span> <input autocomplete="off" type="password"
                                v-model="data.password"
                                v-bind:class="{ 'form-control': true, 'is-invalid': !validPassword(data.password) && passwordBlured }"
                                v-on:blur="passwordBlured = true">
                            <div class="invalid-feedback">Password must be 8 character!</div>
                        </div>
                        <div class="mb-3"> <button @click.prevent="submit" class="btn btn-dark w-100">Login</button>
                        </div>
                    </div>
                    <div class="success-data" v-else>
                        <div class="text-center d-flex flex-column"> <i class='bx bxs-badge-check'></i> <span
                                class="text-center fs-1">You have been logged in <br> Successfully</span> </div>
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