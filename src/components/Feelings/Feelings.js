import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feelings extends Component {

    state = {
        feeling: ''
    }

    addFeelings = (number) => {
        number.preventDefault();
        if (this.state.feeling === (null || '' || "")) {
            alert('All Fields Must Be Filled');
        }
        else {
            console.log('f', this.state.feeling);
            this.props.dispatch({ type: 'ADD_FEELINGS', payload: this.state.feeling })
            this.props.history.push('/understanding');
        }
    }

    handleChange = (event) => {
        console.log('feelings', event.target.value)
        this.setState({
            feeling: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>How are you feeling today?</h2>
                <form onSubmit={this.addFeelings}>
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

export default connect()(Feelings);