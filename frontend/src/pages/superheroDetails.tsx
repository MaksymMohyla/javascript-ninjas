import { SuperheroContext } from '@/features/superhero/SuperheroContext';
import DefaultLayout from '@/layouts/default';
import { Button } from '@heroui/button';
import { useContext } from 'react';

export default function SuperHeroDetails() {
  const { selectedSuperhero } = useContext(SuperheroContext);

  return (
    <DefaultLayout>
      <section className="container mx-auto p-4">
        <div className="mb-4 flex gap-4 flex-col align-middle md:flex-row">
          {selectedSuperhero?.images?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={selectedSuperhero?.nickname}
              className="w-64 h-64 flex-grow-1 object-contain mx-auto"
            />
          ))}
        </div>
        <Button color="primary" className="block w-full max-w-60 mx-auto mb-8">
          Change photos
        </Button>
        <ul className="space-y-6">
          <li>
            <span className="text-green-500">Nickname:</span>{' '}
            <Button size="sm" className="mx-2" color="primary">
              Change
            </Button>
            {selectedSuperhero?.nickname}
          </li>
          <li>
            <span className="text-green-500">Real Name:</span>{' '}
            <Button size="sm" className="mx-2" color="primary">
              Change
            </Button>
            {selectedSuperhero?.real_name}
          </li>
          <li>
            <span className="text-green-500">Origin Description:</span>{' '}
            <Button size="sm" className="mx-2" color="primary">
              Change
            </Button>
            {selectedSuperhero?.origin_description}
          </li>
          <li>
            <span className="text-green-500">Superpowers:</span>{' '}
            <Button size="sm" className="mx-2" color="primary">
              Change
            </Button>
            {selectedSuperhero?.superpowers}
          </li>
          <li>
            <span className="text-green-500">Catch Phrase:</span>{' '}
            <Button size="sm" className="mx-2" color="primary">
              Change
            </Button>
            {selectedSuperhero?.catch_phrase}
          </li>
        </ul>
      </section>
    </DefaultLayout>
  );
}
