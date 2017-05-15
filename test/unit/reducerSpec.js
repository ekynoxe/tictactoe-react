/* global process, describe, it, expect */
'use strict';

import '../common';

import reducer from '../../src/reducers';
import actionTypes from '../../src/actions/actionTypes';
import players from '../../src/players';
import states from '../../src/states';

const defaultStoreData = {
    board: [null,null,null,null,null,null,null,null,null],
    currentPlayer: null,
    gameState: states.inplay
};
const inPlayStoreData = {
    board: [null,players.x,null,players.o,null,null,null,null,null],
    currentPlayer: players.x,
    gameState: states.inplay
};
const lastMoveStoreData = {
    board: [players.x,players.x,players.o,players.o,players.x,players.x,null,players.o,players.o],
    currentPlayer: players.x,
    gameState: states.inplay
};

describe('Reducer', () => {
    it('should return the initial state', () => {
        expect( reducer(undefined, {}) ).to.deep.equal(defaultStoreData);
    });

    it('should handle RESET', () => {
        let modifiedStore = Object.assign({}, defaultStoreData, { currentPlayer: players.x, gameState: states.inplay });
        expect( reducer(modifiedStore, { type: actionTypes.RESET }) ).to.deep.equal(defaultStoreData);
    });

    it('should handle SELECT_CELL to mark the current player\'s move', () => {
        const expectedState = Object.assign({}, inPlayStoreData, { board: [null,players.x,null,players.o,players.x,null,null,null,null], currentPlayer: players.o });
        expect( reducer(inPlayStoreData, { type: actionTypes.SELECT_CELL, id: 4 }) ).to.deep.equal(expectedState);
    });

    it('should handle SELECT_CELL to mark the game as ended', () => {
        const expectedState = Object.assign({}, lastMoveStoreData, { board: [players.x,players.x,players.o,players.o,players.x,players.x,players.x,players.o,players.o], gameState: states.draw });
        expect( reducer(lastMoveStoreData, { type: actionTypes.SELECT_CELL, id: 6 }) ).to.deep.equal(expectedState);
    });

    it('should handle SET_PLAYER action', () => {
        const expectedState = Object.assign({}, defaultStoreData, { currentPlayer: players.x });
        expect( reducer(defaultStoreData, { type: actionTypes.SET_PLAYER, player: players.x }) ).to.deep.equal(expectedState);
    });
});
