import { Link } from 'react-router';
import { pageData, type PageData } from '~/pageData';
import type { Route } from './+types/page';

export async function loader({ params }: Route.LoaderArgs): Promise<PageData> {
  const page = pageData.find(({ number }) => number === Number(params.number));

  if (!page) {
    throw new Response('Not Found', { status: 404 });
  }

  return page;
}

export function shouldRevalidate() {
  return true;
}

export default function PageRoute({
  loaderData: { number },
}: Route.ComponentProps) {
  return (
    <>
      <Link to="/">Home</Link>
      <h1>Page {number}</h1>
      <ul>
        <li>
          <Link to={`/${Math.max(number - 1, 1)}`}>Previous</Link>
        </li>
        <li>
          <Link to={`/${Math.min(number + 1, pageData.length)}`}>Next</Link>
        </li>
      </ul>
    </>
  );
}
