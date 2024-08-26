<script setup>
import Navbar from './components/admin/layouts/Navbar.vue';
import Sidebar from './components/admin/layouts/Sidebar.vue';
import Footer from './components/admin/layouts/Footer.vue';


</script>
<template>


    <Navbar />


    <Sidebar />

    <router-view />

 <Footer />


</template>