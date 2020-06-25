import React, {Component} from 'react';
import NewComponent from './counterTroop'

class Counter extends Component {
    state = {
        isModalOpen: false,
    }
    handleModalOpen = () => this.setState((prevState) => ({isModalOpen: !prevState.isModalOpen}))
    render () {
        return (
            <div>
                <NewComponent text="hello"/>
                <button type="button" onClick={this.handleModalOpen}>{this.state.isModalOpen ? "Hide" : "Show"}</button>
                { this.state.isModalOpen && <div>
                    <h2>Jig</h2>
                </div>}
            </div>
        )
    }

}

export default Counter