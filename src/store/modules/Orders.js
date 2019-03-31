const state ={
    order:[
        {
            "title": "挪威的森林 【电影特别版】",
            "image":  "./image/nuowei.jpg",
            "inventory":"5",
            "price":"50"
        }
    ]
};



const mutations = {
    addOrder(state,carts){
        for(let i=0;i<carts.length ; i++){
            state.order.push(carts[i])
        }
    }
};


export default {
    namespaced: true,
    state,
    mutations
}