/* global jest, test, expect */
import React from 'react';
import renderer from 'react-test-renderer';
import { App } from '../../src/components/app';
import { inPlayBoard } from '../boards';
import players from '../../src/players';
import states from '../../src/states';
import types from '../../src/types';

jest.mock('../../src/components/board', () => 'Board');
jest.mock('../../src/components/cell', () => 'Cell');

test('App matches snapshot', () => {
    const component = renderer.create(
        <App rehydrated={ true } board={ inPlayBoard } currentPlayer={ players.x } gameState={ states.inplay } gameType={ types.singlePlayer } winner={ null } />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
