import { CONSTANTS } from '../actions';

let listID = 4;
let cardID = 9;

const initialState = [
    {
        title: "TO DO",
        id: 1,
        cards: [
            {
                id: 1,
                text: "card 1"
            },
            {
                id: 2,
                text: "card 2"
            }
        ]
    },
    {
        title: "IN PROGRESS",
        id: 2,
        cards: [
            {
                id: 3,
                text: "card 3"
            },
            {
                id: 4,
                text: "card 4"
            },
            {
                id: 5,
                text: "card 5"
            }
        ]
    },
    {
        title: "DONE",
        id: 3,
        cards: [
            {
                id: 6,
                text: "card 6"
            },
            {
                id: 7,
                text: "card 7"
            },
            {
                id: 8,
                text: "card 8"
            }
        ]
    }
]

const listsReducer = (state = initialState, action) => {
    switch(action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                id: listID,
                cards: []
            }

            listID += 1;
            return [...state, newList];
            
        case CONSTANTS.ADD_CARD:
            const newCard = {
                id: cardID,
                text: action.payload.text
            }

            cardID += 1;

            console.log(action)

            const newState = state.map(list => {
                if(list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    };
                } else {
                    return list;
                }
            });

            return newState;

        default:
            return state;
    }
}

export default listsReducer;