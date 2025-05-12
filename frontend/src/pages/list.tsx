import { useCallback, useContext, useEffect, useState } from 'react';
import { SuperheroContext } from '@/features/superhero/SuperheroContext';
import DefaultLayout from '@/layouts/default';
import { Pagination } from '@heroui/pagination';
import api from '@/features/superhero/SuperheroApi';
import { Loader } from '@/components/Loader.tsx';
import { Superhero } from '@/utils/types/superhero';
import SuperheroCard from '@/components/superheroCard';

export default function ListPage() {
  const { superheroList, setSuperheroList, setSelectedSuperhero } =
    useContext(SuperheroContext);
  const [isPageLoading, setIsPageLoading] = useState(false);

  useEffect(() => {
    setIsPageLoading(true);
    api
      .getAllSuperheroes()
      .then((data) => setSuperheroList(data ?? []))
      .finally(() => setIsPageLoading(false));
  }, []);

  const handleDelete = useCallback(
    // if u don't wrap this function with useCallback, memoization of Card component won't work cause it expects this function as the prop
    async (id: Superhero['id'], name: Superhero['nickname']) => {
      await api.deleteSuperhero(id);
      setSuperheroList((prevList) => prevList.filter((hero) => hero.id !== id));
      alert(`Superhero ${name} deleted successfully`);
    },
    [setSuperheroList]
  );

  const handleOpenDetails = useCallback(
    async (id: Superhero['id']) => {
      const superhero = await api.getSuperhero(id);
      setSelectedSuperhero(superhero ?? null);
      console.log(superhero);
    },
    [setSelectedSuperhero]
  );

  return isPageLoading ? (
    <DefaultLayout>
      <Loader />
    </DefaultLayout>
  ) : (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <ul className="gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {superheroList.map((hero) => (
            <SuperheroCard
              key={hero.id}
              hero={hero}
              onDelete={handleDelete}
              onOpenDetails={handleOpenDetails}
            />
          ))}
        </ul>
        <Pagination initialPage={1} total={3} showControls />
      </section>
    </DefaultLayout>
  );
}
