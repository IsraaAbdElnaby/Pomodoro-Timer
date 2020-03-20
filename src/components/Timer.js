import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: this.props.minutes,
            seconds: this.props.seconds,
        };
    }

    componentDidMount() {
        this.secID = setInterval(() => {
            if (this.state.minutes === 0 && this.state.seconds === 60) {
                clearInterval(this.secID);
            }
            else {
                this.tick()
            }
        }, 1000);
        //this.minID = setInterval(()=>this.minChangeHandler(), 60000);
    }

    tick() {
        if (this.state.seconds === 60) {
            this.setState({
                minutes: this.state.minutes - 1,
                //  seconds: 60
            })
        }

        this.setState({
            seconds: this.state.seconds === 1 ? 60 : this.state.seconds - 1,
        });
    }

    format() {
        let {minutes} = this.state;
        //let seconds = Math.floor(minutes * 60);
        let {seconds} = this.state;
        minutes = minutes < 1 ? "00" : minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds === 60 ? "00" : seconds < 10 ? `0${seconds}` : seconds;

        return `${minutes} : ${seconds}`;
    }

    // minChangeHandler() {
    //     this.setState({
    //         minutes: this.state.minutes  - 1,
    //         seconds: 60
    //     })
    // }

    render() {
        // if (this.state.seconds === 60) {
        //     this.setState({minutes: this.state.minutes - 1})
        // }
       // let minutes = this.state.minutes;
        //let seconds = this.state.seconds;
        return (
            <div>
                {/* <h2>{minutes} : {seconds === 60 ? '00' : seconds}</h2> */}
                <h2>{this.format()}</h2>
            </div>
        );
    }
}

export default Timer;