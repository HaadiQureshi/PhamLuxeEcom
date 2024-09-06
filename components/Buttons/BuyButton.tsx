import { useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface Props {
  buttonVariant?: 'text' | 'outlined' | 'contained' | undefined;
  display?: string;
  onClick?: () => void;
  textVariant?:
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'inherit'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'overline';
}

export const BuyButton = ({
  buttonVariant = 'contained',
  display,
  onClick,
  textVariant,
}: Props) => {
  const theme = useTheme();

  return (
    <Button
      color="success"
      onClick={onClick}
      sx={{
        borderRadius: theme.spacing(5.75),
        width: '100%',
        height: theme.spacing(5.75),
      }}
      variant={buttonVariant}
    >
      <Typography variant={textVariant}>{display}</Typography>
    </Button>
  );
};
