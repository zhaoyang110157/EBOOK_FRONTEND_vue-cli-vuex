const state ={
    cart:[
    ],
};



const mutations = {
    clear(state){
        state.cart.splice(0);
    },
    addCart(state, bid) {
        state.cart.push(bid)
    },
    delCart(state,index){
       state.cart.splice(index,1);
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