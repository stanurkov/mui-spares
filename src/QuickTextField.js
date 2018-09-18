import React from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';

let nextId = 1;

export default class QuickTextField extends React.Component {
    constructor(props, ...other) {
        super(props, ...other);

        this.uid = nextId ++;
    }

    handleValueChange = (event) => {
        this.props.onValueChange(event, event.target.value);
    }

    labelStart() {
        return "text-input";
    }

    renderInput(id, value, props) {
        return (
            <Input 
                id={ id } 
                value={ value } 
                {...props} 
            />
        );
    }

    render() {
        const {
            errorText, 
            hintText,
            floatingLabelText,
            value,
            fullWidth,
            keyboardFocused,
            contentStyle,
            id,
            onValueChange,
            ...other,
        } = this.props;

        if (onValueChange) {
            other.onChange = this.handleValueChange;
        }
        
        if (hintText) {
            other.placeholder = hintText;
        }

        const hasError = errorText ? true : false;
        const inputName = id ? id : this.labelStart() + this.uid;
      
        return (
            <FormControl 
                error={ hasError } 
                fullWidth={ fullWidth }
                aria-describedby={ hasError ? ("name-error-text" + this.uid) : undefined } 
            >
                <InputLabel htmlFor={ inputName } > 
                    { floatingLabelText }
                </InputLabel>
                { this.renderInput( inputName, value, other ) }
                {
                    hasError ? (
                        <FormHelperText id={ "name-error-text" + this.uid } >
                            { errorText } 
                        </FormHelperText>
                    ) : null
                }
            </FormControl>            

        );
    }
}