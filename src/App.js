import React, { Component } from 'react';
import './App.css';
import zxcvbn from 'zxcvbn';

class App extends Component {
  state = {
    passwordScore: ''
  };

  handleOnPasswordInput(passwordInput) {
    console.log(zxcvbn(passwordInput));
    const { score } = zxcvbn(passwordInput);
    this.setState({ passwordScore: score });
  }

  renderFeedbackMessage() {
    const { passwordScore } = this.state;
    let message, className;

    switch (passwordScore) {
      case 0:
        message = 'Way too weak!';
        className = 'text-danger';
        break;
      case 1:
        message = 'Weak strength!';
        className = 'text-danger';
        break;
      case 2:
        message = 'Moderate strength!';
        className = 'text-warning';
        break;
      case 3:
        message = 'Good strength!';
        className = 'text-success';
        break;
      case 4:
        message = 'Powerful strength!';
        className = 'text-primary';
        break;
      default:
        message = '';
        break;
    }

    return (
      <small id="passwordHelp" className={`form-text mt-2 ${className}`}>
        {`${message}`}
      </small>
    );
  }

  render() {
    return (
      <div className="App">
        <form className="my-form">
          <div className="form-row">
            <div className="col-md-12 mb-3">
              <label htmlFor="passwordInput">패스워드</label>
              <input
                type="password"
                className="form-control"
                id="passwordInput"
                onChange={e => this.handleOnPasswordInput(e.target.value)}
              />
              {this.renderFeedbackMessage()}
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default App;
