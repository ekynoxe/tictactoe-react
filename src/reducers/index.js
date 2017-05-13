import actionTypes from '../actions/actionTypes.js';

export default function (state, action) {

    state = state || {
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
