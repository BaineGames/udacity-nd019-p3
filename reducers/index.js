import {GET_DECKS, ADD_DECK} from "../actions"

function deckStuff( state = {}, action){
    switch(action.type){
        case ADD_DECK:
            const newDeckObj = {
                [action.deck] : {
                    name: action.deck,
                    questions: []
                }
            }
            return {
                ...state,
                ...newDeckObj
            }

        case GET_DECKS:
            return {
                ...state,
                ...action.decks
            }

        default:
            return state
    }
}

export default deckStuff