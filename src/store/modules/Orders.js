import Axios from "axios";

const state ={
    id:0,
    order:[
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
        state.order = res.data.orders;
        console.log(res);
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
        var hh = date.getHours();  //时
        var mm = date.getMinutes(); //分
        var clock = year;
        if(month < 10)clock += "0";clock += month;
        if(day < 10)clock += "0";clock += day ;
        if(hh < 10)clock += "0";clock += hh ;
        if (mm < 10) clock += '0';clock += mm;
        clock +="00";
        let time = parseInt(clock);
        Axios.post( 'api/Orders/addOrders',
            {
                "id":state.id,"oid":0,"time":time,"orderitems":state.carts
            }
            ).then((res) => {
                console.log('buyBook '+ res)
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