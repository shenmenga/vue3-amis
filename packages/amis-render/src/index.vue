<template>
    <div class="amis-render" id="js-amis-render" style="position: relative"></div>
</template>
<script lang="ts" setup>
import { onMounted, watch, onUnmounted } from 'vue';
import axios from 'axios';
type IAnyObject = Record<string, any>;

/** 接口配置 */
export interface IApiOptions {
    /** 接口baseurl */
    baseUrl?: string;
    headers?: IAnyObject;
    config?: IAnyObject;
}

const props = withDefaults(
    defineProps<{
        /** 页面schema */
        schema: IAnyObject;
        /** 接口配置 */
        apiOptions: IApiOptions;
        /** 全局数据 所有的 schema 中都能获取到 */
        globalData: IAnyObject;
    }>(),
    {
        schema: () => ({}),
        apiOptions: () => ({}),
        globalData: () => ({}),
    }
);

const _amisRequire = (window as any).amisRequire;
const amis = _amisRequire('amis/embed');
const amisLib = _amisRequire('amis');
// const amisReact = _amisRequire('react');
let amisInstance: any;
const renderSchema = (schema: IAnyObject) => {
    amisInstance = amis.embed(
        '#js-amis-render',
        schema,
        {
            data: { ...props.globalData, },
        },
        {
            // 下面三个接口必须实现
            fetcher: async(api: any) => {
                let { url, method, data, responseType, config, headers, } = api;
                console.log(1, api);
                config = config || {};
                config.url = url;

                config.withCredentials = true;
                responseType && (config.responseType = responseType);

                if (config.cancelExecutor) {
                    config.cancelToken = new (axios as any).CancelToken(config.cancelExecutor);
                }

                config.method = method;
                config.data = data;

                if (method === 'get' && data) {
                    config.params = data;
                } else if (data && data instanceof FormData) {
                    // config.headers['Content-Type'] = 'multipart/form-data';
                } else if (data && typeof data !== 'string' && !(data instanceof Blob) && !(data instanceof ArrayBuffer)) {
                    data = JSON.stringify(data);
                    config.headers['Content-Type'] = 'application/json';
                }

                // 支持返回各种报错信息
                config.validateStatus = function() {
                    return true;
                };

                let response = config.mockResponse ? config.mockResponse : await axios(config);
                response = await amisLib.attachmentAdpator(
                    response,
                    (msg: string) => {
                        console.log('-- attachmentAdpator', msg);
                        return msg;
                    },
                    api
                );
                console.log(6, JSON.parse(JSON.stringify(response)));
                return response;
            },
            isCancel: (value: any) => (axios as any).isCancel(value),
        }
    );
};

watch(
    () => props.schema,
    (val) => {
        // 使用  updateSchema 是更新schema， 数据域会保留
        // amisInstance.updateSchema(val);
        renderSchema(val);
    },
    { deep: true, }
);

onMounted(() => {
    renderSchema(props.schema);
});

onUnmounted(() => {
    amisInstance?.unmount();
});
</script>
<style lang="scss" scoped></style>
