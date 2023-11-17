<template>
    <a-tabs class="left-tabs" v-model:activeKey="activeKey" tab-position="left">
        <a-tab-pane class="tab-content" v-for="item in tabList" :key="item.value">
            <template #tab>
                <a-tooltip :title="item.label" placement="right">
                    <div class="tab-item-icon">
                        <component :is="item.icon"></component>
                    </div>
                </a-tooltip>
            </template>
            <code-json v-if="item.value === 'code'"></code-json>
            <template v-else> 111 </template>
        </a-tab-pane>
    </a-tabs>
</template>
<script lang="ts" setup>
import { ref, h, onMounted } from 'vue';
import { CodeOutlined, AppstoreOutlined } from '@ant-design/icons-vue';
import codeJson from '../code-json/index.vue';
const tabList = ref([
    {
        label: '代码',
        value: 'code',
        icon: h(CodeOutlined)
    },
    {
        label: '组件',
        value: 'components',
        icon: h(AppstoreOutlined)
    }
]);

const activeKey = ref(tabList.value[0].value);
</script>
<style lang="scss" scoped>
.left-tabs {
    width: 300px;
    height: 100%;
    background-color: #fff;

    :deep(.ant-tabs-tab) {
        padding: 0;
        .anticon {
            margin-right: 2px;
        }
    }
    :deep(.ant-tabs-content) {
        height: 100%;
    }

    .tab-item-icon {
        padding: 8px 12px;
        font-size: 20px;
    }

    .tab-content {
        height: 100%;
        padding-left: 0 !important;
    }
}
</style>
