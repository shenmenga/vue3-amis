<!--  -->
<template>
    <header class="top-header g-flex-start-center">
        <a href="/" class="top-header-title g-flex-start-center">
            <img class="top-header-title-logo" src="@/assets/images/logo.png" />
            <p class="top-header-title-text">七猫速搭</p>
        </a>
        <div class="top-header-tabs">
            <a-menu v-model:selectedKeys="selectedKeys" mode="horizontal" :items="storeGlobal.projectMenu" theme="dark" />
        </div>
        <div class="top-header-right">
            <slot></slot>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useStoreGlobal } from '@/store/global';
const storeGlobal = useStoreGlobal();

const selectedKeys = ref([storeGlobal.projectMenu[0]!.key]);
const jumpPage = (path: string) => {};
onMounted(() => {});
</script>
<style lang="scss" scoped>
.top-header {
    height: $header-height;
    background-color: #000;
    color: #fff;

    &-title {
        width: $aside-width;
        padding: $space;
        &-logo {
            width: 28px;
            height: 28px;
            margin-right: $space;
        }
        &-text {
            color: #fff;
            font-weight: bold;
            font-size: 20px;
        }
    }

    &-right {
        margin-left: auto;
    }

    :deep(.ant-menu-dark.ant-menu-horizontal) {
        .ant-menu-item-selected {
            background-color: #5a5655;
            position: relative;
            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 2px;
                background-color: #fff;
            }
        }
        .ant-menu-item {
            padding: 0 $space * 2;
            &:hover {
                background-color: #5a5655;
            }
        }
    }
}
</style>
@/store/global
