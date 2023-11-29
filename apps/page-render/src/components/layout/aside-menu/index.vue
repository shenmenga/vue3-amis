<template>
    <div class="aisde-menu g-flex-column">
        <a-menu theme="light" class="g-flex-1">
            <a-menu-item class="menu-item" v-for="item in menuList" :key="item.id">
                <div class="g-flex">
                    <p class="g-flex-1">菜单名称</p>
                    <i class="menu-item-icon g-flex-center-center" @click="onEdit">
                        <EditOutlined />
                    </i>
                    <!-- <a-popconfirm title="确定删除该页面吗？" @confirm="on_del">
                    <i class="menu-item-icon g-flex-center-center">
                        <DeleteOutlined />
                    </i>
                </a-popconfirm> -->
                </div>
            </a-menu-item>
        </a-menu>
        <div class="add-btn">
            <a-button type="primary" @click="toAdd">新增页面</a-button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const menuList = ref([
    {
        id: 1,
        title: '菜单名称',
    }
]);

const onEdit = () => {
    router.push('/edit?id=1');
};
const toAdd = () => {
    router.push('/edit');
};
</script>
<style lang="scss" scoped>
.aisde-menu {
    width: $aside-width;
    height: 100%;
    overflow-y: auto;
    background-color: #fff;
    border-right: 1px solid rgba(5, 5, 5, 0.06);
    .menu-item {
        &-icon {
            padding: 0 10px;
            display: none;
        }

        &:hover {
            .menu-item-icon {
                display: block;
            }
        }
    }
    :deep(.ant-menu-root.ant-menu-vertical) {
        border-right: none;
    }
    :deep(.ant-menu-item) {
        margin: 0;
        border-radius: 0;
        width: 100%;
        &:not(.ant-menu-item-selected):hover:hover {
            background-color: #e6f4ff;
            color: #1677ff;
        }
    }

    .add-btn {
        padding: $space * 2;
    }
}
</style>
