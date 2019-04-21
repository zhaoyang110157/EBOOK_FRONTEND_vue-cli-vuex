import Axios from "axios";

const state ={
    isManager : false,
    isLogin :-1,
    users: []
};

const actions = {
    getUsers(context){
        Axios.get('api//Users')
            .then((res)=>{
                context.commit('getUsers',res);
                console.log("getUSer  ");
            })
    },
    changeAllow(context,index) {
        console.log(index);
        let account = state.users[index].account;
        let allowed = (state.users[index].allowed) ? 0 : 1;
        console.log(state.users[index].account + "\n" + allowed)
        Axios.post('api/Users',
            {
                "type":"change","account": account, "allowed": allowed
            }
        ).then((res) => {
                context.commit('changeAllow', index)
                console.log("message  " + res.data.target);
            });
    },
    addUser(context,user){
        context.commit('addUser', user)
        let account = user.account;
        let password = user.password;
        Axios.post('api/Users',
            {
                "type":"add","account":account,"allowed":1,"password":password,"role":"custom"
            }
        ).then((res)=> {
            console.log("  add user");
            console.log(res);
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
        console.log(state.users[index].account)
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
}