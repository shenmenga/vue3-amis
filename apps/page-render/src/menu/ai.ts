// 菜单数据 + 页面数据
export const pageJsonSchema1 = {
    type: 'page',
    title: '小说章节提取',
    body: {
        type: 'form',
        mode: 'horizontal',
        title: false,
        wrapWithPanel: false,
        labelWidth: 160,
        body: [
            {
                type: 'input-number',
                name: 'email',
                label: '小说id：',
                required: true,
                placeholder: '请输入小说id',
            },
            {
                type: 'group',
                label: '章节范围：',
                description: '一次提取的章节数量不超过100章',
                required: true,
                body: [
                    {
                        type: 'select',
                        name: 'select1',
                        label: false,
                        required: true,
                        options: [
                            {
                                label: 'A',
                                value: 'a',
                            },
                            {
                                label: 'B',
                                value: 'b',
                            },
                            {
                                label: 'C',
                                value: 'c',
                            }
                        ],
                    },
                    {
                        type: 'select',
                        name: 'select2',
                        label: false,
                        required: true,
                        options: [
                            {
                                label: 'A',
                                value: 'a',
                            },
                            {
                                label: 'B',
                                value: 'b',
                            },
                            {
                                label: 'C',
                                value: 'c',
                            }
                        ],
                    }
                ],
            },
            {
                type: 'control',
                body: [
                    {
                        type: 'button',
                        label: '提交执行',
                        level: 'primary',
                        actionType: 'submit',
                    }
                ],
            },
            {
                type: 'control',
                body: [
                    {
                        type: 'link',
                        href: 'https://www.baidu.com',
                        visibleOn: '${!!select2}',
                        body: '文件下载：${select2}',
                    }
                ],
            }
        ],
    },
};
export const pageJsonSchema2 = {
    type: 'page',
    title: '多轮对话',
    body: [
        {
            type: 'form',
            mode: 'horizontal',
            title: false,
            wrapWithPanel: false,
            labelWidth: 160,
            body: [
                {
                    type: 'select',
                    name: 'select1',
                    label: '大模型选择：',
                    required: true,
                    options: [
                        {
                            label: 'A',
                            value: 'a',
                        },
                        {
                            label: 'B',
                            value: 'b',
                        }
                    ],
                },
                {
                    type: 'select',
                    name: 'select2',
                    label: '细分模型选择：',
                    required: true,
                    options: [
                        {
                            label: 'A',
                            value: 'a',
                        },
                        {
                            label: 'B',
                            value: 'b',
                        }
                    ],
                },
                {
                    type: 'textarea',
                    name: 'textarea',
                    label: '指定行数运行：',
                    required: true,
                },
                {
                    type: 'textarea',
                    name: 'textarea2',
                    label: '初始Prompt：',
                    required: true,
                },
                {
                    type: 'input-file',
                    name: 'upload',
                    label: '上传章节原文：',
                    required: true,
                    accept: '*',
                    receiver: '/amis/api/upload/file',
                },
                {
                    type: 'input-array',
                    name: 'array',
                    label: '多轮对话：',
                    mode: 'horizontal',
                    value: ['', '', ''],
                    scaffold: '',
                    inline: true,
                    addBtn: {
                        type: 'button',
                        label: '+新增问题',
                        level: 'link',
                    },
                    items: {
                        type: 'textarea',
                        clearable: true,
                        placeholder: '请输入分镜内容',
                    },
                },
                {
                    type: 'control',
                    body: [
                        {
                            type: 'button',
                            label: '提交执行',
                            level: 'primary',
                            actionType: 'submit',
                        }
                    ],
                }
            ],
        }
    ],
};
export const pageJsonSchema3 = {
    type: 'page',
    title: 'Dall-E 出图',
    body: [
        {
            type: 'form',
            mode: 'horizontal',
            title: false,
            wrapWithPanel: false,
            labelWidth: 160,
            body: [
                {
                    type: 'select',
                    name: 'select1',
                    label: 'Dall-E模型选择：',
                    required: true,
                    options: [
                        {
                            label: 'A',
                            value: 'a',
                        },
                        {
                            label: 'B',
                            value: 'b',
                        }
                    ],
                },
                {
                    type: 'select',
                    name: 'select2',
                    label: '图片分辨率选择：',
                    required: true,
                    options: [
                        {
                            label: 'A',
                            value: 'a',
                        },
                        {
                            label: 'B',
                            value: 'b',
                        }
                    ],
                },
                {
                    type: 'textarea',
                    name: 'textarea',
                    label: '通用描述：',
                    required: true,
                },
                {
                    type: 'control',
                    label: '上传分镜Prompt：',
                    required: true,
                    mode: 'horizontal',
                    body: [
                        {
                            type: 'flex',
                            justify: 'flex-start',
                            items: [
                                {
                                    type: 'input-file',
                                    name: 'upload',
                                    label: false,
                                    required: true,
                                    accept: '*',
                                    receiver: '/amis/api/upload/file',
                                },
                                {
                                    type: 'link',
                                    href: 'https://www.baidu.com',
                                    body: '表格模板.xlsx',
                                    className: 'ml-10',
                                }
                            ],
                        }
                    ],
                },
                {
                    type: 'divider',
                    title: '补充描述',
                    titlePosition: 'left',
                    titleClassName: 'font-bold',
                },
                {
                    type: 'control',
                    label: '小说类型：',
                    required: true,
                    body: [
                        {
                            type: 'flex',
                            justify: 'flex-start',
                            items: [
                                {
                                    type: 'select',
                                    name: 'type',
                                    label: false,
                                    className: 'w-44',
                                    options: [
                                        {
                                            label: 'A',
                                            value: 'a',
                                        },
                                        {
                                            label: 'B',
                                            value: 'b',
                                        }
                                    ],
                                },
                                {
                                    type: 'button',
                                    label: '+新增类型',
                                    level: 'link',
                                    className: 'ml-10',
                                    actionType: 'dialog',
                                    dialog: {
                                        title: '新增类型',
                                        body: {
                                            type: 'form',
                                            api: {
                                                method: 'post',
                                                url: 'http://config-center.qmniu.com/api/backend/server/team/add?qm_csrf_backend=V1d4NK0aWq51U1jkGdgNiYC5fcJqymmV&env=test',
                                                dataType: 'form-data',
                                            },
                                            body: [
                                                {
                                                    type: 'input-text',
                                                    name: 'name',
                                                    label: '小说类型',
                                                    required: true,
                                                },
                                                {
                                                    type: 'textarea',
                                                    name: 'remark',
                                                    label: '通用描述',
                                                    required: true,
                                                }
                                            ],
                                        },
                                    },
                                }
                            ],
                        }
                    ],
                },
                {
                    type: 'flex',
                    justify: 'flex-start',
                    alignItems: 'center',
                    items: [
                        {
                            type: 'wrapper',
                            body: '添加定向描述',
                            className: 'font-bold',
                        },
                        {
                            type: 'icon',
                            icon: 'fa-info-circle',
                            className: 'ml-10',
                        },
                        {
                            type: 'wrapper',
                            body: '将识别上传文件中的任务名称，补充设定描述',
                        }
                    ],
                },
                {
                    type: 'combo',
                    name: 'array22',
                    label: false,
                    addBtn: {
                        type: 'button',
                        label: '+新增人物',
                        level: 'link',
                    },
                    multiple: true,
                    items: [
                        {
                            name: 'text',
                            label: '人物',
                            type: 'input-text',
                        },
                        {
                            name: 'input-text',
                            label: '设定',
                            type: 'input-text',
                        }
                    ],
                },
                {
                    type: 'control',
                    body: [
                        {
                            type: 'button',
                            label: '提交执行',
                            level: 'primary',
                            actionType: 'submit',
                        }
                    ],
                }
            ],
        }
    ],
};
export const pageJsonSchema4 = {
    type: 'page',
    title: 'SD批量调整',
    body: [
        {
            type: 'form',
            mode: 'horizontal',
            title: false,
            wrapWithPanel: false,
            labelWidth: 160,
            body: [
                {
                    type: 'control',
                    label: '上传关键词+图片：',
                    required: true,
                    mode: 'horizontal',
                    body: [
                        {
                            type: 'flex',
                            justify: 'flex-start',
                            items: [
                                {
                                    type: 'input-file',
                                    name: 'upload',
                                    label: false,
                                    required: true,
                                    accept: '*',
                                    receiver: '/amis/api/upload/file',
                                },
                                {
                                    type: 'link',
                                    href: 'https://www.baidu.com',
                                    body: '表格模板.xlsx',
                                    className: 'ml-10',
                                }
                            ],
                        }
                    ],
                },
                {
                    type: 'select',
                    name: 'select1',
                    label: 'lora模型选择：',
                    required: true,
                    options: [
                        {
                            label: 'A',
                            value: 'a',
                        },
                        {
                            label: 'B',
                            value: 'b',
                        }
                    ],
                },
                {
                    type: 'select',
                    name: 'select2',
                    label: '图片分辨率选择：',
                    required: true,
                    options: [
                        {
                            label: 'A',
                            value: 'a',
                        },
                        {
                            label: 'B',
                            value: 'b',
                        }
                    ],
                },
                {
                    type: 'textarea',
                    label: '正向提示词',
                },
                {
                    type: 'textarea',
                    label: '反向提示词',
                },
                {
                    type: 'control',
                    body: [
                        {
                            type: 'button',
                            label: '提交执行',
                            level: 'primary',
                            actionType: 'submit',
                        }
                    ],
                }
            ],
        }
    ],
};
export const pageJsonSchema5 = {
    type: 'page',
    title: '页面标题55555',
    body: [
        {
            label: '新增',
            type: 'button',
            actionType: 'dialog',
            level: 'primary',
            dialog: {
                title: '新增团队',
                body: {
                    type: 'form',
                    api: {
                        method: 'post',
                        url: 'http://config-center.qmniu.com/api/backend/server/team/add?qm_csrf_backend=V1d4NK0aWq51U1jkGdgNiYC5fcJqymmV&env=test',
                        dataType: 'form-data',
                    },
                    body: [
                        {
                            type: 'input-text',
                            name: 'name',
                            label: '名称',
                        },
                        {
                            type: 'textarea',
                            name: 'remark',
                            label: '描述',
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
