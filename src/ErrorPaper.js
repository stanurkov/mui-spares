import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {red100, red200} from 'material-ui/styles/colors';
import PropTypes from 'prop-types';


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
                <Paper zDepth={zDepth || 1} style={{margin: margin || 8, padding: padding || 6, backgroundColor: color || red100 }}>
                    {errorText}
                </Paper>
            );
        } else {
            return null;
        }

    }
}

export default ErrorPaper;