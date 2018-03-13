import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

const ThemeDiv = (props)  => {
    const {
        style,
        fullWidth,
        fullHeight,
        muiTheme,
        ...other
    } = props;

    const addStyle = {};

    if (fullHeight) addStyle.height = "100%";
    if (fullWidth) addStyle.width = "100%";

    return (
        <div 
            style={{
                ...addStyle,
                ...style,
                fontWeight: "normal",
                fontFamily: muiTheme.fontFamily,
                display: "inline-block",
            }}
            {...other}
        />
    );

}

export default muiThemeable()(ThemeDiv);
