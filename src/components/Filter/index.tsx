import React, { ChangeEvent } from 'react';
import { FilterProps } from './index.types';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const Filter: React.FC<FilterProps> = ({ value, onChange }) => {
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
      />
    </div>
  );
}

export default Filter;
