import { defineStore } from 'pinia';

const createState = () => {
    const state = {
        jsonSchemaPage: {
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

        jsonSchema: {
            type: 'page',
            title: '页面标题',
            body: [
                {
                    'label': '新增',
                    'type': 'button',
                    'actionType': 'dialog',
                    'level': 'primary',
                    'className': 'm-b-sm',
                    'dialog': {
                        'title': '新增团队',
                        'body': {
                            'type': 'form',
                            'api': {
                                'method': 'post',
                                url: 'http://config-center.qmniu.com/api/backend/server/team/add?qm_csrf_backend=V1d4NK0aWq51U1jkGdgNiYC5fcJqymmV&env=test',
                                dataType: 'form-data',
                            },
                            'body': [
                                {
                                    'type': 'input-text',
                                    'name': 'name',
                                    'label': '名称',
                                },
                                {
                                    'type': 'textarea',
                                    'name': 'remark',
                                    'label': '描述',
                                }
                            ],
                        },
                    },
                },
                {
                    type: 'crud',
                    api: {
                        method: 'get',
                        url: 'http://config-center.qmniu.com/api/backend/server/team/list',
                        data: { page: 1, page_size: 10, qm_csrf_backend: 'V1d4NK0aWq51U1jkGdgNiYC5fcJqymmV', },
                        responseData: {
                            'items': '$table_list',
                        },
                    },
                    syncLocation: false,
                    columns: [
                        { label: '名称', name: 'name', },
                        { label: '创建者', name: 'creator', },
                        { label: '项目', name: 'project_num', },
                        { label: '更新时间', name: 'updated_time', },
                        { label: '描述', name: 'remark', },
                        { label: '操作', name: 'action', type: 'button-toolbar', buttons: [
                            { type: 'button', label: '修改', level: 'link', actionType: 'dialog',
                                'dialog': {
                                    'title': '编辑团队',
                                    'body': {
                                        'type': 'form',
                                        'api': {
                                            'method': 'post',
                                            url: 'http://config-center.qmniu.com/api/backend/server/team/update?qm_csrf_backend=V1d4NK0aWq51U1jkGdgNiYC5fcJqymmV&env=test',
                                            dataType: 'form-data',
                                        },
                                        'body': [
                                            {
                                                'type': 'hidden',
                                                'name': 'id',
                                            },
                                            {
                                                'type': 'input-text',
                                                'name': 'name',
                                                'label': '名称',
                                            },
                                            {
                                                'type': 'textarea',
                                                'name': 'remark',
                                                'label': '描述',
                                            }
                                        ],
                                    },
                                },
                            },
                            { type: 'button', label: '团队管理员', level: 'link', actionType: 'dialog',
                                'dialog': {
                                    'title': '编辑团队',
                                    'body': {
                                        'type': 'transfer',
                                        'name': 'transfer',
                                        'value': 'zhugeliang,libai',
                                        'options': [
                                            {
                                                'label': '诸葛亮',
                                                'value': 'zhugeliang',
                                            },
                                            {
                                                'label': '曹操',
                                                'value': 'caocao',
                                            },
                                            {
                                                'label': '钟无艳',
                                                'value': 'zhongwuyan',
                                            },
                                            {
                                                'label': '李白',
                                                'value': 'libai',
                                            },
                                            {
                                                'label': '韩信',
                                                'value': 'hanxin',
                                            },
                                            {
                                                'label': '云中君',
                                                'value': 'yunzhongjun',
                                            }
                                        ],
                                    },
                                },
                            }
                        ],
                        }
                    ],
                }
            ],
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
