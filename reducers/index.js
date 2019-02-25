import {GET_DECKS, ADD_DECK} from "../actions"

function deckStuff( state = {}, action){
    switch(action.type){
        case ADD_DECK:
            return {
                ...state,
                ...action.deck
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