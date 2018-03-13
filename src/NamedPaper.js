import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FlexBand, { FlexBandItem } from 'flexband';

import ThemeH2 from './ThemeH2';



class NamedPaper extends Component {
  
    render() {
        let {
            fullWidth,
            fullHeight,
            innerStyle,
            headStyle,
            titleStyle,
            caption,
            title,
            children,
            zDepth,
            style,
            muiTheme,
            ...other,
        } = this.props;
  
        const addStyle = { ...style };

        if (fullWidth) addStyle.width = "100%";
        if (fullHeight) addStyle.height = "100%";

        if (!headStyle) headStyle = {backgroundColor: "rgba(120, 120, 120, 0.2)", padding: 0, margin: 0};
            

        return (
            <Paper zDepth={zDepth || 2} style={addStyle} {...other} >
                <FlexBand direction="column" justify="space-between" fullHeight={true} >
                    <FlexBandItem grow="0" style={ headStyle } >
                        <h3 style={ {...titleStyle, margin: 0, padding: "1em", verticalAlign: "center", fontWeight: "normal", fontFamily: muiTheme.fontFamily, } }>
                            { title || caption }
                        </h3>
                    </FlexBandItem>
                    <FlexBandItem grow="1">
                        { children }
                    </FlexBandItem>
                </FlexBand>
            </Paper>
        );
    }

}

export default muiThemeable()(NamedPaper);
