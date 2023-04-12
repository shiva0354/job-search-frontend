<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: String,
    companyName: String,
    location: String,
    salary: String,

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
                    <h4>{{ props.title }}</h4>
                </a>
                <ul>
                    <li>Creative Agency</li>
                    <li><i class="fas fa-map-marker-alt"></i>{{ props.location }}</li>
                    <li>$3500 - $4000</li>
                </ul>
            </div>
        </div>
        <div class="items-link items-link2 f-right">
            <a href="job_details.html">Full Time</a>
            <span>Last Date to apply {{ props.lastDateToApply }}</span>
        </div>
    </div>
    <!-- single-job-content -->
</template>