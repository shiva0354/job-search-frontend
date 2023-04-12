<script setup>
import { useAuthStore } from '../../stores/AuthStore.js';

const auth = useAuthStore()

</script>
<template>
    <div class="header-area header-transparrent">
        <div class="headder-top header-sticky">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-3 col-md-2">
                        <!-- Logo -->
                        <div class="logo">
                            <a href="index.html"><img src="assets/img/logo/logo.png" alt=""></a>
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-9">
                        <div class="menu-wrapper">
                            <!-- Main-menu -->
                            <div class="main-menu">
                                <nav class="d-none d-lg-block">
                                    <ul id="navigation">
                                        <li>
                                            <router-link :to="{ name: 'home' }">Home</router-link>
                                        </li>
                                        <li>
                                            <router-link :to="{ name: 'job-listing' }">Job Listing</router-link>
                                        </li>
                                        <li>
                                            <router-link :to="{ name: 'about' }">About Us</router-link>
                                        </li>
                                        <li>
                                            <router-link :to="{ name: 'contact' }">Contact Us</router-link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <!-- Header-btn -->
                            <div class="header-btn d-none f-right d-lg-block" v-if="auth.isLoggedIn">
                                <span class="btn head-btn1" @click="auth.logout()">Logout</span>
                            </div>
                            <div class="header-btn d-none f-right d-lg-block" v-else>
                                <router-link :to="{ name: 'register' }" class="btn head-btn1">Register</router-link>
                                <router-link :to="{ name: 'login' }" class="btn head-btn2">Login</router-link>
                            </div>
                        </div>
                    </div>
                    <!-- Mobile Menu -->
                    <div class="col-12">
                        <div class="mobile_menu d-block d-lg-none"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>