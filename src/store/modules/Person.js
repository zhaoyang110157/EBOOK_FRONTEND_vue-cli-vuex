import Axios from "axios";

const state ={
    isManager : false,
    isLogin :-1,
    users: []
};

const actions = {
    getUsers(context){
        Axios.get('http://localhost:8000/serv_war_exploded/Users')
            .then((res)=>{
                context.commit('getUsers',res);
            })
    }
}
const mutations = {
    getUsers(state,res){
      state.users = res.data.users;
      console.log(res);
    },
    changeManager (state,is) {
        state.isManager = is;
    },
    changeLogin (state,index) {
        state.isLogin = index;
    },
    addUser (state, user) {
        state.users.push(user)
    },
    changeAllow (state, index) {
        state.users[index].allowed = !state.users[index].allowed;
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
}