import actionTypes from '../actions/actionTypes';
import players from '../players';
import states from '../states';

export default function (state, action) {
    const defaultState = {
        board: [null,null,null,null,null,null,null,null,null],
        currentPlayer: null,
        gameState: states.inplay
    };

    state = state || defaultState;

    let newState;
    let newBoard;
    let gameEnded;
    let winner;

    switch (action.type) {

    case actionTypes.RESET:
        return Object.assign({}, state, defaultState);

    case actionTypes.SELECT_CELL:
        newBoard = state.board.slice();
        newState = Object.assign({}, state);

        newBoard[action.id] = state.currentPlayer;
        newState.board = newBoard;

        // To be calculated with the minimax algorithm
        // Setting to null for now.
        winner = null;

        gameEnded = -1 === newBoard.indexOf(null);

        // Check for winner
        if (winner) {
            // set state to be a win state
            newState.gameState = states.win;
            // set winner
            newState.winner = winner;

        // Otherwise check if game has ended.
        } else if (gameEnded) {
            // This is a tie
            newState.gameState = states.draw;

        } else {
            newState.currentPlayer = players.o === state.currentPlayer ? players.x : players.o;
        }

        return Object.assign({}, state, newState);

    case actionTypes.SET_PLAYER:
        return Object.assign({}, state, { currentPlayer: action.player });

    default:
        return state;
    }
}
