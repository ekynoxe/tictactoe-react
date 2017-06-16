import React from 'react';
import { connect } from 'react-redux';
import gameTypes from '../types';
import actions from '../actions';

export class GameSelection extends React.Component {
    selectGame(type) {
        this.props.dispatch(actions.selectGame(type));
    }

    render() {
        return <div className='buttons'>
            <button key='btn_single_player' className='button' onClick={ this.selectGame.bind(this, gameTypes.singlePlayer) }>Single player</button>
            <button key='btn_two_players_local' className='button' onClick={ this.selectGame.bind(this, gameTypes.twoPlayersLocal) }>Two players in this window</button>
        </div>;
    }
}

export default connect()(GameSelection);
