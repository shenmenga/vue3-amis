// 菜单数据 + 页面数据
export const pageJsonSchema1 = {
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
};
export const pageJsonSchema2 = {
    type: 'page',
    title: '页面标题22222',
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
        }
    ],
};
export const pageJsonSchema3 = {
    type: 'page',
    title: '页面标题33333',
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
        }
    ],
};
export const pageJsonSchema4 = {
    type: 'page',
    title: '页面标题44444',
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
        }
    ],
};
export const pageJsonSchema5 = {
    type: 'page',
    title: '页面标题55555',
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
        }
    ],
};
export const menuAI: IMenuData[] = [
    {
        name: '小说AI出图',
        id: 'ai',
        children: [
            {
                name: '小说章节提取',
                id: 'chapter',
                schema: pageJsonSchema1,
            },
            {
                name: '多轮对话',
                id: 'talk',
                schema: pageJsonSchema2,
            },
            {
                name: 'Dall-E3',
                id: 'dall',
                schema: pageJsonSchema3,
            },
            {
                name: 'SD批量',
                id: 'sd',
                schema: pageJsonSchema4,
            },
            {
                name: '任务查询',
                id: 'task',
                schema: pageJsonSchema5,
            }
        ],
    }
];

