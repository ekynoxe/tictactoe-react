import actionTypes from '../actions/actionTypes.js';

export default function (state, action) {
    const defaultState = {
        board: [null,null,null,null,null,null,null,null,null],
        currentPlayer: Math.round(Math.random()) === 0 ? 'o' : 'x',
        gameInPlay: false
    };

    state = state || defaultState;

    let newState;

    switch (action.type) {

    case actionTypes.SELECT_CELL:
        newState = Object.assign({}, state);

        newState.board[action.id] = state.currentPlayer;
        newState.currentPlayer = 'o' === state.currentPlayer ? 'x' : 'o';
        newState.gameInPlay = true;

        return Object.assign({}, state, newState);

    case actionTypes.RESET:
        return Object.assign({}, state, defaultState);

    default:
        return state;
    }
}
