import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

    state = {
        support: ''
    }

  // final submmitReducer
    addSupport = (number) => {
        number.preventDefault();
        if (this.state.support === (null || '' || "")) {
            alert('All Fields Must Be Filled');
        }
        else {
            console.log('s', this.state.support);
            this.props.dispatch({ type: 'ADD_SUPPORT', payload: this.state.support })
            this.props.history.push('/comments');
        }
    }

    
    handleChange = (event) => {
        console.log('support', event.target.value)
        this.setState({
            support: event.target.value
        })
    }

    render() {
        return (

            <div>
                <h2>How well are you being supported?</h2>
                <form onSubmit={this.addSupport}>
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

export default connect()(Support);