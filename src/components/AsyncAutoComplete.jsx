import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import StyledInput from './StyledInput';

export default function AsyncAutocomplete({
  list,
  options,
  placeholder,
  spellCheck,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const loading = open && options.length === 0;

  return (
    <Autocomplete
      id="asynchronous-demo"
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      options={options}
      loading={loading}
      {...{
        isOptionEqualToValue: (option, value) => option === value,
        ...rest
      }}
      autoHighlight
      renderInput={(params) => (
        <StyledInput
          fullWidth
          {...params}
          spellCheck={spellCheck}
          required={rest.required}
          placeholder={placeholder}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            )
          }}
        />
      )}
    />
  );
}
