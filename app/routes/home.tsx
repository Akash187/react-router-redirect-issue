import { Link } from 'react-router';
import type { Route } from './+types/home';
import { pageData, type PageData } from '../pageData';

export async function loader({}: Route.LoaderArgs): Promise<PageData[]> {
  return pageData;
}

export function shouldRevalidate() {
  return true;
}

export default function Pages({ loaderData }: Route.ComponentProps) {
  return (
    <ul>
      {loaderData.map(({ number }) => (
        <li key={number}>
          <Link to={`/${number}`}>Page {number}</Link>
        </li>
      ))}
    </ul>
  );
}
