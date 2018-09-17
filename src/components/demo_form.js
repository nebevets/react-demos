import React, {Component} from 'react';

class DemoForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: props.email || '',
            name: '',
            password: ''
        };
        //this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('form submitted', this.state);
        this.setState({
            email: '',
            name: '',
            password: ''
        })
    }
    handleChange = (event) => {
        //console.log('value, bud', event.target.value);
        //console.log('name, bud', event.target.name);
        //console.dir(event.target);
        this.setState({
            [event.target.name]: event.target.value
        });
        /*
        switch (event.target.name){
            case 'email':
                this.setState({email: event.target.value});
                break;
            case 'name':
                this.setState({name: event.target.value});
                break;
            case 'password':
                this.setState({password: event.target.value});
                break;
        }*/
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>demo form</h1>
                <div>
                    <label>email</label>
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.handleChange}
                        name="email"
                        autoComplete="off"
                    />
                </div>
                <div>
                    <label>name</label>
                    <input
                        type="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        name="name"
                        autoComplete="off"
                    />
                </div>
                <div>
                    <label>password</label>
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        name="password"
                    />
                </div>
                <button>submit form</button>
            </form>
        );
    }
}

export default DemoForm;