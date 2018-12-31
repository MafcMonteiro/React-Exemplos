const INITIAL_STATE = {
    description: 'ler Livro',
    list: [{
        __id: 1,
        description: 'Pagar a fatura do cartao',
        done:true
    }, {
        __id: 2,
        description: 'Reuniao com a equipe',
        done:false
    }, {
        __id: 3,
        description: 'Consulta medica',
        done:false
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'DESCRIPTION_CHANGED': 
            return {...state, description: action.payload}
        case 'TODO_SEARCHED':
            return {...state, list:action.payload.data}
        default:
            return state
    }
}