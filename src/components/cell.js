import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

class BaseCell extends React.Component {
    select() {
        this.props.dispatch(actions.selectCell(this.props.index));
    }

    render() {
        let mark;

        if (this.props.mark) {
            mark = this.props.mark;

        } else {
            mark = <button onClick={ this.select.bind(this) }>&nbsp;</button>;
        }

        return(<div className='cell'><span className='mark'>{ mark }</span></div>);
    }
}

export const Cell = connect()(BaseCell);
