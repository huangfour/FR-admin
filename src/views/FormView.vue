<template>
    <div class="formViewBack">
        <div class="formViewButton">
            <a-button class="editable-add-btn">添加</a-button>
        </div>

        <a-table
                :columns="columns"
                :data-source="data"
                :pagination="{ pageSize: 14 }"
                :customRow="rowClick"
        >
            <template v-slot:action="actionProperty">
                <a-popconfirm title="确定要删除?" @confirm="() => del(actionProperty.key)">
                    <a-button type="danger">删除</a-button>
                </a-popconfirm>
            </template>
        </a-table>


    </div>
</template>

<script>
    const columns = [
        {
            align: 'center',
            title: 'Name',
            dataIndex: 'name',
            width: 150,
        },
        {
            align: 'center',
            title: 'Age',
            dataIndex: 'age',
            width: 150,
        },
        {
            align: 'center',
            title: 'Address',
            dataIndex: 'address',
        },
        {
            align: 'center',
            title: 'Action',
            key: 'action',
            scopedSlots: {customRender: 'action'},
        },
    ];

    const data = [];
    for (let i = 0; i < 100; i++) {
        data.push({
            key: i,
            name: `Edward King ${i}`,
            age: 32,
            address: `London, Park Lane no. ${i}`,
        });
    }


    export default {
        name: "FormView",
        data() {
            return {
                data,
                columns,
                rowClick: record => ({
                    // 事件
                    on: {
                        dblclick: () => {
                            // 点击改行时要做的事情
                            console.log(record.key)
                        },
                        mouseenter:() =>{

                        }
                    }
                })
            };
        },
        methods: {
            del(e) {
                console.log("已删除", e)
            },


        }
    };
</script>

<style scoped>
    .editable-add-btn {
        margin-bottom: 8px;
    }

    .formViewBack {
        background-color: white;
    }

    .formViewButton {
        padding: 12px;
        margin-top: 4px;
        margin-left: 4px;
    }
</style>