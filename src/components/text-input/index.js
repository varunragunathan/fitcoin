// @ts-nocheck
import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextInput = ({label='Sample Label', defaultValue='', isDisabled=false, hasError=false}) => {
    return (
        <div className='text-field-container'>
            <TextField
                id="outlined-basic"
                label={label}
                variant='outlined'
                defaultValue={defaultValue}
                disabled={isDisabled}
                error={hasError}
                fullWidth={true}
            />
        </div>
    );
};

export default TextInput;
