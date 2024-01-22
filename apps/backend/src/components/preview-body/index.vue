<template>
    <amis-render :schema="props.schema" :amis-options="amisOptions" :global-data="globalData"></amis-render>
</template>
<script lang="ts" setup>
import amisRender from '@amis/render';
const props = withDefaults(
    defineProps<{
        schema: Record<string, any>;
    }>(),
    {
        schema: () => ({}),
    }
);
const baseUrl = 'https://aisuda.bce.baidu.com';

const amisOptions = {
    requestAdaptor(api: any) {
        // 本地开发使用proxy，不加域名
        if (import.meta.env.PROD && !api.url.startWith('http')) {
            api.url = baseUrl + api.url;
        }
        return api;
    },
    // 全局 api 适配器。
    // 另外在 amis 配置项中的 api 也可以配置适配器，针对某个特定接口单独处理。
    responseAdaptor(api: any, payload: any, query: any, request: any, response: any) {
        return payload;
    },
};

// 全局数据，可在 schema 中直接使用
const globalData = {
    name: 'amis',
};
</script>
