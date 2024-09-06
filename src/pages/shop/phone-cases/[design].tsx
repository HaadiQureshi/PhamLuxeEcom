import { Box, Container, TextField, Typography } from '@mui/material';
import Stack from '@mui/system/Stack';
import { getAllContentFiles, getAllProducts } from 'api/shopify';
import { FilterBox } from 'components/Filter/FilterBox';
import { ImageCarousel } from 'components/ImageCarousel';
import { ShowCase } from 'components/Showcase';
import { TypeSelection, OptionSelection } from 'components/Selection';
import {
  ALL_PHONE_MODELS,
  MATERIAL_OPTIONS,
  MAX_CUSTOM_TEXT_LENGTH,
  PHONE_CASE_TYPES,
} from '@/constant';
import ModelContext from 'context/ModelContext';
import { useSmallScreen } from 'hooks';
import { CaseType, Design, FinishType, ModelType, QueryKey } from '@/interface';
import { useRouter } from 'next/router';
import {
  ChangeEvent,
  useContext,
  useMemo,
  useState,
} from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { Product } from 'shopify-buy';
import { BuyButton } from 'components/Buttons';
import CartContext from 'context/CartContext';
import { handleAddToCart } from '@/utils';

interface Props {}

interface PersonalizationProps {
  design: Design;
  finish: FinishType;
  model: ModelType;
  product: Product;
  setCustomText: (text: string) => void;
  setFinish: (finish: FinishType) => void;
  setModel: (model: ModelType) => void;
  setType: (type: CaseType) => void;
  type: CaseType;
}

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await Promise.all([
    queryClient.prefetchQuery([QueryKey.PhoneCase], () => getAllProducts()),
    queryClient.prefetchQuery([QueryKey.ContentFile], () =>
      getAllContentFiles()
    ),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Product = ({}: Props) => {
  const router = useRouter();
  const smallScreen = useSmallScreen();
  const { data: products } = useQuery({
    queryKey: [QueryKey.PhoneCase],
    queryFn: () => getAllProducts(),
  });
  const { data: designs } = useQuery({
    queryKey: [QueryKey.ContentFile],
    queryFn: () => getAllContentFiles(),
  });
  const { phoneModel } = useContext(ModelContext);
  const { addCartItem } = useContext(CartContext);
  const [model, setModel] = useState(phoneModel);
  const [finish, setFinish] = useState(MATERIAL_OPTIONS[0]);
  const [type, setType] = useState(PHONE_CASE_TYPES[0]);
  const [customText, setCustomText] = useState('');
  const [images, setImages] = useState([
    '/Phone1.jpg',
    '/Phone2.jpg',
    '/Phone3.png',
    '/Phone4.jpg',
  ]);

  const design = designs?.find(
    // @ts-ignore
    (design) => design.name.toLowerCase() === router.query.design
  ) as Design;
  const product = products?.find(
    // @ts-ignore
    (product) => product.handle === phoneModel.handle
  ) as Product;

  const onAddToCart = () => {
    if (!product || !design) return;
    handleAddToCart(
      addCartItem,
      product,
      design,
      finish,
      model,
      type,
      customText
    );
  };

  const Carousel = useMemo(() => <ImageCarousel images={images} />, [images]);
  const Showcase = useMemo(() => <ShowCase images={images} />, [images]);

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 0, sm: 3 },
        }}
      >
        <Box sx={{ position: 'relative' }}>
          {smallScreen ? Carousel : Showcase}
          {
            <Typography
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                zIndex: 1,
              }}
              variant="h5"
            >
              {customText}
            </Typography>
          }
        </Box>
        <Stack spacing={2}>
          <Personalization
            design={design}
            finish={finish}
            model={model}
            product={product}
            setCustomText={setCustomText}
            setFinish={setFinish}
            setModel={setModel}
            setType={setType}
            type={type}
          />
          <BuyButton
            display="Add to Cart"
            onClick={() => onAddToCart()}
          />
        </Stack>
      </Box>
    </Container>
  );
};

const Personalization = ({
  design,
  finish,
  model,
  product,
  setCustomText,
  setFinish,
  setModel,
  setType,
  type,
}: PersonalizationProps) => {
  const handleCustomText = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const text = e.target.value;
    if (text.length > MAX_CUSTOM_TEXT_LENGTH) return;
    setCustomText(text);
  };

  return (
    <Stack spacing={1}>
      <Typography variant="h5">
        {design.name} - {model.name} Case
      </Typography>
      <FilterBox
        model={model}
        setModel={setModel}
        values={ALL_PHONE_MODELS}
      />
      <TextField
        onChange={(e) => handleCustomText(e)}
        placeholder={`MAX ${MAX_CUSTOM_TEXT_LENGTH} CHARACTERS`}
        size="small"
        variant="outlined"
        inputProps={{ maxLength: MAX_CUSTOM_TEXT_LENGTH }}
      />
      <OptionSelection
        finish={finish}
        options={MATERIAL_OPTIONS}
        setFinish={setFinish}
      />
      <TypeSelection
        setType={setType}
        type={type}
        types={PHONE_CASE_TYPES}
      />
    </Stack>
  );
};

export default Product;
