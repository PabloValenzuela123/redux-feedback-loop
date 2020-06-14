import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Understanding from '../Understanding/Understanding';
import Feelings from '../Feelings/Feelings';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Success/Success';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
// import { withRouter } from 'react-router';
// import Admin from '../Admin/Admin';

// const connectedApp = connect(mapStateToProps)(App)

class App extends Component {

  // GET request on pageload
  componentDidMount() {
    this.refreshFeedbackData()

  } // end componentDidMount

  // // POST request
  // submitFeedback = (event) => {
  //   axios.post('/feedback', (this.props.reduxState.finalSubmitReducer) )
  //   .then( response => {
  //     this.props.history.push('/');
  //   })
  //   .catch( err => {
  //     alert(err)
  //   })
  // }  // end submitFeedback
  // moved to components/Review/ReviewButton.js

  // GET request
  refreshFeedbackData = () => {
    axios({
      method: 'GET',
      url: '/feedback'
    }).then((response) => {
      console.log(response);
      this.props.dispatch({ type: 'SET_FEEDBACK', payload: response.data })
    });
  } // end function refreshFeedbackData

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br />
        {/* Changes viewpoint of the DOM based on user selections made */}
        <Router>
          <Route exact path='/' component={Feelings} />
          <Route path='/understanding' component={Understanding} />
          <Route path='/support' component={Support} />
          <Route path='/comments' component={Comments} />
          <Route path='/success' component={Success} />

          {/* Review Component displayed on the bottom of the page */}
          <Review />
        </Router>
      </div>
    );
  }
} // End class App

const mapStateToProps = (reduxState) => {
  // this.props.reduxState
  return {
    reduxState
  }
} // end mapStateToProps

export default connect(mapStateToProps)(App);