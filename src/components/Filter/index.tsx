// Imports
import React, { ChangeEvent } from 'react';
import { FilterProps } from './index.types';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

// Filter component
const Filter: React.FC<FilterProps> = ({ value, onChange }) => {
  //handles the Textfield event change when filtering by name
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="filter-wrapper">
      <TextField
        variant="outlined"
        placeholder="Search"
        value={value}
        onChange={handleChange}
        fullWidth
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
        sx={{
          '& fieldset': {
            border: '0',
            borderRadius: '0',
          },
          '&::placeholder': {
            fontSize: '14px',
            color: '#8E9AA5'
          }
        }}
      />
    </div>
  );
}

export default Filter;
