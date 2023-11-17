<template>
    <div class="edit">
        <left-tabs></left-tabs>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import leftTabs from './components/left-tabs/index.vue';
</script>
<style lang="scss" scoped>
.edit {
    height: 100vh;
    background-color: #f7f7f9;
}
</style>
