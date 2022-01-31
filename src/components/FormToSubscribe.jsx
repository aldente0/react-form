import React from 'react';

// don't change the Component name "App"
export class FormToSubscribe extends React.Component {
    state = {
        email: '',
        isAgreeWithTerms: false,
    };


  handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
  }

  handleCheckboxChange = (e) => {
    this.setState({[e.target.name]: e.target.checked});
  }

  handleBtn = () => {
    const isValidEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(this.state.email);
    const isValidCheckbox = this.state.isAgreeWithTerms;

    if (!isValidEmail) {
        alert('incorrect email');
    } else if (!isValidCheckbox) {
        alert('need give your agree');
    } else {
        alert('Congratulations!!! You\'re subscribe!!!')
        this.setState({email: ''});
        this.seState({isAgreeWithTerms: false})
    }
  }
  
  render() {
    // TODO: implement component
    const { email, isAgreeWithTerms } = this.state;

        return (
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={this.handleChange}
                />
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isAgreeWithTerms"
                        checked={isAgreeWithTerms}
                        onChange={this.handleCheckboxChange}
                    />
                    I agree with terms and conditions
                </label>
                <br />
                <button onClick={this.handleBtn}>Send</button>
            </div>
        );
  }
}