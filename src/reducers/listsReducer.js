import { CONSTANTS } from '../actions';

let listID = 4;
let cardID = 9;

const initialState = [
    {
        title: "TO DO",
        id: `list-${1}`,
        cards: [
            {
                id: `card-${1}`,
                text: "card 1"
            },
            {
                id: `card-${2}`,
                text: "card 2"
            }
        ]
    },
    {
        title: "IN PROGRESS",
        id: `list-${2}`,
        cards: [
            {
                id: `card-${3}`,
                text: "card 3"
            },
            {
                id: `card-${4}`,
                text: "card 4"
            },
            {
                id: `card-${5}`,
                text: "card 5"
            }
        ]
    },
    {
        title: "DONE",
        id: `list-${3}`,
        cards: [
            {
                id: `card-${6}`,
                text: "card 6"
            },
            {
                id: `card-${7}`,
                text: "card 7"
            },
            {
                id: `card-${8}`,
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
                id: `list-${listID}`,
                cards: []
            }

            listID += 1;
            return [...state, newList];
            
        case CONSTANTS.ADD_CARD: {
            const newCard = {
                id: `list-${cardID}`,
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
        }
        
        case CONSTANTS.DRAG_HAPPENED:
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId
             } = action.payload;

            const newState = [...state];
             
            //drag and drop in the same list
            if (droppableIdStart === droppableIdEnd) {
                const list = state.find(list => droppableIdStart === list.id);
                const card = list.cards.splice(droppableIdStart, 1);
                list.cards.splice(droppableIndexEnd, 0, ...card);
            }

            return newState;

        default:
            return state;
    }
}

export default listsReducer;