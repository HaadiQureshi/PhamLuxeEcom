import {
  Box,
  Button,
  Drawer,
  IconButton,
  InputAdornment,
  TextField,
  useTheme,
} from '@mui/material';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { useMemo, useState } from 'react';
import _ from 'lodash';
import { DesignGrid } from 'components/DesignGrid';
import { Design } from '@/interface';
import { DRAWER_WIDTH, SEARCH_MIN_LENGTH } from '@/constant';
import Typography from '@mui/material/Typography';

interface Props {
  items: Design[];
  open: boolean;
  setOpen: (open: boolean) => void;
}

const UNDERLINE_COLOR = {
  borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
};

export const SearchDrawer = ({ items, open, setOpen }: Props) => {
  const theme = useTheme();
  const [search, setSearch] = useState('');

  const filteredItems = useMemo(() => {
    if (search.length < SEARCH_MIN_LENGTH) return [];
    return items.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [items, search]);

  return (
    <Drawer
      anchor="left"
      onClose={() => setOpen(false)}
      open={open}
      sx={{
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          height: '100vh',
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before':
          UNDERLINE_COLOR,
        '& .MuiInput-underline:after': UNDERLINE_COLOR,
        '& .MuiInput-underline:before': UNDERLINE_COLOR,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'flex-end',
          marginTop: 2,
        }}
      >
        <TextField
          InputProps={{
            style: {
              fontSize: theme.typography.body1.fontSize,
              height: theme.spacing(5),
            },
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="medium" />
              </InputAdornment>
            ),
            endAdornment: (
              <IconButton onClick={() => setSearch('')}>
                {search.length > 0 && <ClearOutlinedIcon />}
              </IconButton>
            ),
          }}
          hiddenLabel
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            '& fieldset': { border: 'none' },
            width: '80%',
          }}
          type="text"
          value={search}
          variant="standard"
        />
        <Button
          onClick={() => setOpen(false)}
          size="small"
        >
          Cancel
        </Button>
      </Box>

      {search.length > 0 && search.length < SEARCH_MIN_LENGTH && (
        <Typography sx={{ margin: 2 }}>
          Please enter 3 or more characters
        </Typography>
      )}

      {search.length >= SEARCH_MIN_LENGTH &&
        (filteredItems.length > 0 ? (
          <Box onClick={() => setOpen(false)}>
            <DesignGrid designs={filteredItems} />
          </Box>
        ) : (
          <Typography sx={{ margin: 2 }}>
            Sorry, we couldn&#39;t find any results matching your search
          </Typography>
        ))}
    </Drawer>
  );
};
