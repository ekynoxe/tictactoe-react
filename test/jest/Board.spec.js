/* global jest, test, expect */
import React from 'react';
import renderer from 'react-test-renderer';
import { Board } from '../../src/components/board';
import { inPlayBoard } from '../boards';

jest.mock('../../src/components/cell', () => 'Cell');

test('Board matches snapshot', () => {
    const component = renderer.create(
        <Board board={ inPlayBoard } />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
