import { BaseType, CartItem, CaseType, Design, FinishType, ModelType } from '@/interface';
import { Product } from 'shopify-buy';

export const isSelected = (type1: BaseType, type2: BaseType) => type1.id === type2.id;

export const formatUrlPath = (path: string) => {
  return path.replace(/ /g, '-').toLowerCase();
};

export const getLocalStorageItem = (key: string, defaultValue?: unknown): unknown => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : defaultValue;
};

export const shallowCartCompare = (obj1: CartItem, obj2: CartItem): boolean => {
  return (
    obj1.name === obj2.name &&
    obj1.type.id === obj2.type.id &&
    obj1.customText === obj2.customText &&
    obj1.finish.id === obj2.finish.id &&
    obj1.model.id === obj2.model.id
  );
};

export const findProductVariant = (product: Product | undefined, type: CaseType, finish: FinishType): ShopifyBuy.ProductVariant | undefined => {
  if (!product) return;
  // @ts-ignore
  const variantSKU = (product.handle + '-' + type.name + '-' + finish.name).toLowerCase(); // i.e. iphone14-plus-snap-matte
  // @ts-ignore
  const variant = product.variants.find((variant) => variant.sku.toLowerCase() === variantSKU);
  return variant;
}

export const handleAddToCart = async (
  addCartItem: (product: CartItem) => void,
  product: Product,
  design: Design,
  finish: FinishType,
  model: ModelType,
  type: CaseType,
  customText?: string,
) => {
  const variant = findProductVariant(product, type, finish);
  if (!variant) return;

  addCartItem({
    variantId: variant.id.toString(),
    customText: customText,
    finish: finish,
    model: model,
    name: design.name,
    // @ts-ignore
    price: variant.price.amount,
    quantity: 1,
    src: variant.image.src,
    type: type,
  });
};

export const CURRENT_FORMATTER = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'AUD',
  currencyDisplay: 'code',
  maximumFractionDigits: 2,
});
