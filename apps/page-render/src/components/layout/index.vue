<template>
    <div class="page-wrapper">
        <aside-menu></aside-menu>
        <div class="router-container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script lang="ts" setup>
import asideMenu from './aside-menu/index.vue';
import { ref } from 'vue';
</script>
<style lang="scss" scoped>
.page-wrapper {
    display: flex;
    height: 100vh;
    overflow: hidden;

    .router-container {
        flex: 1;
        overflow-y: auto;
    }
}
</style>
