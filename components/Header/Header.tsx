import {
  AppBar,
  Badge,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import { useSmallScreen } from 'hooks';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import CartContext from 'context/CartContext';
import { useContext } from 'react';
import { FilterBox } from 'components/Filter';
import { ALL_PHONE_MODELS, DRAWER_WIDTH, HEADER_ITEMS } from '@/constant';
import ModelContext from 'context/ModelContext';
import { SearchDrawer } from 'components/Search';
import { useQuery } from 'react-query';
import { Design, QueryKey } from '@/interface';
import { getAllContentFiles } from 'api/shopify';

interface HamburgerMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

interface MobileHeaderProps {
  cartLength: number;
  designs: Design[];
  openSearch: boolean;
  setOpenCart: (open: any) => void;
  setOpenSearch: (open: any) => void;
}

interface DesktopHeaderProps {
  cartLength: number;
  designs: Design[];
  openSearch: boolean;
  setOpenCart: (open: any) => void;
  setOpenSearch: (open: any) => void;
}

const HamburgerMenu = ({ open, setOpen }: HamburgerMenuProps) => {
  const { phoneModel, setPhoneModel } = useContext(ModelContext);
  const theme = useTheme();

  return (
    <Drawer
      anchor="left"
      onClose={() => setOpen(false)}
      open={open}
      sx={{
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
        },
      }}
    >
      <Box>
        <Box
          sx={{
            display: 'flex',
            padding: theme.spacing(1, 0, 2, 2),
            backgroundColor: theme.palette.secondary.dark,
          }}
        >
          <FilterBox
            colorMode="primary"
            model={phoneModel}
            setModel={setPhoneModel}
            values={ALL_PHONE_MODELS}
          />
          <IconButton
            onClick={() => setOpen(false)}
            sx={{ marginLeft: 'auto' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <Box sx={{ margin: theme.spacing(2, 2, 2, 2) }}>
          {HEADER_ITEMS.map(({ name, href, icon, src }, i) => (
            <Link
              key={i}
              href={href}
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: 10,
                color: theme.palette.primary.main,
                textDecoration: 'none',
              }}
            >
              {src != null && (
                <Image
                  alt={name}
                  height={60}
                  src={src}
                  width={60}
                  style={{ borderRadius: '50%', objectFit: 'none' }}
                />
              )}
              <Typography
                fontWeight="bold"
                sx={{ margin: theme.spacing(2, 0, 0, 2) }}
                variant="button"
              >
                {name}
              </Typography>
            </Link>
          ))}
        </Box>
      </Box>
    </Drawer>
  );
};

const MobileHeader = ({
  cartLength,
  designs,
  openSearch,
  setOpenCart,
  setOpenSearch,
}: MobileHeaderProps) => {
  const router = useRouter();
  const theme = useTheme();
  const [openHamburger, setOpenHamburger] = useState(false);

  return (
    <AppBar
      elevation={0}
      sx={{ bgcolor: theme.palette.primary.main, position: 'sticky' }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <HamburgerMenu
          setOpen={setOpenHamburger}
          open={openHamburger}
        />
        <SearchDrawer
          items={designs}
          open={openSearch}
          setOpen={setOpenSearch}
        />
        <Box sx={{ display: 'flex' }}>
          <IconButton onClick={() => setOpenHamburger(true)}>
            <MenuIcon color="secondary" />
          </IconButton>
          <IconButton onClick={() => setOpenSearch(true)}>
            <SearchIcon color="secondary" />
          </IconButton>
        </Box>
        <Image
          alt="Logo"
          height={40}
          onClick={() => router.push('/')}
          priority
          src="/Full_Logo_White.svg"
          width={175}
        />
        <Box sx={{ display: 'flex' }}>
          <IconButton onClick={() => setOpenCart((prev: boolean) => !prev)}>
            <Badge
              color="secondary"
              badgeContent={cartLength}
            >
              <ShoppingBagRoundedIcon color="secondary" />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const DesktopHeader = ({
  cartLength,
  designs,
  openSearch,
  setOpenCart,
  setOpenSearch,
}: DesktopHeaderProps) => {
  const { phoneModel, setPhoneModel } = useContext(ModelContext);
  const theme = useTheme();

  return (
    <AppBar
      elevation={0}
      sx={{ position: 'sticky' }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <SearchDrawer
          items={designs}
          open={openSearch}
          setOpen={setOpenSearch}
        />
        <IconButton onClick={() => setOpenSearch(true)}>
          <SearchIcon
            color="secondary"
            fontSize="large"
          />
        </IconButton>
        <Box sx={{ textAlign: 'center' }}>
          <Link href="/">
            <Image
              alt="Logo"
              height={100}
              priority
              src="/Full_Logo_White.svg"
              style={{ backgroundColor: 'transparent' }}
              width={156.25}
            />
          </Link>
          <Box sx={{ display: 'flex', gap: theme.spacing(3) }}>
            {HEADER_ITEMS.map(({ name, href }, i) => (
              <Link
                key={i}
                href={href}
                style={{
                  color: theme.palette.secondary.main,
                  textDecoration: 'none',
                }}
              >
                <Typography variant="button">{name}</Typography>
              </Link>
            ))}
          </Box>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <FilterBox
            colorMode="secondary"
            model={phoneModel}
            setModel={setPhoneModel}
            values={ALL_PHONE_MODELS}
          />
          <IconButton onClick={() => setOpenCart((prev: boolean) => !prev)}>
            <Badge
              color="secondary"
              badgeContent={cartLength}
            >
              <ShoppingBagRoundedIcon
                color="secondary"
                fontSize="large"
              />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const Header = () => {
  const smallScreen = useSmallScreen();
  const { cartItems, setOpenCart } = useContext(CartContext);
  const { data: designs } = useQuery({
    queryKey: [QueryKey.ContentFile],
    queryFn: () => getAllContentFiles(),
  });
  const [openSearch, setOpenSearch] = useState(false);
  const cartLength = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  if (smallScreen) {
    return (
      <MobileHeader
        cartLength={cartLength}
        designs={designs ?? []}
        openSearch={openSearch}
        setOpenCart={setOpenCart}
        setOpenSearch={setOpenSearch}
      />
    );
  }

  return (
    <DesktopHeader
      cartLength={cartLength}
      designs={designs ?? []}
      openSearch={openSearch}
      setOpenCart={setOpenCart}
      setOpenSearch={setOpenSearch}
    />
  );
};

export default Header;
