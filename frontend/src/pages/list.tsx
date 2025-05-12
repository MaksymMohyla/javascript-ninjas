import { useCallback, useContext, useEffect, useState } from 'react';
import { SuperheroContext } from '@/features/superhero/SuperheroContext';
import DefaultLayout from '@/layouts/default';
import { Pagination } from '@heroui/pagination';
import api from '@/features/superhero/SuperheroApi';
import { Loader } from '@/components/Loader.tsx';
import { Superhero } from '@/utils/types/superhero';
import SuperheroCard from '@/components/superheroCard';
import { dummyData } from '@/features/superhero/SuperheroProvider';
import { useSearchParams } from 'react-router-dom';

export default function ListPage() {
  const { superheroList, setSuperheroList } = useContext(SuperheroContext);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = searchParams.get('page') || '1';

  useEffect(() => {
    (async function fetchData() {
      setIsPageLoading(true);
      const data = await api.getPageWithSuperheroes(currentPage);
      const totalPages = await api.getTotalPages();
      setSuperheroList(data ?? dummyData);
      setTotalPages(totalPages || 1);

      setIsPageLoading(false);
    })();
  }, [currentPage]);

  const handleDelete = useCallback(
    async (id: Superhero['id'], name: Superhero['nickname']) => {
      const confirmDelete = window.confirm(
        `Are you sure you want to delete ${name}?`
      );

      if (!confirmDelete) return;

      await api.deleteSuperhero(id);
      setSuperheroList((prevList) => prevList.filter((hero) => hero.id !== id));
      alert(`Superhero ${name} deleted successfully`);
    },
    [setSuperheroList]
  );

  const handlePageChange = (page: number) => {
    setSearchParams({ page: page.toString() });
  };

  return isPageLoading ? (
    <DefaultLayout>
      <Loader />
    </DefaultLayout>
  ) : (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <ul className="min-w-[70%] gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {superheroList.map((hero) => (
            <SuperheroCard key={hero.id} hero={hero} onDelete={handleDelete} />
          ))}
        </ul>
        <Pagination
          initialPage={parseInt(currentPage, 10)}
          total={totalPages}
          showControls
          onChange={handlePageChange}
        />
      </section>
    </DefaultLayout>
  );
}
