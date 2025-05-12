import { Button } from '@heroui/button';

interface Props {
  isButtonsVisible: boolean;
  name: string;
  value: string | undefined;
  onCLick: () => void;
}

export default function SuperHeroDetailLine({
  isButtonsVisible,
  name,
  value,
  onCLick,
}: Props) {
  return (
    <li>
      <span className="text-green-500">{`${name}:`}</span>{' '}
      <Button
        size="sm"
        className={`mx-2 ${!isButtonsVisible ? 'hidden' : ''}`}
        color="primary"
        onPress={onCLick}
      >
        Change
      </Button>
      {value}
    </li>
  );
}
