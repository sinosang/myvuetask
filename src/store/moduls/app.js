const appStore = {
    state: {
        userId:123,
        
    },
    mutations: {
        setUserId(state, userId) {
            state.userId = userId
        },
    },
    actions: {
        setUserId(context,userId) {
            context.commit('setUserId',userId)
        },
    },
    getters:{
        userId:state=>state.userId
    }
}

export default appStore;
