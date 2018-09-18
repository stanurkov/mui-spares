import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import { red } from '@material-ui/core/colors';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';


class ErrorPaper extends Component {
    static propTypes = {
        /** (string or element) Error text to be displayed. If it is null or undefined, the component will render as null */
        errorText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        /** Z-depth of the paper */
        zDepth: PropTypes.number,
        /** Margin CSS property to override default */
        margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        /** Padding CSS property to override default */
        padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        /** Background color of the paper, default is red100 */
        color: PropTypes.string,
    }

    render() {
        const {
            errorText,
            zDepth,
            margin,
            padding,
            color,
        } = this.props;

        if (errorText) {
            return (
                <Paper 
                    elevation={zDepth || 2} 
                    style={{
                        margin: margin || 16, 
                        padding: padding || 8, 
                        backgroundColor: color || red[100] 
                    }}
                >
                    <Typography variant="body2" >
                        {errorText}
                    </Typography>
                </Paper>
            );
        } else {
            return null;
        }

    }
}

export default ErrorPaper;