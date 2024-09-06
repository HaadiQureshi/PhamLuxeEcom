import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
import { useState } from 'react';
import _ from 'lodash';
import { IMAGE_CHANGE_DEBOUNCE } from '@/constant';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';

interface Props {
  images: string[];
}

export const ShowCase = ({ images }: Props) => {
  const [image, setImage] = useState(images[0]);

  const handleOnMouseEnter = _.debounce((imageUrl: string) => {
    setImage(imageUrl);
  }, IMAGE_CHANGE_DEBOUNCE);

  return (
    <Box sx={{ display: 'flex', gap: 3 }}>
      <ImageList sx={{ display: 'flex', flexDirection: 'column' }}>
        {images?.map((imageUrl, i) => (
          <ImageListItem key={i}>
            <Image
              alt="TODO"
              height={80}
              onMouseEnter={() => handleOnMouseEnter(imageUrl)}
              src={imageUrl}
              width={80}
            />
          </ImageListItem>
        ))}
      </ImageList>
      {image && (
        <Image
          alt="TODO"
          height={800}
          src={image}
          width={700}
        />
      )}
    </Box>
  );
};
