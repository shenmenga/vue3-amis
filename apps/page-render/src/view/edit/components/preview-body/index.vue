<template>
    <div class="preview-body g-flex-1" id="js-preview-body"></div>
</template>
<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue';
import { useStoreGlobal } from '@/store/modules/global';
import { useStoreAmis } from '@/store/modules/amis';
const storeAmis = useStoreAmis();
const storeGlobal = useStoreGlobal();
let unsubscribe = () => {};
onMounted(() => {
    const _instance = storeAmis.amis.embed(
        '#js-preview-body',
        storeGlobal.jsonSchema,
        {},
        {
            requestAdaptor(api) {
                console.log(111, api);
                // api.headers.token = '123';
                // 支持异步，可以通过 api.mockResponse 来设置返回结果，跳过真正的请求发送
                // 此功能自定义 fetcher 的话会失效
                // api.context 中包含发送请求前的上下文信息
                return api;
            },
            // 全局 api 适配器。
            // 另外在 amis 配置项中的 api 也可以配置适配器，针对某个特定接口单独处理。
            responseAdaptor(api, payload, query, request, response) {
                console.log(222, api, payload, query, request, response);
                return payload;
            },
        }
    );
    unsubscribe = storeGlobal.$onAction(
        ({
            name, // action 的名字
            after, // 在这个 action 执行完毕之后，执行这个函数
        }) => {
            // 这将在 `store` 上的操作执行之前触发

            // 如果 action 成功并且完全运行后，after 将触发。
            // 它将等待任何返回的 promise
            after(() => {
                if (name === 'set_json_schema') {
                    _instance.updateSchema(storeGlobal.jsonSchema);
                }
            });
        }
    );
});
onUnmounted(() => {
    unsubscribe();
});
</script>
<style lang="scss" scoped>
.preview-body {
    margin: 10px;
    overflow-y: auto;
    height: calc(100vh - $header-height - 20px);
}
</style>
