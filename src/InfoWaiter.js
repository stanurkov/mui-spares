import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import ln3 from "ln3";

export class InfoFiller extends Component {

    render() {
        const {
            style,
            innerStyle,
            children,
            minHeight,
            ...other,
        } = this.props;

        return (        
            <div style={{...style, position: "relative", minHeight: minHeight || "100%"  }} {...other}>
                <div style={{...innerStyle, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", }} >
                    { children }
                </div>
            </div>
        );
    }    
}


export default class InfoWaiter extends Component {

    render() {
        const {
            label,
            progressSize,
            progressWidth,
            children,
            ...other,
        } = this.props;

        return (
            <InfoFiller {...other} >
                    <CircularProgress size={progressSize || 60} thickness={ progressWidth || 7}  />
                    { 
                        (typeof label === 'underfined') || (label !== false && label !== "" && label !== null)  ? (
                            <br />
                        ) : null 
                    }
                    { (typeof label === 'underfined') ? ln3.text("title.please.wait", "Please wait...") : label }
                    { children }                
            </InfoFiller>
        )

    }
}