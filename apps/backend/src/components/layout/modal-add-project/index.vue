<template>
    <a-modal v-model:open="visible" title="新建项目" class="g-w-600" @ok="on_sumit">
        <form-create :rule="rules" v-model:api="fApi" :option="options" />
    </a-modal>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useVModel } from '@vueuse/core';
import { message } from 'ant-design-vue';
const emits = defineEmits(['update:modelValue']);
const props = withDefaults(defineProps<{ modelValue: boolean }>(), {
    modelValue: false,
});
const router = useRouter();
const visible = useVModel(props, 'modelValue', emits);

const fApi = ref();
const options = ref({
    submitBtn: false,
    form: {
        labelCol: { span: 6, },
        wrapperCol: { span: 12, },
    },
});
const rules = ref([
    {
        type: 'input',
        field: 'page_name',
        title: '项目名称',
        value: '',
        validate: [{ required: true, message: '请输入页面名称', }],
    }
]);
const on_sumit = async() => {
    await fApi.value.validate();
    message.success('添加成功');
    // 刷新菜单，跳转过去
    visible.value = false;
};
</script>
<style lang="scss" scoped></style>
