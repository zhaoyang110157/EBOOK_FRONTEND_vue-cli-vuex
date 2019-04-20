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
    },
    changeAllow(context,index){
        console.log(index);

        let data = new FormData();
        data.append("account",state.users[index].account)
        let allowed = (state.users[index].allowed)? 0:1; console.log(state.users[index].account + "\n"+allowed)
        data.append("allowed",allowed)
        Axios.post('http://localhost:8000/serv_war_exploded/Users',data)
            .then((res)=>{
                context.commit('changeAllow',index)
                console.log("message");
            });

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
        console.log(state.users[index].account)
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
}