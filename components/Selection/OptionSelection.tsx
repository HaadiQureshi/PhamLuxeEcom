import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import { FinishType } from '@/interface';

interface Props {
  finish: FinishType;
  options: FinishType[];
  setFinish: (finish: FinishType) => void;
}

export const OptionSelection = ({ finish, options, setFinish }: Props) => {
  return (
    <FormLabel>
      <RadioGroup
        value={finish}
        sx={{ display: 'flex', flexDirection: 'row' }}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.id}
            control={<Radio />}
            label={<Typography fontWeight="bold">{option.name}</Typography>}
            onChange={() => setFinish(option)}
            value={option}
          />
        ))}
      </RadioGroup>
    </FormLabel>
  );
};
