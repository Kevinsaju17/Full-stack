import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useTheme } from '@emotion/react';
import { Box, Chip } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



export default function MultipleSelectForm({ label, options, value, name, onChange, onBlur }) {
  const theme = useTheme();




  return (
    <div>
      <FormControl sx={{ width: '100%' }}>
        <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple


          value={value}
          name={name}
          onChange={onChange}
          onBlur={onBlur}

          input={<OutlinedInput label={label} />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={options.find((option) => option.id === value)?.name} />
              ))}
            </Box>

          )}
          MenuProps={MenuProps}
        >


          {(options || []).map((option) => {
            const selected = (value || []).includes(option.id);
            const Icon = selected ? CheckBoxIcon : CheckBoxOutlineBlankIcon;

            return (
              <MenuItem key={option.id} value={option.id}>
                <Icon fontSize="small" style={{ marginRight: 8 }} />
                <ListItemText primary={option.name} />
              </MenuItem>
            );
          })}

        </Select>
      </FormControl>
    </div>
  );
}
