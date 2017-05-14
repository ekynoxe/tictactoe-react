import actionTypes from '../actions/actionTypes.js';

export default function (state, action) {

    state = state || {
        board: ['o',null,'o',null,null,null,'o','x',null],
        currentPlayer: 'o',
        started: false
    };

    let newState;

    switch (action.type) {

    case actionTypes.STARTED:
        return Object.assign({}, state, {
            started: true
        });

    case actionTypes.SELECT_CELL:
        newState = Object.assign({}, state);
        newState.board[action.id] = state.currentPlayer;

        newState.currentPlayer = 'o' === state.currentPlayer ? 'x' : 'o';

        return Object.assign({}, state, newState);

    default:
        return state;
    }
}
