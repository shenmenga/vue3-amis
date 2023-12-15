<template>
    <div class="preview-body g-flex-1" id="js-preview-body"></div>
</template>
<script lang="ts" setup>
import { onMounted, watch } from 'vue';
import { useStoreAmis } from '@/store/amis';
const props = withDefaults(defineProps<{
    schema: Record<string, any>
}>(), {
    schema: () => ({}),
});
const storeAmis = useStoreAmis();
let amisInstance: any;
const renderSchema = (schema: Record<string, any>) => {
    amisInstance = storeAmis.amis.embed(
        '#js-preview-body',
        schema,
        {},
        {
            requestAdaptor(api) {
                api.headers['X-Qm-Devops-Token'] = 'GRdNSgMTb1oCQAkDBhkTR0NQSl0AVVNDChOAheyF7q1AGRpcCwBZX0RYEUNfUF9fVVtfcxBRWwBfHwVYCUBOFAdNSFAUBG9SEkAJAQAFAwIIBgwKVEU=';
                console.log(111, api);
                return api;
            },
            // 全局 api 适配器。
            // 另外在 amis 配置项中的 api 也可以配置适配器，针对某个特定接口单独处理。
            responseAdaptor(api, payload, query, request, response) {
                console.log(222, api, payload, query, request, response);
                payload.status = payload.code === 200 ? 0 : payload.code;
                return payload;
            },
        }
    );
};

watch(() => props.schema, (val) => {
    amisInstance.updateSchema(val);
}, { deep: true, });

onMounted(() => {
    renderSchema(props.schema);
});

</script>
<style lang="scss" scoped>
.preview-body {
    position: relative;
    overflow-y: auto;
    height: calc(100vh - $header-height - $space * 2);
}
</style>
@/store/amis
