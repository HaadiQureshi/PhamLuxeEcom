import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {
  Backdrop,
  Badge,
  CircularProgress,
  IconButton,
} from '@mui/material';
import Box from '@mui/system/Box';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CartContext from 'context/CartContext';
import { useContext, useState } from 'react';
import { findProductVariant, formatUrlPath, handleAddToCart } from '@/utils';
import {
  CART_DELAY_TIME,
  MATERIAL_OPTIONS,
  PHONE_CASE_TYPES,
} from '@/constant';
import ModelContext from 'context/ModelContext';
import Link from 'next/link';
import { Design, QueryKey } from '@/interface';
import { useQuery } from 'react-query';
import { getAllProducts } from 'api/shopify';
import Image from 'next/image';
import { ProductSummary } from 'components/CartProduct';

interface Props {
  design: Design;
}

export const DesignDisplay = ({ design }: Props) => {
  const { addCartItem } = useContext(CartContext);
  const { phoneModel } = useContext(ModelContext);
  const { data: products } = useQuery({
    queryKey: [QueryKey.PhoneCase],
    queryFn: () => getAllProducts(),
  });
  const [addedItem, setAddedItem] = useState(false);
  const [loading, setLoading] = useState(false);

  const product = products?.find(
    // @ts-ignore
    (product) => product.handle === phoneModel.handle.toLowerCase()
  );
  const variant = findProductVariant(
    product,
    PHONE_CASE_TYPES[0],
    MATERIAL_OPTIONS[0]
  );

  const onAddToCart = () => {
    if (!product) return;

    setLoading(true);
    setAddedItem(true);
    handleAddToCart(
      addCartItem,
      product,
      design,
      MATERIAL_OPTIONS[0],
      phoneModel,
      PHONE_CASE_TYPES[0],
    );
    setTimeout(() => {
      setLoading(false);
    }, CART_DELAY_TIME);
  };

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Backdrop
          invisible={false}
          open={loading}
          sx={{
            position: 'absolute',
            color: 'common.white',
          }}
        >
          <CircularProgress color="success" />
        </Backdrop>
        {/* @ts-ignore */}
        <Link href={`/shop/phone-cases/${formatUrlPath(design.name)}`}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Image
              alt={design.alt}
              fill
              src={design.src}
              style={{ objectFit: 'contain', margin: 'auto' }}
            />
          </Box>
        </Link>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <Box sx={{ marginLeft: 'auto' }}>
            <ProductSummary
              finish={MATERIAL_OPTIONS[0]}
              model={phoneModel}
              name={design.name}
              // @ts-ignore
              price={variant?.price?.amount || 33.95} // 33.95 is the snap price
              type={PHONE_CASE_TYPES[0]}
            />
          </Box>
          <Box sx={{ marginLeft: 'auto', marginTop: 3 }}>
            {addedItem ? (
              <IconButton onClick={onAddToCart}>
                <CheckCircleIcon color="success" />
              </IconButton>
            ) : (
              <IconButton onClick={onAddToCart}>
                <Badge badgeContent="+">
                  <ShoppingBagRoundedIcon />
                </Badge>
              </IconButton>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
