import Axios from "axios";

const state ={
    isManager : false,
    isLogin :-1,
    user: null,
    users: [],
    visitor : 0
};

const actions = {
    getNum(context){
      Axios.get('api/Users/getNum').then((res)=>{
          context.commit('getNum',res)
      })
    },
    getUsers(context){
        Axios.get('api/Users/getUsers')
            .then((res)=>{
                context.commit('getUsers',res);
                console.log("getUSer  ");
            })
    },
    changeAllow(context,index) {
        console.log(index);
        let is = state.users[index].id;
        let allowed = (state.users[index].allowed) ? 0 : 1;
        console.log(state.users[index].account + "\n" + allowed)
        Axios.post('api/Users/changeAllow',
            {
                "id": is, "allowed": allowed
            }
        ).then((res) => {
                context.commit('changeAllow',is)
                console.log("message  " + res.data.target);
            });
    }

}
const mutations = {
    getNum(state,res){
      state.visitor = res.data.visitor
    },
    getUsers(state,res){
      state.users = res.data.users;
      console.log(res);
    },
    getUser(state,index){
        return state.users[index].account
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
    signout(state){
        state.isManager = -1;
        state.isLogin = -1;
        state.users.splice(0);
    },
    signin(state,user){
      state.user = user;
    },
    changeAllow (state,index) {
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