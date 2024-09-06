export enum QueryKey {
  PhoneCase = 'PhoneCase',
  ContentFile = 'ContentFile',
}

export enum Phone {
  APPLE = 'Apple',
  SAMSUNG = 'Samsung',
};

export enum StorageKey {
  CART = 'cart',
}

export interface BaseType {
  id: string;
  name: string;
}

export interface ModelType extends BaseType {
  handle: string;
}

export interface CaseType extends BaseType {
  src: string;
}

export interface FinishType extends BaseType {
  value: string;
}

export interface NavItem {
  name: string;
  href: string;
  icon?: any;
  src?: string;
}

export interface Design {
  id: string;
  alt: string;
  height: number;
  name: string;
  src: string;
  width: number;
}

export interface CartItem {
  variantId: string;
  customText?: string;
  finish: FinishType;
  model: ModelType;
  name: string
  price: number;
  quantity: number;
  src: string;
  type: CaseType;
}
