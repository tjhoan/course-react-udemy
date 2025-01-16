import { ImageList, ImageListItem, useMediaQuery } from '@mui/material';
import { itemData } from '../../data/itemData';

export const ImageGallery = () => {
  const isExtraSmallScreen = useMediaQuery('(max-width:700px)');
  const isSmallScreen = useMediaQuery('(max-width:850px)');
  const isMediumScreen = useMediaQuery('(max-width:100px)');
  const isLargeScreen = useMediaQuery('(max-width:1300px)');

  const cols = isExtraSmallScreen
    ? 2
    : isSmallScreen
    ? 3
    : isMediumScreen
    ? 4
    : isLargeScreen
    ? 5
    : 7;

  return (
    <ImageList sx={{ width: '100%', height: '100%' }} variant="masonry" cols={cols} gap={4}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            style={{
              borderRadius: 5,
              width: '100%',
              height: 'auto',
              objectFit: 'cover'
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
