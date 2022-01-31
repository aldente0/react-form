import React from "react";

export class FormWithRef extends React.Component {
    
    constructor() {
        super();
        this.state = {
            card: '',
            email: '',
        }
        this.cardRef = React.createRef();
        this.emailRef = React.createRef();
    }

    handleChange = (e) => {
        this.setState(() => ({[e.target.name]: e.target.value}), () => {
            if (this.state.card.length === 16) {
                this.emailRef.current.focus();
            }
        })
    }

    componentDidMount() {
        this.cardRef.current.focus();
    }

    render() {
        const {card, email} = this.state;

        return (
            <div className="ref">
                <input type="card" name="card" value={card} placeholder="card's number" ref={this.cardRef} onChange={this.handleChange}/>
                <input type="email" name="email" value={email} placeholder="email" ref={this.emailRef} onChange={this.handleChange}/>
            </div>
        )
    }
}