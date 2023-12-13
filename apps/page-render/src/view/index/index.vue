<template>
    <div class="index">
        <preview-body :schema="pageSchema"></preview-body>
    </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import previewBody from '@/components/preview-body/index.vue';
import { useStoreGlobal } from '@/store/global';
const storeGlobal = useStoreGlobal();
const pageSchema = computed(() => {
    return storeGlobal.jsonSchema;
});
</script>
<style lang="scss" scoped></style>
@/store/global
