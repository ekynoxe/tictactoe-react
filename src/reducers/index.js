import actionTypes from '../actions/actionTypes.js';

export default function (state, action) {

    state = state || {
        board: ['o',null,'o',null,null,null,'o','x',null],
        started: false
    };

    switch (action.type) {

    case actionTypes.APP.STARTED:
        state.started = true;
        break;

    default:
        return state;
    }
}
