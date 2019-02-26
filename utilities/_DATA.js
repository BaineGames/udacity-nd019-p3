export const startingData = {
    Mathmatics: {
        label: "Mathmatics",
        questions: [
            {
                qText: "What is 2+2?",
                qAnswer: "4",
                qAnswerCorrect: true
            },
            {
                qText: "What is 2+7?",
                qAnswer: "5",
                qAnswerCorrect: false
            }
        ]
    },
    Science: {
        label: "Science",
        questions: [
            {
                qText: "What is A in DNA mean?",
                qAnswer: "Acid",
                qAnswerCorrect: true
            },
            {
                qText: "What is powerhouse of the cell?",
                qAnswer: "Mitocondria",
                qAnswerCorrect: true
            },
            {
                qText: "What is solar effienciey?",
                qAnswer: "~34%",
                qAnswerCorrect: true
            },
            {
                qText: "Coldest Temperature?",
                qAnswer: "0 degrees C",
                qAnswerCorrect: false
            }
        ]
    },
    Programming: {
        label: "Programming",
        questions: [
            {
                qText: "API is short for?",
                qAnswer: "Application Interface",
                qAnswerCorrect: true
            },
            {
                qText: "JS means?",
                qAnswer: "javascript",
                qAnswerCorrect: true
            },
            {
                qText: "is react good?",
                qAnswer: "damn straight",
                qAnswerCorrect: true
            },
            {
                qText: "Angular over react?",
                qAnswer: "yep",
                qAnswerCorrect: false
            }
        ]
    }
}

export const CARD_STORAGE_KEY = "DeckQuizApp:data"

export function pullData(){
    return startingData;
}