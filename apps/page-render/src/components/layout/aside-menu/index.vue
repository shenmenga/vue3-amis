<template>
    <a-menu class="aisde-menu" theme="dark">
        <a-menu-item class="menu-item" v-for="item in menuList" :key="item.id">
            <div class="g-flex">
                <p class="g-flex-1">菜单名称</p>
                <i class="menu-item-icon g-flex-center-center" @click="on_edit">
                    <EditOutlined />
                </i>
                <a-popconfirm title="确定删除该页面吗？" @confirm="on_del">
                    <i class="menu-item-icon g-flex-center-center">
                        <DeleteOutlined />
                    </i>
                </a-popconfirm>
            </div>
        </a-menu-item>
    </a-menu>
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

const on_edit = () => {
    router.push('/edit?id=1');
};
const on_del = () => {};
</script>
<style lang="scss" scoped>
.aisde-menu {
    width: 200px;
    height: 100%;
    overflow-y: auto;
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
}
</style>
