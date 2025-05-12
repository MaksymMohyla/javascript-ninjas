import { Button } from '@heroui/button';
import { memo } from 'react';

interface Props {
  image: string;
  index: number;
  nickname: string;
  isButtonsVisible: boolean;
  onPhotoDelete: (imageIndex: number) => void;
}

const ImageWithButtons = memo(function ImageWithButtons({
  image,
  index,
  nickname,
  isButtonsVisible,
  onPhotoDelete,
}: Props) {
  return (
    <div className="relative w-64 h-64 mx-auto">
      <img
        src={image}
        alt={nickname}
        className="w-full h-full object-contain"
      />
      <div
        className={`absolute bottom-0 left-0 right-0 flex flex-col items-center space-y-2 p-2 ${
          !isButtonsVisible ? 'hidden' : ''
        }`}
      >
        <Button onPress={() => onPhotoDelete(index)} size="sm" color="danger">
          Delete photo
        </Button>
      </div>
    </div>
  );
});

export default ImageWithButtons;
