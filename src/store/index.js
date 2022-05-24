import { createStore } from 'vuex'
import appStore from "./moduls/app";


// 调用createStore
export default createStore({
    modules: {
        appStore,
    }
})
