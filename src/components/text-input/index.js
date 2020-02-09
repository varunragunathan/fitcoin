// @ts-nocheck
import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextInput = ({
        label='Sample Label',
        defaultValue='',
        isDisabled=false,
        hasError=false,
        size='small',
        variant='outlined'
    }) => {
    return (
        <div className='text-field-container'>
            <TextField
                id="outlined-basic"
                label={label}
                variant={variant}
                defaultValue={defaultValue}
                disabled={isDisabled}
                error={hasError}
                fullWidth={true}
                size={size}
            />
        </div>
    );
};

export default TextInput;
