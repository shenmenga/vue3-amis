import { defineStore } from 'pinia';

const createState = () => {
    const state = {
        jsonSchema: {
            type: 'page',
            id: 'u:01b800b60069',
            body: [
                {
                    type: 'collapse-group',
                    activeKey: ['1'],
                    body: [
                        {
                            type: 'collapse',
                            key: '1',
                            active: true,
                            header: '标题1',
                            body: [
                                {
                                    type: 'tpl',
                                    tpl: '这里是内容1',
                                    wrapperComponent: '',
                                    inline: false,
                                    id: 'u:5521ba924db4',
                                }
                            ],
                            id: 'u:0dfe85378267',
                        },
                        {
                            type: 'collapse',
                            key: '2',
                            header: '标题2',
                            body: [
                                {
                                    type: 'tpl',
                                    tpl: '这里是内容1',
                                    wrapperComponent: '',
                                    inline: false,
                                    id: 'u:7f89267ef75e',
                                }
                            ],
                            id: 'u:50b783d57813',
                        }
                    ],
                    id: 'u:abe189df48d0',
                },
                {
                    type: 'tabs',
                    tabs: [
                        {
                            title: '选项卡1',
                            body: [
                                {
                                    type: 'tpl',
                                    tpl: '内容1',
                                    wrapperComponent: '',
                                    inline: false,
                                    id: 'u:5a94f319a01b',
                                }
                            ],
                            id: 'u:ff9c9fcd1e9d',
                        },
                        {
                            title: '选项卡2',
                            body: [
                                {
                                    type: 'tpl',
                                    tpl: '内容2',
                                    wrapperComponent: '',
                                    inline: false,
                                }
                            ],
                        }
                    ],
                    id: 'u:107d438b120c',
                },
                {
                    type: 'nested-select',
                    label: '级联选择器',
                    name: 'nestedSelect',
                    onlyChildren: true,
                    options: [
                        {
                            label: '选项A',
                            value: 'A',
                        },
                        {
                            label: '选项B',
                            value: 'B',
                            children: [
                                {
                                    label: '选项b1',
                                    value: 'b1',
                                },
                                {
                                    label: '选项b2',
                                    value: 'b2',
                                }
                            ],
                        },
                        {
                            label: '选项C',
                            value: 'C',
                            children: [
                                {
                                    label: '选项c1',
                                    value: 'c1',
                                },
                                {
                                    label: '选项c2',
                                    value: 'c2',
                                }
                            ],
                        }
                    ],
                    id: 'u:00712fe4713a',
                },
                {
                    type: 'input-date',
                    label: '日期',
                    name: 'date',
                    id: 'u:42595ebf5bbf',
                },
                {
                    type: 'input-date-range',
                    label: '日期范围',
                    name: 'date-range',
                    id: 'u:54fe2ab1277f',
                },
                {
                    type: 'input-image',
                    label: '图片上传',
                    name: 'image',
                    autoUpload: true,
                    proxy: true,
                    uploadType: 'fileReceptor',
                    imageClassName: 'r w-full',
                    id: 'u:a78ba13d9e24',
                },
                {
                    type: 'input-range',
                    label: '滑块',
                    name: 'range',
                    id: 'u:245dcc1e97fa',
                    value: 0,
                    min: 0,
                    max: 100,
                    step: 1,
                    unit: '',
                    tooltipPlacement: 'auto',
                    showInput: false,
                    parts: 1,
                    showSteps: false,
                    marks: {},
                },
                {
                    label: '分组',
                    type: 'transfer',
                    name: 'transfer',
                    options: [
                        {
                            label: '诸葛亮',
                            value: 'zhugeliang',
                        },
                        {
                            label: '曹操',
                            value: 'caocao',
                        }
                    ],
                    selectMode: 'list',
                    resultListModeFollowSelect: false,
                    id: 'u:985c5c164ca6',
                },
                {
                    type: 'chart',
                    api: 'https://aisuda.bce.baidu.com/amis/api/mock2/chart/chart',
                    interval: 5000,
                }
            ],
            title: '1111',
            toolbar: [],
        },
    };
    return state;
};
export type globalState = ReturnType<typeof createState>;

export const state = createState();

export const useStoreGlobal = defineStore('global', {
    state: (): globalState => state,
    getters: {},
    actions: {
        set_json_schema(jsonSchema: any) {
            this.jsonSchema = jsonSchema;
        },
    },
});
