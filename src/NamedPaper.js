import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import FlexBand, { FlexBandItem } from 'flexband';
import Typography from '@material-ui/core/Typography';
import { withTheme } from '@material-ui/core/styles';



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
            width,
            ...other,
        } = this.props;
  
        const addStyle = { ...style };

        if (width) addStyle.width = width;
        if (fullWidth) addStyle.width = "100%";
        if (fullHeight) addStyle.height = "100%";

        if (!headStyle) headStyle = {backgroundColor: "rgba(120, 120, 120, 0.2)", padding: 0, margin: 0};
            

        return (
            <Paper elevation={zDepth || 2} style={addStyle} {...other} >
                <FlexBand direction="column" justify="space-between" fullHeight={true} >
                    <FlexBandItem grow="0" style={ headStyle } >
                        <Typography 
                            style={ {...titleStyle, margin: 0, padding: "1em", verticalAlign: "center", fontWeight: "normal", } }
                            variant="subheading"
                        >
                            { title || caption }
                        </Typography>
                    </FlexBandItem>
                    <FlexBandItem grow="1">
                        { children }
                    </FlexBandItem>
                </FlexBand>
            </Paper>
        );
    }

}

export default withTheme()(NamedPaper);
