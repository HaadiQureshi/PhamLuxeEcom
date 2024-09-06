import { CartItem } from '@/interface';
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CartContext from 'context/CartContext';
import Image from 'next/image';
import { useContext } from 'react';
import { CART_DELAY_TIME } from '@/constant';
import { ProductSummary } from './ProductSummary';

interface Props {
  item: CartItem;
  setLoading: (loading: boolean) => void;
}

export const CartProduct = ({ item, setLoading }: Props): JSX.Element => {
  const { addCartItem, decreaseCartItem, removeCartItem } =
    useContext(CartContext);

  const handleQuantityChange = (changeOperation: (item: CartItem) => void) => {
    setLoading(true);
    changeOperation(item);
    setTimeout(() => {
      setLoading(false);
    }, CART_DELAY_TIME);
  };

  return (
    <Card elevation={0}>
      <CardContent
        sx={{ display: 'flex', gap: 1, bgcolor: 'secondary.dark' }}
      >
        <Image
          alt="TODO"
          height={95}
          src={item.src}
          width={95}
        />
        <Box sx={{ width: '100%' }}>
          <ProductSummary
            customText={item.customText}
            finish={item.finish}
            model={item.model}
            name={item.name}
            price={item.price}
            type={item.type}
          />
          <ButtonGroup
            variant="contained"
            aria-label="change item quantity button group"
            sx={{ height: 30 }}
          >
            <Button onClick={() => handleQuantityChange(decreaseCartItem)}>
              -
            </Button>
            <Button variant="outlined">
              <Typography variant="subtitle2">{item.quantity}</Typography>
            </Button>
            <Button onClick={() => handleQuantityChange(addCartItem)}>+</Button>
          </ButtonGroup>
        </Box>
        <IconButton
          disableRipple
          onClick={() => handleQuantityChange(removeCartItem)}
        >
          <CloseIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};
