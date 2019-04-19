import Axios from "axios";

const state ={
    order:[
    ]
};

const actions = {
    getOrders(context){
        Axios.get('http://localhost:8000/serv_war_exploded/Orders')
            .then((res)=>{
                context.commit('getOrders',res);
            })
    }
}
const mutations = {
    getOrders(state,res){
        state.order = res.data.orders;
        console.log(res);
    },
    addOrder(state,carts){
        for(let i=0;i<carts.length ; i++){
            state.order.push(carts[i])
        }
    }
};


export default {
    namespaced: true,
    state,
    mutations,
    actions
}