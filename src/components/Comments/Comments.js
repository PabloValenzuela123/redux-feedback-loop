import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';

class Comments extends Component {

    state = {
        comments: ''
    }

    // Add comments to finalSubmitReducer
    addFeedback = (event) => {
        event.preventDefault();
        if (this.state.comments === (null || '' || "")) {
            alert('All Fields Must Be Filled');
        }
        else {
            console.log('c', this.state);
            this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state.comments })
        }
    } // end function addFeedback


    handleChange = (event) => {
        console.log('comments', event.target.value)
        this.setState({
            comments: event.target.value
        })
    }  // End handleChange


    render() {
        return (
            <div>
                <h2>Any comments you want to leave?</h2>
                <form onSubmit={this.addFeedback}>
                    <input
                        onChange={this.handleChange}
                        placeholder="Comments"
                        value={this.state.text}
                    />
                    <button type="submit" >Add Comments</button>
                </form>
            </div>
        );
    }
} // End class Comments

const mapStateToProps = (reduxState) => {
    // this.props.reduxState
    return {
        reduxState
    }
} 

export default connect(mapStateToProps)(Comments)