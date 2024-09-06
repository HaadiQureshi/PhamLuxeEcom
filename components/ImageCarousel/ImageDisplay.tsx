import Box from '@mui/material/Box';
import Image from 'next/image';

interface Props {
  alt: string;
  src: string;
}

export const ImageDisplay = ({ src, alt }: Props): JSX.Element => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '60vh', md: '75vh' },
        width: '100vw',
      }}
    >
      <Image
        alt={alt}
        fill
        sizes="100vw, 100vh"
        src={src}
        style={{ objectFit: 'cover' }}
      />
    </Box>
  );
};
