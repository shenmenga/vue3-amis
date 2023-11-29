<template>
    <div class="index">---- index</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const visibleAdd = ref(false);
const to_add_page = () => {
    visibleAdd.value = true;
};
</script>
<style lang="scss" scoped></style>
