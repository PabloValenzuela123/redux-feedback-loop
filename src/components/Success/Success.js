import React, { Component } from 'react';
import { connect } from 'react-redux';

class Success extends Component {

    newFeedback = () => {
        this.props.dispatch({ type: 'ADD_FEELINGS', payload: [] });
        this.props.dispatch({ type: 'ADD_UNDERSTANDING', payload: [] });
        this.props.dispatch({ type: 'ADD_SUPPORT', payload: [] });
        this.props.dispatch({ type: 'ADD_COMMENTS', payload: [] });
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h2>Thank You!</h2>
                <button onClick={this.newFeedback}>New Feedback</button>
            </div>
        )
    }
}  // End class Success

export default connect()(Success);