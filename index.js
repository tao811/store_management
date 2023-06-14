const page_num = document.querySelector('.page_num option')
const opt = document.querySelector('.selectStore').value

const store = document.querySelector('.selectStore').value
const initStore = JSON.parse(localStorage.getItem('store'))



const vm = new Vue({
    el: '#root',
    data: {
        data_list: data.result.data_list,           // 数据数组
        numsOfData: data.result.data_list.length,   // 数据数
        numsOfOnePage: data.result.page_size,       // 单页数据数
        page_num: 3,                                // 总页数
        store: initStore,                           // 恢复上次选择的店铺
        newReportForm: 0,                           // 新建报告
    },
    computed: {
        // 页号
        pageNum() {
            return this.numsOfData / this.numsOfOnePage
        },
        // 展示页数
        displayCount() {
            if (this.data_list.length <= this.numsOfOnePage) {
                return this.data_list.length;
            } else {
                return this.numsOfOnePage;
            }
        }
    },
    methods: {
        // 新建报告
        newReport(){
            this.newReportForm = 1
        },
        // 保存选择的店铺
        newStore(){
            localStorage.setItem('store', JSON.stringify(this.store))
        },
        // 保存为 payload
        saveReport(){

        },
        // 获取 value值，提交
        submitReport(){

        },
        // 清空 value值并关闭
        close(){
            this.newReportForm = 0
        }
    }
})