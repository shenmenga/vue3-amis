<template>
    <div class="code-editor" :style="{ width: editorWidth + 'px' }">
        <div id="codeEditor"></div>
        <div class="code-editor-drag" @mousedown="on_mousedown"></div>
    </div>
</template>
<script lang="ts" setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useStoreGlobal } from '@/store/modules/global';
import { message } from 'ant-design-vue';
const storeGlobal = useStoreGlobal();
const amis = (window as any).amisRequire('amis/embed');
let amisInstance: any = {};

const get_schema = () => {
    return {
        type: 'json-editor',
        language: 'json',
        value: storeGlobal.jsonSchema,
        size: 'xxl',
        options: {
            lineNumbers: 'off',
            wordWrap: true
        },

        onChange: (e: string) => {
            try {
                const _json = JSON.parse(e);
                storeGlobal.set_json_schema(_json);
            } catch (er) {}
        },
        onBlur: () => {
            console.log('-- blur', amisInstance);
            amisInstance.updateSchema(get_schema());
        }
    };
};
/** 宽度信息 */
const editorWidthInfo = {
    default: 400,
    min: 300,
    max: 800
};

const editorWidth = ref(editorWidthInfo.default);

const startInfo = {
    startX: 0,
    offsetLeft: 300
};
const on_mousedown = (e: MouseEvent) => {
    startInfo.startX = e.clientX;
    startInfo.offsetLeft = (e.target as HTMLDivElement).offsetLeft;
    document.addEventListener('mousemove', on_mousemove, true);
    document.addEventListener('mouseup', on_mouseup, true);
};

const on_mousemove = (e: MouseEvent) => {
    const _disX = e.clientX - startInfo.startX + startInfo.offsetLeft;
    editorWidth.value = _disX > editorWidthInfo.max ? editorWidthInfo.max : _disX < editorWidthInfo.min ? editorWidthInfo.min : _disX;
};

const on_mouseup = () => {
    document.removeEventListener('mousemove', on_mousemove, true);
    document.removeEventListener('mouseup', on_mouseup, true);
};

onMounted(() => {
    amisInstance = amis.embed('#codeEditor', get_schema());
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
