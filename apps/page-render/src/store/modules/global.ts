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
            body: {
                type: 'service',
                api: {
                    methods: 'post',
                    url: 'https://dap.qmniu.com/dg-service/api/archive/confs/page',
                    // requestAdaptor: function(api, context) {
                    //     return {
                    //         // 模拟 http 请求返回
                    //         mockResponse: {
                    //             status: 200, // http 返回状态
                    //             data: {
                    //                 // http 返回结果
                    //                 status: 0, // amis 返回数据的状态
                    //                 data: {
                    //                     rows: [
                    //                         {
                    //                             created_time: '2023-11-28 16:08:51',
                    //                             created_user: 24,
                    //                             updated_time: '2023-11-28 16:08:56',
                    //                             updated_user: 24,
                    //                             cloud_code: 'HWYUN',
                    //                             ds_id: 2,
                    //                             source_type: 'HIVE',
                    //                             db_name: 'test',
                    //                             table_name: 'hw_yyyy_mm_dd_hms_v2',
                    //                             partitioned: true,
                    //                             ar_mode: 'TIME_CYCLE',
                    //                             id: 40,
                    //                             cycle_mode: 'DAY',
                    //                             ds_name: 'hw_hive',
                    //                             cycle_time: 0,
                    //                             approve_state: 'ONLINE',
                    //                             deleted: 0,
                    //                             std_days: '1月',
                    //                             ia_days: '2月',
                    //                             ar_days: '5月',
                    //                             ar_level: 'CLOUD_AR',
                    //                             cloud_code_view: '华为云',
                    //                             ds_type_view: 'hw_hive(HIVE)',
                    //                             ar_level_view: '归档',
                    //                             cycle_mode_view: '日调度',
                    //                             approve_state_view: '上线',
                    //                         },
                    //                         {
                    //                             created_time: '2023-11-28 16:06:58',
                    //                             created_user: 24,
                    //                             updated_time: '2023-11-28 16:07:00',
                    //                             updated_user: 24,
                    //                             cloud_code: 'HWYUN',
                    //                             ds_id: 2,
                    //                             source_type: 'HIVE',
                    //                             db_name: 'test',
                    //                             table_name: 'hw_yyyy_mm_dd_hms_v2',
                    //                             partitioned: true,
                    //                             ar_mode: 'TIME_CYCLE',
                    //                             ar_rule: {
                    //                                 part_col: 'dt',
                    //                                 part_format: 'yyyy-MM-dd HH:mm:ss',
                    //                                 std_days: 300,
                    //                                 ia_days: 330,
                    //                                 ar_days: 510,
                    //                                 time_unit: 'D',
                    //                                 ar_level: 'CLOUD_COLD_AR',
                    //                             },
                    //                             id: 39,
                    //                             cycle_mode: 'MANUAL',
                    //                             ds_name: 'hw_hive',
                    //                             cycle_time: 0,
                    //                             approve_state: 'ONLINE',
                    //                             deleted: 0,
                    //                             std_days: '300天',
                    //                             ia_days: '330天',
                    //                             ar_days: '510天',
                    //                             ar_level: 'CLOUD_COLD_AR',
                    //                             cloud_code_view: '华为云',
                    //                             ds_type_view: 'hw_hive(HIVE)',
                    //                             ar_level_view: '冷归档',
                    //                             cycle_mode_view: '单次执行',
                    //                             approve_state_view: '上线',
                    //                         }
                    //                     ],
                    //                     columns: [
                    //                         { name: 'id', label: '归档ID', },
                    //                         { name: 'cloud_code_view', label: '云平台', },
                    //                         { name: 'ds_type_view', label: '数据源', },
                    //                         { name: 'db_name', label: '数据库名称', },
                    //                         { name: 'table_name', label: '表名称', },
                    //                         { name: 'ar_mode', label: '归档方式', },
                    //                         { name: 'cycle_mode_view', label: '调度方式', },
                    //                         { name: 'std_days', label: '标准存储', },
                    //                         { name: 'approve_state_view', label: '状态', },
                    //                         {
                    //                             type: 'operation',
                    //                             label: '操作',
                    //                             width: 100,
                    //                             buttons: [
                    //                                 {
                    //                                     label: '编辑',
                    //                                     type: 'button',
                    //                                     level: 'link',
                    //                                     actionType: 'dialog',
                    //                                     dialog: {
                    //                                         title: '查看详情',
                    //                                         body: {
                    //                                             type: 'form',
                    //                                             body: [
                    //                                                 {
                    //                                                     type: 'input-text',
                    //                                                     name: 'id',
                    //                                                     label: '归档ID',
                    //                                                 },
                    //                                                 {
                    //                                                     type: 'input-text',
                    //                                                     name: 'cloud_code_view',
                    //                                                     label: '云平台',
                    //                                                 }
                    //                                             ],
                    //                                         },
                    //                                     },
                    //                                 },
                    //                                 {
                    //                                     label: '删除',
                    //                                     type: 'button',
                    //                                     level: 'link',
                    //                                     className: 'text-danger',
                    //                                     disabledOn: "this.grade === 'A'",
                    //                                 }
                    //                             ],
                    //                         }
                    //                     ],
                    //                 },
                    //             },
                    //         },
                    //     };
                    // },
                },
                body: [
                    {
                        type: 'table2',
                        title: '表格标题 - ${rows.length}',
                        source: '$rows',
                        columns: '$columns',
                    }
                ],
            },
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
