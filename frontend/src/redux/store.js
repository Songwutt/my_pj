import {createStore, combineReducers} from 'redux'
const initialForm = {
    no: '' ,
    name: '',
    surname: '',
    id: '',
    tel: ''
}
const formReducer = (state=initialForm,action)=>{
    switch(action.type){
        case 'CHANGE_NO': return {...state,no: action.no}
        case 'CHANGE_NAME': return {...state,name: action.name}
        case 'CHANGE_SURNAME': return {...state,surname: action.surname}
        case 'CHANGE_ID': return {...state,id: action.id}
        case 'CHANGE_TEL': return {...state,tel: action.tel}
        default:return state;
    }
}

const memberReducer=(state=[],action)=>{
    switch(action.type){
        case 'GET_MEMBERS':
            return action.member
        case 'ADD_MEMBER': 
            return [...state,action.member]
        case 'DELETE_MEMBER':
             return state.filter(member => member.no !== +action.no)
        case 'UPDATE_MEMBER': 
            return state.map(member => {
             if(+member.no === +action.no)
             return action.member;
             else return member;
            })
        default:
            return state;
    }
}
const reducer = combineReducers({
    member: memberReducer,
    form: formReducer
})

export const store = createStore(reducer)