import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

const ThemeSpan = (props) => {
    const {
        style,
        muiTheme,
        ...other
    } = props;

    return (
        <span 
            style={{
                ...style,
                fontWeight: "normal",
                fontFamily: muiTheme.fontFamily,
                display: "inline-block",
            }}
            {...other}
        />
    );

}
//

export default muiThemeable()(ThemeSpan);
