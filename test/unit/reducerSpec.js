/* global process, describe, it, expect */
'use strict';

import '../common';

import reducer from '../../src/reducers';
import actionTypes from '../../src/actions/actionTypes';
import players from '../../src/players';
import states from '../../src/states';
import types from '../../src/types';

const defaultStoreData = {
    board: [null,null,null,null,null,null,null,null,null],
    currentPlayer: null,
    gameState: states.ready,
    gameType: null,
    winner: null
};
const inPlayStoreData = {
    board: [null,players.x,null,players.o,null,null,null,null,null],
    currentPlayer: players.x,
    gameState: states.inplay,
    gameType: types.singlePlayer,
    winner: null
};
const lastMoveStoreData = {
    board: [players.x,players.x,players.o,players.o,players.x,players.x,null,players.o,players.o],
    currentPlayer: players.x,
    gameState: states.inplay,
    gameType: types.singlePlayer,
    winner: null
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

    it('should handle SELECT_GAME to pick a game type', () => {
        const expectedState = Object.assign({}, defaultStoreData, { gameState: states.inplay, gameType: types.singlePlayer });
        expect( reducer(defaultStoreData, { type: actionTypes.SELECT_GAME, gameType: types.singlePlayer }) ).to.deep.equal(expectedState);
    });
});
