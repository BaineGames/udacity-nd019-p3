import {GET_DECKS, ADD_DECK, ADD_QUESTION} from "../actions"

function deckStuff( state = {}, action){
    switch(action.type){
        case ADD_DECK:
            const newDeckObj = {
                [action.deck] : {
                    label: action.deck,
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

        case ADD_QUESTION:{
            const label = action.question.label;
            const answer = action.question.answer;
            const deck = action.question.deck;
            return {
                ...state,
                [deck]: {
                    ...state[deck],
                    questions: [...state[deck].questions, { label, answer }]
                }
            }
        }

        default:
            return state
    }
}

export default deckStuff