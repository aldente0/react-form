import React from 'react';
import './Form.css';

export class Form extends React.Component{
    state = {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        select: '',
        subscription: '',
        gender: ''
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleCheckboxChange = (event) => {
        this.setState({[event.target.name]: event.target.checked});
    }

    validateFirstName = () => {
        if (this.state.firstName.length < 3) {
            alert('very short name');
        }
    }

    valiidateEmail = () => {
        if (!(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(this.state.email))) {
            alert('incorrect email address');
        }
    }

    render() {
        const {message, select, subscription} = this.state;
        return (
            <form action="">
                <div className="name">
                    <input className="textInput" type="firstName" name="firstName" placeholder='firstName' onChange={this.handleChange} onBlur={this.validateFirstName}/>
                    <input className="textInput" type="lastName" name="lastName" placeholder='lastName' onChange={this.handleChange}/>
                    <div className="gender">
                        <input type="radio" name='gender' value='male' onChange={this.handleChange}/> Male
                        <input type="radio" name='gender' value='female' onChange={this.handleChange}/> Female
                    </div>
                </div>
                
                <input className='textInput email' type="email" name='email' placeholder='email' onChange={this.handleChange} onBlur={this.valiidateEmail}/>
                <textarea name="message" value={message} onChange={this.handleChange} placeholder='О себе...'></textarea>
                <br />
                <select name="select" value={select} onChange={this.handleChange}>
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <br />
                <input type="checkbox" name='subscription' checked={subscription} onChange={this.handleCheckboxChange}/> Subscription
                <br />
            </form>
        )
    }
}


