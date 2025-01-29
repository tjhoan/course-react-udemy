import { ImageList, ImageListItem, useMediaQuery } from '@mui/material';

export const ImageGallery = ({images = []}) => {
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
      {images.map((image) => (
        <ImageListItem key={image}>
          <img
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            alt={image}
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
