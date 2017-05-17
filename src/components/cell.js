import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import states from '../states';

class BaseCell extends React.Component {
    select() {
        this.props.dispatch(actions.selectCell(this.props.index));
    }

    render() {
        let mark;

        if (states.ready === this.props.gameState) {
            // Before the user made a game type selection, leave marks blank.

        } else if (this.props.mark) {
            mark = this.props.mark;

        } else if (states.inplay === this.props.gameState) {
            mark = <button onClick={ this.select.bind(this) }>&nbsp;</button>;
        }

        return(<div className='cell'><span className='mark'>{ mark }</span></div>);
    }
}

function mapStateToProps(state) {
    return {
        gameState: state.gameState
    };
}


export const Cell = connect(mapStateToProps)(BaseCell);
