<template>
    <a-config-provider :locale="zhCN">
        <router-view></router-view>
    </a-config-provider>
</template>
<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN';
</script>
<style lang="scss">
@import '@/assets/style/_reset.css';
@import '@/assets/style/common.scss';
</style>
