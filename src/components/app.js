/* globals FIREBASE */
import React from 'react';
import { connect } from 'react-redux';
import Board from './board';
import GameSelection from './gameSelection';
import actions from '../actions';
import players from '../players';
import states from '../states';
import gameTypes from '../types';
import * as firebase from 'firebase';

const fb = firebase
    .initializeApp(FIREBASE)
    .database()
    .ref();

fb.on('value', snapshot => {
    console.log('NEW SNAPSHOT', snapshot.val());
});

export class App extends React.Component {
    reset() {
        this.props.dispatch(actions.reset());
    }

    resetGame() {
        this.props.dispatch(actions.resetGame());
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
        if (!nextProps.currentPlayer && this.props.gameType) {
            let firstPlayer;

            // Setting first player randomly if local multiplayer,
            //  but to x if playing against the AI.
            if (gameTypes.twoPlayersLocal === this.props.gameType) {
                firstPlayer = Math.round(Math.random()) === 0 ? players.o : players.x;

            } else {
                firstPlayer = players.x;
            }

            this.setPlayer(firstPlayer);
        }
    }

    render() {
        // Waiting for application to load the local store
        if (!this.props.rehydrated) {
            return <div>Loading...</div>;
        }

        let notice;
        let title;
        let content = <Board board={ this.props.board } />;
        let buttons = [
            <button key='btn_reset' className='button' onClick={ this.reset.bind(this) }>Change game type</button>,
            <button key='btn_reset_game' className='button' onClick={ this.resetGame.bind(this) }>Restart</button>
        ];

        if (states.ready === this.props.gameState) {
            title = <h1>T T T</h1>;
            content = <GameSelection />;
            buttons = null;

        } else if (states.draw === this.props.gameState) {
            notice = 'It\'s a draw!';

        } else if (states.win === this.props.gameState) {
            notice = 'And the winner is... ' + this.props.winner;

        } else if (this.props.currentPlayer) {
            notice = `Current player: ${ this.props.currentPlayer.toUpperCase() }`;
        }

        return(<div>
            { title }
            { content }
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
        gameType: state.gameType,
        winner: state.winner
    };
}

export default connect(mapStateToProps)(App);
