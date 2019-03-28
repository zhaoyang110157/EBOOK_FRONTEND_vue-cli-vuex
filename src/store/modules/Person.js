const state ={
    isManager : true,
    isLogin :true,
    users: [
        {
            account: 'lzw',
            password: '123',
            allowed: true,
            role: 'manager'
        },
        {
            account: '舒伯特',
            password: '123',
            allowed: true,
            role:'custom'
        },
        {
            account: '本拉登',
            password: '123',
            allowed: false,
            role:'custom'
        },
    ],
};

const mutations = {
    changeManager (state,is) {
        state.isManager = is;
    },
    changeLogin (state) {
        state.isLogin = !state.isLogin
    },
    addUser (state, user) {
        state.users.push(user)
    },
    changeAllow (state, item) {
        state.users[item.index].allowed = item.allowed
    }
};

export default {
    namespaced: true,
    state,
    mutations
}