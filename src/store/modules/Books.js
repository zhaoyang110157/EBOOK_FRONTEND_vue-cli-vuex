import Axios from "axios";
import {reqGetAllBook} from "../../api";

const state ={
    aim: {},
    aimnum:0,
    books:[],
    magazine:[],
    literature:[],
    science:[]
};


const actions = {
        getBooks({commit}) {
            reqGetAllBook().then( (data) => {
                commit('getBooks', data)
            })
    },
    changeInf(context,book) {
        let title = book.title;
        let image = book.image;
        let ISBN = book.ISBN;
        let author = book.author;
        let price = book.price;
        let inventory = book.inventory;
        let tranch = book.tranch;
        let introduction = book.introduction;
        let bid = state.books.length;
        Axios.post('api/Book/changeInf',
            {"title":title,"bid":bid,"image":image,"ISBN":ISBN,"author":author,"price":price,"inventory":inventory,"tranch":tranch,"introduction":introduction
            }
        ).then(() => {
            context.commit('changeInf',book)
        })
    },
    addBook(context,book) {
        let title = book.title;
        let image = book.image;
        let ISBN = book.ISBN;
        let author = book.author;
        let price = book.price;
        let inventory = book.inventory;
        let tranch = book.tranch;
        let introduction = book.introduction;
        Axios.post('api/Books/addBook',
            {
                "title":title,"image":image,"ISBN":ISBN,"author":author,"price":price,"inventory":inventory,"tranch":tranch,"introduction":introduction
            }
        ).then(() => {
            context.commit('addBook',book)
        })
    },
    deleteBook(context,bid){
            state.books[bid].state=0
            Axios.post('api/Books/deleteBook', {
                    params: {
                        id: bid
                    }
                }
            ).then(() => {
                context.commit('addBook',book)
            })
    }
}
const mutations = {
    getBooks(state,res){
        state.books = res;
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