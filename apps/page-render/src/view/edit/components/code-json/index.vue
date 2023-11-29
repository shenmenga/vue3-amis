<template>
    <div class="code-editor" :style="{ width: editorWidth + 'px' }">
        <div id="js-code-editor"></div>
        <div class="code-editor-drag" @mousedown="onMousedown"></div>
    </div>
</template>
<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import { useStoreGlobal } from '@/store/modules/global';
import { useStoreAmis } from '@/store/modules/amis';
const storeAmis = useStoreAmis();
const storeGlobal = useStoreGlobal();
let amisInstance: any = {};

const getSchema = () => {
    return {
        type: 'json-editor',
        language: 'json',
        value: storeGlobal.jsonSchema,
        size: 'xxl',
        options: {
            lineNumbers: 'off',
            wordWrap: true,
        },

        onChange: (e: string) => {
            try {
                const _json = JSON.parse(e);
                storeGlobal.set_json_schema(_json);
            } catch (er) {}
        },
        onBlur: () => {
            console.log('-- blur', amisInstance);
            amisInstance.updateSchema(getSchema());
        },
    };
};
/** 宽度信息 */
const editorWidthInfo = {
    default: 400,
    min: 300,
    max: 800,
};

const editorWidth = ref(editorWidthInfo.default);

const startInfo = {
    startX: 0,
    offsetLeft: 300,
};
const onMousedown = (e: MouseEvent) => {
    startInfo.startX = e.clientX;
    startInfo.offsetLeft = (e.target as HTMLDivElement).offsetLeft;
    document.addEventListener('mousemove', onMousemove, true);
    document.addEventListener('mouseup', onMouseup, true);
};

const onMousemove = (e: MouseEvent) => {
    const _disX = e.clientX - startInfo.startX + startInfo.offsetLeft;
    editorWidth.value = _disX > editorWidthInfo.max ? editorWidthInfo.max : _disX < editorWidthInfo.min ? editorWidthInfo.min : _disX;
};

const onMouseup = () => {
    document.removeEventListener('mousemove', onMousemove, true);
    document.removeEventListener('mouseup', onMouseup, true);
};

onMounted(() => {
    amisInstance = storeAmis.amis.embed('#js-code-editor', getSchema());
});
</script>
<style lang="scss" scoped>
.code-editor {
    resize: both;
    position: relative;

    &-drag {
        position: absolute;
        top: 0;
        right: -2px;
        bottom: 0;
        width: 4px;
        z-index: 99;
        cursor: col-resize;
        white-space: wrap;
    }
}
</style>
