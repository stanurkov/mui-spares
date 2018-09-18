import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import ln3 from 'ln3';
import { Typography } from '@material-ui/core';

export default class AppLoader extends Component {
    constructor (props, ...other) {
        super(props, ...other);

        this.state = {
            open: props.open || true,
            finished: false,
            started: false,
        }

        if (props.onStart) {
            this.state.started = true;
            props.onStart(this.handleComplete);
        }

    }

    handleComplete = (...params) => {
        this.setState({ finished: true, open: false });

        if (this.props.onFinish) {
            this.props.onFinish(...params);
        }

    }

    render() {

        return (this.state.open) ? (
            <div style={{ backgroundColor: "rgba(120,120,120,0.8)", width: "100%", height: window.innerHeight, color: "#E3F2FD" }}>
                <div className="centered" >
                
                    <CircularProgress size={60} thickness={7}  />
                    <br />
                    <Typography >
                        { ln3.text("title.please.wait", "Please wait...") }
                    </Typography>
                </div>
            </div>
        ) : (<span />)
    }
}

