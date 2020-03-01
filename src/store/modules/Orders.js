import Axios from "axios";

const state ={
    id:0,
    orders:[
    ]
};

const actions = {
    getOrders(context){
        Axios.get('api/Orders/getAll',{
            params:{
                id:state.id
            }
        }).then((res)=>{
                context.commit('getOrders',res);
            })
    }
}
const mutations = {
    getOrders(state,res){
        state.orders = res.data;
        console.log(res)
    },
    addOrder(state,carts){
        for(let i=0;i<carts.length ; i++){
            state.order.push(carts[i])
        }
    },
    setAccount(state,account){
        state.id = account;
    },
    buyBooks( state,cart){
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hh = date.getHours();
        var mm = date.getMinutes();
        var clock = year;
        if(month < 10)clock += "0";clock += month;
        if(day < 10)clock += "0";clock += day ;
        if(hh < 10)clock += "0";clock += hh ;
        if (mm < 10) clock += '0';clock += mm;
        clock +="00";
        let time = parseInt(clock);
        let books = new Array(cart[0].bid)
        let nums = new Array(cart[0].sales)
        for(var i = 1 ; i <cart.length ; i++ ){
            books.push(cart[i].bid);
            nums.push(cart[i].sales);
        }
        Axios.post('api/Orders/addOrders',
            {
                "id":state.id,"time":time,"books":books,"nums":nums
        }

            ).then((res) => {
            }
            )
    }
};


export default {
    namespaced: true,
    state,
    mutations,
    actions
}