import TextField from '@mui/material/TextField';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { InputAdornment } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { ModelType } from '@/interface';
import { FilterDrawer } from './FilterDrawer';

interface Props {
  colorMode?: 'primary' | 'secondary';
  model: ModelType;
  setModel: (model: ModelType) => void;
  values: Record<string, ModelType[]>;
}

export const FilterBox = ({
  colorMode = 'primary',
  model,
  setModel,
  values,
}: Props) => {
  const [open, setOpen] = useState(false);
  const themeColor =
    colorMode === 'primary'
      ? 'primary.main'
      : 'secondary.main';

  const handleClick = (_: SyntheticEvent) => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <FilterDrawer
        model={model}
        open={open}
        setModel={setModel}
        setOpen={setOpen}
        values={values}
      />
      <TextField
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <ArrowDropDownIcon color={colorMode} />
            </InputAdornment>
          ),
          style: { cursor: 'pointer' },
          readOnly: true,
        }}
        onClick={handleClick}
        size="small"
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: '2px solid',
              borderColor: themeColor,
            },
            '&:hover fieldset': {
              borderColor: themeColor,
            },
            '&.Mui-focused fieldset': {
              borderColor: themeColor,
            },
          },
          input: {
            color: themeColor,
            cursor: 'pointer',
          },
          marginTop: 1,
        }}
        value={model.name}
      />
    </>
  );
};
