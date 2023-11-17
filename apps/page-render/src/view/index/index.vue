<template>
    <div class="index">
        ---- index

        <a-float-button @click="to_add_page">
            <template #icon> <FileAddOutlined /> </template>
        </a-float-button>
        <modal-add v-model="visibleAdd"></modal-add>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import modalAdd from './components/modal-add/index.vue';

const visibleAdd = ref(false);
const to_add_page = () => {
    visibleAdd.value = true;
};
</script>
<style lang="scss" scoped></style>
