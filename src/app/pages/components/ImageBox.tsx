import { Box, Stack, Image, Text, useDisclosure } from "@chakra-ui/react";

const ImageBox = ({ images }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleImageClick = () => onOpen();

  const visibleImages = images.slice(0, 4);
  const remainingImages = images.length - visibleImages.length;

  return (
    <Box>
      <Stack spacing={4}>
        {visibleImages.map((image, index) => (
          <Image
            key={index}
            src={image.url}
            alt={image.altText}
            onClick={handleImageClick}
          />
        ))}
        {remainingImages > 0 && (
          <Text
            as="button"
            fontSize="sm"
            fontWeight="semibold"
            onClick={handleImageClick}
          >
            Show more ({remainingImages} images)
          </Text>
        )}
      </Stack>
      {isOpen && (
        <ImageBox images={images} isOpen={true} onClose={onClose} />
      )}
    </Box>
  );
};

export default ImageBox;
