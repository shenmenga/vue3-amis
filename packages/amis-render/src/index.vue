<template>
    <div class="amis-render" id="js-amis-render" style="position: relative"></div>
</template>
<script lang="ts" setup>
import { onMounted, watch, onUnmounted } from 'vue';
type IAnyObject = Record<string, any>;

const props = withDefaults(
    defineProps<{
        /** 页面schema */
        schema: IAnyObject;
        /** 接口配置 */
        amisOptions: Record<string, any>;
        /** 全局数据 所有的 schema 中都能获取到 */
        globalData: IAnyObject;
    }>(),
    {
        schema: () => ({}),
        amisOptions: () => ({}),
        globalData: () => ({}),
    }
);

const _amisRequire = (window as any).amisRequire;
const amis = _amisRequire('amis/embed');
let amisInstance: any;
const renderSchema = (schema: IAnyObject) => {
    amisInstance = amis.embed(
        '#js-amis-render',
        schema,
        {
            data: { ...props.globalData, },
        },
        props.amisOptions
    );
};

watch(
    () => props.schema,
    (val) => {
        // 使用  updateSchema 是更新schema， 数据域会保留
        // amisInstance.updateSchema(val);
        renderSchema(val);
    },
    { deep: true, }
);

onMounted(() => {
    renderSchema(props.schema);
});

onUnmounted(() => {
    amisInstance?.unmount();
});
</script>
<style lang="scss" scoped></style>
