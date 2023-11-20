<template>
    <div class="preview-body g-flex-1" id="previewBody"></div>
</template>
<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue';
import { useStoreGlobal } from '@/store/modules/global';

const storeGlobal = useStoreGlobal();
const amis = (window as any).amisRequire('amis/embed');
let unsubscribe = () => {};
onMounted(() => {
    const _instance = amis.embed('#previewBody', storeGlobal.jsonSchema);
    unsubscribe = storeGlobal.$onAction(
        ({
            name, // action 的名字
            after // 在这个 action 执行完毕之后，执行这个函数
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
