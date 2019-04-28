import Axios from "axios";

const state ={
    account: '',
    order:[
    ]
};

const actions = {
    getOrders(context){
        Axios.get('api/Orders',{
            params:{
                account:state.account
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
        state.account = account;
    },
    buyBooks( state,cart){
        for(let i = 0 ; i<cart.length;i++){
            let title = cart[i].title
            let inventory = cart[i].inventory
            let image = cart[i].image;
            let price = cart[i].price
                var date = new Date();
                var seperator1 = "-";
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
            console.log(clock)
            console.log(state.account)



            Axios.post( 'api/Orders',
                    {
                        "type":0,"title":title,"inventory":inventory
                    }
                ).then((res) => {
                    console.log('buyBook '+ title)
                }
                )
            Axios.post( 'api/Orders',
                {
                 "type":1,"title":title,"price":price,"inventory":inventory,"acount":state.account,"time":time
                }
            ).then((res) => {
                    console.log('buyBook '+ title)
                }
            )
        }
    }
};


export default {
    namespaced: true,
    state,
    mutations,
    actions
}