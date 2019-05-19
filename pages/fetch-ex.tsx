import withLayout from '../components/layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Fragment } from 'react';

interface Props {
  shows: Show;
}

interface Show {
  [key: string]: any;
}

const FetchEx = (props: Props) => (
  <Fragment>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map((show: Show) => (
        <li key={show.id}>
          <Link
            as={`/fetch-post/${show.id}`}
            href={`/fetch-post?id=${show.id}`}
          >
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Fragment>
);

FetchEx.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map((entry: any) => entry.show)
  };
};

export default withLayout(FetchEx as any);
