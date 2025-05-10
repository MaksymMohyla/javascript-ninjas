import { useContext } from 'react';
import { SuperheroContext } from '@/features/superhero/SuperheroContext';
import DefaultLayout from '@/layouts/default';
import { Card, CardBody, CardFooter } from '@heroui/card';
import { Image } from '@heroui/image';
import { Link } from '@heroui/link';
import { Pagination } from '@heroui/pagination';
import { Button } from '@heroui/button';

export default function ListPage() {
  const { superheroList } = useContext(SuperheroContext);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <ul className="gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {superheroList.map((hero) => (
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
                  <Link href={''} target="_blank">
                    Open details
                  </Link>
                  <Button size="sm" className="mx-2" color="danger">
                    Delete
                  </Button>
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>
        <Pagination initialPage={1} total={3} showControls />
      </section>
    </DefaultLayout>
  );
}
