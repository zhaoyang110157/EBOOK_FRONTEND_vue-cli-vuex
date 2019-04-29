import Axios from "axios";

const state ={
    aim: {},
    aimnum:0,
    books:[
    ],
    magazine:[],
    literature:[],
    science:[]
};


const actions = {
    getBooks(context){
        Axios.get('api/Books')
            .then((res)=>{
                context.commit('getBooks',res);
            })
    },
    changeInf(context,book) {
        let title = book.title;
        let image = book.image;
        let ISBN = book.ISBN;
        let writer = book.writer;
        let price = book.price;
        let inventory = book.inventory;
        let tranch = book.tranch;
        let introduction = book.introduction;
        let bid = state.books.length;
        Axios.post('api/Books',
            {
                "type":0,"title":title,"bid":bid,"image":image,"ISBN":ISBN,"writer":writer,"price":price,"inventory":inventory,"tranch":tranch,"introduction":introduction
            }
        ).then((res) => {
            context.commit('changeInf',book)
            console.log(res);
        })
    },
    addBook(context,book) {
        let title = book.title;
        let image = book.image;
        let ISBN = book.ISBN;
        let writer = book.writer;
        let price = book.price;
        let inventory = book.inventory;
        let tranch = book.tranch;
        let introduction = book.introduction;
        Axios.post('api/Books',
            {
                "type":1,"title":title,"image":image,"ISBN":ISBN,"writer":writer,"price":price,"inventory":inventory,"tranch":tranch,"introduction":introduction
            }
        ).then((res) => {
            context.commit('addBook',book)
            console.log(res);
        })
    },
}
const mutations = {
    getBooks(state,res){
        state.books = res.data.books;
        console.log(res);
    },
    changeInf(state,index,book){
        state.books[state.aimnum] = book;
    },
    changeAim(state,index,num){
        state.aim = index;
        state.aimnum  = num ;
    },
    addBook (state, book) {
        state.books.push(book)
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}