import actionTypes from '../actions/actionTypes';
import states from '../states';
import types from '../types';
import { getNewState } from '../game';

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
    let gameType;

    switch (action.type) {

    case actionTypes.RESET:
        return Object.assign({}, state, defaultState);

    case actionTypes.RESET_GAME:
        gameType = state.gameType;
        newState = Object.assign({}, state, defaultState);
        newState.gameType = gameType;
        newState.gameState = states.inplay;

        return newState;

    case actionTypes.SELECT_GAME:
        return Object.assign({}, state, {
            gameType: action.gameType || types.twoPlayersLocal,
            gameState: states.inplay
        });

    case actionTypes.SELECT_CELL:
        newState = getNewState(state, action.id);

        return Object.assign({}, state, newState);

    case actionTypes.SET_PLAYER:
        return Object.assign({}, state, { currentPlayer: action.player });

    default:
        return state;
    }
}
