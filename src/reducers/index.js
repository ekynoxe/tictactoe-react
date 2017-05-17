import actionTypes from '../actions/actionTypes';
import players from '../players';
import states from '../states';
import types from '../types';
import { isTerminal } from '../game';

export default function (state, action) {
    const defaultState = {
        board: [null,null,null,null,null,null,null,null,null],
        currentPlayer: null,
        gameState: states.ready,
        gameType: null,
        winner: null
    };

    state = state || defaultState;

    let newState;
    let newBoard;
    let result;

    switch (action.type) {

    case actionTypes.RESET:
        return Object.assign({}, state, defaultState);

    case actionTypes.SELECT_GAME:
        return Object.assign({}, state, {
            gameType: action.gameType || types.twoPlayersLocal,
            gameState: states.inplay
        });

    case actionTypes.SELECT_CELL:
        newBoard = state.board.slice();
        newState = Object.assign({}, state);

        newBoard[action.id] = state.currentPlayer;
        newState.board = newBoard;

        result = isTerminal(newBoard);

        // Check for winner
        if (states.win === result.state) {
            newState.gameState = states.win;
            newState.winner = result.winner;

        // Else check if game is a draw.
        } else if (states.draw === result.state) {
            newState.gameState = states.draw;

        // Else we're still in play, so change the player
        } else {
            newState.currentPlayer = players.o === state.currentPlayer ? players.x : players.o;
        }

        // If single player mode against AI, play AI move here

        return Object.assign({}, state, newState);

    case actionTypes.SET_PLAYER:
        return Object.assign({}, state, { currentPlayer: action.player });

    default:
        return state;
    }
}
