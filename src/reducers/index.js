import actionTypes from '../actions/actionTypes';
import players from '../players';

export default function (state, action) {
    const defaultState = {
        board: [null,null,null,null,null,null,null,null,null],
        currentPlayer: null,
        gameEnded: false
    };

    state = state || defaultState;

    let newState;
    let newBoard;

    switch (action.type) {

    case actionTypes.RESET:
        return Object.assign({}, state, defaultState);

    case actionTypes.SELECT_CELL:
        newBoard = state.board.slice();
        newState = Object.assign({}, state);

        newBoard[action.id] = state.currentPlayer;
        newState.board = newBoard;
        newState.gameEnded = -1 === newBoard.indexOf(null);

        return Object.assign({}, state, newState);

    case actionTypes.SET_PLAYER:
        return Object.assign({}, state, { currentPlayer: action.player });

    case actionTypes.SWITCH_PLAYER:
        return Object.assign({}, state, { currentPlayer: players.o === state.currentPlayer ? players.x : players.o });

    default:
        return state;
    }
}
