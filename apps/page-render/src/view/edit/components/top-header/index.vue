<template>
    <div class="top-header g-flex-start-center">
        <p class="top-header-title">JSON配置化编辑器</p>
        <div class="top-header-right">
            <a-space size="middle">
                <a-button type="primary" @click="onPublish">发布</a-button>
                <a-button v-if="isPreview" type="primary" @click="onEdit">编辑</a-button>
                <template v-else>
                    <a-button type="primary" @click="onPreview">预览</a-button>
                    <a-button @click="onBack">退出</a-button>
                </template>
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
const onPreview = () => {
    isPreview.value = true;
    emits('preview');
};
const onPublish = () => {};

const onEdit = () => {
    isPreview.value = false;
    emits('edit');
};

const onBack = () => {
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
