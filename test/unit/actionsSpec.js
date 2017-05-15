/* global process, describe, it, expect */
'use strict';

import '../common';

import actions from '../../src/actions/index';
import actionTypes from '../../src/actions/actionTypes';
import players from '../../src/players';

describe('Actions', () => {
    it('should create the correct reset action', () => {
        expect(actions.reset()).to.deep.equal({ type: actionTypes.RESET });
    });

    it('should create the correct selectCell action without any arguments', () => {
        expect(actions.selectCell()).to.deep.equal({ type: actionTypes.SELECT_CELL, id: null });
    });

    it('should create the correct selectCell action with a cell id', () => {
        expect(actions.selectCell(2)).to.deep.equal({ type: actionTypes.SELECT_CELL, id: 2 });
    });

    it('should create the correct setPlayer action without any arguments', () => {
        expect(actions.setPlayer()).to.deep.equal({ type: actionTypes.SET_PLAYER, player: null });
    });

    it('should create the correct setPlayer action with a player', () => {
        expect(actions.setPlayer(players.o)).to.deep.equal({ type: actionTypes.SET_PLAYER, player: players.o });
    });
});
