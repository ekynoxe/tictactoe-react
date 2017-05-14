import React from 'react';
import { Cell } from './cell';

export class Board extends React.Component {
    render() {
        let rows = [];
        let cells;

        this.props.board.forEach( (m, i) => {
            if (!(i % 3)) {
                cells = [];
            }

            cells.push(<Cell key={ `c_${i}` } mark={ m } index={ i } />);

            if (!((i + 1) % 3)) {
                let row = Math.floor(i / 3);
                rows.push(<div key={ `r_${row}` } className='row'>{ cells }</div>);
            }
        });

        return(<div className='board'>{ rows }</div>);
    }
}
