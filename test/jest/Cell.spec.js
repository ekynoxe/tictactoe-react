/* global test, expect */
import React from 'react';
import renderer from 'react-test-renderer';
import { Cell } from '../../src/components/cell';
import states from '../../src/states';

test('Cell matches snapshot', () => {
    const component = renderer.create(
        <Cell key={ 'c_0' } mark={ 'x' } index={ 0 } gameState={ states.inplay } />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
