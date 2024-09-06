import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import { Typography, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { ModelType } from '@/interface';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { isSelected } from '@/utils';
import { useSmallScreen } from 'hooks';
import { DRAWER_WIDTH } from '@/constant';

interface Props {
  model: ModelType;
  open: boolean;
  setModel: (model: ModelType) => void;
  setOpen: (open: boolean) => void;
  values: Record<string, ModelType[]>;
}

export const FilterDrawer = ({
  model,
  open,
  setModel,
  setOpen,
  values,
}: Props) => {
  const theme = useTheme();
  const allFilters = Object.entries(values);
  const smallScreen = useSmallScreen();

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelect = (model: ModelType) => {
    setModel(model);
    handleClose();
  };

  return (
    <Drawer
      anchor="left"
      onClose={handleClose}
      open={open}
      sx={{
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
        },
      }}
    >
      <Box sx={{ backgroundColor: theme.palette.secondary.main }}>
        <Box sx={{ display: 'flex' }}>
          <IconButton onClick={handleClose}>
            <CloseIcon fontSize={smallScreen ? 'medium' : 'large'} />
          </IconButton>
          <Typography
            sx={{
              marginTop: { xs: 0.5, sm: 1.25 },
              textAlign: 'center',
              flexGrow: 0.9,
            }}
            variant={smallScreen ? 'h6' : 'h5'}
          >
            Select Phone Model
          </Typography>
        </Box>

        {allFilters.map(([key, values], i) => (
          <Box key={key}>
            {i > 0 && <Divider />}
            <Typography
              sx={{ marginLeft: theme.spacing(1.25) }}
              variant="h6"
            >
              {key}
            </Typography>

            {values.map((value) => (
              <Box
                key={value.id}
                onClick={() => handleSelect(value)}
                sx={{
                  '&:hover': { cursor: 'pointer' },
                  display: 'flex',
                  marginLeft: theme.spacing(2.5),
                  color: isSelected(value, model)
                    ? theme.palette.success.main
                    : '',
                  fontWeight: isSelected(value, model) ? 'bold' : '',
                }}
              >
                {isSelected(value, model) && (
                  <FiberManualRecordIcon sx={{ width: theme.spacing(1.25) }} />
                )}
                <Typography>{value.name}</Typography>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Drawer>
  );
};
