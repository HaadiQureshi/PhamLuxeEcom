import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CartContext from 'context/CartContext';
import CloseIcon from '@mui/icons-material/Close';
import { useCallback, useContext, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Backdrop, CircularProgress, Paper, useTheme } from '@mui/material';
import Divider from '@mui/material/Divider';
import { CURRENT_FORMATTER } from '@/utils';
import { BuyButton } from 'components/Buttons';
import { CartProduct } from 'components/CartProduct';
import { checkout } from 'api/shopify';
import { LineItem } from 'shopify-buy';
import { useSmallScreen } from 'hooks';
import { DRAWER_WIDTH } from '@/constant';

interface Props {}

export const ShoppingCart = ({}: Props) => {
  const theme = useTheme();
  const { cartItems, openCart, setOpenCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const smallScreen = useSmallScreen();

  const totalCost = cartItems.reduce(
    (acc, item) => acc + item.quantity * Number(item.price),
    0
  );

  const buildLineItems = useCallback(() => {
    return cartItems.map((item) => {
      return {
        variantId: item.variantId,
        quantity: item.quantity,
      };
    }) as LineItem[];
  }, [cartItems]);

  const handleCheckout = () => {
    if (!cartItems.length) return;
    const lineItems = buildLineItems();
    checkout(lineItems);
  };

  return (
    <Drawer
      anchor="right"
      onClose={() => setOpenCart(false)}
      open={openCart}
      sx={{
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
        },
        display: 'flex',
      }}
    >
      <Backdrop
        invisible={false}
        open={loading}
        sx={{
          position: 'absolute',
          color: theme.palette.common.white,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <CircularProgress color="secondary" />
      </Backdrop>
      <Paper
        elevation={24}
        square
        sx={{ display: 'flex', flexDirection: 'row' }}
      >
        <IconButton onClick={() => setOpenCart(false)}>
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
          Shopping Cart
        </Typography>
      </Paper>
      <Divider />
      <Box
        sx={{
          overflowY: 'auto',
          flex: 1,
          bgcolor: theme.palette.secondary.dark,
        }}
      >
        {cartItems.map((item, i) => (
          <CartProduct
            key={i}
            item={item}
            setLoading={setLoading}
          />
        ))}
      </Box>
      <Divider />
      <Paper
        elevation={24}
        square
        sx={{ marginTop: 'auto' }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 1,
            margin: '10px 16px 10px 16px',
          }}
        >
          <Typography sx={{ fontWeight: 'bold' }}>Subtotal</Typography>
          <Typography sx={{ fontWeight: 'bold' }}>
            {CURRENT_FORMATTER.format(totalCost)}
          </Typography>
          <BuyButton
            display="Secure Checkout"
            onClick={() => handleCheckout()}
          />
        </Box>
      </Paper>
    </Drawer>
  );
};
