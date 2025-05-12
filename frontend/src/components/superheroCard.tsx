import { Card, CardBody, CardFooter } from '@heroui/card';
import { Image } from '@heroui/image';
import { Link } from '@heroui/link';
import { Button } from '@heroui/button';
import { memo, useState } from 'react';
import { Superhero } from '@/utils/types/superhero';

// memoized because we don't want to rerender all cards in the list
const SuperheroCard = memo(function SuperheroCard({
  hero,
  onDelete,
  onOpenDetails,
}: {
  hero: Superhero;
  onDelete: (id: Superhero['id'], name: Superhero['nickname']) => void;
  onOpenDetails: (id: Superhero['id']) => void;
}) {
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  const handleDeleteClick = async () => {
    setIsDeleteLoading(true);
    await onDelete(hero.id, hero.nickname);
    setIsDeleteLoading(false);
  };
  return (
    <li key={hero.id}>
      <Card shadow="sm">
        <CardBody className="overflow-visible p-0">
          <Image
            alt={`${hero.nickname} image`}
            className="w-full object-contain h-[260px]"
            radius="lg"
            shadow="sm"
            src={hero.images[0]}
            width="100%"
          />
        </CardBody>
        <CardFooter className="text-small flex flex-col gap-4">
          <b>{hero.nickname}</b>
          <Link
            onPress={() => onOpenDetails(hero.id)}
            href={`/superhero/${hero.id}`}
          >
            Open details
          </Link>
          <Button
            onPress={handleDeleteClick}
            isLoading={isDeleteLoading}
            size="md"
            className="mx-2"
            color="danger"
          >
            Delete
          </Button>
        </CardFooter>
      </Card>
    </li>
  );
});

export default SuperheroCard;
