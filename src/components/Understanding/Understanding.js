import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {

    state = {
        understanding: ''
    }

    addUnderstanding = (number) => {
        number.preventDefault();
        if (this.state.understanding === (null || '' || "")) {
            alert('Complete all fields');
        }
        else {
            console.log('u', this.state.understanding);
            this.props.dispatch({ type: 'ADD_UNDERSTANDING', payload: this.state.understanding })
            this.props.history.push('/support');
        }
    }

    handleChange = (event) => {
        console.log('understanding', event.target.value)
        this.setState({
            understanding: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>Is this content easy for you?</h2>
                <form onSubmit={this.addUnderstanding}>
                    <input
                        type="number"
                        onChange={this.handleChange}
                        min="1" max="5"
                        placeholder="1 through 5"
                        value={this.state.text}
                    />
                    <button type="submit" >Next</button>
                </form>
            </div>
        )
    }
} 

export default connect()(Understanding);