<template>
    <div class="aisde-menu g-flex-column">
        <a-menu theme="light" class="g-flex-1" v-model:selectedKeys="selectedKeys" >
            <a-menu-item class="menu-item" v-for="item in storeGlobal.currentSubMenuList" :key="item.id" @click="onChangeMenu(item)">
                <div class="g-flex">
                    <p class="g-flex-1">{{ item.name }}</p>
                    <i class="menu-item-icon g-flex-center-center" @click="onEdit(item.id)" v-if="hasRight">
                        <EditOutlined />
                    </i>
                </div>
            </a-menu-item>
        </a-menu>
        <!-- <div class="add-btn">
            <a-button type="primary" @click="toAdd">新增页面</a-button>
        </div> -->
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useStoreGlobal } from '@/store/global';
const storeGlobal = useStoreGlobal();
const router = useRouter();
const hasRight = false;
const selectedKeys = ref<string[]>([]);

const unsubscribe = storeGlobal.$onAction(
    ({
        name,
        after,
    }) => {
        after(() => {
            if (name === 'setCurrentSubMenuId') {
                selectedKeys.value = [storeGlobal.currentSubMenuId];
                unsubscribe();
            }
        });
    }
);

const onEdit = (id: string) => {
    console.log(111, storeGlobal.currentSubMenuList);
    router.push(`/edit?id=${id}`);
};
const toAdd = () => {
    router.push('/edit');
};
const onChangeMenu = (item: IMenuData) => {
    storeGlobal.updatePageSchema(item.schema);
    router.replace(`/index/${item.id}`);
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
        padding-right: 0;
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
@/store/global
