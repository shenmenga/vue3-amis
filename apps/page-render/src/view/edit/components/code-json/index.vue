<template>
    <div id="codeEditor"></div>
</template>
<script lang="ts" setup>
import { ref, computed, onMounted, watch } from 'vue';
const amis = (window as any).amisRequire('amis/embed');
const valueJson = ref({ a: '11', b: 'ccc' });
const pageJson = {
    type: 'editor',
    language: 'json',
    className: 'h-screen',
    value: valueJson.value,
    options: {
        lineNumbers: 'off'
    },
    onChange: (e: string) => {
        // _amis.updateSchema(JSON.parse(e));
        console.log(123);
        valueJson.value = JSON.parse(e);
    }
};
let amisInstance = '';
watch(valueJson.value, () => {
    console.log(amisInstance);
});

onMounted(() => {
    amisInstance = amis.embed('#codeEditor', pageJson);
});
</script>
<style lang="scss"></style>
