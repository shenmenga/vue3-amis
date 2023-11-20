<template>
    <div class="top-header g-flex-start-center">
        <p class="top-header-title">JSON配置化编辑器</p>
        <div class="top-header-right">
            <a-button v-if="isPreview" type="primary" @click="on_edit">编辑</a-button>
            <a-space v-else>
                <a-button type="primary" @click="on_preview">预览</a-button>
                <a-button @click="on_back">退出</a-button>
            </a-space>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const emits = defineEmits(['preview', 'edit']);

const isPreview = ref(false);
const on_preview = () => {
    isPreview.value = true;
    emits('preview');
};

const on_edit = () => {
    isPreview.value = false;
    emits('edit');
};

const on_back = () => {
    router.replace('/');
};
</script>
<style lang="scss" scoped>
.top-header {
    padding: 0 20px;
    height: $header-height;
    background-color: #fff;
    border-bottom: 1px solid #e8e9eb;

    &-title {
        font-size: 18px;
        font-weight: bold;
    }

    &-right {
        margin-left: auto;
    }
}
</style>
