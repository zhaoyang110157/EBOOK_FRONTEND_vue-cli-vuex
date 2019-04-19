import Axios from "axios";

const state ={
    aim: {},
    books:[
    ],
    magazine:[],
    literature:[],
    science:[]
};


const actions = {
    getBooks(context){
        Axios.get('http://localhost:8000/serv_war_exploded/Books')
            .then((res)=>{
                context.commit('getBooks',res);
            })
    }
}
const mutations = {
    getBooks(state,res){
        state.books = res.data.books;
        console.log(res);
    },
    changeAim(state,index){
        state.aim = index;
    },
    addBook (state, book) {
        state.books.push(book)
    },
    buyBooks( state,cart){
        for(let i = 0 ; i<cart.length;i++){let j=0;
            for(; j<state.books.length && state.books[j].title != cart[i].title;j++) ;
            state.books[j].inventory -= cart[i].inventory;
        }
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}