<template>
    <div class="index">
        <preview-body :schema="storeGlobal.jsonSchema"></preview-body>
    </div>
</template>
<script lang="ts" setup>
import previewBody from '@/components/preview-body/index.vue';
import { useStoreGlobal } from '@/store/global';
const storeGlobal = useStoreGlobal();

</script>
<style lang="scss" scoped></style>
@/store/global
