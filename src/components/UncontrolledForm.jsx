import React from "react";

export class UncontrolledForm extends React.Component {
    
    constructor() {
        super();
        this.cardRef = React.createRef();
        this.emailRef = React.createRef();
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.cardRef.current.value.length !== 16) {
            alert('invalid card number')
            return;
        }

        // проверка почты

        // отправка

        this.cardRef.current.value = '';
        this.emailRef.current.value = '';
    }

    render() {
        return (
            <form className="ref" onSubmit={this.handleSubmit}>
                <input type="card" name="card" placeholder="card's number" ref={this.cardRef} />
                <input type="email" name="email" placeholder="email" ref={this.emailRef} />
                <button>Send</button>
            </form>
        )
    }
}