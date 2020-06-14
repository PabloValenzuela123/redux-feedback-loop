import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewButton from './ReviewButton/ReviewButton';


class Review extends Component {
    render() {
        return (
            <div>
                <p>Review Component Placeholder</p>
                <p>Feeling: {this.props.reduxState.finalSubmitReducer.feeling}</p>
                <p>Understanding: {this.props.reduxState.finalSubmitReducer.understanding}</p>
                <p>Support: {this.props.reduxState.finalSubmitReducer.support}</p>
                <p>Comments: {this.props.reduxState.finalSubmitReducer.comments}</p>
                <ReviewButton />
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    // this.props.reduxState
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Review);