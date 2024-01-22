import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import { VNodeProps } from 'vue';

declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;

declare type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};

declare const _default: DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /** 页面schema */
    schema: IAnyObject;
    /** 接口配置 */
    amisOptions: Record<string, any>;
    /** 全局数据 所有的 schema 中都能获取到 */
    globalData: IAnyObject;
}>, {
    schema: () => {};
    amisOptions: () => {};
    globalData: () => {};
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /** 页面schema */
    schema: IAnyObject;
    /** 接口配置 */
    amisOptions: Record<string, any>;
    /** 全局数据 所有的 schema 中都能获取到 */
    globalData: IAnyObject;
}>, {
    schema: () => {};
    amisOptions: () => {};
    globalData: () => {};
}>>>, {
    schema: {};
    amisOptions: {};
    globalData: {};
}, {}>;
export default _default;

declare type IAnyObject = Record<string, any>;

export { }
