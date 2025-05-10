import DefaultLayout from '@/layouts/default';
import { Button } from '@heroui/button';

const data = {
  id: '11',
  nickname: 'Green Lantern',
  real_name: 'Hal Jordan',
  origin_description:
    'A fearless test pilot, Hal Jordan was chosen by the dying alien Abin Sur to wield the power ring of the Green Lantern Corps...',
  superpowers:
    'Energy constructs, flight, force fields, interstellar travel, enhanced willpower...',
  catch_phrase:
    'In brightest day, in blackest night, no evil shall escape my sight!',
  images: [
    'https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Green_Lantern_%28John_Stewart%29.png/250px-Green_Lantern_%28John_Stewart%29.png',
    'https://static.dc.com/sites/default/files/GLFPlanetBio_57dffb6b0b8e44.96290128.jpg',
    'https://static.wikia.nocookie.net/dccinematic/images/6/69/Green_Lantern_Profile.jpg',
  ],
};

export default function SuperHeroDetails() {
  return (
    <DefaultLayout>
      <section className="container mx-auto p-4">
        <div className="mb-4 flex gap-4 flex-col align-middle md:flex-row">
          {data.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={data.nickname}
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
            {data.nickname}
          </li>
          <li>
            <span className="text-green-500">Real Name:</span>{' '}
            <Button size="sm" className="mx-2" color="primary">
              Change
            </Button>
            {data.real_name}
          </li>
          <li>
            <span className="text-green-500">Origin Description:</span>{' '}
            <Button size="sm" className="mx-2" color="primary">
              Change
            </Button>
            {data.origin_description}
          </li>
          <li>
            <span className="text-green-500">Superpowers:</span>{' '}
            <Button size="sm" className="mx-2" color="primary">
              Change
            </Button>
            {data.superpowers}
          </li>
          <li>
            <span className="text-green-500">Catch Phrase:</span>{' '}
            <Button size="sm" className="mx-2" color="primary">
              Change
            </Button>
            {data.catch_phrase}
          </li>
        </ul>
      </section>
    </DefaultLayout>
  );
}
