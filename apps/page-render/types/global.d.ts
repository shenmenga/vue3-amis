// 编写业务时,用到的常用接口类型
declare global {
    // selectOption
    interface ISelectOption {
        label: string | number;
        value: string | number;
        children?: ISelectOption[];
        [property: string]: any;
    }
    interface ISelectOptionT<T> {
        label: T;
        value: T;
        children?: ISelectOptionT<T>[];
        [property: string]: any;
    }

    interface IApiPageOption {
        page: number;
        page_size: number;
        count?: number;
    }

    interface IMenuData{
        name: string;
        id: string;
        schema?: any;
        children?: IMenuData[];
    }
}
export {};
