import React from 'react';
import { FormControl, InputLabel, FormHelperText, Select } from '@material-ui/core';
import QuickTextField from "./QuickTextField"


export default class QuickSelectField extends QuickTextField {

    labelStart() {
        return "select-field";
    }

    renderInput(id, value, props) {
        return (
            <Select     
                value={ value }
                inputProps={{
                    id: id,
                }} 
                {...props}
            />
        );
    }


}