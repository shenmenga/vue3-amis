<template>
    <div class="page-wrapper g-flex-column">
        <top-header>
            <a-button type="link" @click="onAddProject">新增项目</a-button>
        </top-header>
        <div class="g-flex g-flex-1">
            <aside-menu></aside-menu>
            <div class="page-container">
                <router-view></router-view>
            </div>
        </div>
        <modal-add-project v-model="visibleAddProject"></modal-add-project>
    </div>
</template>
<script lang="ts" setup>
import topHeader from './top-header/index.vue';
import asideMenu from './aside-menu/index.vue';

import { ref } from 'vue';

const visibleAddProject = ref(false);
const onAddProject = () => {
    visibleAddProject.value = true;
};
</script>
<style lang="scss" scoped>
.page-wrapper {
    height: 100vh;
    overflow: hidden;
    background-color: #f2f2f2;

    .page-container {
        flex: 1;
        overflow-y: auto;
        margin: $space;
        background-color: #fff;
        border-radius: 4px;
    }
}
</style>
