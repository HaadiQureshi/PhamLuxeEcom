import { useTheme } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { ImageDisplay } from './ImageDisplay';

interface Props {
  autoPlay?: boolean;
  images: string[];
}

export const ImageCarousel = ({ autoPlay = false, images }: Props) => {
  const theme = useTheme();

  return (
    <Carousel
      autoPlay={autoPlay}
      indicatorContainerProps={{
        style: {
          position: 'relative',
          top: theme.spacing(-5),
          zIndex: 1,
        },
      }}
      indicators
      navButtonsAlwaysVisible
      navButtonsProps={{ style: { backgroundColor: 'transparent' } }}
      NextIcon={
        <NavigateNextIcon sx={{ fontSize: theme.spacing(8), opacity: 0.8 }} />
      }
      PrevIcon={
        <NavigateBeforeIcon sx={{ fontSize: theme.spacing(8), opacity: 0.8 }} />
      }
    >
      {images.map((image, i) => (
        <ImageDisplay
          key={i}
          alt={image}
          src={image}
        />
      ))}
    </Carousel>
  );
};
