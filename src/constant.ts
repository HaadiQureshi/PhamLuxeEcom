import { CaseType, FinishType, ModelType, NavItem, Phone } from '@/interface';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import GroupsIcon from '@mui/icons-material/Groups';

export const COMPANY_NAME = 'PhamLuxe'

export const SEARCH_MIN_LENGTH = 3;
export const MAX_FETCH_COUNT = 250;
export const GOLDEN_RATIO = 1.61803398875;
export const IMAGE_CHANGE_DEBOUNCE = 0;
export const CART_DELAY_TIME = 500;
export const MAX_CUSTOM_TEXT_LENGTH = 9;

export const FOOTER_ITEMS: NavItem[] = [
  { name: 'About Us', href: '/about-us', icon: GroupsIcon },
  { name: 'Contact Us', href: '/contact-us', icon: ContactPhoneIcon },
  { name: 'FAQ', href: '/faq', icon: QuestionAnswerIcon },
  { name: 'Track Order', href: 'https://auspost.com.au/mypost/track/#/search', icon: GpsFixedIcon },
];

export const HEADER_ITEMS: NavItem[] = [
  { name: 'Phone Cases', href: '/shop/phone-cases', src: '/Phone2.jpg' },
  FOOTER_ITEMS[3],
  FOOTER_ITEMS[0],
  FOOTER_ITEMS[1],
];

export const DRAWER_WIDTH = { xs: '90vw', sm: '50vw', lg: '25vw' };

// TODO: Change images
export const PHONE_CASE_TYPES: CaseType[] = [
  { id: '1', name: 'Snap', src: '/Phone2.jpg' },
  { id: '2', name: 'Tough', src: '/Phone3.png' },
];

export const MATERIAL_OPTIONS: FinishType[] = [
  {
    id: '1',
    name: 'Matte',
    value: 'matte',
  },
  {
    id: '2',
    name: 'Glossy',
    value: 'glossy',
  },
];

export const ALL_APPLE_PHONE_MODELS: ModelType[] = [
  { id: '1', name: 'iPhone 14', handle: 'iphone14' },
  { id: '2', name: 'iPhone 14 Plus', handle: 'iphone14-plus' },
  { id: '3', name: 'iPhone 14 Pro', handle: 'iphone14-pro' },
  { id: '4', name: 'iPhone 14 Pro Max', handle: 'iphone14-proMax' },
  { id: '5', name: 'iPhone 13', handle: 'iphone13' },
  { id: '6', name: 'iPhone 13 Mini', handle: 'iphone13-mini' },
  { id: '7', name: 'iPhone 13 Pro', handle: 'iphone13-pro' },
  { id: '8', name: 'iPhone 13 Pro Max', handle: 'iphone13-proMax' },
  { id: '9', name: 'iPhone 12', handle: 'iphone12' },
  { id: '10', name: 'iPhone 12 Mini', handle: 'iphone12-mini' },
  { id: '11', name: 'iPhone 12 Pro', handle: 'iphone12-pro' },
  { id: '12', name: 'iPhone 12 Pro Max', handle: 'iphone12-proMax' },
  { id: '13', name: 'iPhone 11', handle: 'iphone11' },
  { id: '14', name: 'iPhone 11 Pro', handle: 'iphone11-pro' },
  { id: '15', name: 'iPhone 11 Pro Max', handle: 'iphone11-proMax' },
  { id: '16', name: 'iPhone X/XS', handle: 'iphonex-xs' },
  { id: '17', name: 'iPhone XR', handle: 'iphonexr' },
  { id: '18', name: 'iPhone XS Max', handle: 'iphonexs-max' },
];

export const ALL_SAMSUNG_PHONE_MODELS: ModelType[] = [
  { id: '19', name: 'Galaxy S22', handle: 'galaxys22' },
  { id: '20', name: 'Galaxy S22 Plus', handle: 'galaxys22-plus' },
  { id: '21', name: 'Galaxy S22 Ultra', handle: 'galaxys22-ultra' },
  { id: '22', name: 'Galaxy S21', handle: 'galaxys21' },
  { id: '23', name: 'Galaxy S21 FE', handle: 'galaxys21-fe' },
  { id: '24', name: 'Galaxy S21 Plus', handle: 'galaxys21-plus' },
  { id: '25', name: 'Galaxy S21 Ultra', handle: 'galaxys21-ultra' },
  { id: '26', name: 'Galaxy S20', handle: 'galaxys20' },
  // { id: '27', name: 'Galaxy S20 FE', handle: 'galaxys20-fe' }, stock not available
  { id: '28', name: 'Galaxy S20 Plus', handle: 'galaxys20-plus' },
  { id: '29', name: 'Galaxy S20 Ultra', handle: 'galaxys20-ultra' },
];

export const ALL_PHONE_MODELS = {
  [Phone.APPLE]: ALL_APPLE_PHONE_MODELS,
  [Phone.SAMSUNG]: ALL_SAMSUNG_PHONE_MODELS,
};
