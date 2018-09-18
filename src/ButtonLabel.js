import React, {Component} from 'react';


class ButtonLabel extends Component{

    render() {
        const {
            icon,
            label,
            labelPosition,
        } = this.props;

        if (icon && label) {
            
            if (labelPosition === "left" || labelPosition === "before") {
                return (
                    <div style={{ display: "flex", alignItems: "center" }} >
                        { label }   
                        { icon }
                    </div >
                );
            } else {
                return (
                    <div style={{ display: "flex", alignItems: "center" }} >
                        { icon }
                        { label }
                    </div >
                );
            }

        } else  {
            return (
                label || icon
            );
        }

        

    }

} 

export default ButtonLabel;