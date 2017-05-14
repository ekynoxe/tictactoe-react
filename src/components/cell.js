import React from 'react';

export class Cell extends React.Component {
    render() {
        return(<div className='cell'><span className='mark'>{ this.props.mark }</span></div>);
    }
}
