export const ADD_DECK = "ADD_DECK"
export const GET_DECKS = "GET_DECKS"
export const ADD_QUESTION = "ADD_QUESTION"

export function addDeck(deck){
    return {
        type: ADD_DECK,
        deck
    }
}

export function getDecks(decks){
    return {
        type: GET_DECKS,
        decks
    }
}

export function addNewQuestion(question){
    return {
        type: ADD_QUESTION,
        question
    }
}