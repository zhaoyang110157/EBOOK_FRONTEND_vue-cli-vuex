const state ={
    carts:[
        {
            "title": "挪威的森林",
            "bid": 0,
            "image":  "./image/nuowei.jpg",
            "inventory":"5",
            "price":"50"
        }
    ]
};



const mutations = {
    clear(state){
        state.carts.splice(0);
    },
    addCart(state, user) {
        state.carts.push(user)
    },
    delCart(state,index){
       state.carts.splice(index,1);
    }
};

const getters ={
    getCarts: state =>{
        return state.carts;
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    getters
}