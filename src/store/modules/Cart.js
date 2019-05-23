const state ={
    carts:[
    ]
};



const mutations = {
    clear(state){
        state.carts.splice(0);
    },
    addCart(state, cartitem) {
        state.carts.push(cartitem)
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