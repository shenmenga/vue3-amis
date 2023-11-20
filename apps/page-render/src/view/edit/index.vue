<template>
    <div class="edit">
        <top-header @preview="on_preview" @edit="on_edit"></top-header>
        <div class="g-flex">
            <left-tabs v-if="visibleLeftTabs"></left-tabs>
            <preview-body></preview-body>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import topHeader from './components/top-header/index.vue';
import leftTabs from './components/left-tabs/index.vue';
import previewBody from './components/preview-body/index.vue';

const visibleLeftTabs = ref(true);
const on_preview = () => {
    visibleLeftTabs.value = false;
};
const on_edit = () => {
    visibleLeftTabs.value = true;
};
</script>
<style lang="scss" scoped>
.edit {
    height: 100vh;
    background-color: #f7f7f9;
}
</style>
