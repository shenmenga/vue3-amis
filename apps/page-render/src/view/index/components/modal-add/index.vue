<template>
    <a-modal v-model:open="visible" title="新建页面" class="g-w-600" @ok="on_sumit">
        <form-create :rule="rules" v-model:api="fApi" :option="options" />
    </a-modal>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useVModel } from '@vueuse/core';

const emits = defineEmits(['update:modelValue']);
const props = withDefaults(defineProps<{ modelValue: boolean }>(), {
    modelValue: false,
});
const router = useRouter();
const visible = useVModel(props, 'modelValue', emits);

const fApi = ref();
const options = ref({
    submitBtn: false,
});
const rules = ref([
    {
        type: 'input',
        field: 'page_name',
        title: '页面名称',
        value: '',
        validate: [{ required: true, message: '请输入页面名称', }],
        wrap: {
            labelCol: { span: 6, },
            wrapperCol: { span: 12, },
        },
    }
]);
const on_sumit = async() => {
    await fApi.value.validate();
    const _id = 1;
    router.push(`/edit?id=${_id}`);
};
</script>
<style lang="scss" scoped></style>
