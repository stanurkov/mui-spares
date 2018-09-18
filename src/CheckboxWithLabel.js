import React, {Component} from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';



export default class CheckboxWithLabel extends Component {

    render() {
        const {
            label,
            ...other,
        } = this.props;

        return (
            <FormControlLabel
                label={ label }
                control={
                    <Checkbox {...other} />
                }
            />
        );
    }

}