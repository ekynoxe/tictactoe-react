import React from 'react';
import { connect } from 'react-redux';
import { Board } from './board';
import actions from '../actions';
import players from '../players';
import states from '../states';
import gameTypes from '../types';

class BaseApp extends React.Component {
    reset() {
        this.props.dispatch(actions.reset());
    }

    setPlayer(player) {
        this.props.dispatch(actions.setPlayer(player));
    }

    selectGame(type) {
        this.props.dispatch(actions.selectGame(type));
    }

    componentWillUpdate(nextProps) {
        // On first load or reset, no player will be selected, so we randomly
        //  select a player to start the game here.
        if (!nextProps.currentPlayer) {
            this.setPlayer(Math.round(Math.random()) === 0 ? players.o : players.x);
        }
    }

    render() {
        // Waiting for application to load the local store
        if (!this.props.rehydrated) {
            return <div>Loading...</div>;
        }

        let notice;
        let buttons = <button onClick={ this.reset.bind(this) }>Restart</button>;

        if (states.ready === this.props.gameState) {
            buttons = [
                <button key='btn_single_player' onClick={ this.selectGame.bind(this, gameTypes.singlePlayer) }>Single player</button>,
                <button key='btn_two_players_local' onClick={ this.selectGame.bind(this, gameTypes.twoPlayersLocal) }>Two players in this window</button>
            ];

        } else if (states.draw === this.props.gameState) {
            notice = 'It\'s a draw!';

        } else if (states.win === this.props.gameState) {
            notice = 'And the winner is... ' + this.props.winner;

        } else if (this.props.currentPlayer) {
            notice = `Current player: ${ this.props.currentPlayer.toUpperCase() }`;
        }

        return(<div>
            <Board board={ this.props.board } />
            <p className='notice'>{ notice }</p>
            { buttons }
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        board: state.board,
        currentPlayer: state.currentPlayer,
        gameState: state.gameState,
        winner: state.winner
    };
}

export const App = connect(mapStateToProps)(BaseApp);
