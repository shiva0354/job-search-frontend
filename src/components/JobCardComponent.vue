<script setup>
import { defineProps } from 'vue';

defineProps({
    data: {
        _id: String,
        title: String,
        salary: Number,
        lastDateToApply: Date,
        companyLogo: String,
        companyName:String
    }
})


</script>

<template>
    <!-- single-job-content -->
    <div class="single-job-items mb-30">
        <div class="job-items">
            <div class="company-img">
                <a href="#"><img src="assets/img/icon/job-list1.png" alt=""></a>
            </div>
            <div class="job-tittle job-tittle2">
                <a href="#">
                    <h4>{{ data.title }}</h4>
                </a>
                <ul>
                    <li>{{ data.companyName }}</li>
                    <li><i class="fas fa-map-marker-alt"></i></li>
                    <li>₹ {{ data.salary }}</li>
                </ul>
            </div>
        </div>
        <div class="items-link items-link2 f-right">
            <router-link :to="{ name: 'job-detail', params:{ jobid: data._id } }" class="">View Detail</router-link>
            <span>Last Date to apply : {{ data.lastDateToApply }}</span>
        </div>
    </div>
    <!-- single-job-content -->
</template>