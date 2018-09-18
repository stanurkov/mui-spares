import React, {Component} from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';



export default class ToggleWithLabel extends Component {

    render() {
        const {
            label,
            color,
            ...other,
        } = this.props;

        return (
            <FormControlLabel
                label={ label }
                control={
                    <Switch {...other} />
                }
            />
        );
    }

}