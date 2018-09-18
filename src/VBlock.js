import React from 'react';


const sizes =  {
    "x-small": 8,
    "xsmall": 8,
    "small": 12,
    "normal": 16,
    "medium": 16,
    "medium-large": 18,
    "large": 24,
    "xlarge": 32,
    "x-large": 32,
};


export default class QuickTextField extends React.Component {

    render() {
        const {
            directStyle,
            style,
            className,
            spacing,
            ...other,
        } = this.props;

        let margin = spacing;

        if (typeof margin === "string") {
            margin = sizes[margin];
        }

        if (!margin) {
            margin = sizes["normal"];
        }
        
        if (directStyle) {
            const dStyle = {...style, marginTop: margin, marginBottom: margin };

            return (
                <div {...other} className={ className } style={ dStyle } />
            );
        } else {
            return (
                <div {...other} className={ (className ? className + " " : "") + "v-margin" + margin } />
            )
        }

    }


}