<script setup>
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import SliderComponent from '../components/SliderComponent.vue';
import { jobDetail } from '../endpoints/UserEndpoint';

const data = reactive({
    job: null
})

onMounted(() => {
    const route = useRoute()
    const id = route.params.jobid
    console.log(id);
    loadJobDetail()
})

const loadJobDetail = async () => {

    const response = await jobDetail(id)
    console.log(response.data);
    data.job = response.data

}
</script>

<template>
    <SliderComponent title="Job Detail" />

    <!-- job post company Start -->

    <!-- job post company End -->
</template>