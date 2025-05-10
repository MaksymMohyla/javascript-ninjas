import DefaultLayout from '@/layouts/default';
import { Link } from '@heroui/link';

export default function NotFoundPage() {
  return (
    <DefaultLayout>
      <h1>Page not found!</h1>
      <Link href="/">Return home.</Link>
    </DefaultLayout>
  );
}
