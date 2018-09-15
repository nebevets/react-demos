import React, {Component} from 'react';
import '../assets/css/app.css';
import Time from './time';

class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            time: new Date(),
        };
    }
    tick(){
        this.setState({
            time: new Date(),
        });
    }
    render(){
        return (
            <div className="app">
                <h1>The current time is <Time time={this.state.time}/></h1>
            </div>
        );
    }
    componentDidMount(){
        setInterval(() => this.tick(), 1000);
    }
}

export default Clock;