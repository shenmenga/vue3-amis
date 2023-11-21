<template>
    <a-config-provider :locale="zhCN">
        <router-view></router-view>
    </a-config-provider>
</template>
<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { useStoreAmis } from '@/store/modules/amis';
const storeAmis = useStoreAmis();
storeAmis.get_amis_sdk();
</script>
<style lang="scss">
@import '@/assets/style/_reset.css';
@import '@/assets/style/common.scss';
.amis-scope {
    .cxd-EditorControl {
        height: calc(100vh - $header-height) !important;
        box-sizing: border-box;
        max-height: unset;
        overflow: hidden;
    }
}
</style>
